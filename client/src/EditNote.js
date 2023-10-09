import React from 'react'
import { useState } from 'react'
import { UserContext } from './context/user'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'

export default function EditNote({ setIsPopupOpen, isPopupOpen }) {
    const [content, setContent] = useState()
    const { loggedin, patchNote } = useContext(UserContext)
    const params = useParams()
    console.log(params.id)
    console.log(isPopupOpen)

    const formData = {
        content: content,
        id: params.id

    }

    function handleSubmit(e) {
        e.preventDefault()

        console.log(formData)
        patchNote(formData)
        
    }

    //  return (
    //     isOpen && (
    //         <div className="popup">
    //             <div className="popup-content">
    //                 <p>This is a popup!</p>
    //                 <button onClick={onClose}>Close</button>
    //             </div>
    //         </div>
    //     )
    // );






    if (loggedin) {
        return (
           
                <div className="popup">
                    <div  className="popup-content" >
                        <h1>Edit Note</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label >name</label>
                                <input type="text" name="content" value={content} onChange={e => setContent(e.target.value)} />
                            </div>

                            <button type="submit">Submit</button>



                        </form>

                    </div>
                </div>
            )
    }
    else { return <h1>You need to login to use this feature</h1> }
}
