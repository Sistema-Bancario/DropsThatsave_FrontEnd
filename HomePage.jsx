import React from 'react';
import HomeNavBar from './src/components/HomeNavBar';
import "./src/CSS/Global.css"
import Slider from './src/components/Slider';
import bg from './public/bg.jpeg'
import 'animate.css'
import PasosCards from './src/components/PasosCards';
import NumbersCards from './src/components/NumbersCards';
import MiniSlider from './src/components/MiniSlider';
import Footer from './src/components/Footer';

const HomePage = () => {
  return (
    <main className='home-main-container'>
      <HomeNavBar />
      <Slider />
      <section className='content-1'>
        <h1 className='animate__animated animate__fadeInDown animate__delay-1s'>
          Banco de sangre Guatemalteco 🇬🇹
        </h1>
        <div className='content-2'>
          <div className='content-2-txt'>
            <p>
              Nuestra página web está dedicada a ser un punto de encuentro entre donantes
              altruistas y pacientes que necesitan de un valioso regalo:
              la sangre que salva vidas. Aquí en el
              Banco de Sangre Guatemalteco, nuestra misión es garantizar el acceso a sangre segura y de alta calidad para todos los guatemaltecos que lo necesiten.
            </p>
            <p
              style={{ color: 'rgb(146, 0 , 0)' }}
              className='animate__animated animate__backInUp animate__delay-1s'
            >
              En nuestra plataforma, encontrarás información completa y
              actualizada sobre los procedimientos de donación, requisitos para
              ser donante, y la importancia vital de este acto solidario.
              También te mantendremos informado acerca de las campañas de donación que
              realizamos periódicamente y cómo puedes ser parte de ellas.
            </p>
            <p>
              Juntos, estamos construyendo una comunidad solidaria y altruista,
              donde cada gota de sangre cuenta para salvar vidas.
              ¡Únete al Banco de Sangre Guatemalteco y seamos héroes anónimos que hacen la diferencia en la vida de nuestros conciudadanos
            </p>
          </div>

          <span>
            <img
              src={bg}
            />
          </span>
        </div>
      </section>
      <PasosCards />
      <div className='divider' />
      <NumbersCards />
      <h1 className='bancos'>
        Bancos afiliados
      </h1>
      <MiniSlider />
      <Footer />

    </main>

  );
};

export default HomePage;
