
import React, { useState } from 'react';
import { Calendar, Clock, Users, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    typeEspace: '',
    nombrePersonnes: '',
    date: '',
    heure: '',
    duree: '',
    notes: ''
  });

  const espaces = [
    { value: 'coworking-jour', label: 'Coworking (Jour 8h-17h) - 1 000F' },
    { value: 'coworking-soir', label: 'Coworking (Soir 17h-22h) - 1 500F' },
    { value: 'bureau-prive', label: 'Bureau privé - 2 500F/heure' },
    { value: 'reunion-15', label: 'Salle réunion 15p - 5 000F/h' },
    { value: 'conference-50', label: 'Salle conférence 50p - 10 000F/h' },
    { value: 'evenement-100', label: 'Grande salle 100p - 15 000F/h' }
  ];

  const durees = [
    { value: '1h', label: '1 heure' },
    { value: '2h', label: '2 heures' },
    { value: '3h', label: '3 heures' },
    { value: '4h', label: '4 heures' },
    { value: 'demi-journee', label: 'Demi-journée' },
    { value: 'journee', label: 'Journée complète' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleWhatsAppReservation = () => {
    if (!formData.nom || !formData.telephone || !formData.typeEspace || !formData.date) {
      alert('Veuillez remplir au minimum les champs obligatoires (nom, téléphone, type d\'espace et date)');
      return;
    }

    const espaceLabel = espaces.find(e => e.value === formData.typeEspace)?.label || formData.typeEspace;
    
    const message = `Bonjour, je souhaite réserver un espace chez SOGEM PALACE :

📋 DÉTAILS DE MA RÉSERVATION :
- Nom : ${formData.nom}
- Téléphone : ${formData.telephone}
- Type d'espace : ${espaceLabel}
- Nombre de personnes : ${formData.nombrePersonnes || 'Non spécifié'}
- Date : ${formData.date}
- Heure : ${formData.heure || 'À convenir'}
- Durée : ${formData.duree || 'À convenir'}
${formData.notes ? `- Notes : ${formData.notes}` : ''}

Merci de me confirmer la disponibilité et le tarif exact.`;

    const whatsappUrl = `https://wa.me/2290140353479?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="reservation" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Réservation</h2>
            <p className="text-xl text-gray-600">
              Réservez votre espace en quelques clics via WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-sogem-orange text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Calendar className="mr-3" size={24} />
                  Formulaire de réservation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Informations personnelles */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 border-b pb-2">Vos informations</h3>
                  
                  <div>
                    <Label htmlFor="nom" className="text-sm font-medium text-gray-700">
                      Nom complet *
                    </Label>
                    <Input
                      id="nom"
                      type="text"
                      placeholder="Votre nom et prénom"
                      value={formData.nom}
                      onChange={(e) => handleInputChange('nom', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="telephone" className="text-sm font-medium text-gray-700">
                      Téléphone *
                    </Label>
                    <Input
                      id="telephone"
                      type="tel"
                      placeholder="+229 XX XX XX XX"
                      value={formData.telephone}
                      onChange={(e) => handleInputChange('telephone', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Détails de la réservation */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 border-b pb-2">Détails de votre réservation</h3>
                  
                  <div>
                    <Label htmlFor="typeEspace" className="text-sm font-medium text-gray-700">
                      Type d'espace souhaité *
                    </Label>
                    <Select value={formData.typeEspace} onValueChange={(value) => handleInputChange('typeEspace', value)}>
                      <SelectTrigger className="mt-1 w-full">
                        <SelectValue placeholder="Sélectionnez un espace" />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        {espaces.map((espace) => (
                          <SelectItem key={espace.value} value={espace.value} className="text-sm">
                            {espace.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label htmlFor="nombrePersonnes" className="text-sm font-medium text-gray-700">
                        Nombre de personnes
                      </Label>
                      <Input
                        id="nombrePersonnes"
                        type="number"
                        placeholder="Ex: 5"
                        min="1"
                        value={formData.nombrePersonnes}
                        onChange={(e) => handleInputChange('nombrePersonnes', e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="duree" className="text-sm font-medium text-gray-700">
                        Durée souhaitée
                      </Label>
                      <Select value={formData.duree} onValueChange={(value) => handleInputChange('duree', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Durée" />
                        </SelectTrigger>
                        <SelectContent>
                          {durees.map((duree) => (
                            <SelectItem key={duree.value} value={duree.value}>
                              {duree.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date" className="text-sm font-medium text-gray-700">
                        Date souhaitée *
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="heure" className="text-sm font-medium text-gray-700">
                        Heure souhaitée
                      </Label>
                      <Input
                        id="heure"
                        type="time"
                        value={formData.heure}
                        onChange={(e) => handleInputChange('heure', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="notes" className="text-sm font-medium text-gray-700">
                      Notes ou demandes spéciales
                    </Label>
                    <Textarea
                      id="notes"
                      placeholder="Précisez vos besoins spécifiques..."
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      className="mt-1"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Bouton de réservation */}
                <Button
                  onClick={handleWhatsAppReservation}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold"
                  size="lg"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Confirmer via WhatsApp
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  * Champs obligatoires. La confirmation se fait directement via WhatsApp.
                </p>
              </CardContent>
            </Card>

            {/* Informations complémentaires */}
            <div className="space-y-8">
              {/* Horaires */}
              <Card className="shadow-lg">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="flex items-center text-gray-900">
                    <Clock className="mr-2" size={20} />
                    Horaires d'ouverture
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Lundi - Dimanche</span>
                      <span className="text-sogem-orange font-semibold">8h - 22h</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>• Coworking jour : 8h - 17h</p>
                      <p>• Coworking soir : 17h - 22h</p>
                      <p>• Salles de réunion : sur réservation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Processus de réservation */}
              <Card className="shadow-lg">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="flex items-center text-gray-900">
                    <Users className="mr-2" size={20} />
                    Comment ça marche ?
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-sogem-orange text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <h4 className="font-medium text-gray-900">Remplissez le formulaire</h4>
                        <p className="text-sm text-gray-600">Indiquez vos besoins et préférences</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-sogem-orange text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h4 className="font-medium text-gray-900">Envoi via WhatsApp</h4>
                        <p className="text-sm text-gray-600">Votre demande nous parvient instantanément</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-sogem-orange text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <h4 className="font-medium text-gray-900">Confirmation rapide</h4>
                        <p className="text-sm text-gray-600">Nous confirmons la disponibilité sous 30 minutes</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact direct */}
              <Card className="shadow-lg border-sogem-orange border-2">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-gray-900 mb-4">Besoin d'aide ?</h3>
                  <p className="text-gray-600 mb-4">Contactez-nous directement</p>
                  <Button 
                    onClick={() => window.open('https://wa.me/2290140353479', '_blank')}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <MessageCircle className="mr-2" size={16} />
                    WhatsApp : +229 01 40 35 34 79
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
