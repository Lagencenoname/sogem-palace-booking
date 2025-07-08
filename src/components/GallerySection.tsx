
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: "/lovable-uploads/d754f002-a33f-4198-9cfd-801269e943c9.png",
      alt: "Salle de réunion avec table moderne et chaises grises",
      title: "Salle de réunion privée"
    },
    {
      src: "/lovable-uploads/847886f7-b18b-4a0d-aa2a-817e9e621f9e.png",
      alt: "Grande salle de conférence avec disposition en U",
      title: "Salle de conférence 50 places"
    },
    {
      src: "/lovable-uploads/2bcfc518-217b-4eca-b862-cb0601b49d2a.png",
      alt: "Salle événementiel avec chaises bleues et dorées",
      title: "Salle événementielle premium"
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      alt: "Espace de coworking moderne",
      title: "Espace coworking open space"
    },
    {
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
      alt: "Bureau privé équipé",
      title: "Bureau privé moderne"
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      alt: "Espace de travail collaboratif",
      title: "Espace collaboratif"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateImage('prev');
    if (e.key === 'ArrowRight') navigateImage('next');
  };

  return (
    <section id="galerie" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galerie Photos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos espaces modernes et équipés, conçus pour votre confort et votre productivité
          </p>
        </div>

        {/* Grille des images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm opacity-90">Cliquez pour agrandir</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Bouton fermer */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-50 bg-white bg-opacity-10 border-white border-opacity-30 text-white hover:bg-white hover:bg-opacity-20"
              onClick={closeLightbox}
            >
              <X size={24} />
            </Button>

            {/* Navigation précédent */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 bg-white bg-opacity-10 border-white border-opacity-30 text-white hover:bg-white hover:bg-opacity-20"
              onClick={() => navigateImage('prev')}
            >
              <ChevronLeft size={24} />
            </Button>

            {/* Navigation suivant */}
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white bg-opacity-10 border-white border-opacity-30 text-white hover:bg-white hover:bg-opacity-20"
              onClick={() => navigateImage('next')}
            >
              <ChevronRight size={24} />
            </Button>

            {/* Image principale */}
            <div className="max-w-7xl max-h-full flex items-center justify-center">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>

            {/* Titre de l'image */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <h3 className="text-xl font-semibold mb-2">{images[selectedImage].title}</h3>
              <p className="text-sm opacity-75">
                {selectedImage + 1} / {images.length}
              </p>
            </div>

            {/* Zone cliquable pour fermer */}
            <div
              className="absolute inset-0 -z-10"
              onClick={closeLightbox}
            ></div>
          </div>
        )}

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Envie de visiter ?</h3>
            <p className="text-gray-600 mb-6">
              Venez découvrir nos espaces en personne ou contactez-nous pour plus d'informations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-sogem-orange hover:bg-sogem-orange-dark text-white"
              >
                Réserver une visite
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('https://wa.me/2290140353479?text=Bonjour, j\'aimerais visiter vos espaces SOGEM PALACE.', '_blank')}
                className="border-sogem-orange text-sogem-orange hover:bg-sogem-orange hover:text-white"
              >
                Contacter via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
