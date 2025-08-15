import React, { useState } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50 transition-transform duration-300 ease-in-out">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-sogem-orange rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">SP</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">SOGEM PALACE</h1>
              <p className="text-xs md:text-sm text-gray-500">Centre d'affaires & Coworking</p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-sogem-orange font-medium transition-colors duration-200 cursor-pointer">Accueil</a>
            <a onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-sogem-orange font-medium transition-colors duration-200 cursor-pointer">Services</a>
            <a onClick={() => scrollToSection('reservation')} className="text-gray-700 hover:text-sogem-orange font-medium transition-colors duration-200 cursor-pointer">Réservation</a>
            <a onClick={() => scrollToSection('galerie')} className="text-gray-700 hover:text-sogem-orange font-medium transition-colors duration-200 cursor-pointer">Galerie</a>
            <a onClick={() => scrollToSection('localisation')} className="text-gray-700 hover:text-sogem-orange font-medium transition-colors duration-200 cursor-pointer">Localisation</a>
          </nav>

          {/* Contact Info Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-8 h-8 bg-sogem-gold rounded-md flex items-center justify-center">
                <Phone size={16} className="text-white" />
              </div>
              <a href="tel:+2290195957142" className="hover:text-sogem-orange transition-colors duration-200 font-medium">
                +229 01 95 95 71 42
              </a>
            </div>
            <Button
              onClick={() => scrollToSection('reservation')}
              className="bg-sogem-orange hover:bg-sogem-gold text-white font-semibold transition-colors duration-200"
            >
              Réserver
            </Button>
          </div>

          {/* Menu Mobile & Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div 
        className={`lg:hidden fixed top-16 left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <nav className="flex flex-col space-y-4 border-b pb-4">
            <a onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-sogem-orange font-medium transition-colors cursor-pointer">Accueil</a>
            <a onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-sogem-orange font-medium transition-colors cursor-pointer">Services</a>
            <a onClick={() => scrollToSection('reservation')} className="text-gray-700 hover:text-sogem-orange font-medium transition-colors cursor-pointer">Réservation</a>
            <a onClick={() => scrollToSection('galerie')} className="text-gray-700 hover:text-sogem-orange font-medium transition-colors cursor-pointer">Galerie</a>
            <a onClick={() => scrollToSection('localisation')} className="text-gray-700 hover:text-sogem-orange font-medium transition-colors cursor-pointer">Localisation</a>
          </nav>
          <div className="pt-4">
            <Button
              onClick={() => scrollToSection('reservation')}
              className="w-full bg-sogem-orange hover:bg-sogem-gold text-white font-semibold transition-colors duration-200"
            >
              Réserver maintenant
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
