import React from 'react';
import { GraduationCap, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SurfLessons = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Surf Lessons</h2>
            <p className="text-muted-foreground mb-6">
              Learn to surf or improve your skills with local instructors who know Lombok's waves. All levels welcome.
            </p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>• Certified instructors</li>
              <li>• All skill levels</li>
              <li>• Small groups or private</li>
              <li>• Equipment included</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <a href="https://wa.me/6281234567890?text=Hello%20BANYU,%20I'd%20like%20to%20book%20surf%20lessons.">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="/contact">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1516375195449-0b5451565661?q=80&w=1400&auto=format&fit=crop" alt="Surf lessons" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurfLessons;


