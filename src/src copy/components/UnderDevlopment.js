import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

export default function UnderDevlopment() {
  return (
    <>
      <Card style={{ marginTop: '1rem', minHeight: '40rem' }}>
        <Card.Body>
          <Card.Title>
            {' '}
            sorry, This is under devlopment ...
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
    </>
  );
}
