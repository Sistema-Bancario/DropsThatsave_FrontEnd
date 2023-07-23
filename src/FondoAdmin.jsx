import React, { useEffect } from 'react';
import './CSS/FondoAdmin.css';

const ParticleBackground = () => {
  useEffect(() => {
    const numParticles = 50;
    const particlesContainer = document.getElementById('particles-container');

    const createParticles = () => {
      for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('span');
        particle.className = 'particle';
        particlesContainer.appendChild(particle);

        const positionX = Math.random() * window.innerWidth;
        const positionY = Math.random() * window.innerHeight;
        particle.style.left = `${positionX}px`;
        particle.style.top = `${positionY}px`;
      }
    };

    const updateAnimations = () => {
      for (let i = 0; i < numParticles; i++) {
        const particle = particlesContainer.children[i];
        if (particle) {
          const randomAnimation = getRandomAnimation();
          particle.style.animation = `${randomAnimation} 2s linear infinite`;
        }
      }
    };

    const getRandomAnimation = () => {
      const animations = ['moveRight', 'moveLeft', 'moveUp', 'moveDown'];
      const randomIndex = Math.floor(Math.random() * animations.length);
      return animations[randomIndex];
    };

    createParticles(); 
    updateAnimations(); 

    const animationInterval = setInterval(() => {
      updateAnimations();
    }, 5000); 

    return () => {
      clearInterval(animationInterval); 
    };
  }, []);

  return (
    <div id="particles-container">
    </div>
  );
};

export default ParticleBackground;
