import React from "react";
import { Modal } from "react-bootstrap";
import { FormCita } from "./FormCita";

export const UpdateCita = ({ isOpen, onClose, citaEdit }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-dark">ID de Cita: {citaEdit._id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormCita cita={citaEdit} id={citaEdit._id} option={2} />
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-danger" onClick={onClose}>
          Cerrar
        </button>
      </Modal.Footer>
    </Modal>
  );
};
