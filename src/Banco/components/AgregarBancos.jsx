import React, { useState } from "react"
import { banco } from "../model/banco"
import { sendData } from "../helpers/bancosHelper";
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";

export const CreateBanco = () => {
    const [agregar, setAgregar] = useState(banco);

    const handleSubmit = (event) => {
        event.preventDefault();
        sendData(agregar, 1, 0);
    }

    return (
        <>
            <div className="container table-container">
                <br /><br />
                <Link to="/ListaBancos"><Button className=''>Regresar</Button></Link>
                <h1 id="create-tarea">Agregar Banco</h1>
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label className="text-black">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            required
                            onChange={(event) =>
                                setAgregar({
                                    banco: {
                                        ...agregar.banco,
                                        nombre: event.target.value
                                    }
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label className="text-black">Direccion</label>
                        <input
                            type="text"
                            className="form-control"
                            name="direccion"
                            onChange={(event) =>
                                setAgregar({
                                    banco: {
                                        ...agregar.banco,
                                        direccion: event.target.value
                                    }
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label className="text-black">Telefono</label>
                        <input
                            type="text"
                            className="form-control"
                            name="telefono"
                            onChange={(event) =>
                                setAgregar({
                                    banco: {
                                        ...agregar.banco,
                                        telefono: event.target.value
                                    }
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label className="text-black">Apertura</label>
                        <input
                            type="text"
                            className="form-control"
                            name="apertura"
                            onChange={(event) =>
                                setAgregar({
                                    banco: {
                                        ...agregar.banco,
                                        apertura: event.target.value
                                    }
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label className="text-black">Cierre</label>
                        <input
                            type="text"
                            className="form-control"
                            name="cierre"
                            required
                            onChange={(event) =>
                                setAgregar({
                                    banco: {
                                        ...agregar.banco,
                                        cierre: event.target.value
                                    }
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label className="text-black">Imagen</label>
                        <input
                            type="text"
                            className="form-control"
                            name="img"
                            required
                            onChange={(event) =>
                                setAgregar({
                                    banco: {
                                        ...agregar.banco,
                                        img: event.target.value,
                                    },
                                })
                            }
                        />
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
    )
}
