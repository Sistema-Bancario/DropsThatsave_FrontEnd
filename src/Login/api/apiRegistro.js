import axios from "axios"

const URL = "http://localhost:8080/api/usuarios/"



export const apiRegistro = async(agregar)=>{
    console.log(agregar)
try {
    const resultado= await axios.post(`${URL}agregar`, {
        nombre: agregar.userRegistro.nombre,
        correo: agregar.userRegistro.correo,
        password: agregar.userRegistro.password,
        tatuajes: agregar.userRegistro.tatuajes,
        tipoSangre:  agregar.userRegistro.tipoSangre,
        telefono:  agregar.userRegistro.telefono,
        direccion:  agregar.userRegistro.direccion,
        enfermedades: agregar.userRegistro.enfermedades,
        imagen: agregar.userRegistro.imagen
    })
    return true
} catch (error) {
    return false
}

}