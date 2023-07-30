import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/citas/";

export const apiCitas = async () => {
  try {
    const listaCitas = await axios.get(`${URL}vercitas`, {
      headers: { "x-token": token },
    });
    return listaCitas.data.citas;
  } catch ({ response: { data } }) {
    return data.msg;
  }
};

export const apiMisCitas = async () => {
  try {
    const listaCitas = await axios.get(`${URL}misCitas`, {
      headers: { "x-token": token },
    });
    return listaCitas.data.citas;
  } catch ({ response: { data } }) {
    return data.msg;
  }
};

export const reagendarCita = async (id, nuevaFecha, nuevaHora) => {
  try {
    const response = await axios.put(
      `${URL}reagendar/${id}`,
      { nuevaFecha: nuevaFecha, nuevaHora: nuevaHora },
      { headers: { "x-token": token } }
    );
    
    if (response.data) {
      return true;
    } else {
      throw new Error("La respuesta del servidor no contiene datos");
    }
  } catch (error) {
    console.log(error.message);
    Swal.fire({
      icon: "error",
      title: "Ocurrió un error",
      text: "No se pudo reagendar la cita",
    });
    return false;
  }
};

export const hacerCita = async ({ donacionId, fecha, hora }) => {
  try {
    const response = await axios.post(
      `${URL}agendarCita`,
      {
        donacionId: donacionId,
        fecha: fecha,
        hora: hora,
      },
      { headers: { "x-token": token } }
    );
    return true;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.msg) {
      throw new Error(error.response.data.msg);
    } else {
      throw new Error("Error al agendar la cita");
    }
  }
};


export const eliminarCita = async (id) => {
  try {
    const response = await axios.delete(`${URL}eliminarcita/${id}`, {
      headers: { "x-token": token },
    });
    return true;
  } catch ({ response: { data } }) {
    Swal.fire({
      icon: "error",
      title: "Ocurrió un error",
      text: "No se pudo eliminar la cita",
    });
  }
};
