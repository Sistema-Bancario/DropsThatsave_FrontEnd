import React, { useState } from "react";
import { sendData } from "../helpers/solicitudHelper";

export const FormSolicitud = ({ solicitud, option, _id }) => {
    const [state, setState] = useState({
        litros: solicitud.litros || "", 
        enfermedad: solicitud.enfermedad || ""
      });

  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(state, 1, solicitud._id);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group ">
          <label className="text-black">cantidad de litros: </label>
          <input
            type="text"
            className="form-control"
            name="litros"
            value={state.litros}
            onChange={(event) =>
              setState({
                ...state,
                litros: event.target.value,
              })
            }
          />
        </div>

        <div className="form-group ">
          <label className="text-black">¿tiene alguna enfermedad?</label>
          <input
            type="text"
            className="form-control"
            name="enfermedad"
            value={state.enfermedad}
            onChange={(event) =>
              setState({
                ...state,
                enfermedad: event.target.value,
              })
            }
          />
        </div>

        <div className="container text-center">
          <button id="btn-enviar" type="submit" className="btn">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};