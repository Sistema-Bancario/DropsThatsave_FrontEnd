import axios from "axios";

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