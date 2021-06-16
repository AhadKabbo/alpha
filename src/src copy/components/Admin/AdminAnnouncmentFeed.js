import React, { useState, useEffect } from 'react';
import { fb } from '../../../service';
import { Button, Row, Col, Card, Container, Alert } from 'react-bootstrap';
// import NavbarPage from '../Navbar/indexPage';
// import Sidebar from '../SideBar/index';
// import { Link } from 'react-router-dom';
import { useAuth, useResolved } from '../../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngry, faLaugh, faLink } from '@fortawesome/free-solid-svg-icons';
import { AdminDeleteBtn } from './AdminDeleteBtn';
import ProfileLogo from '../UserProfile/ProfileLogo';
import { homeObjProfile } from '../Info/Data';

export default function AdminAnnouncmentFeed() {
  const { authUser } = useAuth();
  const authResolved = useResolved(authUser);
  const [usersAdmin, setUsers] = React.useState([]);
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
        .collection('admin')
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
          color: '#dc5b21',
          marginTop: '8rem',
          marginBottom: '35px',
          fontSize: '30px',
          fontWeight: 'bold',
        }}
      >
        Admin Announcement
      </Card.Title>
      <Card
        className="overflow-auto shadow p-3 mb-5 bg-white rounded"
        style={{
          marginBottom: '3rem',
          marginTop: '-1rem',
          maxHeight: '80rem',
          // padding: '20rem',
        }}
      >
        <Card.Body>
          {authUser.uid === '6zFrfJd0wiUrwjLzeYKrl8xMAqP2' ? (
            <>
              {usersAdmin.map(user => (
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
                        padding: '10px',
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
                    <Card style={{ padding: '5px' }}>
                      <Row>
                        <Col
                          style={{
                            maxWidth: '15rem',
                            // marginLeft: '1rem',
                            // marginTop: '2rem',
                          }}
                        >
                          <Card.Text
                            style={{
                              marginLeft: '1rem',
                              fontWeight: 'bold',
                            }}
                          >
                            React..
                          </Card.Text>
                        </Col>
                        <Col
                          style={{
                            maxWidth: '8rem',
                            marginLeft: '3rem',
                            // marginLeft: '1rem',
                            // marginTop: '2rem',
                          }}
                        >
                          <Button
                            className="w-100 "
                            variant="outline-info"
                            size="sm"
                            // onClick={closeModal}
                          >
                            <FontAwesomeIcon icon={faLaugh} />
                          </Button>
                        </Col>
                        <Col
                          style={{
                            maxWidth: '8rem',
                            marginLeft: '3srem',
                            // marginLeft: '1rem',
                            // marginTop: '2rem',
                          }}
                        >
                          <Button
                            className="w-100 "
                            variant="outline-danger"
                            size="sm"
                            // onClick={closeModal}
                          >
                            <FontAwesomeIcon icon={faAngry} />
                          </Button>
                        </Col>
                        <Col
                          style={{
                            maxWidth: '8rem',
                            // marginLeft: 'rem',
                            // marginLeft: '1rem',
                            // marginTop: '2rem',
                          }}
                        >
                          <AdminDeleteBtn user={user} />
                        </Col>
                      </Row>
                    </Card>
                  </Card>
                </Container>
              ))}
            </>
          ) : (
            <>
              {usersAdmin.map(user => (
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
                        padding: '10px',
                        maxHeight: '60rem',
                        maxWidth: '45rem',
                      }}
                      src={user.avatar}
                      alt={user.name}
                    />
                    {/* <Row
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
                    </Row> */}
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
                    <Card style={{ padding: '5px' }}>
                      <Row>
                        <Col
                          style={{
                            maxWidth: '15rem',
                            // marginLeft: '1rem',
                            // marginTop: '2rem',
                          }}
                        >
                          <Card.Text
                            style={{
                              marginLeft: '1rem',
                              fontWeight: 'bold',
                            }}
                          >
                            React...
                          </Card.Text>
                        </Col>
                        <Col
                          style={{
                            maxWidth: '8rem',
                            marginLeft: '3rem',
                            // borderRadius: '100%',
                            // marginLeft: '1rem',
                            // marginTop: '2rem',
                          }}
                        >
                          <Button
                            // style={{
                            //   borderRadius: '20%',
                            // }}
                            className="w-100 "
                            variant="outline-info"
                            size="sm"
                            // onClick={closeModal}
                          >
                            <FontAwesomeIcon icon={faLaugh} />
                          </Button>
                        </Col>
                        <Col
                          style={{
                            maxWidth: '8rem',
                            marginLeft: '3srem',
                            // marginLeft: '1rem',
                            // marginTop: '2rem',
                          }}
                        >
                          <Button
                            className="w-100 "
                            variant="outline-danger"
                            size="sm"
                            // onClick={closeModal}
                          >
                            <FontAwesomeIcon icon={faAngry} />
                          </Button>
                        </Col>
                      </Row>
                    </Card>
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
