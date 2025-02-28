import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const TerraTruck: React.FC = () => {
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
            "url(https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80"></div>

        <div className="container mx-auto px-4 z-10">
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl font-heading font-bold italic uppercase tracking-wider text-white mb-6"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            TERRA TRUCK
          </h1>
        </div>
      </section>

      {/* Exterior Section */}
      <section
        ref={exteriorRef}
        className="section-transition py-20 bg-gradient-to-b from-black to-apex-gray/30"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold uppercase tracking-wider text-white mb-6">
                Rugged Dominance
              </h2>
              <p className="text-lg text-white mb-6">
                The Terra Truck commands attention with its imposing stance and
                uncompromising design. Built to conquer any terrain, it combines
                raw power with sophisticated engineering for those who demand
                the extraordinary.
              </p>
              <ul className="space-y-3 text-white">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-apex-red rounded-full mr-3"></span>
                  High-strength steel frame with reinforced chassis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-apex-red rounded-full mr-3"></span>
                  Advanced off-road suspension system
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-apex-red rounded-full mr-3"></span>
                  Integrated winch and recovery points
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-apex-red rounded-full mr-3"></span>
                  24" all-terrain wheels with custom tires
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://i.ibb.co/GQd7tmYt/wp1989249.jpg"
                alt="Terra Truck Exterior"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interior Section */}
      <section
        ref={interiorRef}
        className="section-transition py-20 bg-gradient-to-b from-apex-gray/30 to-black"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold uppercase tracking-wider text-white mb-12 text-center">
            INTERIORS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Terra Truck Interior"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-heading font-bold uppercase tracking-wider text-apex-beige mb-6">
                Refined Toughness
              </h3>
              <p className="text-lg text-white mb-6">
                The Terra's interior blends rugged durability with unexpected
                luxury. Premium leather meets weather-resistant materials, while
                advanced technology ensures you stay connected no matter how far
                off the grid you venture.
              </p>
              <ul className="space-y-3 text-white">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-apex-red rounded-full mr-3"></span>
                  Premium leather with contrast stitching
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-apex-red rounded-full mr-3"></span>
                  Configurable digital instrument cluster
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-apex-red rounded-full mr-3"></span>
                  Off-road navigation system with satellite connectivity
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-apex-red rounded-full mr-3"></span>
                  Climate-controlled storage compartments
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

export default TerraTruck;
