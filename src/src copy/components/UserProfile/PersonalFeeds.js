import React, { useState, useEffect } from 'react';
import { fb } from '../../../service';
import { Button, Row, Col, Card, Container } from 'react-bootstrap';

import { useAuth } from '../../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faLaugh } from '@fortawesome/free-solid-svg-icons';
import { DeleteBtn } from './DeleteBtn';

export default function PersonalFeeds() {
  const { authUser } = useAuth();
  const [usersP, setUsers] = React.useState([]);
  const [chat, setChatUsers] = useState([]);

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
        My Profile Timeline
      </Card.Title>
      <Card
        className="overflow-auto"
        style={{ marginTop: '1rem', maxHeight: '60rem' }}
      >
        <Card.Body>
          {personalUser.map(user => (
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
                        variant="outline-success"
                        size="sm"
                      >
                        <FontAwesomeIcon icon={faComment} />
                      </Button>
                    </Col>
                    <Col>
                      <DeleteBtn user={user} />
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
