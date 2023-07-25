// SidebarWithNavbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import "./CSS/NavbarAdmin.css";


const NavbarAdmin = () => {
    const logOut = () => {
        localStorage.removeItem("token");
        window.location.href = "/Login";
    };
    return (
        <>
            <div className="sidebar-container">
                <h1 className="sidebar-logo">DROPS THAT SAVE</h1>
                <ul className="sidebar-nav">
                    <li><Link to="/agregarBanco">Crear Banco</Link></li>
                    <li><Link to="/ListaBancos">Ver Bancos</Link></li>
                    <li><Link to="/listaSolicitudesAdmin">Solicitudes</Link></li>
                    <li><Link to="/ListaUsuarios">Usuarios</Link></li>
                    <li><Link to="/ListaAdmins">Administradores</Link></li>
                    <li><Link to="/agregarAdmin">Agregar Administrador</Link></li>
                    <li><a href="#" onClick={logOut}>Cerrar Sesión</a></li>
                </ul>
            </div>

        </>
    );
};

export default NavbarAdmin;
