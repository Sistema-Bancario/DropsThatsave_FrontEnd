import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { solicitude } from "../model/solicitud";
import { apiSolicitud, eliminarSolicitudApi } from "../api/apiSolicitud";
import { Link } from "react-router-dom";
import "../../CSS/ListaSolicitudes.css";
import { Button, Modal, Table } from "react-bootstrap";

export const ListaSolicitudesAdmin = () => {
  const [listaSolicitudes, setListaSolicitudes] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedSolicitud, setSelectedSolicitud] = useState(null);

  const viewSolicitudesList = async () => {
    try {
      const getListaSolicitudesFromApi = await apiSolicitud();
      setListaSolicitudes(getListaSolicitudesFromApi);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    viewSolicitudesList();
  }, []);

  const handleOpenModal = (solicitud) => {
    setShowModal(true);
    setSelectedSolicitud(solicitud);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedSolicitud(null);
  };

  if (error) {
    return (
      <div>Hubo un error al cargar las solicitudes : {error.message}</div>
    );
  }

  const eliminarSolicitud = async(solicitud) => {
    const confirmacion = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará la solicitud permanentemente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    });

    if (confirmacion.isConfirmed) {
      let result = await eliminarSolicitudApi(solicitud._id);
      if (result) {
        setListaSolicitudes(listaSolicitudes.filter((c) => c._id !== solicitud._id));
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: "Se eliminó la solicitud correctamente!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se pudo eliminar la solicitud.",
        });
      }
    }
  }

  return (
    <>
      <div class="main-container">
        <div class="heading">
          <h1 class="heading__title">Solicitudes</h1>
          <p class="heading__credits">
            <a
              class="heading__link"
              target="_blank"
              href="https://dribbble.com/sl"
            >
              Dona y ayudas a las personas
            </a>
          </p>
        </div>
        <div className="table-container text-center">
          <Table striped bordered hover>
          <thead
              style={{ backgroundColor: "#AEAEAE" }}
              className="text-center"
            >
              <tr>
                <th>Usuario Solicitante</th>
                <th>Tipo de Sangre</th>
                <th>Banco</th>
                <th>Litros</th>
                <th>Estado</th>
                <th>Donantes</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {listaSolicitudes.map((solicitud) => (
                <tr key={solicitud._id}>
                  <td>{solicitud.usuarioSolicitante?.nombre}</td>
                  <td>{solicitud.tipoSangre}</td>
                  <td>{solicitud.banco?.nombre}</td>
                  <td>{solicitud.litros}</td>
                  <td> {solicitud.estado}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleOpenModal(solicitud)}
                    >
                      Ver Detalles
                    </button>
                    </td>
                    <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminarSolicitud(solicitud)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title>Detalles de la Solicitud</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {selectedSolicitud && selectedSolicitud.usuarioDonante.length > 0 ? (
            <div>
              <p><strong>Nombre del solicitante:</strong> {selectedSolicitud.usuarioSolicitante?.nombre}</p>
              <p><strong>Tipo de Sangre:</strong> {selectedSolicitud.tipoSangre}</p>
              <p><strong>Donantes:</strong></p>
              <ul>
              {selectedSolicitud.usuarioDonante?.map((donante) => (
                <li key={donante._id}>{donante.nombre}</li>
              ))}
              </ul>
            </div>
          ) : (
          <p>No hay donantes asignados para esta solicitud.</p>
        )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
