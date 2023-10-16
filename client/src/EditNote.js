import React, { useContext } from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { UserContext } from './context/user'

function EditNote({nota}) {
    const [show, setShow] = useState(false);
    const [content,setContent] = useState(nota.content)
    const {patchNote} = useContext(UserContext)
   
      console.log(nota)
      console.log(content)
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let formData = {
        content:content,
        id: nota.id
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(content)
        console.log(nota)
        patchNote(formData)
        

    }

    return (
        <>
            {/* <button onClick={handleShow}>Edit</button> */}
            <Button size="sm" onClick={handleShow} variant="outline-primary">Edit</Button>{' '}
            {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="editm"className="w-full max-w-sm" onSubmit={handleSubmit}>
                        <div className="flex items-center border-b border-teal-500 py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" value={content} onChange={e=> setContent(e.target.value)} type="text"  aria-label="Note" />
                           
                           
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <button className="" form="editm"></button> */}
                    <Button type="submit" onClick={handleClose} form="editm"  variant="primary">Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditNote