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
            <div className="lista-admins-container">

                <div className="container table-container">
                    <br /><br />
                    <Link to="/ListaBancos"><Button className=''>Regresar</Button></Link>
                    <h1 id="create-tarea" className="text-white">Agregar Banco</h1>
                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label className="text-white">Nombre</label>
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
                            <label className="text-white">Direccion</label>
                            <input
                                type="text"
                                className="form-control"
                                name="direccion"
                                required
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
                            <label className="text-white">Telefono</label>
                            <input
                                type="text"
                                className="form-control"
                                name="telefono"
                                required
                                pattern="[0-9]{8}"
                                title="El número de celular debe tener 8 dígitos numéricos"
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
                            <label className="text-white">Apertura</label>
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
                            <label className="text-white">Cierre</label>
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
                            <label className="text-white">Imagen</label>
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
