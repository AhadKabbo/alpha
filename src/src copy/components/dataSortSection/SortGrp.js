import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Footer from '../Footer';
import NavbarPage from '../Navbar/indexPage';
import Sidebar from '../SideBar';
import AdminAnnouncmentFeed from '../Admin/AdminAnnouncmentFeed';
import Fb from './Fb';
import Insta from './Insta';
import Youtube from './Youtube';
import { navlogo } from '../Info/Data';

const SortGrp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarPage toggle={toggle} {...navlogo} />
      <Container fluid style={{ marginTop: '6rem' }}>
        <AdminAnnouncmentFeed />
        <Card
          className="overflow-auto shadow p-3 mb-5 bg-white rounded"
          style={{
            marginTop: '3rem',
            padding: '10px',
            // border: 'none',
            maxHeight: '120rem',
          }}
        >
          <Row>
            <Col>
              <Fb />
            </Col>

            <Col>
              <Insta />
            </Col>

            <Col>
              <Youtube />
            </Col>
          </Row>
        </Card>

        {/* <Fb />
        <Insta />
        <Youtube /> */}
      </Container>

      <Footer {...navlogo} />
    </>
  );
};

export default SortGrp;
