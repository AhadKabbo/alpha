import React, { useState } from 'react';
import { Form, Button, Card, Alert, Modal } from 'react-bootstrap';
import { useAuth, useResolved } from '../../../hooks';
import { Link, useHistory } from 'react-router-dom';
import CenteredContainer from './CenteredContainer';
import { FaSignInAlt } from 'react-icons/fa';

export default function VerifyEmail() {
  const history = useHistory();
  const { authUser } = useAuth();
  const [open, setOpen] = useState(false);
  // const emailRef = useRef();
  const { verifyEmail } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [open1, setOpen1] = useState(false);
  const [loading, setLoading] = useState(false);
  const authResolved = useResolved(authUser);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  // function openModal1() {
  //   setOpen1(true);
  // }

  function closeModal1() {
    setOpen1(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      verifyEmail();
      setMessage('');
    } catch {
      setError('Failed to verify Email');
    }

    setLoading(false);
  }

  // if (authResolved) {
  //   const verification = authUser.emailVerified;
  //   console.log(verification);
  // }

  // const fbUsers = verification.filter(obj => {
  //   return obj.emailVerified === true;
  // });

  function verifyTag() {
    if (authResolved) {
      var verification = authUser.emailVerified;
      if (verification === true) {
        history.push('/');
      } else {
        setOpen1(true);
      }
    }
    closeModal();
  }

  // console.log(authUser);
  return (
    <CenteredContainer>
      <Card
        style={{
          backgroundColor: '#101522',
          fontWeight: 'bold',
        }}
      >
        <Card.Body>
          <Modal show={open1} onHide={closeModal1}>
            <Alert>
              First You have to verify your email and then refresh the page..{' '}
            </Alert>
          </Modal>

          {/* <Modal style={{ border: 'none' }} show={open} onHide={closeModal}> */}
          <Alert
            variant="secondary"
            show={open}
            onHide={closeModal}
            onClick={verifyTag}
          >
            <Alert.Heading>Hey, nice to see you...</Alert.Heading>
            <hr />
            <p className="mb-0">
              <li> We email a verification link to your inbox</li>
              <li> Check your inbox for further instructions</li>
              <li> Follow that link to verify your email address</li>
              <li>
                Only after compliting the verification you can clik here...
                <FaSignInAlt
                  style={{
                    color: '#DC5B21',
                  }}
                />
              </li>
            </p>
          </Alert>
          {/* </Modal> */}

          <Card.Title
            className="d-flex align-items-center justify-content-center "
            style={{
              position: 'sticky',
              color: '#f4f4fc',
              marginTop: '25px',
              marginBottom: '35px',
              fontSize: '30px',
              fontWeight: 'bold',
            }}
          >
            Email verification !!!
          </Card.Title>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
            </Form.Group>
            <Button
              style={{
                backgroundColor: '#1cc7d9',
                fontWeight: 'bold',
              }}
              disabled={loading}
              onClick={openModal}
              className="w-100"
              type="submit"
            >
              Verify Email
            </Button>
          </Form>

          <Card.Text>
            <div className="w-100 text-center mt-3">
              <Link to="/login">Login</Link>
            </div>
          </Card.Text>

          <Card.Text>
            <div className="w-100 text-center mt-2">
              Need an account? <Link to="/signup">Sign Up</Link>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </CenteredContainer>
  );
}
