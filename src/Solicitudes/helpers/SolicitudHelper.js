import Swal from "sweetalert2";
import { createSolicitud } from "../api/apiSolicitud";


export const sendData = async (state, option, _id) => {
    console.log("Datos que entran:", state); // Agrega esta línea para ver los datos en la consola
    let resultado;
    switch (option) {
        case 1:
            resultado = await createSolicitud
            ( {
                tipoSangre: state.solicitude.tipoSangre,
                banco: state.solicitude.banco,
                litros: state.solicitude.litros,
            });
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "¡Genial!",
                    text: "Banco creado exitosamente",
                    showConfirmButton: true,
                    confirmButtonText: "Ok"
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/ListaSolicitudes";
                    } else {
                        window.location.href = "/";
                    }
                });
            }
        break;
    }
}