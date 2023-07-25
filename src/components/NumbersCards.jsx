import React from 'react'
import NumberCard from './NumberCard'
import { BsFillHeartFill } from 'react-icons/bs'
import { AiOutlineLineChart } from 'react-icons/ai'
import { MdOutlineLocalHospital } from 'react-icons/md'

const NumbersCards = () => {
  return (
    <section className='cards-container-2'>
      <h1>
        Ayudanos a crecer el numero!
      </h1>
      <div className='card-flex'>

        <NumberCard Icon={BsFillHeartFill} title={"Vidas Salvadas"} targetNumber={330} timeout={15} />

        <NumberCard Icon={AiOutlineLineChart} title={"Donantes Activos"} targetNumber={420} timeout={10} />

        <NumberCard Icon={MdOutlineLocalHospital} title={"Bancos de Sangre"} targetNumber={20} timeout={20} />


      </div>
    </section>

  )
}

export default NumbersCards
