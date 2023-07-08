import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { banco } from "../model/banco";
import { deleteBanco } from "../api/apiBancos";
import { UpdateBanco } from "./UpdateBanco";

export const ListaBancos = () => {
    const [listaBancos, setListaBancos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [bancos, setBancos] = useState(banco);

    useEffect(() => {
    }, [listaBancos]);

    const handleOpenModal = (banco) => {
        setShowModal(true);
        setBancos(banco);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const eliminarBancos = async (id) => {
        let result = await deleteBanco(id);
        if (result) {
            setListaBancos(listaBancos.filter((banco) => banco._id !== id));
            Swal.fire({
                icon: "success",
                title: "Genial!",
                text: "Se eliminó correctamente!",
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Falla presente",
                text: "No se pudo eliminar!"
            });
        }
    }

    return (
        <>
            <section id="promo" className="promo section offset-header ">
                <div className="container text-center">
                    <br /><br />
                    <h2 className="title">Usuarios</h2>
                    <p className="intro">Listado de los Bancos</p>
                    <ul className="meta list-inline">
                        <li className="list-inline-item"></li>
                    </ul>
                </div>
            </section>

            <div className="container mt-4 mb-5 table-container">
                <div className="table-responsive text-center">
                    <table className="table ml-auto custom-table-margin">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Dirección</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Apertura</th>
                                <th scope="col">Cierre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaBancos.map((banco) => {
                                return (
                                    <tr key={String(banco._id)}>
                                        <td>{banco._id}</td>
                                        <td>{banco.nombre}</td>
                                        <td>{banco.direccion}</td>
                                        <td>{banco.telefono}</td>
                                        <td>{banco.apertura}</td>
                                        <td>{banco.cierre}</td>
                                        <td>
                                            <button className="btn btn-warning" onClick={() => handleOpenModal(banco)}>
                                                Editar
                                            </button>
                                            <button className="btn btn-danger" onClick={() => eliminarBancos(banco._id)}>
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <UpdateBanco
                    bancoEdit={bancos}
                    isOpen={showModal}
                    onClose={() => handleCloseModal()}
                ></UpdateBanco>
            </div>
        </>
    )
}
