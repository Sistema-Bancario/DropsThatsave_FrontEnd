import React, { useState } from "react";
import { sendData } from "../helpers/adminHelper";
import { user } from "../model/userAdmin";
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";


export const CreateUserAdmin = () => {
    const [agregar, setAgregar] = useState(user);
    const handleSubmit = (event) => {
        event.preventDefault();
        sendData(agregar, 1, 0);
    };

    return (
        <>
            <div className="lista-admins-container">
                <div className="container table-container">
                    <br /><br />
                    <Link to="/ListaAdmins"><Button className=''>Regresar</Button></Link>
                    <h1 id="create-tarea" className="text-white">Agregar Administrador</h1>
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
                                        user: {
                                            ...agregar.user,
                                            nombre: event.target.value,
                                        },
                                    })
                                }
                            />
                        </div>

                        <div className="form-group">
                            <label className="text-white">Correo</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inemail"
                                aria-describedby="emailHelp"
                                required
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
                            <label className="text-white">Password</label>
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
    );
};