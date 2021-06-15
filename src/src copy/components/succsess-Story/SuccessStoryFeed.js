import React, { useEffect } from 'react';
import { fb } from '../../../service';
import { Button, Row, Col, Card, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import { useAuth, useResolved } from '../../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaugh } from '@fortawesome/free-solid-svg-icons';
import { StoryDeleteBtn } from './StoryDeleteBtn';

export default function SuccessStoryFeed() {
  const { authUser } = useAuth();
  const authResolved = useResolved(authUser);
  const [stories, setUsers] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersCollection = await fb.firestore
        .collection('usersSuccessStory')
        .orderBy('createdAt', 'desc')
        .get();
      setUsers(
        usersCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })),
      );
    };
    fetchData();
  }, []);

  return authResolved ? (
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
        Our Community Success Sotories
      </Card.Title>
      <Card
        className="overflow-auto shadow p-3 mb-5 bg-white rounded"
        style={{
          marginBottom: '3rem',
          marginTop: '-1rem',
          maxHeight: '100rem',
        }}
      >
        <Card.Body>
          {authUser.uid === '6zFrfJd0wiUrwjLzeYKrl8xMAqP2' ? (
            <>
              {stories.map(user => (
                <Container
                  className="d-flex align-items-center justify-content-center "
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
                        padding: '5px',
                        maxHeight: '60rem',
                        maxWidth: '45rem',
                      }}
                      src={user.avatar}
                      alt={user.name}
                    />

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
                        <Button
                          className="w-100 "
                          variant="outline-info"
                          size="sm"
                          // onClick={closeModal}
                        >
                          <FontAwesomeIcon icon={faLaugh} />
                        </Button>
                      </Col>

                      <Col>
                        <StoryDeleteBtn user={user} />
                      </Col>
                    </Row>
                  </Card>
                </Container>
              ))}
            </>
          ) : (
            <>
              {stories.map(user => (
                <Container
                  className="d-flex align-items-center justify-content-center "
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
                        padding: '5px',
                        maxHeight: '60rem',
                        maxWidth: '45rem',
                      }}
                      src={user.avatar}
                      alt={user.name}
                    />

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
                        <Button
                          className="w-100 "
                          variant="outline-info"
                          size="sm"
                          // onClick={closeModal}
                        >
                          <FontAwesomeIcon icon={faLaugh} />
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </Container>
              ))}
            </>
          )}
        </Card.Body>
      </Card>
    </>
  ) : (
    <>Loading...</>
  );
}
