import React from 'react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <ContactSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;