import React, {useState} from 'react'
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Info from '../components/Info'
import { homeObjOne, homeObjTwo, homeObjThree,commonFeeds} from '../components/Info/Data';
// import { useAuth } from "../contexts/AuthContext"
import Info2 from '../components/Info/about'


import { useAuth } from "../../hooks"
import PrivateRoute from "../components/authentication/PrivateRoute"


import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/SideBar'
import CommonNewsFeeds from '../components/CommonNewsFeed/CommonNewsFeeds';

const Home = () => {
  // const {currentUser } = useAuth()
  const { authUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      <Info2 {...homeObjOne}/>
      <Info {...homeObjTwo}/>
      <Services />
      {/* < PrivateRoute/> */}

      {  authUser ? (<CommonNewsFeeds {...commonFeeds}/> )    :  (
      <Info {...homeObjThree}/>
      )}
      <Footer />
    </>
  )
}

export default Home;
 