import React, { useEffect } from 'react';
import { fb } from '../../../service';
import { Button, Row, Col, Card, Container } from 'react-bootstrap';
// import { useAuth } from '../../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaugh } from '@fortawesome/free-solid-svg-icons';
import { ReportDeleteBtn } from './ReportDeleteBtn';

export default function ReportFeed() {
  // const { authUser } = useAuth();
  const [reports, setUsers] = React.useState([]);
  // const [chat, setChatUsers] = useState([]);
  // const [open, setOpen] = useState(false);

  // function openModal() {
  //   setOpen(true);
  // }

  // function closeModal() {
  //   setOpen(false);
  // }

  useEffect(() => {
    const fetchData = async () => {
      const usersCollection = await fb.firestore
        .collection('usersReports')
        .orderBy('createdAt', 'desc')
        .get();
      setUsers(
        usersCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })),
      );
    };
    fetchData();
  }, []);

  return (
    <>
      <Card.Title
        className="d-flex align-items-center justify-content-center "
        style={{
          position: 'sticky',
          color: '#101522',
          marginTop: '5rem',
          marginBottom: '35px',
          fontSize: '30px',
          fontWeight: 'bold',
        }}
      >
        Report Handling
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
          {reports.map(user => (
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
                    <ReportDeleteBtn user={user} />
                  </Col>
                </Row>
              </Card>
            </Container>
          ))}
        </Card.Body>
      </Card>
    </>
  );
}
