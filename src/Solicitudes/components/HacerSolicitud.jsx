import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";
import { solicitude } from "../model/solicitud";
import { sendData } from "../helpers/solicitudHelper";
import { tieneEnfermedad, tieneTatuajes } from "../../Login/helpers/LoginHelper";
import { apiBancos } from "../../Banco/api/apiBancos";
import "../../CSS/Downs.css";

const HacerSolicitud = () => {
    const [listaBancos, setListaBancos] = useState([]);

    const viewBancosList = async () => {
        const getListaBancoFromApi = await apiBancos();
        setListaBancos(getListaBancoFromApi);
    };

    useEffect(() => {
        viewBancosList();
    }, []);

    const [agregar, setAgregar] = useState({
        solicitude: {
            tipoSangre: "", // Establece el valor inicial a una cadena vacía
            banco: "",
            litros: 0,
        },
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Datos a enviar:", agregar);
        sendData(agregar, 2, 0);
    };

    const tiposDeSangre = [
        { _id: { "$oid": "648b73a5e7db30e2e21d5bd4" }, tipo: "A+" },
        { _id: { "$oid": "648b741be7db30e2e21d5bd5" }, tipo: "A-" },
        { _id: { "$oid": "648b744ae7db30e2e21d5bd7" }, tipo: "B+" },
        { _id: { "$oid": "648b745be7db30e2e21d5bd8" }, tipo: "B-" },
        { _id: { "$oid": "648b746ce7db30e2e21d5bd9" }, tipo: "AB+" },
        { _id: { "$oid": "648b747ee7db30e2e21d5bda" }, tipo: "AB-" },
        { _id: { "$oid": "648b748fe7db30e2e21d5bdb" }, tipo: "O+" },
        { _id: { "$oid": "648b749fe7db30e2e21d5bdc" }, tipo: "O-" },
    ];

    return (
        <>
            <div className="container table-container">
                <br /><br />
                {tieneTatuajes() && tieneEnfermedad() && (
                    <Link to="/InicioUser">
                        <Button className=''>Regresar</Button>
                    </Link>
                )}

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label className="text-black">Tipo de Sangre</label>
                        <select
                            className="form-control"
                            name="tipoSangre"
                            required
                            value={agregar.solicitude.tipoSangre} 
                            onChange={(event) =>
                                setAgregar({
                                    ...agregar,
                                    solicitude: { 
                                        ...agregar.solicitude,
                                        tipoSangre: event.target.value,
                                    },
                                })
                            }
                        >
                            <option value="">Seleccione un tipo de sangre</option>
                            {tiposDeSangre.map((tipo) => (
                                <option key={tipo._id.$oid} value={tipo.tipo}>
                                    {tipo.tipo}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="text-black">Banco</label>
                        <select
                            type="text"
                            className="form-control"
                            name="banco"
                            required
                            onChange={(event) =>
                                setAgregar({
                                    solicitude: {
                                        ...agregar.solicitude,
                                        banco: event.target.value,
                                    },
                                })
                            }
                        >
                            <option value="">Selecciona una cuenta</option>
                            {listaBancos.map((banco) => (
                                <option key={banco._id} value={banco._id}>
                                    {`${banco.nombre} - ${banco.direccion} `}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="text-black">Litros</label>
                        <input
                            type="number"
                            className="form-control"
                            name="litros"
                            min="0" 
                            required
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

export default HacerSolicitud;
