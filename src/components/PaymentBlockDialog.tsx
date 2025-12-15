import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from 'lucide-react';

const PaymentBlockDialog = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/2290195957142?text=Bonjour%2C%20je%20souhaite%20régulariser%20ma%20situation%20concernant%20le%20site%20SOGEM%20PALACE.', '_blank');
  };

  return (
    <Dialog open={true} onOpenChange={() => {}}>
      <DialogContent 
        className="sm:max-w-md border-red-500/50 bg-sogem-dark/98 text-white"
        hideClose
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-red-500/20 rounded-full">
              <AlertTriangle className="w-12 h-12 text-red-500" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-white text-center">
            Site suspendu
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-center mt-4">
            Ce site est temporairement inaccessible pour défaut de paiement. 
            Veuillez contacter l'administrateur pour régulariser votre situation.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col gap-3 mt-6">
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
          >
            💬 Contacter l'administrateur
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentBlockDialog;
