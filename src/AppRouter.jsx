import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from '../HomePage';
import { Login } from './Login/components/Login';
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







            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
