import { fb } from '../../../service';
import { useAuth } from '../../../hooks';
import { useAuth2 } from '../../../hooks';
import { database } from '../../../service';
import React, { useState } from 'react';
import { Button, Modal, Form, Card, Container } from 'react-bootstrap';
import { CgImage, CgScreenShot } from 'react-icons/cg';
import { FaBlogger } from 'react-icons/fa';

export default function CreatSuccessStory() {
  const { authUser } = useAuth();
  const { nameFilter } = useAuth2();
  const uniqid = require('uniqid');
  const [open, setOpen] = useState(false);

  const [fileUrl, setFileUrl] = useState(null);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  // console.log(uniqid()); // -> 4n5pxq24kpiob12og9

  const onFileChange = async e => {
    const file = e.target.files[0];
    const storageRef = fb.storage.ref();
    const fileRef = storageRef.child(file.name + uniqid());
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = async e => {
    e.preventDefault();
    const username = e.target.username.value;
    // const inputUrl = e.target.inputUrl.value;
    if (!username || !fileUrl) {
      return;
    }
    await fb.firestore.collection('usersSuccessStory').doc(username).set({
      name: username,
      // locate: inputUrl,
      avatar: fileUrl,
      userId: authUser.uid,
      createdAt: database.getCurrentTimestamp(),
      // likes: null,
      // comments: null,
      creator: nameFilter[0].userName,
    });
    closeModal();
  };

  // console.log(nameFilter[0].userName);
  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center "
        style={{ marginTop: '6rem' }}
      >
        <Card
          className="shadow p-3 mb-5 bg-white rounded"
          style={{ maxWidth: '62rem' }}
        >
          <Card.Body>
            <Card.Title>
              Post about Your Success Story, Leave a Foot-Print of your Success
              and motivate others in your path...
            </Card.Title>
            {/* <Card.Text> */}
            <br />
            <br />
            <Card.Title style={{ fontSize: '15px', fontWeight: 'bold' }}>
              What do You like to share with us today??{' '}
            </Card.Title>
            <br />
            {/* </Card.Text> */}
            <Button
              // style={{ Width: '305rem' }}
              // className="mxw-500 "
              onClick={openModal}
              variant="outline-info"
              // size="sm"
            >
              {' '}
              <FaBlogger />
              <strong> Create Your Success Story</strong>
            </Button>
            <Modal show={open} onHide={closeModal}>
              <Form onSubmit={onSubmit}>
                <Modal.Body>
                  <Form.Group
                    style={{
                      display: 'flex',
                      padding: '10px',

                      // marginBottom: "10px",
                    }}
                  >
                    <Form.Control
                      as="textarea"
                      rows={15}
                      type="text"
                      name="username"
                      placeholder="What do You Want to Share With us ...."
                    />
                  </Form.Group>

                  <Form.Group
                    style={{
                      display: 'flex',
                      padding: '10px',

                      // marginBottom: "10px",
                    }}
                  >
                    <label className="btn btn-outline-info btn-sm m-0 mr-2">
                      <CgImage /> Include a Image must
                      <input
                        type="file"
                        onChange={onFileChange}
                        style={{
                          opacity: 0,
                          position: 'absolute',
                          left: '-9999px',
                        }}
                      />
                    </label>
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    style={{
                      display: 'flex',
                      padding: '10px',

                      // marginBottom: "10px",
                    }}
                    variant="secondary"
                    onClick={closeModal}
                  >
                    Cancel
                  </Button>
                  <Button
                    style={{
                      display: 'flex',
                      padding: '10px',

                      // marginBottom: "10px",
                    }}
                    variant="info"
                    type="submit"
                  >
                    Submit Report
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
