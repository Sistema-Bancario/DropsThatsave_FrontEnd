import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import Swal from "sweetalert2";
import { apiEditUser, apiMiPerfil } from "../api/apiUser";
import "../../CSS/MiPerfil.css";
import { Button, Modal } from "react-bootstrap";
import { eliminarSolicitudApi } from "../../SolicitudesAdmin/api/apiSolicitud";

export const MiPerfil = () => {
  const [usuario, setUsuario] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedUsuario, setEditedUsuario] = useState({});

  const viewUsuario = async () => {
    const getMiUsuario = await apiMiPerfil();
    setUsuario(getMiUsuario);
  };

  useEffect(() => {
    viewUsuario();
  }, []);

  const handleOpenEditModal = () => {
    setEditedUsuario({ ...usuario });
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleEditProfile = async() => {
    const editProfile = await apiEditUser(editedUsuario);
    if(editProfile){
        const confirmacion = await Swal.fire({
            icon: "success",
            title: 'SE HA MODIFICADO TU USUARIO'
        })
        if(confirmacion.isConfirmed){
            window.location.reload();
        } else{
            window.location.reload();
        }
    }else{
        Swal.fire({
            icon: "error",
            title: 'ERROR AL MODIFICAR'
        })
    }
    setShowEditModal(false);
  };

  const eliminarSolicitud = async(solicitud)=>{
    const confirmacion = await Swal.fire({
        title: "¿Estás seguro?",
        text: "Esta acción eliminará la solicitud permanentemente.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
      });
  
      if (confirmacion.isConfirmed) {
        let result = await eliminarSolicitudApi(solicitud._id);
        if (result) {
          const confirma = await Swal.fire({
            icon: "success",
            title: "Genial!",
            text: "Se eliminó la solicitud correctamente!",
          });
          if(confirma.isConfirmed){
          window.location.reload();
        }else{
            window.location.reload();
        }
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se pudo eliminar la solicitud.",
          });
        }
      }
  }

  return (
    <>
     <section className="mi-perfil-section">
    <div className="container">
   
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="6">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
              <MDBCardImage
                    id="img"
                    src={usuario.img}
                    alt="avatar"
                    className="rounded-circle"
                    style={{width: "100px", height:"90px"}}
                    fluid
                  />
                <div className="d-flex justify-content-between align-items-center p-3 mt-3">
                  <button
                    className="btn btn-editar"
                    onClick={handleOpenEditModal}
                  >
                    Editar
                </button>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="6">
            <MDBCard className="card-info" >
              <MDBCardBody>
                <MDBListGroup flush className="list-group">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center custom-list-item">
                    <i className="fas fa-user fa-lg text-primary"></i>
                    <span className="fw-bold">Nombre:</span>
                    <span className="text-muted ms-4 me-2">
                      {usuario?.nombre}
                    </span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center custom-list-item">
                    <i className="fas fa-envelope fa-lg text-primary"></i>
                    <span className="fw-bold">Correo:</span>
                    <span className="text-muted ms-4">
                      {usuario?.correo}
                    </span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center custom-list-item">
                    <i className="fas fa-id-card fa-lg text-primary"></i>
                    <span className="fw-bold">Direccion:</span>
                    <span className="text-muted ms-4 me-2">
                      {usuario?.direccion}
                    </span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center custom-list-item">
                    <i className="fas fa-phone fa-lg text-primary"></i>
                    <span className="fw-bold">Telefono:</span>
                    <span className="text-muted ms-4 me-2">
                      (+502) {usuario?.telefono}
                    </span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center custom-list-item">
                    <i className="fas fa-phone fa-lg text-primary"></i>
                    <span className="fw-bold">Tipo Sangre:</span>
                    <span className="text-muted ms-4 me-2">
                      {usuario?.tipoSangre}
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow className="my-4">
          <MDBCol lg="6">
            <MDBCard className="card-donaciones">
              <MDBCardBody>
                <h5 className="mb-4">Donaciones</h5>
                {usuario.donaciones &&
                usuario.donaciones.length === 0 ? (
                  <p className="text-muted">No hay donaciones</p>
                ) : (
                  <MDBListGroup flush>
                    {usuario.donaciones &&
                      usuario.donaciones.map((donacion) => (
                        <MDBListGroupItem key={donacion.id}>
                          <strong className="mx-2">Litros Donados:</strong>
                          {donacion.litrosDonados}
                          {donacion.solicitud?.usuarioSolicitante?.nombre}
                        </MDBListGroupItem>
                      ))}
                  </MDBListGroup>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="6">
            <MDBCard className="card-donaciones">
              <MDBCardBody>
                <h5 className="mb-4">Solicitudes</h5>
                {usuario.solicitudes &&
                usuario.solicitudes.length === 0 ? (
                  <p className="text-muted">No hay solicitudes</p>
                ) : (
                  <MDBListGroup flush>
                    {usuario.solicitudes &&
                      usuario.solicitudes.map((solicitudes) => (
                        <MDBListGroupItem key={solicitudes.id}>
                          <div className="d-flex align-items-center">
                            <p>
                              <strong className="mx-2">
                                Litros solicitados:
                              </strong>
                              {solicitudes.litros}
                            </p>
                          </div>
                          <button className="btn btn-danger" onClick={()=>{
                            eliminarSolicitud(solicitudes)
                          }}> Eliminar </button>
                        </MDBListGroupItem>
                      ))}
                  </MDBListGroup>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    
    </div>
    </section> 
    <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Display the form fields for editing the user data here */}
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              value={editedUsuario?.nombre}
              onChange={(e) =>
                setEditedUsuario({ ...editedUsuario, nombre: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="correo">Correo:</label>
            <input
              type="email"
              className="form-control"
              id="correo"
              value={editedUsuario?.correo}
              onChange={(e) =>
                setEditedUsuario({ ...editedUsuario, correo: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="tipoSangre">Tipo de Sangre:</label>
            <input
              type="text"
              className="form-control"
              id="tipoSangre"
              value={editedUsuario?.tipoSangre}
              onChange={(e) =>
                setEditedUsuario({ ...editedUsuario, tipoSangre: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Telefono:</label>
            <input
              type="text"
              className="form-control"
              id="telefono"
              value={editedUsuario?.telefono}
              onChange={(e) =>
                setEditedUsuario({ ...editedUsuario, telefono: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="direccion">Direccion:</label>
            <input
              type="text"
              className="form-control"
              id="direccion"
              value={editedUsuario?.direccion}
              onChange={(e) =>
                setEditedUsuario({ ...editedUsuario, direccion: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="tatuajes">Tiene Tatuajes:</label>
            <input
              type="checkbox"
              className="form-check-input"
              id="tatuajes"
              checked={editedUsuario?.tatuajes}
              onChange={(e) =>
                setEditedUsuario({ ...editedUsuario, tatuajes: e.target.checked })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="enfermedad">Tiene Enfermedad:</label>
            <input
              type="checkbox"
              className="form-check-input"
              id="enfermedad"
              checked={editedUsuario?.enfermedad}
              onChange={(e) =>
                setEditedUsuario({ ...editedUsuario, enfermedad: e.target.checked })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="img">Imagen:</label>
            <input
              type="text"
              className="form-control"
              id="img"
              value={editedUsuario?.img}
              onChange={(e) =>
                setEditedUsuario({ ...editedUsuario, img: e.target.value })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleEditProfile}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
