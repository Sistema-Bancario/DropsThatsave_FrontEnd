import { hacerCita, reagendarCita } from "../api/apiCita";
import Swal from "sweetalert2";

export const sendData = async (state, option, _id) => {
  let resultado;
  switch (option) {
    case 1:
      try {
        resultado = await hacerCita({
          donacionId: state.donacionId,
          fecha: state.fecha,
          hora: state.hora,
        });
        if (resultado) {
          Swal.fire({
            icon: "success",
            title: "¡Genial!",
            text: "Cita creada exitosamente",
            showConfirmButton: true,
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/InicioUser";
            } else {
              window.location.href = "/";
            }
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message || "No se pudo agendar la cita",
        });
      }
      break;
    case 2:
      resultado = await reagendarCita(
        _id,
        state.fecha,
        state.hora);
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "¡Genial!",
          text: "Cita reagendada exitosamente",
          showConfirmButton: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/MisCitas";
          } else {
            window.location.href = "/";
          }
        });
      }
      break;
    default:
      break;
  }
};
