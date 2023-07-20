import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { solicitude } from "../model/solicitud";
import { apiSolicitud } from "../api/apiSolicitud";
import { Link } from 'react-router-dom'



export const ListaSolicitudess = () => {
  const [listaSolicitudes, setListaSolicitudes] = useState([]);
  const [error, setError] = useState(null);
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


  if (error) {
    return <div>Hubo un error al cargar las solicitudes : {error.message}</div>;
  }


  return (
    <>
      <section id="promo" className="">
        <div className="container text-center">
          <br /><br />

          <h2 className="title">
            Solicitudes
          </h2>  
        </div>
      </section>
   
      <div className="container table-container">
        <section>
          <Link to="/hacerSolicitud">
            <button className="btn btn-secondary" >
              Hacer una Solicitud
            </button>
          </Link>
        </section>
      </div>

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
              <button className="btn btn-primary">Aceptar</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
