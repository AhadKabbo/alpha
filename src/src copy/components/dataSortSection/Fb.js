import React, { useEffect, useState } from 'react';
import { fb } from '../../../service';
import { Button, Row, Col, Card, Container, Alert } from 'react-bootstrap';
import { useAuth } from '../../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faLaugh, faLink } from '@fortawesome/free-solid-svg-icons';
import { DeleteBtn } from '../UserProfile/DeleteBtn';

export default function Fb() {
  const { authUser } = useAuth();
  const [usersF, setUsers] = React.useState([]);
  const [chat, setChatUsers] = useState([]);
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      const usersCollection = await fb.firestore
        .collection('users')
        .orderBy('createdAt', 'desc')
        .get();
      setUsers(
        usersCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })),
      );
    };
    fetchData();
  }, []);

  const fbUsers = usersF.filter(obj => {
    return obj.fb_Tag === true;
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const usersCollection = await fb.firestore.collection('chatUsers').get();
  //     setChatUsers(
  //       usersCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })),
  //     );
  //   };
  //   fetchData();
  // }, []);

  // const nameFilter = chat.filter(obj => {
  //   return obj.signupUserId === authUser.uid;
  // });

  return (
    <>
      <Card.Title
        className="d-flex align-items-center justify-content-center "
        style={{
          position: 'sticky',
          color: '#101522',
          marginTop: '25px',
          marginBottom: '35px',
          fontSize: '30px',
          fontWeight: 'bold',
        }}
      >
        FaceBook
      </Card.Title>
      <Card
        className="overflow-auto"
        style={{ marginTop: '1rem', maxHeight: '60rem' }}
      >
        <Card.Body>
          {/* <strong>Facebook Promotion</strong>
          <br />
          <br /> */}
          {fbUsers.map(user => (
            <Container
              className="overflow-auto d-flex align-items-center justify-content-center "
              style={{ padding: '10px', maxHeight: '60rem' }}
            >
              <Card
                style={{
                  padding: '10px',
                  maxHeight: '55rem',
                  maxWidth: '40rem',
                }}
              >
                <Card.Img src={user.avatar} alt={user.name} />

                <Alert
                  style={{
                    marginTop: '10px',
                  }}
                  variant="dark"
                  show={open}
                  onHide={closeModal}
                >
                  <Alert.Heading>Hey, nice to see you...</Alert.Heading>
                  <hr />
                  <Card.Link to="google.com" style={{ padding: '5px' }}>
                    {user.locate}
                  </Card.Link>
                  <hr />
                  <Button variant="secondary" onClick={closeModal}>
                    Close
                  </Button>
                </Alert>

                <Card.Title
                  style={{
                    marginTop: '25px',
                    fontSize: '30px',
                    fontWeight: 'bold',
                  }}
                >
                  {user.creator}
                </Card.Title>

                <Card
                  style={{
                    minHeight: '70px',
                    padding: '5px',
                    marginTop: '0.5rem',
                    marginBottom: '1rem',
                  }}
                >
                  <Card.Text
                    className="overflow-auto"
                    style={{ padding: '5px' }}
                  >
                    {user.name}
                  </Card.Text>
                </Card>

                <Card style={{ padding: '10px' }}>
                  <Row>
                    <Col>
                      <Button
                        className="w-100 "
                        variant="outline-success"
                        size="sm"
                      >
                        <FontAwesomeIcon icon={faLaugh} />
                      </Button>
                    </Col>

                    <Col>
                      <Button
                        className="w-100 "
                        onClick={openModal}
                        variant="outline-success"
                        size="sm"
                      >
                        <FontAwesomeIcon icon={faLink} />
                      </Button>
                    </Col>
                  </Row>
                </Card>
              </Card>
            </Container>
          ))}
        </Card.Body>
      </Card>
    </>
  );
}
