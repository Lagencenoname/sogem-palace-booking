
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ReservationSection from '@/components/ReservationSection';
import GallerySlider from '@/components/GallerySlider';
import TikTokSection from '@/components/TikTokSection';
import ApartmentSection from '@/components/ApartmentSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ReservationSection />
      <TikTokSection />
      <GallerySlider />
        <ApartmentSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
