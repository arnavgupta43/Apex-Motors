import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    )
      .fromTo(
        headlineRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.5'
      )
      .fromTo(
        subheadingRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.3'
      )
      .fromTo(
        buttonRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.2'
      );

    // Feature section animations
    gsap.fromTo(
      featureRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: featureRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-orange-600/30 via-pink-500/20 to-black/70"></div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 
            ref={headlineRef}
            className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-wider text-white mb-6"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            Scouts always come back.
          </h1>
          
          <p 
            ref={subheadingRef}
            className="text-xl md:text-2xl font-light text-white mb-8 max-w-3xl mx-auto"
          >
            Entry model starting as low as $50,000 with available incentives. Retail prices starting under $60,000.
            <br />
            <span className="text-sm">Initial production targeted for 2027. T&C*</span>
          </p>
          
          <Link 
            ref={buttonRef}
            to="/reserve" 
            className="reserve-btn text-lg px-8 py-3"
          >
            Reserve Now
          </Link>
        </div>
      </section>

      {/* Feature Section */}
      <section 
        ref={featureRef}
        className="section-transition py-20 relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-wider text-white mb-6">
              <span className="text-apex-beige">AN OFF -</span><br />
              <span className="text-white">ROAD</span><br />
              <span className="text-apex-red">ICON REBORN</span>
            </h2>
            
            <p className="text-xl text-white max-w-3xl mx-auto">
              THE NEW SCOUT COMBINES PREMIUM POWER WITH UNPARALLELED COMFORT.
              <br />BORN FROM LEGACY, DESIGNED FOR A NEW ERA, READY FOR YOUR NEXT ADVENTURE.
              <br /><span className="text-apex-red font-bold">THE APEX OF THE ROAD AHEAD.</span>
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/traveler" 
              className="px-8 py-3 bg-gray-800/80 hover:bg-gray-700 text-white uppercase font-bold tracking-wider rounded transition-all duration-300"
            >
              Traveler
            </Link>
            <Link 
              to="/terra" 
              className="px-8 py-3 bg-gray-800/80 hover:bg-gray-700 text-white uppercase font-bold tracking-wider rounded transition-all duration-300"
            >
              Terra
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-apex-red py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl md:text-9xl font-heading font-bold uppercase tracking-wider text-white mb-8">
            RESERVE
          </h2>
          <Link 
            to="/reserve" 
            className="px-8 py-3 bg-black text-white uppercase font-bold tracking-wider rounded transition-all duration-300 hover:bg-gray-900"
          >
            RESERVE NOW
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;