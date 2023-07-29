import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import { userRegistro } from '../model/usuarioRegistro';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { sendData } from '../helpers/userHelper';

function Registro() {
  const initialUserRegistro = {
    nombre: '',
    correo: '',
    password: '',
    tatuajes: false,
    enfermedad: false,
    tipoSangre: '',
    telefono: '',
    direccion: '',
    img: '',
  };

  const [agregar, setAgregar] = useState({ userRegistro: initialUserRegistro });


  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(agregar, 1, 0);
  };

  const handleCheckboxChange = (event, fieldName) => {
    const isChecked = event.target.checked;
    setAgregar((prevAgregar) => ({
      userRegistro: {
        ...prevAgregar.userRegistro,
        [fieldName]: isChecked,
      },
    }));
  };

  const tiposDeSangre = [
    { _id: { "$oid": "648b73a5e7db30e2e21d5bd4" }, tipo: "A+" },
    { _id: { "$oid": "648b741be7db30e2e21d5bd5" }, tipo: "A-" },
    { _id: { "$oid": "648b744ae7db30e2e21d5bd7" }, tipo: "B+" },
    { _id: { "$oid": "648b745be7db30e2e21d5bd8" }, tipo: "B-" },
    { _id: { "$oid": "648b746ce7db30e2e21d5bd9" }, tipo: "AB+" },
    { _id: { "$oid": "648b747ee7db30e2e21d5bda" }, tipo: "AB-" },
    { _id: { "$oid": "648b748fe7db30e2e21d5bdb" }, tipo: "O+" },
    { _id: { "$oid": "648b749fe7db30e2e21d5bdc" }, tipo: "O-" },
  ];

  return (
    <>
      <MDBContainer className="container table-container "
        style={{ paddingTop: '2rem' }}
      >
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <Link to="/Login">

            <IoIosArrowBack size={50} style={{ color: 'black' }} />

          </Link>
          <h1 id="create-tarea">Regístrate</h1>
        </div>
        <MDBContainer>
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label className="text-black">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                onChange={(event) =>
                  setAgregar({
                    userRegistro: {
                      ...agregar.userRegistro,
                      nombre: event.target.value,
                    },
                  })
                }
              />
            </div>

            <div className="form-group">
              <label className="text-black">Correo</label>
              <input
                type="text"
                className="form-control"
                name="correo"
                onChange={(event) =>
                  setAgregar({
                    userRegistro: {
                      ...agregar.userRegistro,
                      correo: event.target.value,
                    },
                  })
                }
              />
            </div>

            <div className="form-group">
              <label className="text-black">Password</label>
              <input
                type="text"
                className="form-control"
                name="password"
                onChange={(event) =>
                  setAgregar({
                    userRegistro: {
                      ...agregar.userRegistro,
                      password: event.target.value,
                    },
                  })
                }
              />
            </div>

            <div
              style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <div className="form-group">
                <label className="text-black">Tatuajes</label>
                <MDBCheckbox
                  style={{ borderRadius: '100%', height: '20px', width: '20px' }}
                  label="¿Tiene tatuajes?"
                  checked={agregar.userRegistro.tatuajes} // Add checked prop
                  onChange={(event) => handleCheckboxChange(event, "tatuajes")} // Call the new function
                />
              </div>

              <div className="form-group">
                <label className="text-black">Enfermedades</label>
                <MDBCheckbox
                  style={{ borderRadius: '100%', height: '20px', width: '20px' }}
                  label="¿Tiene enfermedades?"
                  checked={agregar.userRegistro.enfermedad} // Add checked prop
                  onChange={(event) => handleCheckboxChange(event, "enfermedad")} // Call the new function
                />
              </div>
            </div>


            <div className="form-group">
              <label className="text-black">Tipo de Sangre</label>
              <select
                className="form-control"
                name="tipoSangre"
                value={agregar.userRegistro.tipoSangre}
                onChange={(event) =>
                  setAgregar({
                    userRegistro: {
                      ...agregar.userRegistro,
                      tipoSangre: event.target.value,
                    },
                  })
                }
              >
                <option value="">Seleccione un tipo de sangre</option>
                {tiposDeSangre.map((tipo) => (
                  <option key={tipo._id.$oid} value={tipo.tipo}>
                    {tipo.tipo}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="text-black">Teléfono</label>
              <input
                type="text"
                className="form-control"
                name="telefono"
                onChange={(event) =>
                  setAgregar({
                    userRegistro: {
                      ...agregar.userRegistro,
                      telefono: event.target.value,
                    },
                  })
                }
              />
            </div>

            <div className="form-group">
              <label className="text-black">Dirección</label>
              <input
                type="text"
                className="form-control"
                name="direccion"
                onChange={(event) =>
                  setAgregar({
                    userRegistro: {
                      ...agregar.userRegistro,
                      direccion: event.target.value,
                    },
                  })
                }
              />
            </div>

            <div className="form-group">
              <label className="text-black">Imagen</label>
              <input
                type="text"
                className="form-control"
                name="img"
                onChange={(event) =>
                  setAgregar({
                    userRegistro: {
                      ...agregar.userRegistro,
                      img: event.target.value,
                    },
                  })
                }
              />
            </div>

            <div className="container text-center">
              <button id="btn-enviar" type="submit" className="btn btn-primary w-100">
                Enviar
              </button>
            </div>
            <br /><br />
          </form>
        </MDBContainer>

      </MDBContainer >
    </>
  );
}

export default Registro;
