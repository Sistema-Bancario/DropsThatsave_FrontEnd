import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/solicitudes/";

export const apiSolicitud = async () => {
  try {
    const listaSolicitud = await axios.get(`${URL}mostrarSolicitudesToken`,
    { headers: { "x-token": token } });
    return listaSolicitud.data.solicitudes;
  } catch ({ response: { data } }) {
    return data.msg;
  }
};

export const createSolicitud = async ({ tipoSangre, banco, litros }) => {
  try {
    const requestData = {
      tipoSangre: tipoSangre,
      banco: banco,
      litros: litros,
    };

    console.log("Datos enviados en la solicitud:", requestData);

    const response = await axios.post(
      `${URL}solicitudNueva`,
      requestData,
      { headers: { "x-token": token } }
    );

    return true;
  } catch ({ response: { data } }) {
    Swal.fire({
      icon: "error",
      title: "Ocurrió un error",
      text: "No se pudo crear el banco",
    });
  }
};

