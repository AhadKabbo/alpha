import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer';
import NavbarPage from '../Navbar/indexPage';
import Sidebar from '../SideBar';
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

  // KHAN is the admin which Uid = '6zFrfJd0wiUrwjLzeYKrl8xMAqP2'

  return authResolved ? (
    <>
      <NavbarPage toggle={toggle} {...navlogo} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Container fluid style={{ marginTop: '6rem' }}>
        {authUser.uid === '6zFrfJd0wiUrwjLzeYKrl8xMAqP2' ? (
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
