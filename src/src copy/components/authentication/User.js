import React, { useState } from 'react';
import Profile from '../UserProfile/Profile';
import ProfileLogo from '../UserProfile/ProfileLogo';
import Footer from '../Footer';
import NavbarPage from '../Navbar/indexPage';
import Sidebar from '../SideBar/index';
import { homeObjProfile, navlogo } from '../Info/Data';
import { Container, Col, Row } from 'react-bootstrap';
import PersonalFeeds from '../UserProfile/PersonalFeeds';
import CreatPost from '../UserProfile/CreatPost';
// import Ap from '../../Ap';

export default function User() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavbarPage toggle={toggle} {...navlogo} />
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <Container fluid style={{ marginTop: '6rem' }}>
        <Row
          className="d-flex align-items-center justify-content-center  "
          style={{ marginBottom: '2rem' }}
        >
          <Col
            md
            className="d-flex align-items-center justify-content-center  "
            style={{
              maxHeight: '30rem',
              maxWidth: '20rem',
              marginLeft: '1rem',
              marginTop: '2rem',
            }}
          >
            <Profile {...homeObjProfile} />
          </Col>
          <Col
            md
            className="d-flex align-items-center justify-content-center  "
            style={{ marginTop: '0rem', marginRight: '0rem' }}
          >
            <CreatPost />
          </Col>
        </Row>

        <Row>
          <Col>
            <PersonalFeeds />
          </Col>
        </Row>
      </Container>
      {/* <Ap/> */}
      <Footer {...navlogo} />
    </>
  );
}
