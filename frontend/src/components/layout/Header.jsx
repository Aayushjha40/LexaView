import React from 'react';
import { Scale } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-white/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 group">
          <div className="p-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Scale className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            LexaView
          </span>
        </div>
        <nav className="hidden md:flex space-x-8">
          {['Features', 'Pricing', 'Resources', 'About', 'Contact'].map((item, index) => (
            <a 
              key={item}
              href="#" 
              className="relative text-gray-600 hover:text-teal-600 transition-colors duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
