import React from 'react';
import HomeNavBar from './src/components/HomeNavBar';
import "./src/CSS/Global.css"
import Slider from './src/components/Slider';
import 'animate.css'
import PasosCards from './src/components/PasosCards';
import NumbersCards from './src/components/NumbersCards';
import MiniSlider from './src/components/MiniSlider';
import Footer from './src/components/Footer';
import Contenidouno from './src/components/content1';




const HomePage = () => {
  return (
    <main className='home-main-container'>
      <HomeNavBar />
      <Slider />
      <Contenidouno></Contenidouno>
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
