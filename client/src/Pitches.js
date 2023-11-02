import React from 'react'
import Pitch from './Pitch'
import { UserContext } from './context/user'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function Pitches() {
  const {pitches,loggedin} = useContext(UserContext)
  console.log(pitches)
  const pitchList = pitches.map((pitch)=><Pitch  pitch={pitch} />)
  if (loggedin){
    return (
    <div className='pitches'>
      <ul><li>{pitchList}</li></ul>

      
      <Link to="/pitches/new">
       <button  type="button" className="btn btn-success" >+ Add Pitch</button>
     </Link>
      
      </div>
    )

  }
  else {
    return (<h3>Please Login</h3>)
  }

}
