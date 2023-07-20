import React from "react";
import { FormSolicitud } from "./FormSolicitud";
import { Modal } from "react-bootstrap";

export const AceptarSolicitud = ({ isOpen, onClose, solicitud }) => {
  if (!isOpen) {
    return null;
  }
 const id = solicitud._id;
 console.log(id)
  return (
    <>
      <>
        <Modal show={isOpen}>
          <Modal.Header>
            <Modal.Title className="text-dark">Ficha de donación</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormSolicitud
              solicitud={solicitud}
              option={1}
              id={id} // Asegúrate de que el valor de 'id' sea correcto
              
            />

          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger" onClick={onClose}>
              Cerrar
            </button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
};