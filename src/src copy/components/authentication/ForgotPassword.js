import React, { useRef, useState } from 'react';
import { Form, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../../hooks';
import { useHistory } from 'react-router-dom';
import { navlogo } from '../Info/Data';
import Logo from './Logo';

const ForgotPassword = ({ alt, img }) => {
  const emailRef = useRef();
  const history = useHistory();
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions');
    } catch {
      setError('Failed to reset password');
    }

    setLoading(false);
  }

  return (
    <div className="auth-form">
      <Card
        style={{
          border: 'none',
          background: 'none',
        }}
      >
        <Card.Body>
          <Logo {...navlogo} />
          <h1
            style={{
              marginBottom: '1rem',
            }}
          >
            Forget Password
          </h1>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <div className="auth-form button">
              <button
                style={{
                  marginLeft: '-2.5rem',
                  color: '#1cc7d9',
                  backgroundColor: '',
                }}
                disabled={loading}
                type="submit"
              >
                Reset Password
              </button>
            </div>

            <div className="auth-link-container">
              Go back to login?{' '}
              <span className="auth-link" onClick={() => history.push('login')}>
                LogIn
              </span>
            </div>

            <div className="auth-link-container">
              Don't have an account?{' '}
              <span
                className="auth-link"
                onClick={() => history.push('signup')}
              >
                Sign Up!
              </span>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ForgotPassword;
