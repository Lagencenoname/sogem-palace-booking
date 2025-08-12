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
      className="relative min-h-screen bg-gradient-to-br from-sogem-orange via-sogem-orange to-sogem-orange-dark overflow-hidden"
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

      <div className="relative container mx-auto px-4 py-20 pt-24">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto text-white">
          {/* Texte */}
          <div className="text-center md:text-left">
            {/* Badge localisation */}
            <div className="inline-flex items-center bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 mb-8 animate-fade-in border border-white/20">
              <Star size={16} className="mr-2 text-yellow-300 fill-current" />
              <MapPin size={16} className="mr-2" />
              <span className="text-sm font-medium">
                Tankpè, Abomey-Calavi - Bénin
              </span>
            </div>

            {/* Titre */}
            <div className="mb-8 animate-slide-in-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Crown
                  size={40}
                  className="text-yellow-300 mr-4 hidden sm:block"
                />
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">
                  SOGEM PALACE
                </h1>
                <Crown
                  size={40}
                  className="text-yellow-300 ml-4 hidden sm:block"
                />
              </div>
              <div className="relative h-1 w-32 mx-auto md:mx-0 mb-6 bg-white/20 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent premium-line"></div>
              </div>
              <p className="text-xl md:text-3xl font-light text-orange-100">
                L'espace idéal pour votre quiétude
              </p>
            </div>

            {/* Sous-titre */}
            <p className="text-lg md:text-2xl mb-10 text-orange-100 max-w-xl animate-fade-in leading-relaxed">
              Centre d'affaires & coworking premium au cœur de Godomey
            </p>

            {/* Offre */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-12 max-w-lg animate-fade-in border border-white/20 shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-3xl">
                  🎯
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Offre Accessible
              </h3>
              <p className="text-base md:text-lg mb-6 leading-relaxed">
                "Louez selon votre budget, même à partir de{' '}
                <span className="font-bold text-xl md:text-3xl bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
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
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start animate-fade-in">
              <Button
                onClick={scrollToReservation}
                size="lg"
                className="bg-white text-sogem-orange hover:bg-gray-100 font-bold text-lg px-10 py-5 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl border-2 border-white/20 glow-effect"
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
                className="border-2 border-white text-white hover:bg-white hover:text-sogem-orange font-bold text-lg px-10 py-5 rounded-full backdrop-blur-sm bg-white/10 transition-all duration-300 hover:scale-105 glow-effect-outline"
              >
                Découvrir nos services
              </Button>
            </div>
          </div>

          {/* Image bâtiment */}
          <div className="relative">
            <img
              src="/images/sogem-building.jpg"
              alt="Bâtiment Sogem Palace"
              className="rounded-3xl shadow-2xl border-4 border-white/20 object-cover w-full h-[500px] transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
