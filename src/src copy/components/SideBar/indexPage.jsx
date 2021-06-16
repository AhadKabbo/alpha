import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarRouteSignUp,
  SidebarRoute,
  SidebarRouteC,
  SidebarRouteN,
  SidebarRouteS,
  SideBtnWrap,
} from './SidebarElements';
import { CgProfile } from 'react-icons/cg';
import { useAuth } from '../../../hooks';
import { MdChatBubble } from 'react-icons/md';
import { FaNewspaper, FaSignInAlt } from 'react-icons/fa';

const SidebarPage = ({ isOpen, toggle }) => {
  const { authUser } = useAuth();

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      {/* <IconP onClick={toggleHome}>
      <NavBtnLinkIS to='/User'><CgProfile/></NavBtnLinkIS>
      </IconP> */}

      <SidebarWrapper>
        {authUser ? (
          <>
            {/* <SidebarMenu>
              <SidebarLink to="discover" onClick={toggle}>
                About
              </SidebarLink>
              <SidebarLink to="about" onClick={toggle}>
                Discover
              </SidebarLink>
              <SidebarLink to="services" onClick={toggle}>
                Services
              </SidebarLink>
              <SidebarLinkR to="/success-story" onClick={toggle}>
                Success Stories
              </SidebarLinkR>
            </SidebarMenu> */}

            <SideBtnWrap style={{ marginBottom: '1.5rem' }}>
              <SidebarRoute to="/User">
                <CgProfile /> Profile
              </SidebarRoute>
            </SideBtnWrap>

            <SideBtnWrap style={{ marginBottom: '1.5rem' }}>
              <SidebarRouteC to="/chat">
                <MdChatBubble /> My Chat
              </SidebarRouteC>
            </SideBtnWrap>

            <SideBtnWrap style={{ marginBottom: '1.5rem' }}>
              <SidebarRouteN to="/newsfeed">
                <FaNewspaper /> NewsFeed
              </SidebarRouteN>
            </SideBtnWrap>

            <SideBtnWrap style={{ marginBottom: '1.5rem' }}>
              <SidebarRouteS to="/success-story">Success Stories</SidebarRouteS>
            </SideBtnWrap>
          </>
        ) : (
          <>
            <SideBtnWrap style={{ marginBottom: '1.5rem' }}>
              <SidebarRoute to="/login">
                <FaSignInAlt /> LogIn
              </SidebarRoute>
            </SideBtnWrap>

            <SideBtnWrap>
              <SidebarRouteSignUp to="/signup">SignUp</SidebarRouteSignUp>
            </SideBtnWrap>
          </>
        )}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SidebarPage;
