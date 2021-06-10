import React, { useState } from 'react';
// import Profile from '../UserProfile/Profile';
import Footer from '../Footer';
import NavbarPage from '../Navbar/indexPage';
import Sidebar from '../SideBar/index';
import { homeObjProfile, navlogo } from '../Info/Data';
import { Container, Col, Row } from 'react-bootstrap';
// import PersonalFeeds from '../UserProfile/PersonalFeeds';
import CreatReport from './CreatReport';
import Ap from '../../Ap';

export default function ReportPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavbarPage toggle={toggle} {...navlogo} />
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <Container
        fluid
        className="d-flex align-items-center justify-content-center "
        style={{ marginTop: '6rem' }}
      >
        <Row style={{ marginBottom: '2rem' }}>
          <Col
            md
            style={{
              marginTop: '5rem',
              marginBottom: '5rem',
              minWidth: '350px',
              // Width: '750px',
              // marginRight: '20rem',
              // marginLeft: '20rem',
            }}
          >
            <CreatReport />
          </Col>
        </Row>

        {/* <Row>
          <Col>
           
          </Col>
        </Row> */}
      </Container>
      {/* <Ap/> */}
      <Footer {...navlogo} />
    </>
  );
}
