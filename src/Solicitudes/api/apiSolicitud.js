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

export const aceptarSolicitud = async ({
  idSolicitud,
  litrosDonados,
  enfermedad
  
}) => {
 
  try {
    console.log(idSolicitud)
    console.log(litrosDonados)
    console.log(enfermedad)
    const response = await axios.post(
      `http://localhost:8080/api/donaciones/aceptar`,
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