import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  cartItemsCount: number;
  onCartClick: () => void;
}

export default function Header({ activeSection, setActiveSection, cartItemsCount, onCartClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'menu', label: 'Menu' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
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
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-black/95 backdrop-blur-md border-b border-brand-red/20 shadow-lg py-3'
            : 'bg-gradient-to-b from-black/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => scrollToSection('home')}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-brand-gold font-display font-extrabold text-xl shadow-lg border border-brand-gold/30 group-hover:scale-105 transition-transform duration-300">
                  A
                </div>
                <div className="absolute -inset-0.5 rounded-full bg-brand-gold/30 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <span className="font-display font-black text-lg sm:text-xl tracking-tight text-white block">
                  AYAN <span className="text-brand-gold">FOOD</span>
                </span>
                <span className="text-[9px] font-mono tracking-widest text-brand-red uppercase block -mt-1 font-bold">
                  Corner Pakistan
                </span>
              </div>
            </div>

            {/* Desktop Nav Items */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 relative cursor-pointer ${
                    activeSection === item.id
                      ? 'text-brand-gold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-1 left-4 right-4 h-[2px] bg-brand-gold rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {/* WhatsApp Quick Link */}
              <a
                href="https://wa.me/923122800519"
                target="_blank"
                rel="noreferrer"
                className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 border border-emerald-500/20 text-xs font-semibold transition-all duration-300"
              >
                <Phone size={13} className="text-emerald-400" />
                <span>+92 312 2800519</span>
              </a>

              {/* Shopping Bag Button */}
              <button
                onClick={onCartClick}
                className="relative p-2 rounded-full bg-brand-red/10 border border-brand-red/30 hover:border-brand-gold/50 text-brand-gold hover:bg-brand-red/20 transition-all duration-300 cursor-pointer"
                aria-label="Open Shopping Cart"
              >
                <ShoppingBag size={20} className="text-brand-gold" />
                <AnimatePresence>
                  {cartItemsCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-brand-red text-white font-display text-[10px] font-extrabold rounded-full flex items-center justify-center border border-brand-black shadow-md"
                    >
                      {cartItemsCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[64px] left-0 w-full bg-brand-black/98 border-b border-brand-red/20 z-45 md:hidden shadow-2xl backdrop-blur-lg"
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold tracking-wide transition-all ${
                    activeSection === item.id
                      ? 'bg-brand-red/10 text-brand-gold border-l-4 border-brand-gold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 border-t border-brand-red/10 flex flex-col gap-3 px-4">
                <a
                  href="https://wa.me/923122800519"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all"
                >
                  <Phone size={16} />
                  <span>Order via WhatsApp</span>
                </a>
                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
                  <MapPin size={12} className="text-brand-gold" />
                  <span>Pakistan • Fast Delivery</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
