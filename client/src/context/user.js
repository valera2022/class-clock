import { useState, useEffect } from "react";
import React from "react";

import { useNavigate } from "react-router-dom";



const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loggedin, setLoggedin] = useState(false)
    const [pitches, setPitches] = useState([])
   
    const [pitchErrors, setPitchErrors] = useState()
    const [noteErrors, setNoteErrors] = useState()
    const [updatedNoteErrors,setUpdatedNoteErrors] = useState(null)
    const navigate = useNavigate()

    




    useEffect(() => {
        fetch("/me")
            .then(res => res.json())
            .then(data => {
                if (!data.error) {

                    setUser(data)
                    setLoggedin(true)
                    fetchPitches()
                }



            })
    }, [])

    function fetchPitches() {
        fetch("/pitches")
            .then(res => res.json())
            .then(data => {

                console.log(data)

                setPitches(data)





            })


    }

    function postPitches(pitch) {
        fetch("/pitches", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(pitch)
        })
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    setPitches([...pitches, data])
                    navigate("/pitches")


                }
                else {
                    setPitches(pitches)
                    console.log(data.errors)
                    const mistakes = data.errors.map(e => <li>{e}</li>)
                    setPitchErrors(mistakes)


                }

            })


    }

    const login = (newUser) => {
        setUser(newUser)
        setLoggedin(true)
        fetchPitches()

    }

    const logout = () => {

        setLoggedin(false)
        setUser({})



    }

    const signup = (user) => {
        setUser(user)
        setLoggedin(true)

    }





   

    function postUserPitches(note) {
        console.log(note)
        fetch("/notes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(note)
        })
            .then(res => res.json())
            .then(data => {
               
                if (!data.errors) {

                    


                    
                    let pitch = pitches.find(pitch => pitch.id === data.pitch_id)
                    let updatedNotes = [...pitch.notes, data]
                    let updatedPitch = { ...pitch, notes: updatedNotes }
                    let updatedArray = pitches.map(pitch => pitch.id === data.pitch_id ? updatedPitch : pitch)
                  
                    
                    setPitches(updatedArray)
                    setUser({
                        ...user, pitches: [...user.pitches, updatedPitch]
                        })
                    navigate(`/pitches/${data.pitch_id}`)

                }
                else {
                    console.log(data)
                    const mistakes = data.errors.map(e => <li>{e}</li>)
                    console.log(mistakes)
                    setNoteErrors(mistakes)
                }
            })




    }

    function deleteNote(note) {
         console.log(note)
        fetch(`/notes/${note.id}`, {

            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            },
        })
            .then(res => {


                let pitch = pitches.find(pitch => pitch.id === note.pitch_id)
                console.log(pitch)

                let filteredNotes = pitch.notes.filter(nota => nota.id !== note.id)
                console.log(filteredNotes)
                //       

                let updatedPitch = { ...pitch, notes: filteredNotes }
                let updatedPitches = pitches.map(pit => pit.id === pitch.id ? updatedPitch : pit)
                console.log(updatedPitches)
                // filter user.pitches by comparing the note pitch_id with the  pitch.id from the pitch itself.
                setPitches(updatedPitches)
                setUser({
                    ...user, pitches: user.pitches.filter(pitch=> pitch.id !== note.pitch_id )
                    })

                console.log(pitches)
            }


            )


    }

    function patchNote(formData) {
        console.log(formData)
        fetch(`/notes/${formData.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",

            },
            body: JSON.stringify({
                content: formData.content,
                id: formData.id

            })

        })
            .then(res => res.json())
            .then(data => {


                console.log(data)

                if(!data.errors){
                    
                let pitch = pitches.find(pitch => pitch.id === data.pitch_id)

                let editedNote = pitch.notes.map(note => {
                    if (note.id === data.id) {
                        return data
                    }

                    else { return note }


                })

                let updatedPitch = { ...pitch, notes: editedNote }
                let updatedArray = pitches.map(pitch => pitch.id === data.pitch_id ? updatedPitch : pitch)


                setPitches(updatedArray)

                }
                else{
                    console.log(data)
                    const mistakes = data.errors.map(e => <li>{e}</li>)
                    console.log(mistakes)
                    setUpdatedNoteErrors(mistakes)

                }




            })


    }

    return (
        <UserContext.Provider value={{ user, login, logout, signup, loggedin, postPitches, pitches, postUserPitches, deleteNote, patchNote, pitchErrors, noteErrors,updatedNoteErrors }}>
            {children}
        </UserContext.Provider>
    );

}

export { UserContext, UserProvider };