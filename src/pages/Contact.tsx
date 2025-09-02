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
                    Banyu Surfboards, Pengembur, Pujut<br />
                    Central Lombok Regency<br />
                    West Nusa Tenggara 83573
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">WhatsApp</h3>
                  <Button asChild variant="outline" className="mb-2">
                    <a href="https://wa.me/62081236302148">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      +62081236302148
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
              <h3 className="font-serif text-xl font-semibold mb-4">Find Us at Banyu Surfboards</h3>
              <div className="aspect-video rounded-md overflow-hidden">
                <iframe
                  title="BANYU Surfboards Location"
                  src="https://www.google.com/maps?q=Banyu%20Surfboards%2C%20Pengembur%2C%20Pujut%2C%20Central%20Lombok%20Regency%2C%20West%20Nusa%20Tenggara%2083573&z=14&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Banyu%20Surfboards%2C%20Pengembur%2C%20Pujut%2C%20Central%20Lombok%20Regency%2C%20West%20Nusa%20Tenggara%2083573"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  Open in Google Maps
                </a>
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