import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from '../HomePage';
import { ListaBancos } from './Banco/components/ListaBancos';
import { Login } from './Login/components/Login';
import { isAdmin, isUser, isUserAuthenticated, tieneEnfermedad, tieneTatuajes } from "./Login/helpers/LoginHelper";
import { ListaUsers } from "./USER/components/ListaUsers"
import { ListaAdmins } from "./ADMIN/components/ListaAdmins"
import { CreateUserAdmin } from "./ADMIN/components/AgregarAdmin"
import { ListaSolicitudess } from './Solicitudes/components/ListaSolicitudes';
import { CreateBanco } from './Banco/components/AgregarBancos';
import { HacerSolicitud } from './Solicitudes/components/HacerSolicitud';
import NavbarUser from './NavbarUser';
import Fondo from './Fondo';
import Registro from './USER/components/Registro';
import InicioUser from './InicioUser';
import NavbarAdmin from './NavbarAdmin';
import ParticleBackground from './FondoAdmin';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* HOMEPAGE */}
                <Route
                    path="/"
                    element={
                        <HomePage />
                    }
                />

                <Route
                    path="/fondo"
                    element={
                        <ParticleBackground />
                    }
                />

                {/* LOGIN */}
                <Route
                    path="/Login"
                    element={
                        <Login></Login>
                    }
                />
                {/* REGISTRO */}
                <Route
                    path="/Registro"
                    element={
                        <Registro></Registro>
                    }
                />

                {/* UUUSSSUUUAAARRRIIIOOO */}
                {/* INICIO DE USUARIO */}
                <Route
                    path="/InicioUser"
                    element={
                        isUserAuthenticated() && isUser() ? (
                            <>
                                <NavbarUser></NavbarUser>
                                <InicioUser></InicioUser>
                                <Fondo></Fondo>
                            </>
                        ) : (
                            <Navigate to="/Login" />
                        )
                    }
                />
                {/* LISTA DE SOLICITUDES */}
                <Route
                    path="/ListaSolicitudes"
                    element={
                        isUserAuthenticated() && isUser() && tieneTatuajes() && tieneEnfermedad() ? (
                            <>
                                <NavbarUser></NavbarUser>
                                <ListaSolicitudess />
                                <Fondo></Fondo>
                            </>
                        ) : (
                            <Navigate to="/Login" />
                        )
                    }
                />
                {/* HACER SOLICITUD */}
                <Route
                    path="/hacerSolicitud"
                    element={
                        isUserAuthenticated() && isUser() ? (
                            <>
                                <NavbarUser></NavbarUser>
                                <HacerSolicitud />
                            </>
                        ) : (
                            <Navigate to="/Login" />
                        )
                    }
                />

                {/* AAAADDDMMMIIINNN */}

                {/* LISTA DE BANCOS */}
                <Route
                    path="/ListaBancos"
                    element={
                        isUserAuthenticated() && isAdmin() ? (
                            <>
                                <NavbarAdmin></NavbarAdmin>
                                <ListaBancos />
                                <ParticleBackground></ParticleBackground>

                            </>
                        ) : (
                            <Navigate to="/Login" />
                        )
                    }
                />
                {/* AGREGAR BANCO */}
                <Route
                    path="/agregarBanco"
                    element={
                        isUserAuthenticated() && isAdmin() ? (
                            <>
                                <NavbarAdmin></NavbarAdmin>
                                <CreateBanco />
                                <ParticleBackground></ParticleBackground>

                            </>
                        ) : (
                            <Navigate to="/Login" />
                        )
                    }
                />
                {/* LISTA DE USUARIOS */}
                <Route
                    path="/ListaUsuarios"
                    element={
                        isUserAuthenticated() && isAdmin() ? (
                            <>
                                <NavbarAdmin></NavbarAdmin>
                                <ListaUsers />
                                <ParticleBackground></ParticleBackground>

                            </>
                        ) : (
                            <Navigate to="/Login" />
                        )
                    }
                />
                {/* LISTA DE ADMINISTRADORES */}
                <Route
                    path="/ListaAdmins"
                    element={
                        isUserAuthenticated() && isAdmin() ? (
                            <>
                                <NavbarAdmin></NavbarAdmin>
                                <ListaAdmins />
                                <ParticleBackground></ParticleBackground>
                            </>
                        ) : (
                            <Navigate to="/Login" />
                        )
                    }
                />
                {/* AGREGAR ADMINISTRADOR */}
                <Route
                    path="/agregarAdmin"
                    element={
                        isUserAuthenticated() && isAdmin() ? (
                            <>
                                <NavbarAdmin></NavbarAdmin>
                                <CreateUserAdmin />
                                <ParticleBackground></ParticleBackground>

                            </>
                        ) : (
                            <Navigate to="/Login" />
                        )
                    }
                />
            </Routes>

        </BrowserRouter>
    )
}

export default AppRouter
