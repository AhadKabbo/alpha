import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'


export const NavP = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? '#101522' : '#101522')};
  height: 80px;
  margin-top: -80px;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top:0;
  z-index:10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? '#101522' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top:0;
  z-index:10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`
export const NavLogo = styled(LinkR) `
  color: #1CC7D9;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    background: none;
    color: #1CC7D9;
  }
`
export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #f4f4fc;
  }
`
export const NavMenu = styled.ul`
  display:flex;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
    
  }
  
`
export const NavItem = styled.li`
  height: 80px;
  
`
export const NavLinks = styled(LinkS)`
  color: #f4f4fc;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #f4f4fc;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    background: none;
    color: #1CC7D9;
    }

  &.active {
    border-bottom: 3px solid #1CC7D9;
    
  }
`
export const NavLinksP = styled(LinkR)`
  color: #f4f4fc;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #f4f4fc;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    background: none;
    color: #1CC7D9;
    
    }

  &.active {
    border-bottom: 3px solid #1CC7D9;
    
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavBtnI = styled.nav`
  display: flex;
  align-items: center;
  

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #1CC7D9;
  white-space: nowrap;
  padding: 10px 22px;
  color: #040404;
  font-size: 16px;
  font-variant:small-caps;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    background: #f4f4fc;
    color: #040404;
  }
`


export const NavBtnLinkI = styled(LinkR)`
  border-radius: 80px;
  background: #f4f4fc;
  white-space: nowrap;
  padding: 5px 12px;
  color: #DC5B21;
  font-size: 14px;
  font-variant:small-caps;
  font-style: oblique;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    background: #1CC7D9;
    color: #040404;
  }
`