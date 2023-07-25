import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { apiMisCitas } from "../api/apiCita";
import { UpdateCita } from "./UpdateCita";
import { cita } from "../model/cita";

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
            <div className="container mt-4 mb-5 table-container">
                <div className="table-responsive text-center">
                    <table className="table ml-auto custom-table-margin">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID de Cita</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Hora</th>
                                <th scope="col">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaCitas.map((cita) => (
                                <tr key={cita._id}>
                                    <td>{cita._id}</td>
                                    <td>{formatearFecha(cita.fecha)}</td>
                                    <td>{cita.hora}</td>
                                    <td>{cita.estado}</td>
                                    <td>
                                            <button className="btn btn-warning" onClick={() => handleOpenModal(cita)}>Editar</button>
                                        </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
                <UpdateCita
                    citaEdit={citas}
                    isOpen={showModal}
                    onClose={handleCloseModal}
                />
            </div>
        </>
    );
};
