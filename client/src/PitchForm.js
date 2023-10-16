import React, { useContext } from 'react'
import { useState } from 'react'
import { UserContext } from './context/user'
import { useNavigate } from 'react-router-dom'

export default function PitchForm() {
    const [name,setName] = useState("")
    const [averageSpeed,setAverageSpeed] = useState("")
    const [fact,setFact]= useState("")
    const {postPitches,loggedin} = useContext(UserContext)
    
    function handleSubmit(e){
        e.preventDefault()
        const formData = {
            name: name,
            pitch_average_speed: averageSpeed,
            history: fact
        }
        postPitches(formData)
        



    }
    
 if(loggedin){
  return (
     <div>
        <h1>Add Pitch</h1>
        <form onSubmit={handleSubmit}>
             <div>
            <label >Name</label>
            <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <br></br>
          <div>
            <label>Average Speed</label>
            <input type="text" name="speed" value={averageSpeed} onChange={e => setAverageSpeed(e.target.value)} />
          </div>
          <br></br>
          <div>
            <label>Fact</label>
            <input type="text" name="fact" value={fact} onChange={e => setFact(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
         
  
  
         </form>
        
         </div>
  )}
  else{
    return <h1>You need to login to use this feature</h1>
  }
}
