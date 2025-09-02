import React from 'react';
import { Waves, Heart, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Waves,
      title: 'Handcrafted Excellence',
      description: 'Every board is shaped by hand using traditional techniques passed down through generations of Indonesian craftsmen.'
    },
    {
      icon: Heart,
      title: 'Passion for Surf',
      description: 'Born from our love for Lombok\'s incredible waves and the desire to create boards that enhance your connection with the ocean.'
    },
    {
      icon: Users,
      title: 'Community Roots',
      description: 'Deeply rooted in Gerupuk Village, we support local talent and contribute to the growth of Indonesia\'s surf culture.'
    },
    {
      icon: Award,
      title: 'Lombok\'s First',
      description: 'Proud to be Lombok\'s first dedicated shaping bay, pioneering custom surfboard craftsmanship in Nusa Tenggara Barat.'
    }
  ];

  return (
    <section className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-ocean-medium mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From the pristine waters of Gerupuk to the hands of master craftsmen, 
              BANYU represents the perfect fusion of tradition and innovation in surfboard shaping.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Story Content */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Where Tradition Meets Innovation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded in the heart of Gerupuk Village, BANYU Surfboards emerged from a simple yet profound vision: 
                to create world-class surfboards that honor Indonesian craftsmanship while embracing modern design principles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our master shapers combine decades of woodworking tradition with cutting-edge surfboard technology, 
                creating boards that are not just functional tools, but works of art that tell the story of Lombok's 
                rich cultural heritage and incredible waves.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every board that leaves our shaping bay carries with it the spirit of Indonesian craftsmanship 
                and the soul of Lombok's legendary surf breaks.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="BANYU shaping bay in Gerupuk Village"
                className="rounded-lg wood-shadow w-full"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-wood-medium opacity-20"></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-ocean-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;