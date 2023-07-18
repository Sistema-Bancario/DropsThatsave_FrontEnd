import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { banco } from "../model/banco";
import { apiBancos, deleteBanco } from "../api/apiBancos";
import { UpdateBanco } from "./UpdateBanco";
import "../../CSS/ListaBancos.css";
import { Link } from "react-router-dom";


export const ListaBancos = () => {
    const [listaBancos, setListaBancos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState(null);
    const [bancos, setBancos] = useState(banco);

    const viewBancosList = async () => {
        const getListaBancoFromApi = await apiBancos();
        setListaBancos(getListaBancoFromApi);
    };

    const logOut = () => {
        localStorage.removeItem("token");
        window.location.href = "/Login";
    };

    useEffect(() => {
        viewBancosList();
    }, []);

    const handleOpenModal = (banco) => {
        setShowModal(true);
        setBancos(banco);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const eliminarBancos = async (id) => {
        let result = await deleteBanco(id);
        if (result) {
            Swal.fire({
                icon: "success",
                title: "Genial!",
                text: "Se eliminó correctamente!",
            }).then((result) => {
                if (result.isConfirmed) {
                    viewBancosList();
                }
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Falla presente",
                text: "No se pudo eliminar!",
            });
        }
    };

    const Mayus = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <>
            <section id="promo" className="promo section offset-header ">
                <div className="container text-center">
                    <br /><br />

                    <h2 className="title">
                        BANCOS
                    </h2>
                    <p className="intro">Listado de los Bancos</p>
                    <ul className="meta list-inline">
                        <li className="list-inline-item"></li>
                    </ul>
                </div>
            </section>

            <div  className="container table-container">
                <section>
                    <Link to="/agregarBanco">
                        <button className="btn btn-secondary" >
                            Agregar un Banco  
                        </button>
                    </Link>
                </section>
            </div>


            <div className="container mt-4 mb-5 table-container">
                <div className="table-responsive text-center">
                    <table className="table ml-auto custom-table-margin">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Dirección</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaBancos.map((banco) => (
                                <tr key={banco._id}>
                                    <td>{banco._id}</td>
                                    <td>{banco.nombre}</td>
                                    <td>{banco.direccion}</td>
                                    <td>{banco.telefono}</td>
                                    <td>{Mayus(banco.estado.toString())}</td>
                                    <td>
                                        <button className="btn btn-warning" onClick={() => handleOpenModal(banco)}>Editar</button>
                                        <button className="btn btn-danger" onClick={() => eliminarBancos(banco._id)}>
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


            <UpdateBanco
                bancoEdit={bancos}
                isOpen={showModal}
                onClose={handleCloseModal}
            />
            <Link
                aria-current="page"
                to="/"
                onClick={() => logOut()}
            >
                Cerrar Sesion
            </Link>
        </>
    );
};
