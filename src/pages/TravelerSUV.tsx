import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const TravelerSUV: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const exteriorRef = useRef<HTMLDivElement>(null);
  const interiorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    ).fromTo(
      titleRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 },
      "-=0.5"
    );

    // Section animations
    gsap.fromTo(
      exteriorRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: exteriorRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      interiorRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: interiorRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
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
          backgroundImage:
            "url(https://i.ibb.co/1JsPCPV3/2025-range-rover-electric.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70"></div>

        <div className="container mx-auto px-4 z-10">
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl font-heading font-bold italic uppercase tracking-wider text-white mb-6"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            TRAVELER SUV
          </h1>
        </div>
      </section>

      {/* Exterior Section */}
      <section
        ref={exteriorRef}
        className="section-transition py-20 bg-gradient-to-b from-apex-beige/10 to-apex-gray/10"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold uppercase tracking-wider text-apex-beige mb-6">
                Exterior Design
              </h2>
              <p className="text-lg text-white mb-6">
                The Traveler SUV combines elegant sophistication with rugged
                capability. Its sleek profile features a distinctive floating
                roof design, bold character lines, and our signature LED light
                signature that makes a statement day or night.
              </p>
              <ul className="space-y-3 text-white">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-apex-red rounded-full mr-3"></span>
                  Panoramic glass roof with UV protection
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-apex-red rounded-full mr-3"></span>
                  22" aerodynamic alloy wheels
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-apex-red rounded-full mr-3"></span>
                  Adaptive LED matrix headlights
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-apex-red rounded-full mr-3"></span>
                  Power-deployable door handles
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Traveler SUV Exterior"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interior Section */}
      <section
        ref={interiorRef}
        className="section-transition py-20 bg-gradient-to-b from-apex-gray/10 to-black"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold uppercase tracking-wider text-white mb-12 text-center">
            INTERIORS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://i.ibb.co/gb5fQyvd/1600x686-4.jpg"
                alt="Traveler SUV Interior"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-heading font-bold uppercase tracking-wider text-apex-beige mb-6">
                Luxury Redefined
              </h3>
              <p className="text-lg text-white mb-6">
                Step inside the Traveler and experience a cabin designed around
                you. Premium materials, meticulous craftsmanship, and
                cutting-edge technology create an environment that's both
                sophisticated and functional.
              </p>
              <ul className="space-y-3 text-white">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-apex-red rounded-full mr-3"></span>
                  16-way adjustable heated and ventilated seats
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-apex-red rounded-full mr-3"></span>
                  Dual 12.3" curved displays with haptic feedback
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-apex-red rounded-full mr-3"></span>
                  Premium 18-speaker sound system
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-apex-red rounded-full mr-3"></span>
                  Ambient lighting with 64 color options
                </li>
              </ul>
            </div>
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

export default TravelerSUV;
