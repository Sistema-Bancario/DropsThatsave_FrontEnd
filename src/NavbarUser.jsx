import React from 'react';
import "./CSS/NavbarUser.css";
import { Navbar, Nav, Container, Dropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { tieneEnfermedad, tieneTatuajes } from './Login/helpers/LoginHelper';

const CustomNavbar = () => {
    const logOut = () => {
        localStorage.removeItem("token");
        window.location.href = "/Login";
    };

    const isAlignRight = "true";

    return (
        <>
            <Navbar expand="lg" variant="dark" className="custom-navbar">
                <Container>
                    <Navbar.Brand>
                        <i className="fas fa-tint blood-drop"></i>
                        DROPS THAT SAVE
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end align-items-center">
                        <Nav className="ml-auto">
                            <Nav className="ml-auto">
                                <Nav.Link href="/InicioUser">
                                    Inicio
                                    <span className="drop-container">
                                        <span className="drop"></span>
                                        <span className="drop"></span>
                                        <span className="drop"></span>
                                    </span>
                                </Nav.Link>
                                {tieneTatuajes() && tieneEnfermedad() && (
                                <Nav.Link href="/ListaSolicitudes" >
                                    Donar
                                    <span className="drop-container">
                                        <span className="drop"></span>
                                        <span className="drop"></span>
                                        <span className="drop"></span>
                                    </span>
                                </Nav.Link>
                                )}
                                    <Nav.Link href="/hacerSolicitud">
                                        Solicitar
                                        <span className="drop-container">
                                            <span className="drop"></span>
                                            <span className="drop"></span>
                                            <span className="drop"></span>
                                        </span>
                                    </Nav.Link>
                                <Nav.Link href="#sobre-nosotros">
                                    Sobre Nosotros
                                    <span className="drop-container">
                                        <span className="drop"></span>
                                        <span className="drop"></span>
                                        <span className="drop"></span>
                                    </span>
                                </Nav.Link>
                                <Nav.Link href="/contacto">
                                    Contacto
                                    <span className="drop-container">
                                        <span className="drop"></span>
                                        <span className="drop"></span>
                                        <span className="drop"></span>
                                    </span>
                                </Nav.Link>
                            </Nav>
                        </Nav>
                        <Dropdown alignright={isAlignRight}>
                            <Dropdown.Toggle variant="link" id="profile-dropdown">
                                <Image src="https://st1.uvnimg.com/98/f4/9b4500ef4da7a3129b32c906df97/lionel-messi.jpeg" roundedCircle width="60" height="60" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link to="/miPerfil">Ver Mi Perfil</Link>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    <Link
                                        aria-current="page"
                                        to="/"
                                        onClick={() => logOut()}
                                    >
                                        Cerrar Sesion
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default CustomNavbar;
