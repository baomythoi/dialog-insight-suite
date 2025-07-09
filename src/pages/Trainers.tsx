import React from 'react';
import Header from '@/components/Header';
import TrainersSection from '@/components/TrainersSection';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Trainers = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <TrainersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Trainers;