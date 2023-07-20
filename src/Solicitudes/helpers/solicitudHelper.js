import { aceptarSolicitud } from "../api/apiSolicitud";
import Swal from "sweetalert2";

export const sendData = async (state, option, _id) => {
  let resultado;
  switch (option) {
    case 1:
      console.log(state.litros); // Deberías poder acceder directamente a state.litros
      resultado = await aceptarSolicitud({
        idSolicitud: _id,
        litrosDonados: state.litros,
        enfermedad: state.enfermedad,
      });
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: "donación Hecha!",
          showConfirmButton: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/ListaSolicitudes";
          } else {
            window.location.href = "/";
          }
        });
      }
      break;
    // Agrega más casos si es necesario
    default:
      break;
  }
};