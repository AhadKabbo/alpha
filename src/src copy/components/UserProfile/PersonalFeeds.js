import React, { useState, useEffect } from 'react';
import { fb } from '../../../service';
import { Button, Row, Col, Card, Container, Alert } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import ProfileLogo from './ProfileLogo';
import { homeObjProfile } from '../Info/Data';
import { useAuth } from '../../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaugh, faLink } from '@fortawesome/free-solid-svg-icons';
import { DeleteBtn } from './DeleteBtn';

export default function PersonalFeeds() {
  const { authUser } = useAuth();
  const [usersP, setUsers] = React.useState([]);
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

  const personalUser = usersP.filter(obj => {
    return obj.userId === authUser.uid;
  });

  return (
    <>
      <Card.Title
        className="d-flex align-items-center justify-content-center "
        style={{
          position: 'sticky',
          color: '#101522',
          marginTop: '8rem',
          marginBottom: '35px',
          fontSize: '30px',
          fontWeight: 'bold',
        }}
      >
        My Timeline
      </Card.Title>
      <Card
        className="overflow-auto shadow p-3 mb-5 bg-white rounded"
        style={{
          marginBottom: '3rem',
          marginTop: '-1rem',
          maxHeight: '100rem',
        }}
      >
        {personalUser.map(user => (
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
              <Row
                style={{
                  // marginLeft: '1rem',
                  marginBottom: '0.5rem',
                }}
              >
                <Col
                  style={{
                    maxWidth: '4rem',
                    // marginTop: '0.40rem',
                    marginLeft: '1rem',
                  }}
                >
                  <ProfileLogo {...homeObjProfile} />
                </Col>
                <Col
                  style={{
                    maxWidth: '20rem',
                    marginLeft: '-0.5rem',
                  }}
                >
                  <Card.Title
                    style={{
                      // marginTop: '20px',
                      marginTop: '0.40rem',
                      fontSize: '30px',
                      fontWeight: 'bold',
                      color: '#1cc7d9',
                    }}
                  >
                    {user.creator}
                  </Card.Title>
                </Col>
              </Row>

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
                <Col>
                  <DeleteBtn user={user} />
                </Col>
              </Row>
            </Card>
          </Container>
        ))}
      </Card>
    </>
  );
}
