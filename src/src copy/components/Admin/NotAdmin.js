import React, { useState, useEffect } from 'react';
import { fb } from '../../../service';
import {
  Button,
  Row,
  Col,
  Card,
  Container,
  Modal,
  Alert,
} from 'react-bootstrap';
import NavbarPage from '../Navbar/indexPage';
import Sidebar from '../SideBar/index';
import { Link } from 'react-router-dom';

import { useAuth } from '../../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faLaugh, faLink } from '@fortawesome/free-solid-svg-icons';
import { DeleteBtn } from '../UserProfile/DeleteBtn';

export default function NotAdmin() {
  const { authUser } = useAuth();
  const [usersAdmin, setUsers] = React.useState([]);
  const [chat, setChatUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <Card style={{ marginTop: '1rem', minHeight: '40rem' }}>
        <Card.Body>
          <Card.Title>
            {' '}
            sorry, You are not an admin ..
            <Card.Text
              className="d-flex align-items-center justify-content-center "
              style={{
                color: '#DC5B21',
                marginTop: '12%',
                marginBottom: '35px',
                fontSize: '5rem',
                fontWeight: 'bold',
              }}
            >
              Nothing to show
            </Card.Text>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}
