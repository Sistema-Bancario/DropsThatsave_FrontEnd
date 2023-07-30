import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";
import { user } from "../model/userAdmin";
import { DeleteUser, apiUser } from "../api/apiAdmin";
import "../../CSS/NavbarAdmin.css";



export const ListaAdmins = () => {
  const [listaUsers, setListaUsers] = useState([]);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState(user);

  const viewUsersList = async () => {
    try {
      const getListaUsersFromApi = await apiUser();
      setListaUsers(getListaUsersFromApi[1]);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    viewUsersList();
  }, []);

  useEffect(() => {
  }, [listaUsers]);


  if (error) {
    return <div>Hubo un error al cargar los users : {error.message}</div>;
  }

  const eliminarUsers = async (id) => {
    let result = await DeleteUser(id);
    if (result) {
      setListaUsers(listaUsers.filter((user) => user._id !== id));
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Se eliminó correctamente!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo eliminar!",
      });
    }
  };

  return (
    <>
      <div className="lista-admins-container">
        <br />
        <section id="promo" className="">
          <div className="container text-center">
            <br /><br />

            <h2 className="title text-white">
              Administradores
            </h2>
            <p className="intro text-white">Listado de los Administradores</p>
            <ul className="meta list-inline">
              <li className="list-inline-item"></li>
            </ul>
          </div>
        </section>

        <div className="container table-container">
          <section>
            <Link to="/agregarAdmin">
              <button className="btn btn-secondary" >
                Agregar un Administrador
              </button>
            </Link>
          </section>
        </div>


        <div className="container mt-4 mb-5 table-container">

          <div className="table-responsive text-center">
            <table className="table ml-auto custom-table-margin">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Rol</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {listaUsers.map((user) => {
                  return (
                    <tr key={String(user._id)}>
                      <td>{user.nombre}</td>
                      <td>{user.correo}</td>
                      <td>{user.rol}</td>


                      <td>

                        <button className="btn btn-danger" onClick={() => eliminarUsers(user._id)}>
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  );
};
