import React from 'react';
// import { fb } from '../../../service';
import { Card, Container } from 'react-bootstrap';

export default function NotAdmin() {
  return (
    <>
      <Container className="d-flex align-items-center justify-content-center ">
        <Card
          className="d-flex align-items-center justify-content-center "
          style={{
            marginTop: '3rem',
            marginBottom: '4rem',
            minHeight: '40rem',
            minWidth: '7rem',
            maxWidth: '40rem',
          }}
        >
          <Card.Body>
            <Card.Title>
              {' '}
              sorry, You are not an admin ..
              <Card.Text
                className="d-flex align-items-center justify-content-center "
                style={{
                  color: '#DC5B21',
                  marginTop: '12%',
                  marginBottom: '35px',
                  fontSize: '5rem',
                  fontWeight: 'bold',
                }}
              >
                Nothing to show
              </Card.Text>
            </Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
