import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Waves, Palette, Wrench, MapPin, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import CustomBoardModal from './CustomBoardModal';

const ServiceCards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    
    {
      icon: Waves,
      title: 'Custom Boards',
      description: 'Bespoke surfboards crafted to your exact specifications — shape, size, fins, artwork.',
      features: ['Personal consultation', 'Custom dimensions', 'Premium materials', 'Craftsmanship guarantee'],
      cta: 'Order a Custom Board',
      action: () => window.location.assign('/custom'),
      gradient: ''
    },
    {
      icon: Waves,
      title: 'Our Boards',
      description: 'Browse our current models and specs. Find the perfect board for your waves and style.',
      features: ['Fish, Shortboards, Longboards', 'Specs & volumes', 'Tail & fin options', 'Ready to customize'],
      cta: 'View Our Boards',
      action: () => window.location.assign('/boards'),
      gradient: ''
    },
    {
      icon: Palette,
      title: 'Board Art',
      description: 'Transform your surfboard into a masterpiece with our custom art services, blending traditional Indonesian motifs with modern designs.',
      features: ['Hand-painted artwork', 'Resin tinting', 'Traditional patterns', 'Custom designs'],
      cta: 'View Gallery',
      action: () => window.location.href = '/gallery',
      gradient: 'wood-gradient'
    },
    {
      icon: Wrench,
      title: 'Ding Repairs',
      description: 'Professional surfboard repairs using traditional techniques and modern materials to restore your board to peak condition.',
      features: ['Quick turnaround', 'Quality materials', 'Color matching', 'Structural integrity'],
      cta: 'Get Repair Quote',
      action: () => window.open('https://wa.me/62081236302148?text=Hello%20BANYU,%20I%20need%20ding%20repair%20for%20my%20board.%20Please%20provide%20a%20quote.', '_blank'),
      gradient: 'sand-gradient'
    },
    {
      icon: MapPin,
      title: 'Board Rental',
      description: 'High-quality rental boards for all skill levels. Perfect for testing different shapes or extended surf trips in Lombok.',
      features: ['Daily & weekly rates', 'All skill levels', 'Quality boards', 'Local delivery'],
      cta: 'Browse Rentals',
      action: () => window.location.assign('/rentals'),
      gradient: 'ocean-gradient'
    },
    {
      icon: GraduationCap,
      title: 'Surf Lessons',
      description: 'Learn to surf or improve your skills with ISA-certified instructors who know Lombok\'s waves like the back of their hand.',
      features: ['Certified instructors', 'All skill levels', 'Small groups', 'Equipment included'],
      cta: 'View Lessons',
      action: () => window.location.assign('/lessons'),
      gradient: 'wood-gradient'
    }
  ];

  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Services
              </h2>
              <div className="w-24 h-1 bg-ocean-medium mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From handcrafted custom boards to professional repairs and surf instruction, 
                we offer everything you need for your surfing journey in Lombok.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group transition-all duration-300 border">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-muted`}>
                      <service.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-ocean-medium rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={service.action}
                      className="w-full group"
                      variant="outline"
                    >
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <p className="text-lg text-muted-foreground mb-6">
                Have questions about our services? We're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="ocean-gradient text-white">
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <CustomBoardModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ServiceCards;