import React from 'react'
import { UserContext } from './context/user'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import EditNote from './EditNote'
import Button from 'react-bootstrap/Button';

export default function NoteCard({note}) {
    const {user,deleteNote} = useContext(UserContext)
    const navigate = useNavigate()

   
 
  

    // let upperData = {
    //   noteId:note.id,
    //   paraId: id
    // }

    const handleClickDelete= (e)=> {
        e.preventDefault()
        
        deleteNote(note)
    
      }
      // const handleClickEdit= (e)=>{
       
      //   e.preventDefault()
      //   navigate(`/notes/${note.id}/edit`)
      // }
     
  return (
    <div className="divNote">
      <ul>{note.content}</ul>
      <div>
      {note.user_id == user.id ?   <Button size="sm" onClick={handleClickDelete} variant="outline-danger">Delete</Button> : null }
      {note.user_id == user.id ? <EditNote nota={note}/> : null }
      
      </div>
    
      

     </div>
  )
}
