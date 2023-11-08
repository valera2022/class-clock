

import React, { useContext } from 'react'
import { useState } from 'react'
import { UserContext } from './context/user'


export default function EditPitch({ preEditData }) {
  console.log(preEditData)
  const [name, setName] = useState(preEditData.name)
  const [averageSpeed, setAverageSpeed] = useState(preEditData.pitch_average_speed)
  const { patchPitch, loggedin } = useContext(UserContext)
  function handleSubmit(e) {
    e.preventDefault()
    const formData = {
      name: name,
      average_speed: averageSpeed,
      id: preEditData.id
    }
    console.log(formData)
    patchPitch(formData)



  }

  if (loggedin) {
    return (
      <div>
        <h1>Edit Pitch</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label >name</label>
            <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <br></br>
          <div>
            <label>Average Speed</label>
            <input type="text" name="speed" value={averageSpeed} onChange={e => setAverageSpeed(e.target.value)} />
          </div>
          <button type="submit">Submit</button>



        </form>

      </div>
    )
  }
  else { return <h1>You need to login to use this feature</h1> }
}
