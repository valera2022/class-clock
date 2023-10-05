import React, { useState } from 'react'
import { UserContext } from './context/user'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import NoteCard from './NoteCard'

export default function PitchShow() {
  const {pitches,user} = useContext(UserContext)
  const navigate =  useNavigate()
  const {id} = useParams()
  // const [renderButton,setRenderButton]= useState(true)
  // function preventLoop(value){

  //   setRenderButton(value)
  // }

  console.log(pitches)
  // let u = doctorData.filter(doc=> doc.id == params.id).map(dc => dc.patients)
  // console.log(u)
  function handleClick(e){
    e.preventDefault()
    navigate(`/pitches/${id}/notes/new`)

  }
  console.log(user)
  

console.log(id)

const userIdList = []
let pitch = pitches.find(pitch =>pitch.id == parseInt(id) )
console.log(pitch.notes)

 pitch.notes.map(p=>{userIdList.push(p.user_id)})
 console.log(pitch)


// )

console.log(userIdList)

  let show = false
  userIdList.map((id)=>{
    if(user.id !== id){
      //  preventLoop(false)
      show = false
    }
    else{
      //  preventLoop(true)
      show = true
    }

  })

  
  
  

 
  return (<div>
 {pitch.notes.map(note=> <NoteCard note={note}/> )}
  
  

  <button onClick={handleClick}>Add Note</button>

  </div>)
 
  
  
}

 
   































  

 