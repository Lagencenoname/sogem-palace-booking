
import React from 'react';
import { Users, Clock, Wifi, Car, Zap, Building, Projector, UserCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ServicesSection = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Coworking Open Space",
      capacity: "Espace partagé",
      pricing: [
        { period: "Jour (8h-17h)", price: "1 000F" },
        { period: "Soir (17h-22h)", price: "1 500F" }
      ],
      features: ["Wi-Fi haut débit", "Prises électriques", "Ambiance collaborative"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Bureaux privés",
      capacity: "Espace individuel",
      pricing: [
        { period: "À l'heure", price: "2 500F" }
      ],
      features: ["Confidentialité totale", "Climatisation", "Mobilier équipé"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Salle de réunion",
      capacity: "15 places",
      pricing: [
        { period: "À l'heure", price: "5 000F" },
        { period: "À la journée", price: "15 000F" }
      ],
      features: ["Projecteur inclus", "Tableau blanc", "Climatisation"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Salle de conférence",
      capacity: "50 places",
      pricing: [
        { period: "À l'heure", price: "10 000F" },
        { period: "À la journée", price: "50 000F" }
      ],
      features: ["Équipement audiovisuel", "Sonorisation", "Éclairage professionnel"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Grande salle événements",
      capacity: "100 places",
      pricing: [
        { period: "À l'heure", price: "15 000F" },
        { period: "À la journée", price: "100 000F" }
      ],
      features: ["Scène équipée", "Système audio complet", "Éclairage événementiel"]
    }
  ];

  const amenities = [
    { icon: <Wifi className="w-6 h-6" />, title: "WiFi haut débit", description: "Connexion fibre optique" },
    { icon: <Projector className="w-6 h-6" />, title: "Projecteur", description: "Équipement de présentation" },
    { icon: <UserCheck className="w-6 h-6" />, title: "Secrétariat", description: "Service d'assistance" },
    { icon: <Car className="w-6 h-6" />, title: "Parking gratuit", description: "Stationnement sécurisé" },
    { icon: <Zap className="w-6 h-6" />, title: "Groupe électrogène", description: "Alimentation continue" },
    { icon: <Building className="w-6 h-6" />, title: "Domiciliation", description: "Adresse d'entreprise" }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des espaces flexibles et équipés pour répondre à tous vos besoins professionnels
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-sogem-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sogem-orange group-hover:text-white transition-all duration-300">
                  <div className="text-sogem-orange group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                <Badge variant="secondary" className="w-fit mx-auto">{service.capacity}</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Tarifs */}
                <div className="space-y-2">
                  {service.pricing.map((price, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">{price.period}</span>
                      <span className="font-bold text-sogem-orange text-lg">{price.price}</span>
                    </div>
                  ))}
                </div>
                
                {/* Caractéristiques */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-700 uppercase tracking-wide">Inclus</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-sogem-orange rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Équipements & Services */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Équipements & Services inclus</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 bg-sogem-orange bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <div className="text-sogem-orange">
                    {amenity.icon}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{amenity.title}</h4>
                  <p className="text-sm text-gray-600">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note accessibilité */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-green-50 text-green-800 px-4 py-2 rounded-full">
            <UserCheck size={16} className="mr-2" />
            <span className="text-sm font-medium">Accessibilité PMR - Tous nos espaces sont accessibles</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
