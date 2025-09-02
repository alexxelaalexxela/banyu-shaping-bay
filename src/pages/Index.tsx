import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ServiceCards from '@/components/ServiceCards';
import SurfLessons from '@/components/SurfLessons';
import Rentals from '@/components/Rentals';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        
        <ServiceCards />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
