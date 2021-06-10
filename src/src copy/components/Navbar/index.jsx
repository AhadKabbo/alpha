import React, { useState, useEffect } from 'react';
import { FaBars, FaNewspaper, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavMenuB,
  NavLinks,
  NavItem,
  NavLogoNew,
  NavBtn,
  NavBtnLink,
  NavBtnI,
  NavBtnLinkI,
  NavBtnLinkL,
} from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';
import { useAuth } from '../../../hooks';
import { MdChatBubble } from 'react-icons/md';
// import {img} from "../Info/image/pointLeft.png"
import { ImgLogo } from '../Info/InfoElements';

const Navbar = ({ toggle, alt, img }) => {
  // const {currentUser } = useAuth()
  const { authUser } = useAuth();

  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#f4f4fc' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogoNew to="/" onClick={toggleHome}>
              <ImgLogo src={img} alt={alt} />
            </NavLogoNew>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Discover
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>

              {authUser ? (
                <NavItem>
                  <NavLinks
                    to="signup"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Success Stories
                  </NavLinks>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLinks
                    to="signup"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Find Influancer
                  </NavLinks>
                </NavItem>
              )}
            </NavMenu>

            <NavMenuB>
              {authUser ? (
                <>
                  <NavBtnI>
                    <NavBtnLinkI to="/User">
                      <CgProfile
                        style={{ color: '#040404', marginBottom: '3px' }}
                      />{' '}
                      Profile
                    </NavBtnLinkI>
                  </NavBtnI>

                  <NavBtnI>
                    <NavBtnLinkI to="/chat">
                      {' '}
                      <MdChatBubble
                        style={{ color: '#040404', marginBottom: '3px' }}
                      />{' '}
                      My Chat
                    </NavBtnLinkI>
                  </NavBtnI>

                  <NavBtnI>
                    <NavBtnLinkI to="/newsfeed">
                      <FaNewspaper
                        style={{ color: '#040404', marginBottom: '3px' }}
                      />{' '}
                      NewsFeed
                    </NavBtnLinkI>
                  </NavBtnI>
                </>
              ) : (
                <>
                  <NavBtnI>
                    <NavBtnLinkL to="/login"> LogIn</NavBtnLinkL>
                  </NavBtnI>

                  <NavBtnI>
                    <NavBtnLinkI to="/signup">
                      <FaUserPlus
                        style={{ color: '#040404', marginBottom: '3px' }}
                      />{' '}
                      SignUp
                    </NavBtnLinkI>
                  </NavBtnI>
                </>
              )}
            </NavMenuB>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
