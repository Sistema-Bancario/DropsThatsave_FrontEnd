import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/usuarios/";

export const apiUser = async () => {
  try {
    const listaUsers = await axios.get(`${URL}mostrarUsers`,
      { headers: { "x-token": token } });
    return listaUsers.data.Users;
  } catch ({ response: { data } }) {
    return data.msg;
  }
};


export const apiMiPerfil = async () => {
  try {
    const listaUsers = await axios.get(`${URL}miPerfil`,
      { headers: { "x-token": token } });
    return listaUsers.data.usuario;
  } catch ({ response: { data } }) {
    return data.msg;
  }
};

export const apiEditUser = async (editUser) => {
  console.log(editUser);
  try {
    const listaUsers = await axios.put(`${URL}editarMiPerfil`, {editUser},
      { headers: { "x-token": token } });
      console.log(listaUsers.data);
    return true;
  } catch ({ response: { data } }) {
    return false;
  }
};

export const createUser = async ({
  nombre,
  correo,
  password,
  rol,
  tatuajes,
  tipoSangre,
  telefono,
  direccion,
  enfermedad,
  img
  
}) => {

  try {
    const response = await axios.post(
      `${URL}agregar`,
      {
        nombre: nombre,
        correo: correo,
        password: password,
        rol: rol,
        tatuajes: tatuajes,
        tipoSangre: tipoSangre,
        telefono: telefono,
        direccion: direccion,
        enfermedad: enfermedad,
        img : img
      },
      { headers: { "x-token": token } }
    );

    return true;
  } catch ({ response: { data } }) {
    Swal.fire({
      icon: "error",
      title: "Ocurrió un error",
      text: "No se pudo agregar Tu perfil",
    });
  }
};

export const DeleteUser = async (id) => {
  try {
    const { data } = await axios.delete(`${URL}eliminar/${id}`,
      { headers: { "x-token": token } });

    return true;
  } catch ({
    response: {
      data: { message },
    },
  }) {
    if (msg === "DELETE eliminar user") {
      window.location.href = "/";
    }
    if (message) {
      return message;
    }
  }
};
