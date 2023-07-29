import React, { useEffect, useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { BiSolidDroplet } from 'react-icons/bi'
import bg from '../img/bg.jpeg'
import 'animate.css'

const slides = [
  {
    image: "https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1679429320552-ec9038ccd550?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
  },
  {
    image: "https://images.unsplash.com/photo-1564732005956-20420ebdab60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
]

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  useEffect(() => {

    const slideInterval = setInterval(nextSlide, 3000)

    return () => {
      clearInterval(slideInterval)
    }

  }, [current])

  return (
    <div className='slider-container'>
      {slides.map((slide, index) => {

        return (
          <div
            key={index}
            style={
              index == current ? { opacity: 1, transition: 'all 1s' } : { opacity: 0 }

            }
          >
            <IoIosArrowBack
              onClick={prevSlide}
              className="arrowLeft"
              size={50}
            />
            {index === current && (

              <img
                src={slide.image}
                loading='lazy'
              />
            )}

            <IoIosArrowForward
              onClick={nextSlide}
              className="arrowRight"
              size={50}
            />
          </div>
        );

      })}

      <div className='overlay-drop animate__animated animate__fadeInUp'
        style={current !== 1 ? { color: 'red' } : null}
      >
        <BiSolidDroplet size={80} />
        <span>
          Drops that save
        </span>
      </div>


    </div>
  )
}

export default Slider
