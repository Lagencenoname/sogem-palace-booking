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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Image de fond */}
      <div className="absolute inset-0">
        <img
          src="/images/sogem-building.jpg"
          alt="Sogem Palace"
          className="w-full h-full object-cover"
        />
        {/* Dégradé sombre */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        {/* Badge localisation */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
          <Star size={16} className="mr-2 text-yellow-300 fill-current" />
          <MapPin size={16} className="mr-2" />
          <span className="text-sm font-medium">
            Tankpè, Abomey-Calavi - Bénin
          </span>
        </div>

        {/* Titre principal */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Crown size={40} className="text-yellow-300 mr-4 hidden sm:block" />
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">
              SOGEM PALACE
            </h1>
            <Crown size={40} className="text-yellow-300 ml-4 hidden sm:block" />
          </div>

          {/* Ligne premium */}
          <div className="relative h-1 w-32 mx-auto mb-6 bg-white/30 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
          </div>

          <p className="text-xl md:text-3xl font-light">
            L'espace idéal pour votre quiétude
          </p>
        </div>

        {/* Sous-titre */}
        <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
          Centre d'affaires & coworking premium au cœur de Godomey
        </p>

        {/* Offre spéciale */}
        <div className="bg-sogem-orange/90 text-white backdrop-blur-sm rounded-3xl p-6 md:p-8 mb-12 max-w-3xl mx-auto shadow-2xl border border-white/20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-white text-sogem-orange rounded-full flex items-center justify-center text-3xl">
              🎯
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Offre Accessible</h3>
          <p className="text-base md:text-lg mb-6 leading-relaxed">
            "Louez selon votre budget, même à partir de{' '}
            <span className="font-bold text-xl md:text-3xl">
              1 000F
            </span>
            "
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center bg-white/20 rounded-full px-4 py-2 border border-white/30">
              <Wifi size={16} className="mr-2" />
              <span>Wi-Fi haut débit</span>
            </div>
            <div className="flex items-center bg-white/20 rounded-full px-4 py-2 border border-white/30">
              <Clock size={16} className="mr-2" />
              <span>Ouvert 7j/7</span>
            </div>
          </div>
        </div>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button
            onClick={scrollToReservation}
            size="lg"
            className="bg-white text-black hover:bg-gray-100 font-bold text-lg px-10 py-5 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            Réserver maintenant
            <ArrowRight size={24} className="ml-3" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              document
                .getElementById('services')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-10 py-5 rounded-full backdrop-blur-sm bg-white/10 transition-all duration-300 hover:scale-105"
          >
            Découvrir nos services
          </Button>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          {[
            { number: '5', label: "Types d'espaces" },
            { number: '100', label: 'Places maximum' },
            { number: '7j/7', label: 'Ouverture' },
            { number: '1000F', label: 'À partir de' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20"
            >
              <div className="text-2xl md:text-4xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-white/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
