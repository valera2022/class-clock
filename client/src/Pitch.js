import React from 'react'
import { UserContext } from './context/user'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


export default function Pitch({pitch,handlePreData,handleButton,setIsPopupOpen,isPopupOpen,openPopup}) {
  const {deletePitch,userPitch} = useContext(UserContext)
  
  const navigate = useNavigate()
  console.log(pitch)
  const handleDelete = (e)=>{
    e.preventDefault()
    console.log(pitch.id)
    deletePitch(pitch.id)
  }
  console.log(isPopupOpen)

  
  const handleEdit= (e) => {
     e.preventDefault()
     console.log(pitch.id)
     handlePreData(pitch)
   

    
      openPopup()
      console.log(isPopupOpen)
  

  
    
     
     navigate(`/pitches/${pitch.id}/edit`)

  }
  const handleNote= (e) => {
    e.preventDefault()
    // userPitch()
   
    navigate(`/pitches/${pitch.id}`)
   
   
  }
  // deletePitch()
  // const {name,pitch_average_speed} = pitch
  return (
    <div>
      
      
      <h2 onClick={handleNote}>{pitch.name}</h2>
    
       <h2>{pitch.pitch_average_speed}</h2>
      
      <button onClick={handleDelete}>Delete</button> <button onClick={handleEdit}>Edit</button>
     
      
      
    </div>
    
  )
}
