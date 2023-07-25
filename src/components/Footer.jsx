import React from 'react'

const Footer = () => {
  return (
    <footer
      style={{ marginTop: "2rem" }}
      className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Sobre nosotros</h6>
            <p className="text-justify">Nuestro equipo altamente capacitado y comprometido trabaja incansablemente para asegurar que cada donación se gestione de manera segura y eficiente, para que la sangre llegue a quienes más la necesitan en momentos cruciales.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categorias</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Links</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/">Nosotros</a></li>
              <li><a href="http://scanfcode.com/contact/">Contacto</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Dona</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by
              <a href="#"> Fundacion Kinal</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
