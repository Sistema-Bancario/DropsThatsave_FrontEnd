import React from 'react'
import { Link } from 'react-router-dom';

const Prueba = () => {
  const logOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/Login";
  };
  return (
    <>
      <h1> PRUEBA JEJE   ESTE ES ADMINNNN</h1>
      <Link
        aria-current="page"
        to="/"
        onClick={() => logOut()}
      >
        Cerrar Sesion
      </Link>
    </>
  )
}

export default Prueba
