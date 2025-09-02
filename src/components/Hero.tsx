import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Waves, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/api/placeholder/1920/1080')`
        }}
      />
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-70" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center mb-6">
          <MapPin className="h-5 w-5 mr-2" />
          <span className="text-sm font-medium tracking-wide uppercase">
            Gerupuk Village, Lombok
          </span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
          BANYU
          <span className="block text-3xl md:text-4xl font-light opacity-90">
            Surfboards
          </span>
        </h1>
        
        <div className="flex items-center justify-center mb-8">
          <Waves className="h-6 w-6 mr-3 text-ocean-light" />
          <p className="text-xl md:text-2xl font-light">
            Lombok's 1st Shaping Bay — Handshaped Custom Boards
          </p>
        </div>
        
        <p className="text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Where traditional Indonesian craftsmanship meets modern surfboard design. 
          Each board is handcrafted with passion in the heart of Gerupuk Village.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-foreground hover:bg-sand-light font-semibold px-8 py-3 surf-shadow"
          >
            <Link to="/boards" className="flex items-center">
              Discover Our Boards
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-foreground font-semibold px-8 py-3"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-white opacity-50 mx-auto mb-2"></div>
          <div className="w-2 h-2 bg-white rounded-full opacity-50 animate-pulse"></div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-ocean-light opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-10 w-24 h-24 rounded-full bg-sand-medium opacity-20 animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;