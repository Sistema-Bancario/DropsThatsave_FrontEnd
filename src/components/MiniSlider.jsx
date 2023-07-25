import React, { useEffect, useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { BiSolidDroplet } from 'react-icons/bi'
import 'animate.css'

const slides = [
  {
    image: "https://scontent.fgua9-2.fna.fbcdn.net/v/t39.30808-6/314912388_829930834988254_1503536527708684108_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=_eBGPStICLsAX-Nu3_d&_nc_ht=scontent.fgua9-2.fna&oh=00_AfCJTgw0cwdPwkU1brlBlaanVF-C4rKz-D89A4gh-bff5Q&oe=64C3FA86"
  },
  {
    image: "https://www.herrerallerandi.com/images/logo-trans.png"
  },
  {
    image: "https://hospitalesperanza.com/wp-content/uploads/2020/07/hue-logo.png"
  }
]

const MiniSlider = () => {
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
    <div className='slider-container'
      style={{ maxHeight: "300px", minHeight: "300px", }}
    >
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
                style={{ objectFit: 'contain' }}
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

    </div>
  )
}

export default MiniSlider
