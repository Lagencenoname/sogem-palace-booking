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
   <section className="bg-white py-12">
  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-8">
    
    {/* Texte et contenu à gauche */}
    <div className="flex-1">
      {/* Badge localisation */}
      <div className="inline-block px-3 py-1 mb-4 rounded-full bg-gray-200 text-gray-700 text-sm font-medium">
        📍 Cotonou, Bénin
      </div>

      {/* Titre */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        Sogem Palace – L’élégance et le confort au cœur de la ville
      </h1>

      {/* Boutons dans une div séparée */}
      <div className="mt-6 flex space-x-4">
        <button className="bg-orange-500 text-white px-5 py-3 rounded-xl hover:bg-orange-600 transition">
          Réserver Maintenant
        </button>
        <button className="bg-gray-100 text-gray-800 px-5 py-3 rounded-xl hover:bg-gray-200 transition">
          Découvrir
        </button>
      </div>
    </div>

    {/* Image à droite */}
    <div className="flex-1 mt-8 md:mt-0">
      <img
        src="/images/sogem-palace.jpg"
        alt="Sogem Palace"
        className="rounded-3xl shadow-lg w-full object-cover"
      />
    </div>
  </div>
</section>
  );
};

export default HeroSection;
