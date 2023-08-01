import React, { useState } from "react";
import Swal from "sweetalert2";
import { sendData } from "../helpers/solicitudHelper";

export const FormSolicitud = ({ solicitud, option, _id }) => {
  const [state, setState] = useState({
    litros: solicitud.litros || "",
    enfermedad: solicitud.enfermedad === null ? "no" : solicitud.enfermedad,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const cantidadLitrosSolicitud = solicitud.litros;
    const cantidadLitrosDonacion = parseInt(state.litros);

    if (cantidadLitrosDonacion <= cantidadLitrosSolicitud) {
      sendData(state, 1, solicitud._id);
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "La cantidad de litros donados no puede ser mayor a la cantidad de litros de la solicitud.",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-black">Cantidad de litros: </label>
          <input
            type="number"
            className="form-control"
            name="litros"
            value={state.litros}
            required
            min="0"
            onChange={(event) =>
              setState({
                ...state,
                litros: event.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label className="text-black">¿Tienes alguna enfermedad?</label>
          <div>
            <label>
              <input
                type="radio"
                name="enfermedad"
                value="si"
                checked={state.enfermedad === "si"}
                required
                onChange={(event) =>
                  setState({
                    ...state,
                    enfermedad: event.target.value,
                  })
                }
              />{" "}
              Sí
            </label>
            <label style={{ marginLeft: "10px" }}>
              <input
                type="radio"
                name="enfermedad"
                value="no"
                checked={state.enfermedad === "no"}
                onChange={(event) =>
                  setState({
                    ...state,
                    enfermedad: event.target.value,
                  })
                }
              />{" "}
              No
            </label>
          </div>
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
