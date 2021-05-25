import React, {useState, useEffect} from 'react'
import { FaBars } from "react-icons/fa";
import { CgProfile } from 'react-icons/cg'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink, NavBtnI, NavBtnLinkI } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';
import { useAuth } from "../../../hooks"
import { MdSentimentVerySatisfied } from 'react-icons/md';

const Navbar = ({ toggle }) => {
  // const {currentUser } = useAuth()
  const { authUser } = useAuth();
  
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#f4f4fc'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>Digital প্রচার </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Become Influancer</NavLinks>
            </NavItem>
          </NavMenu>
          
          {
            authUser ? (

          
              <>
              <NavBtnI>
                <NavBtnLinkI to='/User'>Profile <CgProfile/></NavBtnLinkI>
              </NavBtnI>
    
              <NavBtnI>
              <NavBtnLinkI to='/chat'>My chat <MdSentimentVerySatisfied/></NavBtnLinkI>
              </NavBtnI>
              </>
          )    :  (
            <NavBtn>
              <NavBtnLink to='/Login'>Sign In</NavBtnLink>
            </NavBtn>
            ) }
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
