import React from 'react'
import { Link } from 'react-router-dom';

const PasosCards = () => {
  return (
    <section className='cards-container'>
      <h1>
        Pasos para para donar
      </h1>
      <div className='card-flex'>
        <div className='card'>
          <h3>
            1
          </h3>
          <p>
            Registrate y llena formulario
          </p>
          <Link to="/Registro">
            Registrate Aqui
          </Link>
        </div>
        <div className='card'>
          <h3>
            2
          </h3>
          <p>
            Agenda tu cita
          </p>
          <Link>
            Puedes Agendarla aqui
          </Link>

        </div>
        <div className='card'>
          <h3>3</h3>
          <p>
            Lorem ipsum dolor sit amet,
          </p>
          <Link>
            Aqui
          </Link>
        </div>

      </div>
    </section>
  )
}

export default PasosCards
