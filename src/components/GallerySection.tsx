import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'biryani' | 'burgers' | 'bbq' | 'pizza' | 'restaurant'>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const filterOptions = [
    { value: 'all', label: 'All Photos' },
    { value: 'biryani', label: 'Biryani' },
    { value: 'burgers', label: 'Burgers & Pizzas' },
    { value: 'bbq', label: 'Traditional BBQ' },
    { value: 'restaurant', label: 'Ambiance' }
  ];

  // Map user selections or group
  const filteredGallery = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'burgers') return item.category === 'burgers' || item.category === 'pizza';
    return item.category === activeFilter;
  });

  const handleOpenLightbox = (item: GalleryItem) => {
    const index = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
    if (index !== -1) {
      setSelectedItemIndex(index);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-brand-black relative">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-brand-gold font-display font-bold uppercase tracking-widest text-xs sm:text-sm">
            Visual Experience
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight mt-2">
            Our Aesthetic <span className="text-brand-red">Food Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-red to-brand-gold mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base mt-4 font-light">
            Take a visual tour of our freshly grilled meats, spicy dum rice, artisan crusts, and warm local restaurant dining environment in Pakistan.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setActiveFilter(opt.value as any)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeFilter === opt.value
                  ? 'bg-brand-gold text-brand-black shadow-md border border-brand-gold'
                  : 'bg-brand-dark-gray/60 border border-brand-red/10 text-gray-300 hover:text-white hover:border-brand-gold/30'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => handleOpenLightbox(item)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-brand-red/10 hover:border-brand-gold/40 shadow-lg cursor-pointer bg-brand-dark-gray"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInHover={{ scale: 1, opacity: 1 }}
                    className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white mb-2 shadow-lg"
                  >
                    <Eye size={20} />
                  </motion.div>
                  <h3 className="text-white font-display font-extrabold text-base sm:text-lg text-center tracking-tight">
                    {item.title}
                  </h3>
                  <span className="text-brand-gold font-mono text-[10px] uppercase tracking-widest mt-1">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItemIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItemIndex(null)}
            className="fixed inset-0 bg-brand-black/95 z-55 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItemIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-brand-red transition-all cursor-pointer z-50"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Nav Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 rounded-full bg-white/5 hover:bg-brand-red text-white transition-all cursor-pointer z-50"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 p-3 rounded-full bg-white/5 hover:bg-brand-red text-white transition-all cursor-pointer z-50"
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Main Lightbox Content */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh] w-full flex flex-col items-center"
            >
              <img
                src={GALLERY_ITEMS[selectedItemIndex].image}
                alt={GALLERY_ITEMS[selectedItemIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-xl border border-brand-gold/30 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="text-center mt-4">
                <h3 className="text-white font-display font-black text-lg sm:text-xl">
                  {GALLERY_ITEMS[selectedItemIndex].title}
                </h3>
                <span className="text-brand-gold text-xs font-mono uppercase tracking-widest mt-1 block">
                  Category: {GALLERY_ITEMS[selectedItemIndex].category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
