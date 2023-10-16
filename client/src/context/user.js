import { useState,useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const UserContext = React.createContext();

function UserProvider({children}){
    const [user,setUser] = useState(null)
    const [loggedin,setLoggedin] = useState(false)
    const [pitches,setPitches] = useState([])
    const [note,setNote] = useState({})
  
    // const params = useParams()
  
    
    

    useEffect(()=>{
        fetch("/me")
        .then(res=> res.json())
        .then(data=>{
            if (!data.error){
                
                setUser(data)
                setLoggedin(true)
                fetchPitches()
            }
           
           
            
        })
    },[])

    function fetchPitches (){
        fetch("/pitches")
        .then(res=> res.json())
        .then(data=>{
           
                console.log(data)
                
                setPitches(data)
               
            
           
           
            
        })

       
    }

    function postPitches(pitch){
        fetch("/pitches",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(pitch)
        })
        .then(res=> res.json())
        .then(data=>{
            if(!data.error){
                setPitches([...pitches,data])
               

            }
            else{
                setPitches(pitches)
            }
           
        })


    }

    const login = (newUser) =>{
        setUser(newUser)
        setLoggedin(true)
        fetchPitches()

    }

    const logout = () =>{

        setLoggedin(false)
        setUser({}) 
      
       
        
    }

    const signup = (user) =>{
        setUser(user)
        setLoggedin(true)
        
    }

    function deletePitch(id){
        console.log(id)
        fetch(`/pitches/${id}`, {

        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      })
  
      let filtered = pitches.filter( pitch => pitch.id !== id)
      setPitches(filtered)
  
      console.log("deleting..")
         
    }

   

    // function userPitch(){
    //     fetch("/user_pitches")
    //     .then(res => res.json())
    //     .then(data => setNote(data))
    // }

    function postUserPitches(note){
        console.log(note)
        fetch("/notes",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(note)
        })
        .then(res=> res.json())
        .then(data=>{
            // console.log(data)
            if(!data.error){
               
             
                // setDoctorData(updatedArray)
                let pitch = pitches.find(pitch => pitch.id === data.pitch_id)
                let updatedNotes = [...pitch.notes, data]
                let updatedPitch = { ...pitch, notes: updatedNotes }
                let updatedArray = pitches.map(pitch => pitch.id === data.pitch_id ? updatedPitch : pitch)
             
                setPitches(updatedArray)

            }
            else{
                return <h1>{data.error}</h1>
            }})

      


    }

    function deleteNote(note){
        fetch(`/notes/${note.id}`, {

            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
          })
          .then( res=>{
            
             
            let pitch = pitches.find(pitch => pitch.id === note.pitch_id )
            console.log(pitch)
      
            let filteredNotes = pitch.notes.filter(nota =>  nota.id !== note.id)
            console.log(filteredNotes)
    //       

            let updatedPitch = {...pitch, notes: filteredNotes}
            let updatedPitches = pitches.map(pit => pit.id === pitch.id? updatedPitch : pit )
            console.log(updatedPitches)
           setPitches(updatedPitches)
        
           console.log(pitches)
        }
          

        )


    }

    function patchNote(formData){
        console.log(formData)
        fetch(`/notes/${formData.id}`,{
            method: "PATCH",
            headers:{
                "Content-type": "application/json",

            },
            body: JSON.stringify({
                content: formData.content,
                id: formData.id
               
            })

        })
        .then(res=> res.json())
        .then(data=>{ console.log(data)
           
            let pitch =  pitches.find(pitch=> pitch.id === data.pitch_id) 
           
            let editedNote = pitch.notes.map(note=> {if(note.id === data.id){
                return data
            }

            else {return note}
        
        
        })
      
             let updatedPitch = {...pitch,notes: editedNote}
             let updatedArray = pitches.map(pitch => pitch.id === data.pitch_id? updatedPitch : pitch)
            
       
        setPitches(updatedArray)
           
            
           
        })


    }

    return(
        <UserContext.Provider value={{user,login,logout,signup,loggedin,postPitches,pitches,note,postUserPitches,deleteNote,patchNote}}>
            {children}
       </UserContext.Provider>
    );

}

export {UserContext,UserProvider};