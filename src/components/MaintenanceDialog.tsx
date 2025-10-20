import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const MaintenanceDialog = () => {
  const handleWhatsAppRedirect = () => {
    const message = "Bonjour ! Je souhaite avoir plus d'informations sur les services de SOGEM PALACE.";
    const whatsappUrl = `https://wa.me/2290195957142?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog open={true} modal>
      <DialogContent 
        className="sm:max-w-md [&>button]:hidden"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Site en maintenance</DialogTitle>
          <DialogDescription className="text-center text-base pt-4">
            Notre site est actuellement en maintenance. 
            <br />
            Veuillez revenir plus tard.
            <br />
            <br />
            Pour toute urgence, contactez-nous via WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center pt-4">
          <Button 
            onClick={handleWhatsAppRedirect}
            className="gap-2"
            size="lg"
          >
            <MessageCircle className="h-5 w-5" />
            Contacter sur WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MaintenanceDialog;
