import axios from "axios";
import Swal from "sweetalert2";

export const apiLogin = async (correo, password) => {
  try {
    const URL = "http://localhost:8080/api/auth/login";

    const response = await axios.post(URL, {
      correo,
      password,
    });

    const { token, rol, tatuajes, enfermedad } = response.data;
    console.log(tatuajes)
    token ? localStorage.setItem("token", token) : null;
    localStorage.setItem("tatuajes", tatuajes);
    localStorage.setItem("enfermedad", enfermedad);
    return { token, rol, tatuajes, enfermedad };
  } catch ({
    response: {
      data: { message },
    },
  }) {
    Swal.fire({
      icon: "error",
      title: "Informacion Incorrecta",
      text: "Correo o Password Incorrectos",
      confirmButtonText: "Ok",
    });
  }
};
