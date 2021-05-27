import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../../hooks';
import { Link } from 'react-router-dom';
import CenteredContainer from './CenteredContainer';
import { Icon } from '../../Signin/SigninElements';

export default function VerifyEmail() {
  const { authUser } = useAuth();
  const emailRef = useRef();
  const { verifyEmail } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      verifyEmail();
      setMessage('Check your inbox for further instructions');
    } catch {
      setError('Failed to verify Email');
    }

    setLoading(false);
  }

  return (
    <CenteredContainer>
      <Card>
        <Card.Body>
          <Icon to="/">Digital প্রচার</Icon>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
            </Form.Group>
            <Button
              disabled={loading}
              // onClick={submit}
              className="w-100"
              type="submit"
            >
              Verify Email
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </CenteredContainer>
  );
}
