import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { apiMiPerfil } from "../../USER/api/apiUser";
import { sendData } from "../helper/citasHelper";

export const CreateCita = () => {
    const [citaData, setCitaData] = useState({
        donacionId: "",
        fecha: "",
        hora: "",
    });

    const [donaciones, setDonaciones] = useState([]);

    useEffect(() => {
        obtenerMiPerfil();
    }, []);

    const obtenerMiPerfil = async () => {
        try {
            const miPerfil = await apiMiPerfil();
            setDonaciones(miPerfil.donaciones || []);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendData(citaData, 1, 0);
    };

    return (
        <>
            <div className="lista-citas-container">
                <div className="container table-container">
                    <br />
                    <br />
                    <Link to="/InicioUser">
                        <Button className="">Regresar</Button>
                    </Link>
                    <Link to="/MisCitas">
                        <Button className="">Ver citas</Button>
                    </Link>


                    <h1 id="create-cita" className="text-white">
                        Agendar Cita
                    </h1>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="text-white">Donación</label>
                            <select
                                className="form-control"
                                name="donacionId"
                                required
                                onChange={(event) =>
                                    setCitaData({
                                        ...citaData,
                                        donacionId: event.target.value,
                                    })
                                }
                            >
                                <option value="">Seleccione una donación</option>
                                {donaciones.map((donacion) => (
                                    <option key={donacion._id} value={donacion._id}>
                                        ID de Donación: {donacion._id} <br />
                                        - Solicitante: {donacion.solicitud?.usuarioSolicitante?.nombre || "No disponible"}
                                    </option>
                                ))}
                            </select>
                        </div>

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
