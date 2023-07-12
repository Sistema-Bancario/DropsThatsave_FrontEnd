import axios from "axios";
import Swal from "sweetalert2";
const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/bancos/";

export const apiBancos = async () => {
    try {
        const listaBancos = await axios.get(`${URL}mostrarBancos`,
            { headers: { "x-token": token } });
        return listaBancos.data.listaBancos;

    } catch ({ response: { data } }) {
        return data.msg;
    }
}

export const createBanco = async ({ nombre, direccion, telefono, apertura, cierre }) => {
    try {
        const response = await axios.post(`${URL}agregar`, {
            nombre: nombre,
            direccion: direccion, 
            telefono: telefono, 
            apertura: apertura, 
            cierre: cierre
        } , {headers: {"x-token": token}});
        return true;

    } catch ({response: {data}}) {
        Swal.fire({
            icon: "error",
            title: "Ocurrió un error",
            text: "No se pudo crear el banco",
        });
    }

}

export const updateBanco = async (id, nombre, direccion, telefono) => {
    try {
        const bancoEditado = await axios.put(`${URL}editar/${id}`, {
            nombre, 
            direccion, 
            telefono
        }, { headers: { "x-token": token } });
        return bancoEditado.data;

    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "No hay cambio",
            text: "No se pudo editar el banco"
        });
    }
}

export const deleteBanco = async (id) => {
    try {
        const {data} = await axios.delete(`${URL}eliminar/${id}`,
            { headers: { "x-token": token } });
        return true;

    } catch ({response: {data: {message}}}) {
        if (msg === "Delete Banco") {
            window.location.href = "/";
        }
        if (message) {
            return message;
        }
    }
}