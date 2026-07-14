import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ArrowUp, Sparkles } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import ReviewSection from './components/ReviewSection';
import ContactSection from './components/ContactSection';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { MenuItem, CartItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Loading Screen simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Back to top scroll handler & active section tracer
  useEffect(() => {
    const handleScroll = () => {
      // Back to top visible check
      setShowBackToTop(window.scrollY > 400);

      // Section tracing
      const sections = ['home', 'about', 'menu', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for sticky header

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Order Add handler
  const handleAddToOrder = (menuItem: MenuItem) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.menuItem.id === menuItem.id);
      if (existingIndex !== -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prevCart, { menuItem, quantity: 1 }];
      }
    });
  };

  // Quantity updates
  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.menuItem.id === itemId) {
            const newQty = item.quantity + delta;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  // Direct remove
  const handleRemoveItem = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.menuItem.id !== itemId));
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToMenu = () => {
    setActiveSection('menu');
    const element = document.getElementById('menu');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-brand-black text-gray-100 flex flex-col justify-between selection:bg-brand-red selection:text-white">
      
      {/* 1. Loading Animation Splash Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-brand-black z-100 flex flex-col items-center justify-center p-4"
          >
            <div className="relative flex flex-col items-center space-y-4">
              {/* Outer rotating decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                className="w-24 h-24 rounded-full border-2 border-dashed border-brand-gold/40 flex items-center justify-center"
              />
              {/* Center Logo */}
              <div className="absolute top-[18px] w-16 h-16 rounded-full bg-brand-red flex items-center justify-center text-brand-gold font-display font-black text-3xl shadow-xl border border-brand-gold">
                A
              </div>

              {/* Text indicator */}
              <div className="text-center space-y-1">
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-display font-black text-2xl tracking-wider text-white"
                >
                  AYAN <span className="text-brand-gold">FOOD</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-[9px] font-mono uppercase tracking-widest text-brand-red font-bold"
                >
                  Supreme Taste Of Pakistan
                </motion.p>
              </div>

              {/* Progress Bar Indicator */}
              <div className="w-32 h-1 bg-brand-dark-gray rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-brand-red to-brand-gold rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Content */}
      {!isLoading && (
        <>
          {/* 2. Sticky Header Navbar */}
          <Header
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            cartItemsCount={totalCartItems}
            onCartClick={() => setIsCartOpen(true)}
          />

          {/* 3. Hero Welcoming Banner */}
          <Hero onOrderNowClick={scrollToMenu} />

          {/* 4. Elegant Welcome / Brand Trust banner */}
          <section className="py-12 bg-brand-dark-gray/30 border-y border-brand-red/10 relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-gray-300">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-brand-gold shrink-0" size={20} />
                  <span className="font-display font-bold text-sm sm:text-base text-white">Daily Fresh Traditional Sindh Dum-Cooking</span>
                </div>
                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-brand-red" />
                <div className="flex items-center gap-3">
                  <Sparkles className="text-brand-gold shrink-0" size={20} />
                  <span className="font-display font-bold text-sm sm:text-base text-white">No Artificial Oils, Additives or Frozen Meats</span>
                </div>
                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-brand-red" />
                <div className="flex items-center gap-3">
                  <Sparkles className="text-brand-gold shrink-0" size={20} />
                  <span className="font-display font-bold text-sm sm:text-base text-white">Fast Courier Home Delivery in 30 Mins</span>
                </div>
              </div>
            </div>
          </section>

          {/* 5. About Story, Mission & Hygiene standards */}
          <AboutSection />

          {/* 6. Food Catalog Menu Grid */}
          <MenuSection onAddToOrder={handleAddToOrder} />

          {/* 7. Beautiful Responsive Lightbox Food Gallery */}
          <GallerySection />

          {/* 8. Quote / Customer Testimonial Slider */}
          <ReviewSection />

          {/* 9. Contact Details, Feedback form, Maps Simulation & WhatsApp buttons */}
          <ContactSection />

          {/* 10. Sliding WhatsApp Order Basket Sidebar */}
          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cartItems={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
          />

          {/* 11. Footer Quick Navigation */}
          <Footer
            onBackToTop={handleBackToTop}
            onNavigateSection={setActiveSection}
          />

          {/* 12. Floating Quick WhatsApp chat action */}
          <a
            href="https://wa.me/923122800519?text=Assalam-o-Alaikum%20Ayan%20Food%20Corner!%20I'd%20like%20to%20place%20a%20food%20order%20please."
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl flex items-center justify-center hover:scale-105 transition-all duration-300 group"
            aria-label="Chat directly on WhatsApp"
          >
            <MessageSquare size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 text-xs font-bold uppercase tracking-wider transition-all duration-500 whitespace-nowrap">
              Chat Support
            </span>
          </a>

          {/* 13. Back to Top Floating Button */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                onClick={handleBackToTop}
                className="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-brand-dark-gray border border-brand-red/30 hover:border-brand-gold hover:bg-brand-red text-brand-gold hover:text-white transition-all shadow-xl cursor-pointer"
                aria-label="Back to Top"
              >
                <ArrowUp size={18} />
              </motion.button>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
