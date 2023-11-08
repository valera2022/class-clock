import React from 'react'
import { UserContext } from './context/user'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import NoteCard from './NoteCard'

import Button from 'react-bootstrap/Button';


import "./card.css"


export default function PitchShow() {
  const {pitches,user} = useContext(UserContext)
  const navigate =  useNavigate()
  const {id} = useParams()
 
  

  console.log(pitches)
  
  function handleClick(e){
    e.preventDefault()
    
   
    navigate(`/pitches/${id}/notes/new`)

  }
  console.log(user)
  

console.log(id)


let pitch = pitches.find(pitch =>pitch.id === parseInt(id) )


 console.log(pitch)






  

  
 
      const size ={
        width: '18rem'
      }
  

 if(pitch){  return (   
  <div className='show-page' border="primary"style={size} >
 
   
    <div className='body'>
    <img variant="top" alt="not found" className="image"src="https://heavy.com/wp-content/uploads/2019/03/scherzer-e1551749684164.jpg?quality=65&strip=all" />
      <h2  className='title'>Name: {pitch.name}</h2>
      <div className='card-text' >
         <p>Fact: {pitch.history}</p>
      </div>
      
    </div>
    
  
  <br />


   <div className='comments'>
   <p>{pitch.notes.map(note=> <NoteCard  note={note}/> )}</p>
      <div className='add'><Button onClick={handleClick} variant="primary">Add Note</Button>{' '}</div>
      
    
   </div>
</div>)}

else{
  <h1>Loading..</h1>
}
   
    

 
  
  
}

 
   































  

 