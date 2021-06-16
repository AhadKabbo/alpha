import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #101522;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #f4f4fc;
  &:hover {
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    background: none;
    color: #1cc7d9;
  }
`;
export const CgProfile = styled(FaTimes)`
  color: #f4f4fc;
`;
export const Icon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    background: none;
    color: #1cc7d9;
  }
`;
export const IconP = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const SidebarWrapper = styled.div`
  color: #f4f4fc;
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #f4f4fc;
  cursor: pointer;

  &:hover {
    color: #1cc7d9;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    background: none;
    color: #1cc7d9;
  }
`;
export const SidebarLinkR = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #f4f4fc;
  cursor: pointer;

  &:hover {
    color: #1cc7d9;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    background: none;
    color: #1cc7d9;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const SidebarRoute = styled(LinkR)`
  border-radius: 10px;
  background: #1cc7d9;
  white-space: nowrap;
  padding: 10px 55px;
  color: #040404;
  font-size: 20px;
  font-variant: small-caps;
  font-weight: bold;
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
`;

export const SidebarRouteSignUp = styled(LinkR)`
  border-radius: 10px;
  background: #1cc7d9;
  white-space: nowrap;
  padding: 10px 60px;
  color: #040404;
  font-size: 20px;
  font-variant: small-caps;
  font-weight: bold;
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
`;

export const SidebarRouteC = styled(LinkR)`
  border-radius: 10px;
  background: #1cc7d9;
  white-space: nowrap;
  padding: 10px 50px;
  color: #040404;
  font-size: 20px;
  font-variant: small-caps;
  font-weight: bold;
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
`;

export const SidebarRouteN = styled(LinkR)`
  border-radius: 10px;
  background: #1cc7d9;
  white-space: nowrap;
  padding: 10px 44px;
  color: #040404;
  font-size: 20px;
  font-variant: small-caps;
  font-weight: bold;
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
`;
export const SidebarRouteS = styled(LinkR)`
  border-radius: 10px;
  background: #1cc7d9;
  white-space: nowrap;
  padding: 10px 30px;
  color: #040404;
  font-size: 20px;
  font-variant: small-caps;
  font-weight: bold;
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
`;
export const NavBtnLinkIS = styled(LinkR)`
  /* border-radius: 100px;
  background: #DC5B21;
  white-space: nowrap;
  padding: 10px 22px;
  color: #040404; */
  font-size: 32px;
  font-weight: bold;
  color: #f4f4fc;
  font-style: oblique;
  font-variant: small-caps;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  /* text-decoration: none; */
  &:hover {
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    background: none;
    color: #1cc7d9;
  }
`;
