import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer';
import NavbarPage from '../Navbar/indexPage';
import SidebarPage from '../SideBar/indexPage';
import CreatAdminPost from '../Admin/CreatAdminPost';
import AdminPower from '../Admin/AdminPower';
import NotAdmin from '../Admin/NotAdmin';
import { useAuth, useResolved } from '../../../hooks';
import { navlogo } from '../Info/Data';
import ReportFeed from '../report handle/ReportFeed';

const AdminPage = () => {
  const { authUser } = useAuth();
  const authResolved = useResolved(authUser);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return authResolved ? (
    <>
      <NavbarPage toggle={toggle} {...navlogo} />
      <SidebarPage isOpen={isOpen} toggle={toggle} />
      <Container fluid style={{ marginTop: '6rem' }}>
        {authUser.uid === 'zi8VRdgkixWXf2PvPq1HYdIuM0K3' ? (
          <>
            <CreatAdminPost />
            <ReportFeed />
            <AdminPower />
          </>
        ) : (
          <NotAdmin />
        )}
      </Container>

      <Footer {...navlogo} />
    </>
  ) : (
    <>Loading...</>
  );
};

export default AdminPage;
