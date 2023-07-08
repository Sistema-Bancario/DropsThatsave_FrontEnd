import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from '../HomePage';
import { ListaBancos } from './Banco/components/ListaBancos';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/"
                    element={
                        <HomePage />
                    }
                />

                <Route
//                    path="/ListaBancos"
//                    element={
//                        isAuthenticated() ? (
//                            <>
//                                <ListaBancos />
//                            </>
//                        ) : (
//                            <Navigate />
//                        )
//                    }
                />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
