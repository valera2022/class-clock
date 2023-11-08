import React, { useContext } from 'react'
import { useState } from 'react'
import { UserContext } from './context/user'
import { useParams } from 'react-router-dom'


export default function AddNote() {
    const [nota, setNota] = useState([])
    const { loggedin, postUserPitches, noteErrors } = useContext(UserContext)
    const params = useParams()
   

  


    function handleSubmit(e) {
        e.preventDefault()
        const formData = {
            content: nota,
            pitch_id: params.id

        }
        postUserPitches(formData)
    }
    if (loggedin) {
        return (



            <div>
                <h1>Add Note</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label >Note</label>
                        <input type="text" name="name" value={nota} onChange={e => setNota(e.target.value)} />
                    </div>
                    <br></br>

                    <button type="submit">Submit</button>



                </form>
                <ul>
                    {noteErrors}
                </ul>

            </div>



        )
    }
    else {
        return <h1>You need to login to use this feature</h1>
    }
}
