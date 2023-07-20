import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { solicitude } from "../model/solicitud";
import { apiSolicitud } from "../api/apiSolicitud";
import { AceptarSolicitud } from "./AceptarSolicitud";


export const ListaSolicitudess = () => {
  const [listaSolicitudes, setListaSolicitudes] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [solicitud, setSolicitudes] = useState(solicitude);

  const viewSolicitudesList = async () => {
    try {
      const getListaSolicitudesFromApi = await apiSolicitud();
      setListaSolicitudes(getListaSolicitudesFromApi[1]);
    }catch (error) {
        setError(error);
      }
    };
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
    <section id="promo" className="promo section offset-header ">
        <div className="container text-center">
          <br /><br />

          <h2 className="title">
            Solicitudes
          </h2>  
        </div>
      </section>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {listaSolicitudes.map((solicitud) => {
        return (
          <div
            key={solicitud._id}
            style={{ flex: '0 0 33%', margin: '10px', background: '#f0f0f0', padding: '10px' }}
          >
            <h2>ID: {solicitud._id}</h2>
            <p>Tipo de Sangre: {solicitud.tipoSangre}</p>
            <p>Banco: {solicitud.banco}</p>
            <p>Litros: {solicitud.litros}</p>
            <button className="btn btn-primary" onClick={() => handleOpenModal(solicitud)}>
                        Donar
            </button>
          </div>
        );
      })}
      <AceptarSolicitud
          solicitud={solicitud}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
      ></AceptarSolicitud>
    </div>
    </>
  );
};
