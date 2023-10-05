import React from 'react'
import { UserContext } from './context/user'
import { useContext } from 'react'

export default function NoteCard({note}) {
    const {user} = useContext(UserContext)

    
    const handleClickDelete= (e)=> {
        e.preventDefault()
    
      }
     
  return (
    <div>
      <ul>{note.content}</ul>
      <div>
      {note.user_id == user.id ? <button onClick={handleClickDelete}>Delete</button> : null }
      </div>
      

     </div>
  )
}
