import React from 'react';
import { Modal } from 'react-bootstrap';
import { FormBanco } from './FormBanco';
import '../../CSS/UpdateModal.css';

export const UpdateBanco = ({ isOpen, onClose, bancoEdit }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-dark">ID: {bancoEdit._id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormBanco banco={bancoEdit} id={bancoEdit._id} option={2} />
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-danger" onClick={onClose}>
          Cerrar
        </button>
      </Modal.Footer>
    </Modal>
  );
};
