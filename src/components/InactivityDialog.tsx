import React, { useState, useEffect, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Clock } from 'lucide-react';

const INACTIVITY_TIMEOUT = 60000; // 60 secondes d'inactivité

const InactivityDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const resetTimer = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleActivity = () => {
      clearTimeout(timeoutId);
      if (!isOpen) {
        timeoutId = setTimeout(() => {
          setIsOpen(true);
        }, INACTIVITY_TIMEOUT);
      }
    };

    // Événements d'activité utilisateur
    const events = ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart', 'click'];
    
    events.forEach(event => {
      document.addEventListener(event, handleActivity);
    });

    // Démarrer le timer initial
    handleActivity();

    return () => {
      clearTimeout(timeoutId);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity);
      });
    };
  }, [isOpen]);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/2290195957142?text=Bonjour%20SOGEM%20PALACE%2C%20je%20souhaite%20avoir%20des%20informations.', '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent 
        className="sm:max-w-md border-sogem-orange/30 bg-sogem-dark/95 text-white"
        hideClose
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-sogem-orange/20 rounded-full">
              <Clock className="w-12 h-12 text-sogem-orange" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-white text-center">
            Êtes-vous toujours là ?
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-center mt-4">
            Vous semblez inactif depuis un moment. Besoin d'aide pour votre réservation ?
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col gap-3 mt-6">
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
          >
            💬 Contactez-nous sur WhatsApp
          </Button>
          <Button 
            onClick={resetTimer}
            variant="outline"
            className="border-sogem-orange text-sogem-orange hover:bg-sogem-orange hover:text-white py-3"
          >
            Je continue ma visite
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InactivityDialog;
