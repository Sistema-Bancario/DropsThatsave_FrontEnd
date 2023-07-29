import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { sendData } from "../helper/citasHelper";

export const CreateCita = () => {
    const [citaData, setCitaData] = useState({
        solicitudId: "",
        fecha: "",
        hora: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("State antes de llamar a sendData:", citaData);
        sendData(citaData, 1, 0);
      }
      
      

    return (
        <>
            <div className="lista-citas-container">

                <div className="container table-container">
                    <br /><br />
                    <Link to="/InicioUser"><Button className=''>Regresar</Button></Link>
                    <Link to="/MisCitas"><Button className=''>Ver citas</Button></Link>
                    <Link to="/InicioUser"><Button className=''>Regresar</Button></Link>

                    <h1 id="create-cita" className="text-white">Agendar Cita</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="text-white">Solicitud ID</label>
                            <input
                                type="text"
                                className="form-control"
                                name="solicitudId"
                                required
                                onChange={(event) =>
                                    setCitaData({
                                        ...citaData,
                                        solicitudId: event.target.value
                                    })
                                }
                            />
                        </div>

                        {/* <div className="form-group">
                            <label className="text-white">Usuario Donante ID</label>
                            <input
                                type="text"
                                className="form-control"
                                name="usuarioDonanteId"
                                required
                                onChange={(event) =>
                                    setCitaData({
                                        ...citaData,
                                        usuarioDonanteId: event.target.value
                                    })
                                }
                            />
                        </div> */}

                        <div className="form-group">
                            <label className="text-white">Fecha</label>
                            <input
                                type="date"
                                className="form-control"
                                name="fecha"
                                required
                                onChange={(event) =>
                                    setCitaData({
                                        ...citaData,
                                        fecha: event.target.value
                                    })
                                }
                            />
                        </div>

                        <div className="form-group">
                            <label className="text-white">Hora</label>
                            <input
                                type="time"
                                className="form-control"
                                name="hora"
                                required
                                onChange={(event) =>
                                    setCitaData({
                                        ...citaData,
                                        hora: event.target.value
                                    })
                                }
                            />
                        </div>

                        <div className="container text-center">
                            <button id="btn-enviar" type="submit" className="btn text-white">
                                Enviar
                            </button>
                        </div>
                        <br /><br />
                    </form>
                </div>
            </div>
        </>
    )
}
