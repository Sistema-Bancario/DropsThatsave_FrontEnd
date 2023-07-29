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
import Fondo from './Fondo';
import Registro from './USER/components/Registro';
import InicioUser from './InicioUser';
import NavbarAdmin from './NavbarAdmin';
import ParticleBackground from './FondoAdmin';
import HacerSolicitud from './Solicitudes/components/HacerSolicitud';
import { ContactoForm } from './ContactoForm';
import { ListaSolicitudesAdmin } from './SolicitudesAdmin/components/ListaSolicitudes';
import { MiPerfil } from './USER/components/MiUser';
import { CreateCita } from './Cita/components/AgregarCita';
import { MisCitas } from './Cita/components/VerMisCitas';
import NavbarUser from './NavbarUser';
import Contenidouno from '../src/components/content1';



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

                <Route
                    path="/sobreNosotros"
                    element={
                       isUser() ? (
                            <>
                                <NavbarUser></NavbarUser>
                                <Contenidouno></Contenidouno>
                                <Fondo></Fondo>
                            </>
                        ) : (
                            <Navigate to="/Login" />
                        )
                    }
                />
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

                {/* MI PERFIL */}
                <Route
                    path="/miPerfil"
                    element={
                        isUserAuthenticated() && isUser() ? (
                            <>
                                <NavbarUser></NavbarUser>
                                <MiPerfil></MiPerfil>
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

                <Route
                    path="/hacerCita"
                    element={
                        isUserAuthenticated() && isUser() ? (
                            <>
                                <NavbarUser></NavbarUser>
                                <CreateCita />
                                <Fondo></Fondo>
                            </>
                        ) : (
                            <Navigate to="/Login" />
                        )
                    }
                />

                <Route
                    path="/MisCitas"
                    element={
                        isUserAuthenticated() && isUser() ? (
                            <>
                                <NavbarUser></NavbarUser>
                                <MisCitas />
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
                                <Fondo></Fondo>
                            </>
                        ) : (
                            <Navigate to="/Login" />
                        )
                    }
                />

                <Route
                    path="/contacto"
                    element={
                        isUser() ? (
                            <>
                                <NavbarUser></NavbarUser>
                                <ContactoForm />
                                <Fondo></Fondo>
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
                {/* RUTAS DE SOLICITUDES */}
                <Route
                    path="/listaSolicitudesAdmin"
                    element={
                        isUserAuthenticated() && isAdmin() ? (
                            <>
                                <NavbarAdmin></NavbarAdmin>
                                <ListaSolicitudesAdmin />
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