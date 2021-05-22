
import React, { useState } from "react"
import { fb } from '../../../service';
import {Button, Modal, Form } from "react-bootstrap";
// import { useAuth } from "../../contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEraser } from "@fortawesome/free-solid-svg-icons";

// const db = app.firestore();

export const DeleteBtn= ({ user }) => {
  const [name, setName] = React.useState(user.name);
  const [open, setOpen] = useState(false)
  // const { currentUser } = useAuth()
  // const [usersF, setUsers] = React.useState([]);


  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  const onUpdate = () => {
    
    fb.firestore.collection('users').doc(user.id).set({...user, name});
    closeModal()
  }


  const onDelete = () => {
    
    fb.firestore.collection('users').doc(user.id).delete();
    closeModal()
  } 




  // const logedUser = usersF.filter(obj => {
  //   return obj.userId === currentUser.uid; 
  // })

  return (
    <>
    
            

          
            <Button className="w-100 "onClick={openModal} variant="outline-success"  size="sm">
      <FontAwesomeIcon icon={faEraser} />
      <strong> Edit post</strong>
      </Button>


            <Modal show={open} onHide={closeModal}>
            <Form >
    <Modal.Body>
    <Form.Group >
    <Form.Control value={name}
        onChange={e => {
          setName(e.target.value);
        }}  />
    </Form.Group>
    </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="success" onClick={onUpdate}>
             Update
            </Button>
            <Button variant="success" onClick={onDelete}>
             delete
            </Button>
            </Modal.Footer>
            </Form>
            </Modal>

            
      
    
    </>
  )
}
