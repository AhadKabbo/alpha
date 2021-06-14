import React, { useEffect, useState } from 'react';
import { fb } from '../../../service';
import { Button, Row, Col, Card, Container, Alert } from 'react-bootstrap';
// import { useAuth } from '../../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaugh, faLink } from '@fortawesome/free-solid-svg-icons';

export default function Insta() {
  // const { authUser } = useAuth();
  const [usersF, setUsers] = React.useState([]);
  // const [chat, setChatUsers] = useState([]);
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

  const instaUsers = usersF.filter(obj => {
    return obj.insta_Tag === true;
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
        Post related to Instagram
      </Card.Title>
      <Card
        className="overflow-auto shadow p-3 mb-5 bg-white rounded"
        style={{
          marginBottom: '3rem',
          marginTop: '-1rem',
          maxHeight: '100rem',
        }}
      >
        {instaUsers.map(user => (
          <Container
            className="d-flex align-items-center justify-content-center"
            style={{
              // marginBottom: '3rem',
              marginTop: '3rem',
              padding: '10px',
              maxHeight: '80rem',
            }}
          >
            <Card
              className="shadow p-3 mb-5 bg-white rounded"
              style={{
                padding: '10px',
                maxHeight: '80rem',
                maxWidth: '45rem',
              }}
            >
              <Card.Img
                style={{
                  padding: '10px',
                  maxHeight: '60rem',
                  maxWidth: '45rem',
                }}
                src={user.avatar}
                alt={user.name}
              />
              <Alert
                style={{
                  maxHeight: '8rem',
                  maxWidth: '45',
                }}
                variant="dark"
                show={open}
                onHide={closeModal}
              >
                <Row>
                  <Col
                    style={{
                      maxWidth: '36rem',
                    }}
                  >
                    <Alert.Heading>
                      This Url-link was attched by the Post Creator..
                    </Alert.Heading>

                    <Card.Link to="google.com" style={{ padding: '5px' }}>
                      {user.locate}
                    </Card.Link>
                  </Col>
                  <Col
                    style={{
                      maxWidth: '7rem',
                    }}
                  >
                    <Button variant="secondary" onClick={closeModal}>
                      Close
                    </Button>
                  </Col>
                </Row>
              </Alert>

              <Card.Title
                style={{
                  marginTop: '20px',
                  fontSize: '30px',
                  fontWeight: 'bold',
                }}
              >
                {user.creator}
              </Card.Title>

              {/* <Card
                style={{
                  minHeight: '70px',
                  padding: '5px',
                  marginTop: '0.5rem',
                  marginBottom: '1rem',
                }}
              > */}
              <Card.Text
                className="overflow-auto"
                style={{ padding: '5px', fontSize: '1.2rem' }}
              >
                {user.name}
              </Card.Text>
              {/* </Card> */}

              {/* <Card style={{ padding: '10px' }}> */}
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
              {/* </Card> */}
            </Card>
          </Container>
        ))}
      </Card>
    </>
  );
}
