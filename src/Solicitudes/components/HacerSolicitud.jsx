import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";
import { solicitude } from "../model/solicitud";
import { sendData } from "../helpers/SolicitudHelper";


export const HacerSolicitud = () => {
    const [agregar, setAgregar] = useState(solicitude);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Datos a enviar:", agregar); // Agrega esta línea para ver los datos en la consola
        sendData( agregar , 1, 0);
    };

    return (
        <>
            <div className="container table-container">
                <br /><br />
                <Link to="/ListaSolicitudes"><Button className=''>Regresar</Button></Link>
                {/* <h1 id="create-tarea">Agregar Administrador</h1> */}
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label className="text-black">Tipo de Sangre</label>
                        <input
                            type="text"
                            className="form-control"
                            name="tipoSangre"
                            onChange={(event) =>
                                setAgregar({
                                    solicitude: {
                                        ...agregar.solicitude,
                                        tipoSangre: event.target.value,
                                    },
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label className="text-black">Banco</label>
                        <input
                            type="text"
                            className="form-control"
                            name="banco"
                            onChange={(event) =>
                                setAgregar({
                                    solicitude: {
                                        ...agregar.solicitude,
                                        banco: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="form-group">
                        <label className="text-black">Litros</label>
                        <input
                            type="number"
                            className="form-control"
                            name="litros"
                            onChange={(event) =>
                                setAgregar({
                                    solicitude: {
                                        ...agregar.solicitude,
                                        litros: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="container text-center">
                        <button id="btn-enviar" type="submit" className="btn">
                            Enviar
                        </button>
                    </div>
                    <br /><br />
                </form>
            </div>
        </>
    );
};