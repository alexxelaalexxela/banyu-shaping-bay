import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your custom board journey? Get in touch with our team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Visit Our Shaping Bay</h3>
                  <p className="text-muted-foreground">
                    Gerupuk Village, Kuta<br />
                    Nusa Tenggara Barat<br />
                    Indonesia 933120
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">WhatsApp</h3>
                  <Button asChild variant="outline" className="mb-2">
                    <a href="https://wa.me/6281234567890">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      +62 812-3456-7890
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Email</h3>
                  <Button asChild variant="outline">
                    <a href="mailto:hello@banyu-surfboards.com">
                      hello@banyu-surfboards.com
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Hours</h3>
                  <div className="text-muted-foreground">
                    <div>Monday - Saturday: 8:00 AM - 6:00 PM</div>
                    <div>Sunday: 9:00 AM - 4:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-sand-light rounded-lg p-6">
              <h3 className="font-serif text-xl font-semibold mb-4">Find Us in Gerupuk</h3>
              <div className="aspect-video bg-sand-medium rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Google Maps Integration</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;