import React, { useEffect, useState } from 'react';
import { fb } from '../../../service';
import { Button, Row, Col, Card, Container, Alert } from 'react-bootstrap';
// import { useAuth } from '../../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaugh, faLink } from '@fortawesome/free-solid-svg-icons';

export default function Fb() {
  // const { authUser } = useAuth();
  const [usersF, setUsers] = React.useState([]);

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
        Post related to FaceBook
      </Card.Title>
      <Card
        className="overflow-auto shadow p-3 mb-5 bg-white rounded"
        style={{
          marginBottom: '3rem',
          marginTop: '-1rem',
          maxHeight: '80rem',
        }}
      >
        {fbUsers.map(user => (
          // <Container
          //   className="overflow-auto d-flex align-items-center justify-content-center"
          //   style={{
          //     // marginBottom: '3rem',
          //     marginTop: '3rem',
          //     padding: '10px',
          //     maxHeight: '60rem',
          //   }}
          // >
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
                maxHeight: '10rem',
                maxWidth: '45',
              }}
              variant="dark"
              show={open}
              onHide={closeModal}
            >
              <Row>
                <Col
                  style={{
                    maxWidth: '30rem',
                  }}
                >
                  {/* <Alert.Heading>
                    This Url-link was attched by the Post Creator..
                  </Alert.Heading> */}

                  <Card.Link to="google.com" style={{ padding: '5px' }}>
                    {user.locate}
                  </Card.Link>
                </Col>
                <Col
                  style={{
                    maxWidth: '5rem',
                    padding: '5px',
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
                marginLeft: '1rem',
                marginTop: '0.40rem',
                fontSize: '30px',
                fontWeight: 'bold',
                color: '#1cc7d9',
              }}
            >
              {user.creator}
            </Card.Title>

            <Card.Text
              className="overflow-auto"
              style={{
                padding: '5px',
                fontSize: '1.2rem',
                marginLeft: '1rem',
                maxHeight: '15rem',
              }}
            >
              {user.name}
            </Card.Text>

            <Row>
              <Col>
                <Button className="w-100 " variant="outline-info" size="sm">
                  <FontAwesomeIcon icon={faLaugh} />
                </Button>
              </Col>

              <Col>
                <Button
                  className="w-100 "
                  onClick={openModal}
                  variant="outline-info"
                  size="sm"
                >
                  <FontAwesomeIcon icon={faLink} />
                </Button>
              </Col>
            </Row>
          </Card>
          // </Container>
        ))}
      </Card>
    </>
  );
}
