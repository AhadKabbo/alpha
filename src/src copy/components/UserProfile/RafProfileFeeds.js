import React, { useState, useEffect } from "react"
import { Button, Modal, Form, Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEdit, faFileUpload } from "@fortawesome/free-solid-svg-icons"
import { useAuth } from "../../contexts/AuthContext"
import { database, } from "../../firebase"
// import { Link } from "react-router-dom"
import CenteredContainer from "../authentication/CenteredContainer"
import { app } from "../../firebase";

export default function ProfileFeeds({ currentFolder }) {
  const [open, setOpen] = useState(false)
  const [text, setName] = useState("")
  const [fileUrl, setFileUrl] = React.useState(null);
  const [folders, setUsers] = React.useState([]);
  const { currentUser } = useAuth()

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  function handleSubmit(e) {
    e.preventDefault()

    

    if (!text || !fileUrl) {
      return;
    }
   
    // Database section 
    database.folders.add({
      text: text,
      // parentId: currentFolder.id,
      userId: currentUser.uid,
      // path: path,
      avater: fileUrl,
      createdAt: database.getCurrentTimestamp(),
    })
    setName("")
    closeModal()
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const textCollection = await database.folders.get();
      setUsers(
        textCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchUsers();
  }, []);
  return (
    <>
   
    <CenteredContainer fluid >
    <Card>
    <Card.Body>
    <Card.Body  >
      
    A successful influencer marketing strategy helps you increase brand exposure, build authority, and connect with new audiences. It drives traffic to your site and leads new customers to your products and services....
    <br/><br/>
    <strong>We can help to find your influancer </strong>
    </Card.Body>
      
    <Button className="w-100 "onClick={openModal} variant="outline-success"  size="sm">
    <FontAwesomeIcon icon={faEdit} />
    <strong>Create Post</strong>
      </Button>
      <Modal show={open} onHide={closeModal}>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>

          <Form.Group >
          <Form.Label>Write something</Form.Label>
          <Form.Control as="textarea" rows={5}
          type="text"
          required
          value={text}
          onChange={e => setName(e.target.value)} />
          </Form.Group>

          <Form.Group >
          <label className="btn btn-outline-success btn-sm m-0 mr-2">
        <FontAwesomeIcon icon={faFileUpload} />  Attached a File
        <input
          type="file"
          onChange={handleUpload}
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

     
      <ul>
        <li>trt</li>
        {folders.map((folder) => {
          return (
            <li key={folder.text}>
              <img width="100" height="100" src={folder.avatar} alt={folder.text} />
              <p>{folder.text}</p>
            </li>
          );
        })}
      </ul>
     


      </Card.Body>

      <Card.Body>
        Profil Feeds

      </Card.Body>
      </Card>
        
    </CenteredContainer>
    </>
  )
}
