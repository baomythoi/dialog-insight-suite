import React from 'react';
import Header from '@/components/Header';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Blog = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;