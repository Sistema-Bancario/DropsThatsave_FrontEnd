import { createBanco, updateBanco } from "../api/apiBancos";
import Swal from "sweetalert2";


export const sendData = async (state, option, _id) => {
    let resultado;
    switch (option) {
        case 1:
            resultado = await createBanco({
                nombre: state.banco.nombre,
                direccion: state.banco.direccion,
                telefono: state.banco.telefono,
                apertura: state.banco.apertura,
                cierre: state.banco.cierre
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
                        window.location.href = "/ListaBancos";
                    } else {
                        window.location.href = "/";
                    }
                });
            }
        break;

        case 2:
            resultado = await updateBanco(
                state.banco._id,
                state.banco.nombre,
                state.banco.direccion,
                state.banco.telefono
            );
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "¡Genial!",
                    text: "Banco actualizado",
                    showConfirmButton: true,
                    confirmButtonText: "Ok"
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/ListaBancos";
                    } else {
                        window.location.href = "/";
                    }
                });
            }
        break;
    }
}