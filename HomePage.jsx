import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      Hola
      <br />
          <Link to="/Login" className="btnle">
            <span>Iniciar sesion</span>
           
          </Link>
    </>
  );
};

export default HomePage;
