import React, { useState } from 'react'
import { sendData } from '../helpers/bancosHelper';

export const FormBanco = (BancoEdit, option, _id) => {
    const [state, setState] = useState(BancoEdit);

    const handleSubmit = (event) => {
        event.preventDefault();
        sendData(state, 2, _id);
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="form-group ">
                    <label className="text-black">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        required
                        value={state.banco.nombre}
                        onChange={(event) =>
                            setState({
                                banco: {
                                    ...state.banco,
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
                        value={state.banco.direccion}
                        onChange={(event) =>
                            setState({
                                banco: {
                                    ...state.banco,
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
                        value={state.banco.telefono}
                        onChange={(event) =>
                            setState({
                                banco: {
                                    ...state.banco,
                                    telefono: event.target.value
                                }
                            })
                        }
                    />
                </div>

                <div className="container text-center">
                    <button id="btn-enviar" type="submit" className="btn">
                        Enviar
                    </button>
                </div>
            </form>
        </>
    )
}