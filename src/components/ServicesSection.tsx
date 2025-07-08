
import React from 'react';
import { Wifi, Car, Zap, Users, Building2, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: "Coworking Open Space",
      price: "1 000F",
      duration: "jour (8h-17h)",
      priceEvening: "1 500F",
      durationEvening: "soir (17h-22h)",
      icon: Users,
      description: "Espace de travail partagé dans un environnement stimulant"
    },
    {
      title: "Bureau privé",
      price: "2 500F",
      duration: "heure",
      icon: Building2,
      description: "Espace de travail personnel pour plus de confidentialité"
    },
    {
      title: "Salle de réunion",
      price: "5 000F",
      duration: "heure",
      priceDay: "15 000F",
      durationDay: "jour",
      capacity: "15 places",
      icon: Users,
      description: "Parfait pour vos réunions d'équipe et présentations"
    },
    {
      title: "Salle de conférence",
      price: "10 000F",
      duration: "heure",
      priceDay: "50 000F",
      durationDay: "jour",
      capacity: "50 places",
      icon: Users,
      description: "Idéal pour vos conférences et séminaires"
    },
    {
      title: "Grande salle événements",
      price: "15 000F",
      duration: "heure",
      priceDay: "100 000F",
      durationDay: "jour",
      capacity: "100 places",
      icon: Calendar,
      description: "Espace premium pour vos grands événements"
    }
  ];

  const amenities = [
    { name: "Wi-Fi haut débit", icon: Wifi },
    { name: "Projecteur", icon: Building2 },
    { name: "Secrétariat disponible", icon: Users },
    { name: "Parking gratuit", icon: Car },
    { name: "Groupe électrogène", icon: Zap }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des espaces adaptés à tous vos besoins professionnels, avec des tarifs accessibles
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-0 bg-white">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-sogem-orange bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="text-sogem-orange" size={24} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  {service.capacity && (
                    <p className="text-sm text-sogem-orange font-semibold">{service.capacity}</p>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-sogem-orange">{service.price}</span>
                      <span className="text-gray-500">/ {service.duration}</span>
                    </div>
                    {service.priceEvening && (
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-sogem-orange">{service.priceEvening}</span>
                        <span className="text-gray-500">/ {service.durationEvening}</span>
                      </div>
                    )}
                    {service.priceDay && (
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-sogem-orange">{service.priceDay}</span>
                        <span className="text-gray-500">/ {service.durationDay}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Équipements inclus */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Équipements & Services inclus</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {amenities.map((amenity, index) => {
              const IconComponent = amenity.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-sogem-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="text-sogem-orange" size={24} />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{amenity.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
