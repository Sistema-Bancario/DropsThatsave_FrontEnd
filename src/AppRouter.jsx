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
import Prueba from './prueba';
import PruebaUser from './PruebaUser';
import { CreateBanco } from './Banco/components/AgregarBancos';
import { HacerSolicitud } from './Solicitudes/components/HacerSolicitud';
import NavbarUser from './NavbarUser';
import Fondo from './Fondo';
import Registro from './USER/components/Registro';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/prueba"
                    element={
                        <Prueba></Prueba>
                    }
                />

                <Route
                    path="/pruebaUser"
                    element={
                        <PruebaUser></PruebaUser>
                    }
                />
                {/* EJEMPLO PARA USAR AUTHENTICATED */}
                {/* <Route
                    path="/URL/:id"
                    element={
                        isAuthenticated() ? (
                            <>
                                <Navbar />
                                <NOMBREDECOMPOENTE />
                            </>
                        ) : (
                            <Navigate to="/Login" />
                        )
                    }
                /> */}

                {/* HOMEPAGE */}
                <Route
                    path="/"
                    element={
                        <HomePage />
                    }
                />
                {/* LOGIN */}
                <Route
                    path="/Login"
                    element={
                        <Login></Login>
                    }
                />
                <Route
                    path="/Registro"
                    element={
                        <Registro></Registro>
                    }
                />

                <Route
                    path="/ListaBancos"
                    element={
                        isUserAuthenticated() && isAdmin() ? (
                            <>
                                <ListaBancos />
                            </>
                        ) : (
                            <Navigate to="/Login" />
                        )
                    }
                />

                <Route
                    path="/agregarBanco"
                    element={
                        isUserAuthenticated() ? (
                            <>
                                <CreateBanco />
                            </>
                        ) : (
                            <Navigate to="/Login" />
                        )
                    }
                />

                <Route
                    path="/ListaUsuarios"
                    element={
                        isUserAuthenticated() ? (
                            <>
                                <ListaUsers />
                            </>
                        ) : (
                            <Navigate to="/Login" />
                        )
                    }
                />

                <Route
                    path="/ListaAdmins"
                    element={
                        isUserAuthenticated() ? (
                            <>
                                <ListaAdmins />
                            </>
                        ) : (
                            <Navigate to="/Login" />
                        )
                    }
                />

                <Route
                    path="/agregarAdmin"
                    element={
                        isUserAuthenticated() ? (
                            <>
                                <CreateUserAdmin />
                            </>
                        ) : (
                            <Navigate to="/Login" />
                        )
                    }
                />
                <Route
                    path="/ListaSolicitudes"
                    element={
                        isUserAuthenticated() && isUser() && tieneTatuajes() && tieneEnfermedad()  ? (
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
            </Routes>

        </BrowserRouter>
    )
}

export default AppRouter
