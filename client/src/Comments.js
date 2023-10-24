
import React, { useContext } from 'react'
import { useState } from 'react'
import { UserContext } from './context/user'

export default function Comments() {
    const {user} = useContext(UserContext)
    console.log(user.pitches)
    

        return (
            <div>
                <h2>Here are all the Pitches You have made a Note:</h2>
                 <ul>{user.pitches.map(pitch=>
                  <li key={pitch.id}>{pitch.name}</li>
                 
                 
                )}</ul>
                
            </div>
          )

   
  
}
