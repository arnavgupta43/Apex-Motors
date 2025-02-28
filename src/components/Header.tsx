import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SubscriptIcon as ScriptIcon } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-apex-gray to-apex-beige bg-opacity-90 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <ScriptIcon className="h-8 w-8 text-apex-red" />
          <span className="ml-2 text-2xl font-bold italic text-white">Scout</span>
        </Link>

        <nav className="flex items-center space-x-8">
          <Link
            to="/traveler"
            className={`nav-link ${isActive('/traveler') ? 'active' : ''}`}
          >
            Traveler SUV
          </Link>
          <Link
            to="/terra"
            className={`nav-link ${isActive('/terra') ? 'active' : ''}`}
          >
            Terra Truck
          </Link>
          <Link
            to="/reserve"
            className={`reserve-btn ${
              scrolled ? 'bg-apex-red' : 'bg-transparent border border-white'
            }`}
          >
            Reserve
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;