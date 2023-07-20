import Swal from "sweetalert2";
import { createUser } from "../api/apiUser";

export const sendData = async (state, option, _id) => {
    let resultado;
    switch (option) {
        case 1:
            resultado = await createUser({
                nombre: state.userRegistro.nombre,
                correo: state.userRegistro.correo,
                password: state.userRegistro.password,
                rol: state.userRegistro.rol,
                tatuajes:  state.userRegistro.tatuajes,
                tipoSangre: state.userRegistro.tipoSangre,
                telefono:  state.userRegistro.telefono,
                direccion: state.userRegistro.direccion,
                enfermedad: state.userRegistro.enfermedad,
                img: state.userRegistro.img,

            });
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Genial!",
                    text: "Administrador creado!",
                    showConfirmButton: true,
                    confirmButtonText: "Ok",
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/hacerSolicitud";
                    } else {
                        window.location.href = "/";
                    }
                });
            }
            break;

    }
};