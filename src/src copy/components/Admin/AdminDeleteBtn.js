import React, { useState } from 'react';
import { fb } from '../../../service';
import { Button, Modal, Form } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';

export const AdminDeleteBtn = ({ user }) => {
  const [name, setName] = React.useState(user.name);
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  const onUpdate = () => {
    fb.firestore
      .collection('admin')
      .doc(user.id)
      .set({ ...user, name });
    closeModal();
  };

  const onDelete = () => {
    fb.firestore.collection('admin').doc(user.id).delete();
    closeModal();
  };

  return (
    <>
      <Button
        className="w-100 "
        onClick={openModal}
        variant="outline-info"
        size="sm"
      >
        <FontAwesomeIcon icon={faEraser} />
        <strong> Edit post</strong>
      </Button>

      <Modal show={open} onHide={closeModal}>
        <Form>
          <Modal.Body>
            <Form.Group>
              <Form.Control
                value={name}
                onChange={e => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="info" onClick={onUpdate}>
              Update
            </Button>
            <Button variant="danger" onClick={onDelete}>
              delete
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
