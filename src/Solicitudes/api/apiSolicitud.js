import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "https://drops-thatsave-backend.vercel.app/api/solicitudes/";

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

export const aceptarSolicitud = async ({
  idSolicitud,
  litrosDonados,
  enfermedad
}) => {
 
  try {
    const response = await axios.post(
      `https://drops-thatsave-backend.vercel.app/api/donaciones/aceptar`,
      {
        solicitud: idSolicitud ,
        litrosDonados: litrosDonados ,
        enfermedad: enfermedad
      
      },
      { headers: { "x-token": token } }
    );
    
    return true;
  } catch ({ response: { data: {msg} } }) {
    Swal.fire({
      icon: "error",
      title: "Ocurrió un error",
      text: msg,
    });
  }
};
