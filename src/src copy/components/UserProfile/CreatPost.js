import { fb } from '../../../service';
// import { useAuthHome } from "../../contexts/AuthContext"
import { useAuth } from "../../../hooks"
import { database, } from '../../../service';
import React, { useState } from "react"
import { Button, Modal, Form, Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEdit, faFileUpload } from "@fortawesome/free-solid-svg-icons"


// const fb.firestore = app.firestore();

export default function CreatPost() {
  const [open, setOpen] = useState(false)
  const [fileUrl, setFileUrl] = React.useState(null);
  // const { currentUser } = useAuthHome()
  const { authUser } = useAuth()

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }


  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = fb.storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    if (!username || !fileUrl) {
      return;
    }
  await fb.firestore
  .collection('users')
  .doc(username)
  .set({
      name: username,
      avatar: fileUrl,
      userId: authUser.uid,
      createdAt: database.getCurrentTimestamp(),
      likes: null,
      comments: null,
    });
    closeModal()
  };

  return (
    <>
    <Card style={{border:"none"}}>
    <Card.Body>
    <Card.Text  >
      A successful influencer marketing strategy helps you increase brand exposure, build authority, and connect with new audiences. It drives traffic to your site and leads new customers to your products and services...<br/><br/> <Card.Title>We can help to find your influancer </Card.Title>
    </Card.Text>
      <Button className="w-100 "onClick={openModal} variant="outline-success"  size="sm">
      <FontAwesomeIcon icon={faEdit} />
      <strong>Create a Post</strong>
      </Button>
    <Modal show={open} onHide={closeModal}>
    <Form onSubmit={onSubmit}>
    <Modal.Body>
    <Form.Group >
    <Form.Control as="textarea" rows={5} 
        type="text" name="username" placeholder="write somthing...." />
    </Form.Group>
    <Form.Group>
    <label className="btn btn-outline-success btn-sm m-0 mr-2">
        <FontAwesomeIcon icon={faFileUpload} />  Attached a File
        <input type="file" onChange={onFileChange} 
        style={{ opacity: 0, position: "absolute", left: "-9999px" }}/>
        </label>
    </Form.Group>
    </Modal.Body>
    <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="success" type="submit">
              Upload
            </Button>
    </Modal.Footer>
        </Form>
        </Modal>
    </Card.Body>
    </Card>
    </>
  );
}

