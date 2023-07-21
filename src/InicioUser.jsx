import React from 'react';
import { Link } from 'react-router-dom';
import "./CSS/InicioUser.css";
import imagenCuadro1 from "../public/donar.jpg";
import imagenCuadro2 from "../public/solicitar.jpg";
import { tieneEnfermedad, tieneTatuajes } from './Login/helpers/LoginHelper';

const InicioUser = () => {

  return (
    <>
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

      </div>
    </>
  );
}

export default InicioUser;