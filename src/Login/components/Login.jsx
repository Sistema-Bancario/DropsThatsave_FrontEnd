import React, { useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { apiLogin } from '../api/apiLogin';
import Swal from 'sweetalert2';



export const Login = () => {
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        const result = await apiLogin(correo, password);
        if (result) {
          const { rol } = result;
          localStorage.setItem("role", rol);
          Swal.fire({
            icon: "success",
            title: "Usuario Verificado!",
            text: "Ha iniciado sesión correctamente",
            confirmButtonText: "Ok",
          }).then((r) => {
            if (r.isConfirmed) {
              if (rol === "ADMIN_ROLE") {
                window.location.href = "/ListaAdmins";
              } else if (rol === "USER_ROLE") {
                window.location.href = "/pruebaUser";
              }
            }
          });
        }
      };
      

    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol sm="6">
                    <div className="d-flex flex-row ps-5 pt-5">
                        <span id="title" style={{ paddingLeft: "80px" }} className="h1 fw-bold mb-0">
                            LOG IN
                        </span>
                    </div>
                    <br></br>
                    <br></br>

                    <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
                        {/* <Link to="/"><Button className='regresarAdmin'>Regresar</Button></Link> */}
                        <br></br>
                        <br></br>
                        <br></br>


                        <form onSubmit={handleLoginSubmit}>
                            <MDBInput
                                type="email"
                                wrapperClass="mb-4 mx-5 w-100"
                                label="Correo Electronico"
                                placeholder="Tu direccion de correo"
                                id="inemail"
                                size="lg"
                                aria-describedby="emailHelp"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                required
                            />

                            <MDBInput
                                type="password"
                                wrapperClass="mb-4 mx-5 w-100"
                                className="form__field"
                                label="Password"
                                size="lg"
                                id="inpassword"
                                placeholder="Tu Password"
                                value={password}
                                onChange={(p) => setPassword(p.target.value)}
                                required
                            />

                            <Button
                                type="submit"
                                className="mb-4 px-5 mx-5 w-100"
                                color="info"
                                size="lg"
                            >
                                Iniciar Sesion
                            </Button>


                        </form>
                    </div>
                </MDBCol>

                <MDBCol sm="6" className="d-none d-sm-block px-0">
                    {/* <img
            src="https://www.baccredomatic.com/sites/default/files/styles/rectangle_650x750/public/2021-04/TorreBAC7_0.jpg?itok=XJsaqK7I"
            id="imagen-login"
            alt="Login image"
            className="w-100"
            style={{ objectFit: "cover", textAlign: "center" }}
          /> */}
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};
