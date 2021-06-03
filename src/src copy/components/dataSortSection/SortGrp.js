import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer';
import NavbarPage from '../Navbar/indexPage';
import Sidebar from '../SideBar';
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
        <Fb />
        <Insta />
        <Youtube />
      </Container>

      <Footer {...navlogo} />
    </>
  );
};

export default SortGrp;
