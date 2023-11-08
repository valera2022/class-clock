
import React, { useContext } from 'react'

import { UserContext } from './context/user'

export default function Comments() {
    const {user} = useContext(UserContext)
    
     

        if(user){return (
            <div>
                <h2>Here are all the Pitches You have made a note on:</h2>
                 <ul>{user.pitches.map(pitch=>
                  <li key={pitch.id}>{pitch.name}</li>
                 
                 
                )}</ul>
                
            </div>
          )}
          else{<h1>Loading...</h1>}

   
  
}
