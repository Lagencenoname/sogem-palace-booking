
import React from 'react';
import { MapPin, Phone, Mail, Clock, Wifi, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-sogem-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SP</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">SOGEM PALACE</h3>
                <p className="text-sm text-gray-400">Centre d'affaires & Coworking</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              L'espace idéal pour votre quiétude professionnelle. 
              Des bureaux modernes et équipés pour tous vos besoins.
            </p>
            <div className="flex items-center space-x-2 text-green-400 text-sm">
              <Wifi size={16} />
              <span>Wi-Fi disponible</span>
              <span className="mx-2">•</span>
              <Clock size={16} />
              <span>Ouvert 7j/7</span>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-sogem-orange">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-sogem-orange mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Fin clôture IITA, 2e Von à gauche</p>
                  <p>Carrefour IITA pour Tankpè Carrefour</p>
                  <p className="font-medium">Tankpè, Abomey-Calavi - Bénin</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-sogem-orange" />
                <a 
                  href="tel:+2290140353479" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  +229 01 40 35 34 79
                </a>
              </div>
            </div>
          </div>

          {/* Services rapides */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-sogem-orange">Nos Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Coworking Open Space</li>
              <li>• Bureaux privés</li>
              <li>• Salles de réunion</li>
              <li>• Salles de conférence</li>
              <li>• Espaces événementiels</li>
              <li>• Domiciliation d'entreprise</li>
            </ul>
          </div>

          {/* Réseaux sociaux et actions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-sogem-orange">Suivez-nous</h4>
            <div className="space-y-3">
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://www.facebook.com/profile.php?id=100086807417537', '_blank')}
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  <Facebook size={16} />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://www.instagram.com/sogempalace/', '_blank')}
                  className="border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white"
                >
                  <Instagram size={16} />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://www.tiktok.com/@sogem.palace', '_blank')}
                  className="border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white text-xs px-2"
                >
                  TikTok
                </Button>
              </div>
              
              <div className="space-y-2">
                <Button
                  onClick={() => window.open('https://wa.me/2290140353479', '_blank')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-sm"
                >
                  <Phone className="mr-2" size={16} />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full border-sogem-orange text-sogem-orange hover:bg-sogem-orange hover:text-white text-sm"
                >
                  Réserver maintenant
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Horaires spéciaux */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <h4 className="text-lg font-semibold text-sogem-orange mb-4">Horaires d'ouverture</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-white">Coworking Open Space</p>
                <p className="text-gray-300">Jour : 8h - 17h (1 000F)</p>
                <p className="text-gray-300">Soir : 17h - 22h (1 500F)</p>
              </div>
              <div>
                <p className="font-medium text-white">Salles de réunion/conférence</p>
                <p className="text-gray-300">Sur réservation</p>
                <p className="text-gray-300">7 jours sur 7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} SOGEM PALACE. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Centre d'affaires premium</span>
              <span>•</span>
              <span>Tankpè, Bénin</span>
              <span>•</span>
              <span>Accessible PMR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
