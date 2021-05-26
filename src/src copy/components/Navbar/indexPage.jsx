import React, {useState, useEffect} from 'react'
import { FaBars, FaNewspaper, FaSignInAlt } from "react-icons/fa";
import { CgProfile } from 'react-icons/cg'
import {IconContext} from 'react-icons/lib'
import { NavP, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinksP, NavItem, NavBtn, NavBtnLink, NavBtnI, NavBtnLinkI } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';
import { useAuth } from "../../../hooks"
import { MdChatBubble } from 'react-icons/md';



const NavbarPage = ({ toggle }) => {
  // const {currentUser } = useAuth()
  const { authUser } = useAuth()
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
    {/* <Router>
    <Route path="/" component={Info2} />
    </Router> */}
    <IconContext.Provider value={{ color: '#f4f4fc'}}>
      <NavP scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>Digital প্রচার </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinksP to='/'
              smooth={true} duration={500} spy={true} exact='true' offset={-80} data-tooltip="txt"
              >About
              </NavLinksP>
            </NavItem>
            <NavItem>
              <NavLinksP to='/'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Discover</NavLinksP>
            </NavItem>
            <NavItem>
              <NavLinksP to='/'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Services</NavLinksP>
            </NavItem>
            <NavItem>
              <NavLinksP to='/'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Become Influancer</NavLinksP>
            </NavItem>
          </NavMenu>
          {
            authUser  ? (

              <> 
              <NavBtnI>
                <NavBtnLinkI to='/User'><CgProfile style={{ color: '#DC5B21', marginBottom: '3px' }}/>  Profile</NavBtnLinkI>
              </NavBtnI>
    
              <NavBtnI>
              <NavBtnLinkI to='/chat'> <MdChatBubble style={{ color: '#DC5B21', marginBottom: '3px' }}/>  My Chat</NavBtnLinkI>
              </NavBtnI>

              <NavBtnI>
                <NavBtnLinkI to='/newsfeed'><FaNewspaper style={{ color: '#DC5B21', marginBottom: '3px' }}/>  NewsFeed</NavBtnLinkI>
              </NavBtnI>
              </>
          )    :  (
            <NavBtnI>
                <NavBtnLinkI to='/login'><FaSignInAlt style={{ color: '#DC5B21', marginBottom: '3px' }}/>   LogIn</NavBtnLinkI>
              </NavBtnI>
            ) }
        </NavbarContainer>
      </NavP>
    </IconContext.Provider>
    </>
  )
}

export default NavbarPage
