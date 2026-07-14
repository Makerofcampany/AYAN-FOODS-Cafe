import React from 'react';
import { Facebook, Instagram, Music2, Phone, Mail, MapPin, Clock, ArrowUp, Star } from 'lucide-react';

interface FooterProps {
  onBackToTop: () => void;
  onNavigateSection: (id: string) => void;
}

export default function Footer({ onBackToTop, onNavigateSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNav = (id: string) => {
    onNavigateSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-brand-black border-t border-brand-red/20 pt-16 pb-8 relative overflow-hidden">
      {/* Golden glow decoration */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-brand-red/10">
          
          {/* Brand Presentation (4 Columns) */}
          <div className="lg:col-span-4 space-y-4 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start cursor-pointer" onClick={() => handleNav('home')}>
              <div className="w-9 h-9 rounded-full bg-brand-red flex items-center justify-center text-brand-gold font-display font-extrabold text-lg shadow-md border border-brand-gold/30">
                A
              </div>
              <div>
                <span className="font-display font-black text-lg tracking-tight text-white">
                  AYAN <span className="text-brand-gold">FOOD</span>
                </span>
                <span className="text-[8px] font-mono tracking-widest text-brand-red uppercase block -mt-1 font-bold">
                  Corner Pakistan
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
              We prepare and deliver the absolute best Traditional Dum Biryani, Zinger Burgers, and Clay Oven BBQ Platters in Karachi. Hygiene and supreme taste is our lifetime promise.
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-brand-dark-gray border border-brand-red/10 text-brand-gold hover:bg-brand-red hover:text-white hover:border-brand-red transition-all flex items-center justify-center cursor-pointer"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-brand-dark-gray border border-brand-red/10 text-brand-gold hover:bg-brand-red hover:text-white hover:border-brand-red transition-all flex items-center justify-center cursor-pointer"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-brand-dark-gray border border-brand-red/10 text-brand-gold hover:bg-brand-red hover:text-white hover:border-brand-red transition-all flex items-center justify-center cursor-pointer"
                aria-label="Follow us on TikTok"
              >
                {/* TikTok usually matches Music2 icon in Lucide */}
                <Music2 size={16} />
              </a>
            </div>
          </div>

          {/* Quick links (2 Columns) */}
          <div className="lg:col-span-2 text-center md:text-left">
            <h4 className="text-white font-display font-bold text-sm sm:text-base uppercase tracking-wider mb-4 border-b border-brand-red/10 pb-1.5 inline-block md:block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {['home', 'about', 'menu', 'gallery', 'contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleNav(link)}
                    className="text-gray-400 hover:text-brand-gold transition-colors capitalize cursor-pointer font-medium"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening hours (3 Columns) */}
          <div className="lg:col-span-3 text-center md:text-left">
            <h4 className="text-white font-display font-bold text-sm sm:text-base uppercase tracking-wider mb-4 border-b border-brand-red/10 pb-1.5 inline-block md:block">
              Operating Hours
            </h4>
            <div className="space-y-3 text-xs sm:text-sm font-light text-gray-400">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Clock size={14} className="text-brand-gold" />
                <span>Mon - Sun: 12:00 PM - 02:00 AM</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Star size={14} className="text-brand-gold fill-brand-gold/10" />
                <span>Available for catering orders 24/7</span>
              </div>
              <p className="text-[11px] text-gray-500 italic leading-relaxed">
                *Order deliveries start at 12:30 PM daily across Karachi city areas.
              </p>
            </div>
          </div>

          {/* Contact Details (3 Columns) */}
          <div className="lg:col-span-3 text-center md:text-left">
            <h4 className="text-white font-display font-bold text-sm sm:text-base uppercase tracking-wider mb-4 border-b border-brand-red/10 pb-1.5 inline-block md:block">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs sm:text-sm font-light text-gray-400">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Phone size={14} className="text-brand-red" />
                <a href="tel:+923122800519" className="hover:text-brand-gold transition-colors">+92 312 2800519</a>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Mail size={14} className="text-brand-red" />
                <a href="mailto:ayanhuyarr@gmail.com" className="hover:text-brand-gold transition-colors">ayanhuyarr@gmail.com</a>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin size={14} className="text-brand-red" />
                <span>Gulshan-e-Iqbal, Karachi, Pakistan</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-[11px] sm:text-xs text-gray-500 font-light">
            &copy; {currentYear} <strong className="text-white font-semibold">Ayan Food Corner</strong>. All Rights Reserved. Designed in Pakistan.
          </p>
          
          {/* Back to top button */}
          <button
            onClick={onBackToTop}
            className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-dark-gray border border-brand-red/20 hover:bg-brand-red text-brand-gold hover:text-white transition-all duration-300 text-xs font-semibold cursor-pointer"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp size={12} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
