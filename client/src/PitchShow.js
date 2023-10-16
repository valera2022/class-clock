import React, { useState } from 'react'
import { UserContext } from './context/user'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import NoteCard from './NoteCard'
import AddNote from './EditNote'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import "./card.css"


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
    
    // return <AddNote/>
    navigate(`/pitches/${id}/notes/new`)

  }
  console.log(user)
  

console.log(id)


let pitch = pitches.find(pitch =>pitch.id == parseInt(id) )


 console.log(pitch)


// )



  

  
 
      const size ={
        width: '18rem'
      }
  

 
  return (   
  <div className='show-page' border="primary"style={size} >
 
    {/* <img variant="top" className="image"src="https://heavy.com/wp-content/uploads/2019/03/scherzer-e1551749684164.jpg?quality=65&strip=all" /> */}
    <div className='body'>
    <img variant="top" className="image"src="https://heavy.com/wp-content/uploads/2019/03/scherzer-e1551749684164.jpg?quality=65&strip=all" />
      <h2  className='title'>Name: {pitch.name}</h2>
      <div className='card-text' >
         <p>Fact: {pitch.history}</p>
      </div>
      {/* <Button variant="primary">Go somewhere</Button> */}
    </div>
    
  
  <br />


   <div className='comments'>
   <p>{pitch.notes.map(note=> <NoteCard  note={note}/> )}</p>
      <div className='add'><Button onClick={handleClick} variant="primary">Add Note</Button>{' '}</div>
      
    
   </div>
</div>)
   
    
//   <div>
//     {/* { <AddNote/>} */}
//     <h2>Name: {pitch.name}</h2>
    
    
//    <p> Fact: {pitch.history}</p>
//  <p>{pitch.notes.map(note=> <NoteCard  note={note}/> )}</p>
  

 
//   <button onClick={handleClick}>AddNote</button>
 

//   </div>)
 
  
  
}

 
   































  

 