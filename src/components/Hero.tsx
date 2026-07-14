import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Clock, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOrderNowClick: () => void;
}

export default function Hero({ onOrderNowClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-brand-black"
    >
      {/* Background Image overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/restaurant_hero_1784037266522.jpg"
          alt="Ayan Food Corner Gourmet Feast"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/90 to-brand-black/50" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-brand-gold/5 via-transparent to-transparent hidden lg:block" />
      </div>

      {/* Decorative Golden Ambient Lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Text */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            
            {/* Tagline / Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2 text-center lg:text-left"
            >
              <span className="block font-serif italic text-brand-gold text-xl sm:text-2xl tracking-wide mb-1">
                Welcome to Excellence
              </span>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-gold text-xs font-semibold tracking-wider uppercase mx-auto lg:mx-0">
                <Star size={13} className="fill-brand-gold text-brand-gold" />
                <span>The Finest Taste in Pakistan</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight font-display tracking-tight"
            >
              Savor the True <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-gold">
                Flavor of Pakistan
              </span>
            </motion.h1>

            {/* Short Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Experience authentic taste handcrafted with passion at <strong className="text-white font-semibold">Ayan Food Corner</strong>. From steaming dumpukht Chicken Biryani to sizzling BBQ skewers and legendary crispy Zinger Burgers.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onOrderNowClick}
                className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-display font-extrabold tracking-wide uppercase rounded-xl shadow-lg hover:shadow-brand-red/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-brand-red-light/20"
              >
                <span>Order Now</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="https://wa.me/923122800519"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-brand-gold border border-brand-gold/40 hover:border-brand-gold rounded-xl font-display font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>WhatsApp Order</span>
              </a>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 sm:pt-8 grid grid-cols-3 gap-4 border-t border-brand-red/10 max-w-lg mx-auto lg:mx-0 text-left"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-gold shrink-0">
                  <Star size={14} className="fill-brand-gold text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-white font-display text-sm sm:text-base font-bold">4.9 Star</h4>
                  <p className="text-gray-400 text-[10px] sm:text-xs">Customer Rating</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-gold shrink-0">
                  <Clock size={14} />
                </div>
                <div>
                  <h4 className="text-white font-display text-sm sm:text-base font-bold">Hot & Fast</h4>
                  <p className="text-gray-400 text-[10px] sm:text-xs">Express Delivery</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-gold shrink-0">
                  <ShieldCheck size={14} />
                </div>
                <div>
                  <h4 className="text-white font-display text-sm sm:text-base font-bold">100% Halal</h4>
                  <p className="text-gray-400 text-[10px] sm:text-xs">Hygienic & Fresh</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Column 2: Elegant Stacked Food Highlights / Interactive Showcase */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-sm lg:max-w-none"
            >
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-dashed border-brand-gold/25 animate-spin [animation-duration:80s] pointer-events-none" />
              
              {/* Circle container containing high quality burger / biryani combo layout */}
              <div className="relative aspect-square rounded-full overflow-hidden border-2 border-brand-gold/30 bg-brand-dark-gray/60 p-4 shadow-2xl gold-glow">
                <img
                  src="/src/assets/images/restaurant_hero_1784037266522.jpg"
                  alt="Ayan Signature Food"
                  className="w-full h-full object-cover rounded-full filter hover:brightness-110 transition duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating review card */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
                className="absolute -bottom-6 -left-6 bg-brand-dark-gray border border-brand-gold/30 rounded-2xl p-4 shadow-xl max-w-xs flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center font-bold text-white text-sm">
                  100%
                </div>
                <div>
                  <p className="text-xs text-brand-gold font-bold uppercase tracking-wider">Premium Ingredients</p>
                  <p className="text-xs text-gray-300 font-medium">Fresh hand-slaughtered meat & organic Pakistan whole spices.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Wave Section Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg className="relative block w-full h-[40px] text-brand-black" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 120L0 0C60 60 120 100 240 100C360 100 480 20 600 20C720 20 840 100 960 100C1080 100 1140 60 1200 0L1200 120Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}
