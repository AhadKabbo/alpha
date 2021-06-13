import React, { useState } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Info from '../components/Info';
import SuccessSotoryInfo from '../components/Info/SuccessSotoryInfo';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  successSotoryInfo,
  navlogo,
} from '../components/Info/Data';
import Info2 from '../components/Info/about';
import { useAuth } from '../../hooks';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/SideBar';

const Home = () => {
  const { authUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} {...navlogo} />

      {authUser ? (
        <>
          <Hero />
          <Info2 {...homeObjTwo} />
          <Info {...homeObjOne} />
          <Services />
          <SuccessSotoryInfo {...successSotoryInfo} />
        </>
      ) : (
        <>
          <Hero />
          <Info2 {...homeObjTwo} />
          <Info {...homeObjOne} />
          <Services />
          <Info {...homeObjThree} />
        </>
      )}
      <Footer {...navlogo} />
    </>
  );
};

export default Home;
