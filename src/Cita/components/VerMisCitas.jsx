import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { apiMisCitas, eliminarCita } from "../api/apiCita";
import { UpdateCita } from "./UpdateCita";
import { cita } from "../model/cita";
import { Card, Button } from "react-bootstrap";
import "../../CSS/Downs.css";

export const MisCitas = () => {
  const [listaCitas, setListaCitas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [citas, setCitas] = useState(cita);

  const obtenerMisCitas = async () => {
    try {
      const citas = await apiMisCitas();
      setListaCitas(citas);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Ocurrió un error",
        text: "No se pudo obtener la lista de citas",
      });
    }
  };

  useEffect(() => {
    obtenerMisCitas();
  }, []);

  const formatearFecha = (fecha) => {
    const date = new Date(fecha);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const handleOpenModal = (cita) => {
    setCitas(cita);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const eliminarBancos = async (id) => {
    let result = await eliminarCita(id);
    if (result) {
        Swal.fire({
            icon: "success",
            title: "Genial!",
            text: "Se eliminó correctamente!",
        }).then((result) => {
            if (result.isConfirmed) {
              obtenerMisCitas();
            }
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Falla presente",
            text: "No se pudo eliminar!",
        });
    }
};

  return (
    <div className=" mt-4 mb-5">
      <div className="heading">
        <h1 className="heading__title">Mis Citas</h1>
        <p className="heading__credits">
          <a className="heading__link">Todas las citas que tienes</a>
        </p>
      </div>
      <div className="containerjr">
        {listaCitas.map((cita) => (
          <div key={cita._id} className="card-containerjr">
            <Card className="cardjr">
              <Card.Body>
                <Card.Title>ID de Cita: {cita._id}</Card.Title>
                {cita.donacion && cita.donacion.solicitud && cita.donacion.solicitud.banco ? (
                  <>
                    <Card.Text>Banco: {cita.donacion.solicitud.banco.nombre}</Card.Text>
                    <Card.Text>Dirección: {cita.donacion.solicitud.banco.direccion}</Card.Text>
                    <Card.Text>Tel. Banco: {cita.donacion.solicitud.banco.telefono}</Card.Text>
                  </>
                ) : (
                  <>
                    <Card.Text>Banco: No disponible</Card.Text>
                    <Card.Text>Dirección: No disponible</Card.Text>
                    <Card.Text>Tel Banco: No disponible</Card.Text>
                  </>
                )}

                {cita.donacion && cita.donacion.solicitud && cita.donacion.solicitud.usuarioSolicitante ? (
                  <>
                    <Card.Text>Usuario Solicitante: {cita.donacion.solicitud.usuarioSolicitante.nombre}</Card.Text>
                  </>
                ) : (
                  <>
                    <Card.Text>Usuario Solicitante: No disponible</Card.Text>
                  </>
                )}

                <Card.Text>Fecha: {formatearFecha(cita.fecha)}</Card.Text>
                <Card.Text>Hora: {cita.hora}</Card.Text>
                <Card.Text>Estado: {cita.estado}</Card.Text>

                <div className="card-button-container">
                  <Button variant="warning" onClick={() => handleOpenModal(cita)}>
                    Editar
                  </Button>
                  <Button variant="primary" onClick={() => eliminarBancos(cita._id)}>
                    Eliminar
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <UpdateCita citaEdit={citas} isOpen={showModal} onClose={handleCloseModal} />
    </div>
  );
};
