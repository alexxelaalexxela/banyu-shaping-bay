import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Clock, Phone, Mail } from 'lucide-react';
import banyuLogo from '@/assets/banyu-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wood-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Logo */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src={banyuLogo} alt="BANYU Surfboards" className="h-10 w-10" />
              <div>
                <h3 className="font-serif text-xl font-bold">BANYU</h3>
                <p className="text-sm opacity-80">SURFBOARDS</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Lombok's 1st Shaping Bay — Handshaped Custom Boards
            </p>
            <a
              href="https://instagram.com/banyu_surfboards"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm hover:text-ocean-light transition-colors"
            >
              <Instagram className="h-4 w-4" />
              <span>@banyu_surfboards</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/boards" className="text-sm opacity-80 hover:opacity-100 hover:text-ocean-light transition-colors">
                  Custom Boards
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm opacity-80 hover:opacity-100 hover:text-ocean-light transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm opacity-80 hover:opacity-100 hover:text-ocean-light transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <a 
                  href="https://wa.me/6281234567890?text=Hello%20BANYU,%20I%20need%20ding%20repair%20for%20my%20board"
                  className="text-sm opacity-80 hover:opacity-100 hover:text-ocean-light transition-colors"
                >
                  Ding Repairs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-80">
                  Gerupuk Village, Kuta<br />
                  Nusa Tenggara Barat<br />
                  Indonesia 933120
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a 
                  href="https://wa.me/6281234567890"
                  className="opacity-80 hover:opacity-100 hover:text-ocean-light transition-colors"
                >
                  WhatsApp: +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a 
                  href="mailto:hello@banyu-surfboards.com"
                  className="opacity-80 hover:opacity-100 hover:text-ocean-light transition-colors"
                >
                  hello@banyu-surfboards.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Hours</h4>
            <div className="flex items-start space-x-2 text-sm">
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div className="opacity-80">
                <div>Monday - Saturday</div>
                <div>8:00 AM - 6:00 PM</div>
                <div className="mt-2">Sunday</div>
                <div>9:00 AM - 4:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-wood-medium mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-60">
            © {currentYear} BANYU Surfboards. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm opacity-60 hover:opacity-80 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm opacity-60 hover:opacity-80 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;