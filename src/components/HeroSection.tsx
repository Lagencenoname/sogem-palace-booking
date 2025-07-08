
import React from 'react';
import { ArrowRight, MapPin, Wifi, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen bg-gradient-to-br from-sogem-orange to-sogem-orange-dark pt-16">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <MapPin size={16} className="mr-2" />
            <span className="text-sm font-medium">Tankpè, Abomey-Calavi - Bénin</span>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in-left">
            <span className="block">SOGEM PALACE</span>
            <span className="block text-2xl md:text-3xl font-light mt-4 text-orange-100">
              L'espace idéal pour votre quiétude
            </span>
          </h1>

          {/* Sous-titre */}
          <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto animate-fade-in">
            Centre d'affaires & coworking premium au cœur de Tankpè
          </p>

          {/* Offre spéciale */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 mb-10 max-w-2xl mx-auto animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">🎯 Offre Accessible</h3>
            <p className="text-lg mb-4">
              "Louez selon votre budget, même à partir de <span className="font-bold text-3xl">1 000F</span>"
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-white bg-opacity-20 rounded-full px-3 py-1">
                <Wifi size={16} className="mr-2" />
                <span>Wi-Fi haut débit</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 rounded-full px-3 py-1">
                <Clock size={16} className="mr-2" />
                <span>Ouvert 7j/7</span>
              </div>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              onClick={scrollToReservation}
              size="lg"
              className="bg-white text-sogem-orange hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Réserver maintenant
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-white text-white hover:bg-white hover:text-sogem-orange font-semibold text-lg px-8 py-4 rounded-full"
            >
              Découvrir nos services
            </Button>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-sm text-orange-200">Types d'espaces</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100</div>
              <div className="text-sm text-orange-200">Places maximum</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">7j/7</div>
              <div className="text-sm text-orange-200">Ouverture</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1000F</div>
              <div className="text-sm text-orange-200">À partir de</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
