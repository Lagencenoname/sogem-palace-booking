import React from 'react';
import { ArrowRight, MapPin, Wifi, Clock, Star, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen bg-white overflow-hidden"
    >
      <div className="relative container mx-auto px-4 py-20 pt-24">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto text-gray-800">
          
          {/* Colonne texte */}
          <div className="flex flex-col items-center md:items-center text-center md:text-center">
            
            {/* Badge localisation */}
            <div className="inline-flex items-center bg-gray-800 text-white rounded-full px-6 py-3 mb-8 border border-gray-700 shadow-sm">
              <Star size={16} className="mr-2 text-yellow-400" />
              <MapPin size={16} className="mr-2 text-orange-400" />
              <span className="text-sm font-medium">
                Tankpè, Abomey-Calavi - Bénin
              </span>
            </div>

            {/* Titre */}
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <Crown size={40} className="text-yellow-500 mr-4 hidden sm:block" />
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                  SOGEM PALACE
                </h1>
                <Crown size={40} className="text-yellow-500 ml-4 hidden sm:block" />
              </div>
              <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed">
                L'espace idéal pour votre quiétude
              </p>
            </div>

            {/* Offre accessible */}
            <div className="bg-orange-500 text-white rounded-3xl p-6 md:p-8 mb-12 max-w-lg shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                  🎯
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Offre Accessible</h3>
              <p className="text-base md:text-lg mb-6 leading-relaxed">
                Louez selon votre budget, même à partir de{' '}
                <span className="font-bold text-3xl">1 000F</span>
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                  <Wifi size={16} className="mr-2" /> Wi-Fi haut débit
                </div>
                <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                  <Clock size={16} className="mr-2" /> Ouvert 7j/7
                </div>
              </div>
            </div>

            {/* Boutons centrés */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={scrollToReservation}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-lg px-10 py-5 rounded-full shadow-lg border-2 border-yellow-500"
              >
                Réserver maintenant
                <ArrowRight size={24} className="ml-3" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 font-bold text-lg px-10 py-5 rounded-full"
              >
                Découvrir nos services
              </Button>
            </div>
          </div>

          {/* Colonne image */}
          <div className="flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl w-full max-w-lg">
              <img
                src="public/lovable-uploads/sogem-offers.jpg"
                alt="Sogem Palace"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
