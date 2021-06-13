import React, { useState, useEffect } from 'react';
import { FaBars, FaNewspaper, FaSignInAlt } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { IconContext } from 'react-icons/lib';
import {
  NavP,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavMenuB,
  NavLinksP,
  NavItem,
  NavBtnI,
  NavBtnLinkI,
  NavLogoNew,
} from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';
import { useAuth } from '../../../hooks';
import { MdChatBubble } from 'react-icons/md';
import { ImgLogo } from '../Info/InfoElements';

const NavbarPage = ({ toggle, alt, img }) => {
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
      {/* <Router>
    <Route path="/" component={Info2} />
    </Router> */}
      <IconContext.Provider value={{ color: '#f4f4fc' }}>
        <NavP scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogoNew to="/" onClick={toggleHome}>
              <ImgLogo src={img} alt={alt} />{' '}
            </NavLogoNew>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinksP
                  to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  data-tooltip="txt"
                >
                  About
                </NavLinksP>
              </NavItem>
              <NavItem>
                <NavLinksP
                  to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Discover
                </NavLinksP>
              </NavItem>
              <NavItem>
                <NavLinksP
                  to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Services
                </NavLinksP>
              </NavItem>
              <NavItem>
                <NavLinksP
                  to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Success Stories
                </NavLinksP>
              </NavItem>
            </NavMenu>

            <NavMenuB>
              {authUser ? (
                <>
                  <NavBtnI>
                    <NavBtnLinkI to="/User">
                      <CgProfile
                        style={{ color: '#040404', marginBottom: '3px' }}
                      />
                    </NavBtnLinkI>
                  </NavBtnI>

                  <NavBtnI>
                    <NavBtnLinkI to="/chat">
                      {' '}
                      <MdChatBubble
                        style={{ color: '#040404', marginBottom: '3px' }}
                      />
                    </NavBtnLinkI>
                  </NavBtnI>

                  <NavBtnI>
                    <NavBtnLinkI to="/newsfeed">
                      <FaNewspaper
                        style={{ color: '#040404', marginBottom: '3px' }}
                      />
                    </NavBtnLinkI>
                  </NavBtnI>
                </>
              ) : (
                <NavBtnI>
                  <NavBtnLinkI to="/login">
                    <FaSignInAlt
                      style={{ color: '#040404', marginBottom: '3px' }}
                    />{' '}
                    LogIn
                  </NavBtnLinkI>
                </NavBtnI>
              )}
            </NavMenuB>
          </NavbarContainer>
        </NavP>
      </IconContext.Provider>
    </>
  );
};

export default NavbarPage;
