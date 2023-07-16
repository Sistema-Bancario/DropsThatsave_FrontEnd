import { createUser } from "../api/apiAdmin";
import Swal from "sweetalert2";

export const sendData = async (state, option, _id) => {
  let resultado;
  switch (option) {
    case 1:
      resultado = await createUser({
        nombre: state.user.nombre, 
        correo: state.user.correo,
        password: state.user.password,
        rol: state.user.rol,
       
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
            window.location.href = "/ListaAdmins";
          } else {
            window.location.href = "/";
          }
        });
      }
      break;
    
  }
};