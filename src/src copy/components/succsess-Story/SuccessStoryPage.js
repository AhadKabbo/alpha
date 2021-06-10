import React, { useState } from 'react';
// import Profile from '../UserProfile/Profile';
import Footer from '../Footer';
import NavbarPage from '../Navbar/indexPage';
import Sidebar from '../SideBar/index';
import { homeObjProfile, navlogo } from '../Info/Data';
import { Container, Col, Row } from 'react-bootstrap';
// import PersonalFeeds from '../UserProfile/PersonalFeeds';
import CreatReport from './CreatSuccessStory';
import Ap from '../../Ap';
import SuccessStoryFeed from './SuccessStoryFeed';
import CreatSuccessStory from './CreatSuccessStory';
import AboutMe from './AboutMe';

export default function SuccessStoryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavbarPage toggle={toggle} {...navlogo} />
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <Container fluid style={{ marginTop: '6rem' }}>
        <Row>
          <Col md>
            <AboutMe />
          </Col>
        </Row>
        <Row>
          <Col md>
            <CreatSuccessStory />
          </Col>
        </Row>

        <Row>
          <Col md>
            <SuccessStoryFeed />
          </Col>
        </Row>
      </Container>
      <Footer {...navlogo} />
    </>
  );
}
