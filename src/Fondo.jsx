import React from 'react';
import "./CSS/Fondo.css";

const Fondo = () => {
    return (
        <div className="fondo-container">
            <div className="section">
                <div className="titulocentro">DROPS THAT SAVE </div>
                <div className="curtain"></div>
                <canvas id="canvas"></canvas>
            </div>
        </div>
    )
}

export default Fondo;
