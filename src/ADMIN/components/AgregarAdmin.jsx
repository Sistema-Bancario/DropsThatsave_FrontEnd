import React, { useState } from "react";
import { sendData } from "../helpers/adminHelper";
import { user } from "../model/userAdmin";
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";


export const CreateUserAdmin = () => {
    const [agregar, setAgregar] = useState(user);
    const handleSubmit = (event) => {
        event.preventDefault();
        sendData( agregar , 1, 0);
    };

    return (
        <>
            <div className="container table-container">
                <br /><br />
                <Link to="/ListaAdmins"><Button className=''>Regresar</Button></Link>
                <h1 id="create-tarea">Agregar Administrador</h1>
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label className="text-black">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            onChange={(event) =>
                                setAgregar({
                                    user: {
                                        ...agregar.user,
                                        nombre: event.target.value,
                                    },
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label className="text-black">Correo</label>
                        <input
                            type="text"
                            className="form-control"
                            name="correo"
                            onChange={(event) =>
                                setAgregar({
                                    user: {
                                        ...agregar.user,
                                        correo: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="form-group">
                        <label className="text-black">Password</label>
                        <input
                            type="text"
                            className="form-control"
                            name="password"
                            onChange={(event) =>
                                setAgregar({
                                    user: {
                                        ...agregar.user,
                                        password: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="form-group">
                        <label className="text-black">rol *Admin*</label>
                        <input
                            type="text"
                            className="form-control"
                            name="rol"
                            onChange={(event) =>
                                setAgregar({
                                    user: {
                                        ...agregar.user,
                                        rol: event.target.value,
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