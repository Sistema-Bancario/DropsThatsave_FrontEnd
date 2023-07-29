import React, { useEffect, useState } from 'react'
// import logo from '../../public/bigLogo.png'
import { BiSolidDroplet } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const HomeNavBar = () => {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  return (
    <nav
      className="nav-home"
      style={isScrolling ? {
        backgroundColor: 'rgb(146, 0, 0)',
      } : null}
    >

      <h1 className='logo'>
        <span
          style={isScrolling ? {
            fontSize: "30px",
            color: "white"
          } : null}
          className='text'>
          <BiSolidDroplet />
        </span>

      </h1>
      <ul
        style={isScrolling ? {
          fontSize: "20px",
          color: "white",
        } : null}
      >
        <li>
          <Link
            className={isScrolling ? 'hover-black' : null}
          >
            Sobre nosotros
          </Link>
        </li>
        <li>
          <Link
            className={isScrolling ? 'hover-black' : null}
          >

            Nuestros Servicios
          </Link>
        </li>
        <li>
          <Link
            to={'/Login'}
            className={isScrolling ? 'hover-black' : null}
          >
            Iniciar Sesion
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default HomeNavBar
