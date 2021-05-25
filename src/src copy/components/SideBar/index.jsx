import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarLinkR, SidebarRoute, SidebarRouteC, SideBtnWrap } from './SidebarElements'
import { CgProfile } from 'react-icons/cg'
import { useAuth } from "../../../hooks"
import { MdSentimentVerySatisfied } from 'react-icons/md';

const Sidebar = ({isOpen,toggle}) => {
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
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
          <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
          <SidebarLinkR to='/signup' onClick={toggle}>Sign up</SidebarLinkR>
        </SidebarMenu>

        {
            authUser ? (
      <>
        <SideBtnWrap style={{  marginBottom: '1.5rem' }}>
          <SidebarRouteC to='/chat'><MdSentimentVerySatisfied/>My Chat</SidebarRouteC>
        </SideBtnWrap>
        <SideBtnWrap>
        <SidebarRoute to='/User'><CgProfile/>   Profile</SidebarRoute>
      </SideBtnWrap>
      </>
        )    :  (
        <SideBtnWrap>
          <SidebarRoute to='/Login'>Sign in</SidebarRoute>
        </SideBtnWrap>
        ) }

      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
