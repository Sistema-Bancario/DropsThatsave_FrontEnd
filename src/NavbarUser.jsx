import React, { useEffect, useState } from 'react';
import "./CSS/NavbarUser.css";
import { Navbar, Nav, Container, Dropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { tieneEnfermedad, tieneTatuajes } from './Login/helpers/LoginHelper';
import { apiMiPerfil } from './USER/api/apiUser';

const NavbarUser = () => {
    const [usuario, setUsuario] = useState([]);

    const viewUsuario = async () => {
        const getMiUsuario = await apiMiPerfil();
        setUsuario(getMiUsuario);
    };

    useEffect(() => {
        viewUsuario();
    }, []);
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
                            <Nav.Link as={Link} to="/InicioUser">
                                Inicio
                                <span className="drop-container">
                                    <span className="drop"></span>
                                    <span className="drop"></span>
                                    <span className="drop"></span>
                                </span>
                            </Nav.Link>
                            {tieneTatuajes() && tieneEnfermedad() && (
                                <Nav.Link as={Link} to="/ListaSolicitudes">
                                    Donar
                                    <span className="drop-container">
                                        <span className="drop"></span>
                                        <span className="drop"></span>
                                        <span className="drop"></span>
                                    </span>
                                </Nav.Link>
                            )}
                            <Nav.Link as={Link} to="/hacerSolicitud">
                                Solicitar
                                <span className="drop-container">
                                    <span className="drop"></span>
                                    <span className="drop"></span>
                                    <span className="drop"></span>
                                </span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/MisCitas">
                                Mis Citas
                                <span className="drop-container">
                                    <span className="drop"></span>
                                    <span className="drop"></span>
                                    <span className="drop"></span>
                                </span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/sobreNosotros">
                                Sobre Nosotros
                                <span className="drop-container">
                                    <span className="drop"></span>
                                    <span className="drop"></span>
                                    <span className="drop"></span>
                                </span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contacto">
                                Contacto
                                <span className="drop-container">
                                    <span className="drop"></span>
                                    <span className="drop"></span>
                                    <span className="drop"></span>
                                </span>
                            </Nav.Link>
                        </Nav>
                        <Dropdown alignright={isAlignRight}>
                            <Dropdown.Toggle variant="link" id="profile-dropdown">
                                <Image src={usuario.img} roundedCircle width="60" height="60" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/miPerfil">
                                    Ver Mi Perfil
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={() => logOut()}>
                                    Cerrar Sesion
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarUser ;

