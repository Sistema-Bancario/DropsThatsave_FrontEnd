import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { useState } from 'react';
import { userRegistro } from './USER/model/usuarioRegistro';
import Swal from 'sweetalert2';
import { apiRegistro } from './Login/api/apiRegistro';

function Registro() {
    const [agregar, setAgregar] = useState(userRegistro);
    const EnvioDatos = async () => {
        // Validar que todos los campos estén llenos
        if (
          !agregar.userRegistro.nombre ||
          !agregar.userRegistro.correo ||
          !agregar.userRegistro.password ||
          !agregar.userRegistro.tipoSangre ||
          !agregar.userRegistro.telefono ||
          !agregar.userRegistro.direccion
        ) {
          Swal.fire({
            icon: 'error',
            title: 'Error, por favor complete todos los campos.',
            showConfirmButton: true,
            confirmButtonText: 'OK',
          });
          return;
        }
      
        // Validar que el campo correo tenga una estructura de email válida
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(agregar.userRegistro.correo)) {
          Swal.fire({
            icon: 'error',
            title: 'Error, por favor ingrese un correo válido.',
            showConfirmButton: true,
            confirmButtonText: 'OK',
          });
          return;
        }
      
        // Validar que la contraseña tenga al menos 7 caracteres
        if (agregar.userRegistro.password.length < 7) {
          Swal.fire({
            icon: 'error',
            title: 'Error, la contraseña debe tener al menos 7 caracteres.',
            showConfirmButton: true,
            confirmButtonText: 'OK',
          });
          return;
        }
      
        // Validar que el campo teléfono tenga menos de 8 dígitos
        if (agregar.userRegistro.telefono.length >= 8) {
          Swal.fire({
            icon: 'error',
            title: 'Error, el número de teléfono debe tener menos de 8 dígitos.',
            showConfirmButton: true,
            confirmButtonText: 'OK',
          });
          return;
        }
      
        // Si todas las validaciones pasan, se envían los datos
        const resultado = await apiRegistro(agregar);
        if (resultado) {
          Swal.fire({
            icon: 'success',
            title: 'Genial, se ha agregado el usuario!',
            showConfirmButton: true,
            confirmButtonText: 'OK',
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = '/';
            } else {
              window.location.href = '/';
            }
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error, no se ha podido agregar usuario!',
            showConfirmButton: true,
            confirmButtonText: 'OK',
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = '/';
            } else {
              window.location.href = '/';
            }
          });
        }
      };
      
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registro</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Tu Nombre' id='form1' type='text' className='w-100' 
                onChange={(event)=> setAgregar({

                    userRegistro:{
                        ...agregar.userRegistro,
                        nombre: event.target.value
                    }
                })}
                required
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Tu correo' id='form2' type='email'
                 onChange={(event)=> setAgregar({

                    userRegistro:{
                        ...agregar.userRegistro,
                        correo: event.target.value
                    }

                })
            }
            required
                
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Contraseña' id='form3' type='password'
                 onChange={(event)=> setAgregar({

                    userRegistro:{
                        ...agregar.userRegistro,
                        password: event.target.value
                    }
                })}
                minLength={7}
                required
                />
              </div>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Tu Tipo de sangre' id='form1' type='text' className='w-100'
                 onChange={(event)=> setAgregar({

                    userRegistro:{
                        ...agregar.userRegistro,
                        tipoSangre: event.target.value
                    }
                })}/>
              </div>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Tu Telefono' id='form1' type='text' className='w-100'
                 onChange={(event)=> setAgregar({

                    userRegistro:{
                        ...agregar.userRegistro,
                        telefono: event.target.value
                    }
                })}
                minLength={8}
                required
                />
              </div>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Tu Direccion' id='form1' type='text' className='w-100'
                 onChange={(event)=> setAgregar({

                    userRegistro:{
                        ...agregar.userRegistro,
                        direccion: event.target.value
                    }
                })}
                required
                />
              </div>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <input label='Tatuajes' id='form1' type='checkbox' className='form-check-input'
                 onChange={(event)=> 
                    
                    setAgregar({

                    userRegistro:{
                        ...agregar.userRegistro,
                        tatuajes: event.target.checked
                    }
                })}
                required
                />
                 <label>
                    Tatuajes
                </label>
              </div>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <input label='Enfermedades' id='form1' type='checkbox' className='form-check-input'
                
                onChange={(event)=> setAgregar({

                    userRegistro:{
                        ...agregar.userRegistro,
                        enfermedades: event.target.checked
                    }
                })}
                required
                />
                <label>
                    Enfermedades
                </label>
              </div>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Imagen' id='form1' type='text' className='w-100'
                 onChange={(event)=> setAgregar({

                    userRegistro:{
                        ...agregar.userRegistro,
                        imagen: event.target.value
                    }
                })}
                required
                
                />
              </div>
              

           

              <MDBBtn onClick={()=>{
                EnvioDatos()
              }}  className='mb-4' size='lg'>Registrate</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
       
      </MDBCard>

    </MDBContainer>
    
  );
}

export default Registro;