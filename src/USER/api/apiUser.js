import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/usuarios/";

export const apiUser = async () => {
  try {
    const listaUsers = await axios.get(`${URL}mostrar`);
    return listaUsers.data.listaUsers;
  } catch ({ response: { data } }) {
    return data.msg;
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
