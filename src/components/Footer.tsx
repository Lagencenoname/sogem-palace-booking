
import React from 'react';
import { MapPin, Phone, Clock, Wifi } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-sogem-orange mb-4">SOGEM PALACE</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Centre d'affaires et espace de coworking premium situé à Tankpè. 
              L'endroit idéal pour développer vos projets dans un environnement professionnel et convivial.
            </p>
            <div className="flex items-center text-sm text-gray-400 mb-2">
              <Wifi size={16} className="mr-2 text-sogem-orange" />
              <span className="mr-4">Wi-Fi disponible</span>
              <Clock size={16} className="mr-2 text-sogem-orange" />
              <span>Ouvert 7j/7</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone size={16} className="mr-3 mt-1 text-sogem-orange flex-shrink-0" />
                <a href="tel:+2290140353479" className="text-gray-300 hover:text-white transition-colors">
                  +229 01 40 35 34 79
                </a>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-3 mt-1 text-sogem-orange flex-shrink-0" />
                <address className="text-gray-300 not-italic leading-relaxed">
                  Fin clôture IITA, 2e Von à gauche en quittant Carrefour IITA pour Tankpè Carrefour<br />
                  Tankpè, Abomey-Calavi - Bénin
                </address>
              </div>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="space-y-3">
              <a 
                href="https://www.instagram.com/sogempalace/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-pink-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">ig</span>
                </div>
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100086807417537" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">f</span>
                </div>
                Facebook
              </a>
              <a 
                href="https://www.tiktok.com/@sogem.palace" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-red-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center mr-3 border border-gray-600">
                  <span className="text-white text-sm font-bold">tt</span>
                </div>
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation et copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 SOGEM PALACE. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
