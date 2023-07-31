import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "https://drops-thatsave-backend.vercel.app/api/solicitudes/";

export const apiSolicitud = async () => {
  try {
    const listaSolicitud = await axios.get(`${URL}mostrarSolicitudesAdmin`,
    { headers: { "x-token": token } });
    console.log(listaSolicitud);
    return listaSolicitud.data.solicitudes;
  } catch ({ response: { data } }) {
    return data.msg;
  }
};

export const eliminarSolicitudApi = async (id) => {
  console.log(id);
  try {
    const listaSolicitud = await axios.delete(`${URL}eliminarSolicitudPermanente/${id}`,
    { headers: { "x-token": token } });
    return listaSolicitud.data
  } catch ({ response: { data } }) {
    return data.msg;
  }
};