import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import NavbarPage from './Navbar/indexPage';
import SidebarPage from './SideBar/indexPage';
import Footer from './Footer';
import { navlogo } from './Info/Data';

export default function UnderDevlopment() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <NavbarPage toggle={toggle} {...navlogo} />
      <SidebarPage isOpen={isOpen} toggle={toggle} />

      <Container
        fluid
        className="d-flex align-items-center justify-content-center "
        style={{
          marginTop: '11rem',
          marginBottom: '6rem',
          // minHeight: '10rem',
          height: 'auto',
          minWidth: '10rem',
          // maxHeight: '70rem',
          maxWidth: '65rem',
        }}
      >
        <Card className="shadow p-3 mb-5 bg-white rounded">
          <Card.Body>
            <Card.Title>
              {' '}
              sorry, This is under devlopment ...
              <Card.Text
                className="d-flex align-items-center justify-content-center "
                style={{
                  color: '#DC5B21',
                  marginTop: '12%',
                  marginBottom: '10px',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                }}
              >
                Nothing to show
              </Card.Text>
            </Card.Title>
          </Card.Body>
        </Card>
      </Container>
      <Footer {...navlogo} />
    </>
  );
}
