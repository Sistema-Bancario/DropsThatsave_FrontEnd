import React from "react";
import "./CSS/contacto.css"; 
import carta from "./img/carta.png";
import github from "./img/github.png";
import instagram from "./img/instagram.png";
import linkedin from "./img/linkedin.png";

export const ContactoForm = () => {
  return (
    <div className="contencontacto">
      <div className="cardcont">
        <div className="left-section">
          <div className="form-group">
            <input type="text" id="name" placeholder="Nombre" />
          </div>

          <div className="form-group">
            <input type="email" id="email" placeholder="Correo" />
          </div>

          <div className="form-group">
            <textarea
              id="message"
              className="message-input"
              placeholder="Mensaje"
              rows="5"
            ></textarea>
          </div>

          <div className="form-group">
            <button className="send-button" type="submit">
              Enviar
            </button>
          </div>

          <div className="divider"></div>

          <div className="image-row">
            <img
              src={carta} 
              alt="Imagen 1"
              className="image"
            />
            <img
              src={github} 
              alt="Imagen 2"
              className="image"
            />
            <img
              src={instagram} 
              alt="Imagen 3"
              className="image"
            />
            <img
              src={linkedin} 
              alt="Imagen 4"
              className="image"
            />
          </div>
        </div>
        <div className="right-section">
          <div className="drop-that-saves">DropThatSaves</div>
        </div>
      </div>
    </div>
  );
};
