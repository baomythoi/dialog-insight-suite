
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TrainersSection from '@/components/TrainersSection';
import PricingSection from '@/components/PricingSection';
import BlogSection from '@/components/BlogSection';
import AppPromotion from '@/components/AppPromotion';
import ContactSection from '@/components/ContactSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  // Add smooth scrolling behavior
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      html {
        scroll-behavior: smooth;
      }
      
      .animate-on-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
      }
      
      .animate-on-scroll.animate {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TrainersSection />
        <PricingSection />
        <BlogSection />
        <AppPromotion />
        <ContactSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
