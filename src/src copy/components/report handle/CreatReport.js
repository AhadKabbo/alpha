import { fb } from '../../../service';
import { useAuth } from '../../../hooks';
import { useAuth2 } from '../../../hooks';
import { database } from '../../../service';
import React, { useState } from 'react';
import { Button, Modal, Form, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdReport, MdReportProblem } from 'react-icons/md';
import { CgScreenShot } from 'react-icons/cg';

export default function CreatReport() {
  const { authUser } = useAuth();
  const { nameFilter } = useAuth2();
  const uniqid = require('uniqid');
  const [open, setOpen] = useState(false);
  const [facebook, setTnc] = useState(false);
  const [instagram, setTnc2] = useState(false);
  const [youtube, setTnc3] = useState(false);
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
    await fb.firestore.collection('usersReports').doc(username).set({
      name: username,
      // locate: inputUrl,
      avatar: fileUrl,
      userId: authUser.uid,
      createdAt: database.getCurrentTimestamp(),
      // likes: null,
      // comments: null,
      fb_Tag: facebook,
      insta_Tag: instagram,
      youtube_Tag: youtube,
      creator: nameFilter[0].userName,
    });
    closeModal();
  };

  // console.log(nameFilter[0].userName);
  return (
    <>
      <Card
        className="shadow p-3 mb-5 bg-white rounded"
        style={{ maxWidth: '60rem' }}
      >
        <Card.Body>
          <Card.Title
            style={{ color: 'red', fontSize: '15px', fontWeight: 'bold' }}
          >
            Report a problem
          </Card.Title>
          <Card.Text>
            <br />
            <br />
            What Happend??
            <br /> <Card.Title>How can we help you </Card.Title>
          </Card.Text>
          <Button
            // style={{ Width: '305rem' }}
            // className="mxw-500 "
            onClick={openModal}
            variant="outline-danger"
            // size="sm"
          >
            {' '}
            <MdReportProblem style={{ height: '10px', color: 'red' }} />
            <FontAwesomeIcon icon={MdReport} />
            <strong> Report something</strong>
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
                    rows={9}
                    type="text"
                    name="username"
                    placeholder="Explain the Problem in as much details as possible...."
                  />
                </Form.Group>

                {/* <Form.Group
                  style={{
                    display: 'flex',
                    padding: '10px',

                    // marginBottom: "10px",
                  }}
                >
                  <Form.Control
                    as="textarea"
                    rows={1}
                    type="url"
                    name="inputUrl"
                    placeholder=""
                  />
                </Form.Group> */}

                <Card.Text
                  style={{
                    color: 'red',
                    marginTop: '0.5rem',
                    marginLeft: '1rem',
                  }}
                >
                  Tag a category for it
                </Card.Text>
                <Form.Group
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    listStyle: 'none',
                    textAlign: 'center',
                    padding: '10px',

                    // marginBottom: "10px",
                  }}
                >
                  <div
                    class="form-check mr-5"
                    style={{
                      marginTop: '0.5rem',
                      marginLeft: '1rem',
                      marginRight: '1rem',
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={e => setTnc(e.target.checked)}
                      class="form-check-input"
                      id="anime"
                      name="hobby"
                    />
                    <label class="form-check-label">facebook</label>
                  </div>

                  <div
                    class="form-check mr-3"
                    style={{
                      marginTop: '0.5rem',
                      marginLeft: '1rem',
                      marginRight: '1rem',
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={e => setTnc2(e.target.checked)}
                      class="form-check-input"
                      id="anime"
                      name="hobby"
                    />
                    <label class="form-check-label">Instagram</label>
                  </div>

                  <div
                    class="form-check mr-3"
                    style={{
                      marginTop: '0.5rem',
                      marginLeft: '1rem',
                      marginRight: '1rem',
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={e => setTnc3(e.target.checked)}
                      class="form-check-input"
                      id="anime"
                      name="hobby"
                    />
                    <label class="form-check-label">Youtube</label>
                  </div>
                </Form.Group>

                <Form.Group
                  style={{
                    display: 'flex',
                    padding: '10px',

                    // marginBottom: "10px",
                  }}
                >
                  <label className="btn btn-outline-danger btn-sm m-0 mr-2">
                    <CgScreenShot /> Include a ScreenShot must
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
                  variant="danger"
                  type="submit"
                >
                  Submit Report
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </Card.Body>
      </Card>
    </>
  );
}
