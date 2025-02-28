import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TravelerSUV from './pages/TravelerSUV';
import TerraTruck from './pages/TerraTruck';
import Reserve from './pages/Reserve';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    // Initialize GSAP animations
    gsap.utils.toArray('.section-transition').forEach((section: any) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Parallax effect for background images
    gsap.utils.toArray('.parallax-bg').forEach((bg: any) => {
      gsap.to(bg, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: bg.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/traveler" element={<TravelerSUV />} />
          <Route path="/terra" element={<TerraTruck />} />
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;