import React from 'react'
import { UserContext } from './context/user'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import EditNote from './EditNote'
import Button from 'react-bootstrap/Button';

export default function NoteCard({note}) {
    const {user,deleteNote,pitches} = useContext(UserContext)
    const navigate = useNavigate()
    const{id} = useParams()
    
   
 
  console.log(note)
    let pitch = pitches.find(pitch =>pitch.id === parseInt(id) )
    
    
    

    const handleClickDelete= (e)=> {
        e.preventDefault()
        
        deleteNote(note)
    
      }
     
     
  return (
    <div className="divNote">
      <ul>{note.content}</ul>
      <div>
      {pitch.users.map((user)=> {if (user.id === note.user_id ){
   
      return <p> by {user.username}</p>
      
    }})}
      </div>
      <div>
      {note.user_id == user.id ?   <Button size="sm" onClick={handleClickDelete} variant="outline-danger">Delete</Button> : null }
      {note.user_id == user.id ? <EditNote nota={note}/> : null }
      
      </div>
    
      

     </div>
  )
}
