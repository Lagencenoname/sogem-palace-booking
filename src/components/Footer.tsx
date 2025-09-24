import React from 'react';
import { MapPin, Phone, Clock, Wifi, Instagram, Facebook, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-sogem-orange mb-4">SOGEM PALACE</h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-lg">
              Centre d'affaires et espace de coworking premium situé à Tankpè. 
              L'endroit idéal pour développer vos projets dans un environnement professionnel et convivial.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-400">
              <div className="flex items-center mb-2 sm:mb-0 sm:mr-6">
                <Wifi size={16} className="mr-2 text-sogem-gold" />
                <span className="font-semibold text-gray-200">Wi-Fi disponible</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-sogem-gold" />
                <span className="font-semibold text-gray-200">Ouvert 7j/7</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-gray-100">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-sogem-gold rounded-md flex items-center justify-center flex-shrink-0 mr-3">
                  <Phone size={16} className="text-white" />
                </div>
                <a href="tel:+2290195957142" className="text-gray-300 hover:text-sogem-orange transition-colors duration-200 mt-0.5">
                  +229 01 95 95 71 42
                </a>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-sogem-gold rounded-md flex items-center justify-center flex-shrink-0 mr-3">
                  <MapPin size={16} className="text-white" />
                </div>
                <address className="text-gray-300 not-italic leading-relaxed mt-0.5">
                  Fin clôture IITA, 2e Von à gauche en quittant Carrefour IITA pour Tankpè Carrefour<br />
                  Tankpè, Abomey-Calavi - Bénin
                </address>
              </div>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-gray-100">Suivez-nous</h4>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/sogempalace/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivez-nous sur Instagram"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100086807417537"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivez-nous sur Facebook"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@sogem.palace"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivez-nous sur TikTok"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation et copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 SOGEM PALACE. Tous droits réservés.
            <span className="ml-5">
            Boostez votre business. <a href="https://kloo.me/noname" className="text-sogem-orange hover:underline">Découvrez comment.</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
