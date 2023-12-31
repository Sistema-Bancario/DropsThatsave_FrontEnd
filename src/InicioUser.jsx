import React from 'react';
import { Link } from 'react-router-dom';
import "./CSS/InicioUser.css";
import imagenCuadro1 from "./img/donar.jpg";
import imagenCuadro2 from "./img/solicitar.jpg";
import imagenCuadro3 from "./img/citas.jpg";
import agendar from "./img/agendar.png";

import { tieneEnfermedad, tieneTatuajes } from './Login/helpers/LoginHelper';

const InicioUser = () => {

  return (
    <>
      <div className="heading">
        <h1 className="heading__title">Opciones</h1>
        <p className="heading__credits">
          <a className="heading__link">Ayuda / recibe ayuda</a>
        </p>
      </div>
      <div className="contenedorcuar">
        <Link to="/hacerSolicitud" className="box-link">
          <div className="boxes">
            <div className="contenidocua">
              <img src={imagenCuadro2} alt="Imagen Cuadro 1" />
              <div className="centered-text">Solicitar Sangre</div>
            </div>
          </div>
        </Link>
        {tieneTatuajes() && tieneEnfermedad() && (
          <Link to="/ListaSolicitudes" className="box-link">
            <div className="boxes">
              <div className="contenidocua">
                <img src={imagenCuadro1} alt="Imagen Cuadro 2" />
                <div className="centered-text">Solicitudes</div>
              </div>
            </div>
          </Link>
        )}
        {tieneTatuajes() && tieneEnfermedad() && (
          <Link to="/hacerCita" className="box-link">
            <div className="boxes">
              <div className="contenidocua">
                <img src={agendar} alt="Imagen Cuadro 1" />
                <div className="centered-text">Agendar Cita</div>
              </div>
            </div>
          </Link>
        )}
        {tieneTatuajes() && tieneEnfermedad() && (
          <Link to="/MisCitas" className="box-link">
            <div className="boxes">
              <div className="contenidocua">
                <img src={imagenCuadro3} alt="Imagen Cuadro 1" />
                <div className="centered-text">Mis Citas</div>
              </div>
            </div>
          </Link>
        )}

      </div>
    </>
  );
}

export default InicioUser;
