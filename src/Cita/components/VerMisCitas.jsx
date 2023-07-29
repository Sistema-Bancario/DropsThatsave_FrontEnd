import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { apiMisCitas } from "../api/apiCita";
import { UpdateCita } from "./UpdateCita";
import { cita } from "../model/cita";
import { Card, Button, CardGroup } from "react-bootstrap";
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

  return (
    <>
      <div className="containerjr mt-4 mb-5">
        <br />

        <div className="heading">
          <h1 className="heading__title">Mis Citas</h1>
          <p className="heading__credits">
            <a className="heading__link">Todas las citas que tienes</a>
          </p>
        </div>
        <div className="containerjr">
          {listaCitas.map((cita) => (
            <div key={cita._id} className="card-containerjr">
              <Card className="cardjr mb-3">
                <Card.Body style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <Card.Title>ID de Cita: {cita._id}</Card.Title>
                    <Card.Text style={{ fontSize: "25px" }}>Fecha: {formatearFecha(cita.fecha)}</Card.Text>
                    <Card.Text style={{ fontSize: "25px" }}>Hora: {cita.hora}</Card.Text>
                    <Card.Text style={{ fontSize: "25px" }}>Estado: {cita.estado}</Card.Text>
                  </div>
                  <div>
                    <Button variant="warning" onClick={() => handleOpenModal(cita)}>
                      Editar
                    </Button>
                    <Button variant="primary" onClick={() => handleOpenModal(cita)}>
                      Eliminar
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <UpdateCita
        citaEdit={citas}
        isOpen={showModal}
        onClose={handleCloseModal}
      />
    </>
  );
};
