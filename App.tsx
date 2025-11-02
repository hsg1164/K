import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {

  useEffect(() => {
    const starsContainer = document.getElementById('stars-container');
    if (starsContainer && starsContainer.children.length === 0) {
        // Stars
        for (let i = 0; i < 150; i++) {
            const star = document.createElement('div');
            const size = Math.random();
            let starClass = 'star small';
            if (size > 0.66) starClass = 'star large';
            else if (size > 0.33) starClass = 'star medium';
            star.className = starClass;
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            const duration = Math.random() * 5 + 3;
            star.style.setProperty('--twinkle-duration', `${duration}s`);
            star.style.animationDelay = `${Math.random() * duration}s`;
            starsContainer.appendChild(star);
        }
        // Shooting stars
        for (let i = 0; i < 3; i++) {
            const shootingStar = document.createElement('div');
            shootingStar.className = 'shooting-star';
            shootingStar.style.top = `${Math.random() * 60}%`;
            shootingStar.style.right = `-${Math.random() * 200}px`;
            const duration = Math.random() * 5 + 5;
            shootingStar.style.setProperty('--shooting-duration', `${duration}s`);
            shootingStar.style.animationDelay = `${Math.random() * duration}s`;
            shootingStar.style.setProperty('--rotation-angle', `${Math.random() * -30 - 15}deg`);
            starsContainer.appendChild(shootingStar);
        }
    }
  }, []);


  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
