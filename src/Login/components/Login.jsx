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
import "./../../CSS/Login.css"
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
                        window.location.href = "/InicioUser";
                    }
                }
            });
        }
    };


    return (
        <MDBContainer className='container' style={{ minHeight: '100svh', display: 'grid', alignItems: 'center', }} fluid>
            <MDBRow>
                <MDBCol
                    style={{
                        backgroundColor: 'rgb(146, 0, 0)',
                        color: 'white'
                    }}
                    sm="6">
                    <div className="d-flex flex-row ps-5 pt-5">
                        <span id="title" className="h1 fw-bold mb-0">
                            LOG IN
                        </span>
                    </div>
                    <div
                        className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">

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

                            <a
                                className='link-signup'
                                href="/Registro"> <p> ¿No tienes Cuenta? Registrate </p></a>


                        </form>
                    </div>
                </MDBCol>

                <MDBCol sm="6" className="d-none d-sm-block px-0"
                    style={{ position: "relative", overflow: 'hidden' }}
                >
                    <img
                        src='https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
                        style={{ position: "absolute", objectFit: 'cover', width: '100%', height: '100%' }}
                    />

                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};
