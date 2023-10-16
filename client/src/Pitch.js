import React from 'react'

import { Link } from 'react-router-dom'






export default function Pitch({pitch}) {
 
 
  return (
    <div>
      
      <Link to={`/pitches/${pitch.id}`}>
      <h2 >{pitch.name}</h2>
      </Link>
    
       <p>Close AVR speed:{pitch.pitch_average_speed}</p>
      
      
     
     
      
      
    </div>
    
  )
}
