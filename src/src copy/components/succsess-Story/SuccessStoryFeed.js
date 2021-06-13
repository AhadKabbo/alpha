import React, { useEffect } from 'react';
import { fb } from '../../../service';
import { Button, Row, Col, Card, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import { useAuth, useResolved } from '../../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaugh } from '@fortawesome/free-solid-svg-icons';
import { DeleteBtn } from '../UserProfile/DeleteBtn';

export default function SuccessStoryFeed() {
  const { authUser } = useAuth();
  const authResolved = useResolved(authUser);
  const [stories, setUsers] = React.useState([]);

  // function openModal() {
  //   setOpen(true);
  // }

  // function closeModal() {
  //   setOpen(false);
  // }

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

  // const personalUser = usersP.filter(obj => {
  //   return obj.userId === authUser.uid;
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const usersCollection = await fb.firestore.collection('chatUsers').get();
  //     setChatUsers(
  //       usersCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })),
  //     );
  //   };
  //   fetchData();
  // }, []);

  // const nameFilter = chat.filter(objN => {
  //   return objN.signupUserId === authUser.uid;
  // });

  return authResolved ? (
    <>
      <Card.Title
        className="d-flex align-items-center justify-content-center "
        style={{
          position: 'sticky',
          color: '#101522',
          marginTop: '10rem',
          marginBottom: '35px',
          fontSize: '30px',
          fontWeight: 'bold',
        }}
      >
        Our Community Success Sotories
      </Card.Title>
      <Card
        className="overflow-auto shadow p-3 mb-5 bg-white rounded"
        style={{ marginBottom: '3rem', marginTop: '1rem', maxHeight: '60rem' }}
      >
        <Card.Body>
          {authUser.uid === '6zFrfJd0wiUrwjLzeYKrl8xMAqP2' ? (
            <>
              {stories.map(user => (
                <Container
                  className="overflow-auto d-flex align-items-center justify-content-center "
                  style={{ padding: '10px', maxHeight: '60rem' }}
                >
                  <Card
                    className="shadow p-3 mb-5 bg-white rounded"
                    style={{
                      padding: '10px',
                      maxHeight: '55rem',
                      maxWidth: '40rem',
                    }}
                  >
                    <Card.Img src={user.avatar} alt={user.name} />

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
                      {' '}
                      {/* <Alert variant="secondary" show={open} onHide={closeModal}>
                    <Alert.Heading>Hey, nice to see you...</Alert.Heading>
                    <hr />
                    <Card.Link to="google.com" style={{ padding: '5px' }}>
                      {user.locate}
                    </Card.Link>
                    <hr />
                    <Button variant="secondary" onClick={closeModal}>
                      Close
                    </Button>
                  </Alert> */}
                      <Card.Text
                        className="overflow-auto"
                        style={{ padding: '5px', minHeight: '7rem' }}
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
                            // onClick={closeModal}
                          >
                            <FontAwesomeIcon icon={faLaugh} />
                          </Button>
                        </Col>

                        {/* <Col>
                      <Button
                        className="w-100 "
                        onClick={openModal}
                        variant="outline-success"
                        size="sm"
                      >
                        <FontAwesomeIcon icon={faLink} />
                      </Button>
                    </Col> */}

                        <Col>
                          <DeleteBtn user={user} />
                        </Col>
                      </Row>
                    </Card>
                  </Card>

                  {/* <Modal show={open} onHide={closeModal}>
                <Link to="google.com" style={{ padding: '5px' }}>
                  {user.locate}
                </Link>
              </Modal> */}
                </Container>
              ))}
            </>
          ) : (
            <>
              {stories.map(user => (
                <Container
                  className="overflow-auto d-flex align-items-center justify-content-center "
                  style={{ padding: '10px', maxHeight: '60rem' }}
                >
                  <Card
                    className="shadow p-3 mb-5 bg-white rounded"
                    style={{
                      padding: '10px',
                      maxHeight: '55rem',
                      maxWidth: '40rem',
                    }}
                  >
                    <Card.Img src={user.avatar} alt={user.name} />

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
                      {' '}
                      {/* <Alert variant="secondary" show={open} onHide={closeModal}>
                    <Alert.Heading>Hey, nice to see you...</Alert.Heading>
                    <hr />
                    <Card.Link to="google.com" style={{ padding: '5px' }}>
                      {user.locate}
                    </Card.Link>
                    <hr />
                    <Button variant="secondary" onClick={closeModal}>
                      Close
                    </Button>
                  </Alert> */}
                      <Card.Text
                        className="overflow-auto"
                        style={{ padding: '5px', minHeight: '7rem' }}
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
                            // onClick={closeModal}
                          >
                            <FontAwesomeIcon icon={faLaugh} />
                          </Button>
                        </Col>

                        {/* <Col>
                      <Button
                        className="w-100 "
                        onClick={openModal}
                        variant="outline-success"
                        size="sm"
                      >
                        <FontAwesomeIcon icon={faLink} />
                      </Button>
                    </Col> */}

                        {/* <Col>
                          <DeleteBtn user={user} />
                        </Col> */}
                      </Row>
                    </Card>
                  </Card>

                  {/* <Modal show={open} onHide={closeModal}>
                <Link to="google.com" style={{ padding: '5px' }}>
                  {user.locate}
                </Link>
              </Modal> */}
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
