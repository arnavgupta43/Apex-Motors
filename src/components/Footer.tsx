import React from 'react';
import { Link } from 'react-router-dom';
import { SubscriptIcon as ScriptIcon, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-footer py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <ScriptIcon className="h-8 w-8 text-apex-red" />
              <span className="ml-2 text-2xl font-bold italic text-white">Scout</span>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              "Driven to the Peak. Engineered for the Future."
            </p>
            <p className="text-sm text-gray-300">
              © 2025 Apex Motors. All Rights Reserved
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Vehicles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/traveler" className="text-gray-300 hover:text-white transition-colors">
                  Traveler SUV
                </Link>
              </li>
              <li>
                <Link to="/terra" className="text-gray-300 hover:text-white transition-colors">
                  Terra Truck
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Contact</h3>
            <p className="text-gray-300 mb-2">123 Apex Drive, Motor City, CA 90210</p>
            <p className="text-gray-300 mb-2">+1 (800) 555-APEX</p>
            <p className="text-gray-300 mb-4">support@apexmotors.com</p>
            
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;