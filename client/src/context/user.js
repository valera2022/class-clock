import { useState,useEffect } from "react";
import React from "react";

const UserContext = React.createContext();

function UserProvider({children}){
    const [user,setUser] = useState(null)
    const [loggedin,setLoggedin] = useState(false)
    const [pitches,setPitches] = useState([])
    const [note,setNote] = useState({})

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

    function patchPitch(formData){
        console.log(formData)
        fetch(`/pitches/${formData.id}`,{
            method: "PATCH",
            headers:{
                "Content-type": "application/json",

            },
            body: JSON.stringify({
                name: formData.name,
                pitch_average_speed: formData.pitch_average_speed
            })

        })
        .then(res=> res.json())
        .then(data=>{ console.log(data)
            // debugger;
            let throws = pitches.map(pitch => {if (pitch.id === data.id){
                return data}
            else{ return pitch}
            })
            setPitches(throws)
            
            
           
        })
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
                // let doc = doctorData.find(doctor => doctor.id === data.doctor_id)
                // let updatedPatients = [...doc.patients, data]
                // let updatedDoc = { ...doc, patients: updatedPatients }
                // let updatedArray = doctorData.map(doctor => doctor.id === data.doctor_id ? updatedDoc : doctor)
             
                // setDoctorData(updatedArray)
                let pitch = pitches.find(pitch => pitch.id === data.pitch_id)
                let updatedNotes = [...pitch.notes, data]
                let updatedPitch = { ...pitch, notes: updatedNotes }
                let updatedArray = pitches.map(pitch => pitch.id === data.pitch_id ? updatedPitch : pitch)
             
                setPitches(updatedArray)

            }
            else{
                return <h1>{data.error}</h1>
            }
            
            // const updatedNestedData = pitches.map((item) => {
            //     if (item.id === data.id) {
            //       // Update the nested array property (e.g., 'subItems')
            //       return { ...item, user_pitches: [...item.user_pitches, data] };
            //     }
            //     return item;
            //   });
            //   setPitches(updatedNestedData);
           
        })


    }

    return(
        <UserContext.Provider value={{user,login,logout,signup,loggedin,pitches,postPitches,pitches,deletePitch,patchPitch,note,postUserPitches}}>
            {children}
       </UserContext.Provider>
    );

}

export {UserContext,UserProvider};