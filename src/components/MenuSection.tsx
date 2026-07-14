import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Flame, Star, Clock } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data';

interface MenuSectionProps {
  onAddToOrder: (item: MenuItem) => void;
}

type CategoryFilter = 'All' | 'Biryani' | 'Burgers' | 'Pizza' | 'BBQ' | 'Sides' | 'Drinks';

export default function MenuSection({ onAddToOrder }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [successAnimationId, setSuccessAnimationId] = useState<string | null>(null);

  const categories: CategoryFilter[] = ['All', 'Biryani', 'Burgers', 'Pizza', 'BBQ', 'Sides', 'Drinks'];

  const filteredItems = activeCategory === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => {
        if (activeCategory === 'Sides') return item.category === 'Sides';
        if (activeCategory === 'Drinks') return item.category === 'Drinks';
        return item.category === activeCategory;
      });

  const handleAddWithFeedback = (item: MenuItem) => {
    onAddToOrder(item);
    setSuccessAnimationId(item.id);
    setTimeout(() => {
      setSuccessAnimationId(null);
    }, 1000);
  };

  return (
    <section id="menu" className="py-24 bg-brand-black relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-brand-gold font-display font-bold uppercase tracking-widest text-xs sm:text-sm">
            Freshly Cooked Handcrafted
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight mt-2">
            Explore Our <span className="text-brand-red">Authentic Menu</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-red to-brand-gold mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base mt-4 font-light">
            Every dish is cooked to order, hot, delicious, and perfectly prepared using traditional standards. Select your favorites below.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 sm:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/30'
                  : 'bg-brand-dark-gray/60 border-brand-red/10 text-gray-300 hover:text-white hover:border-brand-gold/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group bg-brand-dark-gray/50 rounded-2xl overflow-hidden border border-brand-red/10 hover:border-brand-gold/30 transition-all duration-300 flex flex-col justify-between shadow-lg relative"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-black/40 shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    {item.isPopular && (
                      <span className="bg-brand-gold text-brand-black text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md">
                        <Star size={10} className="fill-brand-black text-brand-black" />
                        <span>Best Seller</span>
                      </span>
                    )}
                    {item.isSpicy && (
                      <span className="bg-brand-red text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md">
                        <Flame size={10} className="fill-white" />
                        <span>Spicy sindhi</span>
                      </span>
                    )}
                  </div>

                  {/* Preparation Time */}
                  {item.preparationTime && (
                    <div className="absolute bottom-3 right-3 bg-brand-black/75 backdrop-blur-sm text-gray-300 text-[10px] px-2.5 py-1 rounded-md flex items-center gap-1 font-mono">
                      <Clock size={10} className="text-brand-gold" />
                      <span>{item.preparationTime}</span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-display font-black text-lg sm:text-xl text-white group-hover:text-brand-gold transition-colors duration-200">
                        {item.name}
                      </h3>
                      <div className="text-right shrink-0">
                        <span className="font-display font-extrabold text-base sm:text-lg text-brand-gold block">
                          PKR {item.price}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm line-clamp-3 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleAddWithFeedback(item)}
                    className={`w-full py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border ${
                      successAnimationId === item.id
                        ? 'bg-emerald-600 border-emerald-500 text-white'
                        : 'bg-brand-red/10 hover:bg-brand-red border-brand-red/30 hover:border-brand-red text-brand-gold hover:text-white shadow-md'
                    }`}
                  >
                    {successAnimationId === item.id ? (
                      <>
                        <span>Added to Basket!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={14} />
                        <span>Add to Basket</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
