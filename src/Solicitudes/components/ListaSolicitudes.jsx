import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { solicitude } from "../model/solicitud";
import { apiSolicitud } from "../api/apiSolicitud";
import { Link } from 'react-router-dom'
import { AceptarSolicitud } from "./AceptarSolicitud";
import "../../CSS/ListaSolicitudes.css";



export const ListaSolicitudess = () => {
  const [listaSolicitudes, setListaSolicitudes] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [solicitud, setSolicitudes] = useState(solicitude);

  const viewSolicitudesList = async () => {
    try {
      const getListaSolicitudesFromApi = await apiSolicitud();
      setListaSolicitudes(getListaSolicitudesFromApi[1]);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const viewSolicitudesList = async () => {
      try {
        const getListaSolicitudesFromApi = await apiSolicitud();
        if (Array.isArray(getListaSolicitudesFromApi)) {
          setListaSolicitudes(getListaSolicitudesFromApi);
        } else {
          setError(new Error('La respuesta de la API no es un array válido.'));
        }
      } catch (error) {
        setError(error);
      }
    };
    viewSolicitudesList();
  }, []);
  const handleOpenModal = (solicitud) => {
    setShowModal(true);
    setSolicitudes(solicitud);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const viewSolicitudesList = async () => {
      try {
        const getListaSolicitudesFromApi = await apiSolicitud();
        if (Array.isArray(getListaSolicitudesFromApi)) {
          setListaSolicitudes(getListaSolicitudesFromApi);
        } else {
          setError(new Error('La respuesta de la API no es un array válido.'));
        }
      } catch (error) {
        setError(error);
      }
    };
    viewSolicitudesList();
  }, []);


  if (error) {
    return <div>Hubo un error al cargar las solicitudes : {error.message}</div>;
  }


  return (
    <>
      <div className="main-container">
        <br /><br />
        <div className="heading">
          <h1 className="heading__title">Solicitudes</h1>
          <p className="heading__credits">
            <a className="heading__link" >
              Dona y ayudas a las personas
            </a>
          </p>
        </div>
        <div className="cardsee">
          {listaSolicitudes.map((solicitud) => {
            const litrosDisponibles = solicitud.litros;
            const canDonar = litrosDisponibles > 0;
            return (
              <div
                key={solicitud._id}
                className={`cardddw card-${solicitud._id % 5 + 1}`}
              >
                <div className="card__icon"><i className="fas fa-bolt"></i></div>
                <p className="card__exit"><i className="fas fa-times"></i></p>
                <h2 className="card__title">Solicitante: {solicitud.usuarioSolicitante.nombre}</h2>
                <p>Tipo de Sangre: {solicitud.tipoSangre}</p>
                <p>Banco: {solicitud.banco.nombre}</p>
                <p>Solicita {solicitud.litros} Litros</p>

                <button className="btn btn-primary btn-small" onClick={() => handleOpenModal(solicitud)} disabled={!canDonar}>
                  Donar
                </button>
              </div>
            );
          })}

        </div>
      </div>

      <AceptarSolicitud
        solicitud={solicitud}
        isOpen={showModal}
        onClose={() => handleCloseModal()}
      ></AceptarSolicitud >
    </>
  );
};
