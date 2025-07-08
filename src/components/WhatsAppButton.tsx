
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Afficher le bouton après 2 secondes
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-expand après 5 secondes, puis auto-collapse après 10 secondes
    if (isVisible) {
      const expandTimer = setTimeout(() => {
        setIsExpanded(true);
      }, 3000);

      const collapseTimer = setTimeout(() => {
        setIsExpanded(false);
      }, 10000);

      return () => {
        clearTimeout(expandTimer);
        clearTimeout(collapseTimer);
      };
    }
  }, [isVisible]);

  const handleWhatsAppClick = () => {
    const message = "Bonjour ! Je souhaite avoir plus d'informations sur les services de SOGEM PALACE.";
    const whatsappUrl = `https://wa.me/2290140353479?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Bouton principal */}
      <div className="relative">
        {/* Animation de notification */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        
        {/* Bulle de message */}
        {isExpanded && (
          <div className="absolute bottom-16 right-0 w-64 bg-white rounded-lg shadow-xl border p-4 animate-fade-in">
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="text-white" size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">SOGEM PALACE</p>
                <p className="text-xs text-gray-600 mb-2">
                  Besoin d'aide ? Contactez-nous directement !
                </p>
                <p className="text-xs text-green-600 font-medium">
                  Réponse généralement en moins de 30 minutes
                </p>
              </div>
            </div>
            {/* Flèche de la bulle */}
            <div className="absolute bottom-0 right-6 transform translate-y-full">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          </div>
        )}

        {/* Bouton WhatsApp */}
        <Button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 animate-bounce"
          style={{ animationDuration: '2s', animationIterationCount: '3' }}
        >
          <MessageCircle size={28} />
        </Button>
      </div>
    </div>
  );
};

export default WhatsAppButton;
