import React from 'react';
import { ArrowRight, Wifi, Clock, Crown } from 'lucide-react';
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
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12">
        
        {/* Bloc gauche - Texte */}
        <div className="flex-1 max-w-lg text-gray-800">
          <div className="flex items-center mb-6">
            <Crown size={32} className="text-yellow-500 mr-3" />
            <span className="text-sm text-gray-500 font-medium">
              Tankpè, Abomey-Calavi - Bénin
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Découvrez <span className="text-yellow-500">SOGEM Palace</span>, 
            l'espace idéal pour votre <span className="text-yellow-500">quiétude</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Centre d'affaires & coworking premium au cœur de Godomey.
          </p>

          {/* Offre Accessible */}
          <div className="bg-orange-500 text-white rounded-2xl p-6 shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-2">Offre Accessible</h3>
            <p className="mb-4">
              Louez selon votre budget, même à partir de{' '}
              <span className="font-bold text-3xl">1 000F</span>
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Wifi size={16} className="mr-2" /> Wi-Fi haut débit
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Clock size={16} className="mr-2" /> Ouvert 7j/7
              </div>
            </div>
          </div>

          {/* Boutons */}
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={scrollToReservation}
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              Réserver maintenant
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-full"
            >
              Découvrir nos services
            </Button>
          </div>
        </div>

        {/* Bloc droite - Image */}
        <div className="flex-1">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/batiment-sogem.jpg" // Remplace par ton image réelle
              alt="Sogem Palace"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
