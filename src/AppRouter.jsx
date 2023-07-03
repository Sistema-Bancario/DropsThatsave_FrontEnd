import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from '../HomePage';


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

                

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
