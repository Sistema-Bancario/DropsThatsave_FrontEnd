import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from '../HomePage';
import { ListaBancos } from './Banco/components/ListaBancos';
import { Login } from './Login/components/Login';
import { isUserAuthenticated } from "./Login/helpers/LoginHelper";
import {ListaUsers} from "./USER/components/ListaUsers"
import {ListaAdmins} from "./ADMIN/components/ListaAdmins"
import {CreateUserAdmin} from "./ADMIN/components/AgregarAdmin"

import Prueba from './prueba';
import PruebaUser from './PruebaUser';

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
                   path="/ListaBancos"
                    element={
                        isUserAuthenticated() ? (
                            <>
                                <ListaBancos />                            </>
                        ) : (
                            <Navigate to="/Login"/>
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
                            <Navigate to="/Login"/>
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
                            <Navigate to="/Login"/>
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
                            <Navigate to="/Login"/>
                        )
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
