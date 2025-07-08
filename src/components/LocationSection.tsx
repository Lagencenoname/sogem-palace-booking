
import React from 'react';
import { MapPin, Clock, Car, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const LocationSection = () => {
  return (
    <section id="localisation" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nous Trouver</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Idéalement situé à Tankpè, facilement accessible depuis Cotonou et ses environs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informations de localisation */}
          <div className="lg:col-span-1 space-y-6">
            {/* Adresse */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sogem-orange bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-sogem-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Adresse</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Fin clôture IITA, 2e Von à gauche en quittant Carrefour IITA pour Tankpè Carrefour
                    </p>
                    <p className="text-sm text-sogem-orange font-semibold mt-2">
                      Tankpè, Abomey-Calavi - Bénin
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Horaires */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sogem-orange bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-sogem-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Horaires</h3>
                    <div className="space-y-1 text-gray-600">
                      <p><span className="font-medium">Lundi - Dimanche :</span> 8h - 22h</p>
                      <p className="text-sm text-green-600 font-medium">Ouvert 7j/7</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accès */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sogem-orange bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Car className="text-sogem-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Accès & Parking</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>• Parking gratuit disponible</p>
                      <p>• Accessible en voiture et moto</p>
                      <p>• Transport public : Zémidjan disponible</p>
                      <p>• Accessibilité PMR</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="shadow-lg border-sogem-orange border-2">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-sogem-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Contact Direct</h3>
                  <p className="text-gray-600 mb-4">Besoin d'indications ?</p>
                  <Button 
                    onClick={() => window.open('tel:+2290140353479', '_self')}
                    className="w-full bg-sogem-orange hover:bg-sogem-orange-dark mb-2"
                  >
                    <Phone className="mr-2" size={16} />
                    +229 01 40 35 34 79
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.open('https://wa.me/2290140353479?text=Bonjour, j\'ai besoin d\'indications pour me rendre chez SOGEM PALACE.', '_blank')}
                    className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  >
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Carte Google Maps */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7963783657906!2d2.3206378741315197!3d6.420203724356898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a9fbd586dbef%3A0xc6990bb813932021!2sSOGEM%20PALACE!5e0!3m2!1sen!2sbj!4v1751989343449!5m2!1sen!2sbj" 
                    width="100%" 
                    height="500" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                  
                  {/* Overlay avec informations */}
                  <div className="absolute top-4 left-4 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-4 max-w-xs">
                    <h4 className="font-bold text-gray-900 mb-1">SOGEM PALACE</h4>
                    <p className="text-sm text-gray-600">Centre d'affaires & Coworking</p>
                    <div className="flex items-center mt-2 text-xs text-sogem-orange">
                      <div className="w-2 h-2 bg-sogem-orange rounded-full mr-2"></div>
                      <span>Ouvert maintenant</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Boutons d'action pour la carte */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button 
                onClick={() => window.open('https://www.google.com/maps/dir//SOGEM+PALACE,+Abomey-Calavi,+Benin/@6.420203724356898,2.3206378741315197,17z', '_blank')}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <MapPin className="mr-2" size={16} />
                Itinéraire Google Maps
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'SOGEM PALACE - Localisation',
                      text: 'Adresse de SOGEM PALACE',
                      url: 'https://maps.google.com/?q=SOGEM+PALACE,+Abomey-Calavi,+Benin'
                    });
                  } else {
                    navigator.clipboard.writeText('Fin clôture IITA, 2e Von à gauche en quittant Carrefour IITA pour Tankpè Carrefour, Tankpè, Abomey-Calavi - Bénin');
                    alert('Adresse copiée dans le presse-papiers !');
                  }
                }}
                className="flex-1 border-sogem-orange text-sogem-orange hover:bg-sogem-orange hover:text-white"
              >
                Partager l'adresse
              </Button>
            </div>
          </div>
        </div>

        {/* Points de repère */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Comment nous trouver</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-sogem-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                1
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Depuis le Carrefour IITA</h4>
              <p className="text-sm text-gray-600">Prendre la direction de Tankpè Carrefour</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-sogem-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                2
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">2e Von à gauche</h4>
              <p className="text-sm text-gray-600">Tourner à gauche dans la 2e voie</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-sogem-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                3
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Fin clôture IITA</h4>
              <p className="text-sm text-gray-600">SOGEM PALACE se trouve à la fin de la clôture IITA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
