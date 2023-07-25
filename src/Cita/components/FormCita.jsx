import React, { useState } from 'react';
import { sendData } from '../helper/citasHelper';

export const FormCita = ({ cita, option }) => { 
  const [state, setState] = useState(cita); 

  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(state, option, cita._id); 
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-black">Fecha</label>
          <input
            type="text"
            className="form-control"
            name="fecha"
            value={state.fecha}
            onChange={(event) =>
              setState({
                ...state,
                fecha: event.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label className="text-black">Hora</label>
          <input
            type="text"
            className="form-control"
            name="hora"
            value={state.hora}
            onChange={(event) =>
              setState({
                ...state,
                hora: event.target.value,
              })
            }
          />
        </div>

        <div className="container text-center">
          <button type="submit" className="btn btn-primary">
            Guardar Cambios
          </button>
        </div>
      </form>
    </>
  );
};
