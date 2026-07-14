import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../data';

export default function ReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const currentReview = REVIEWS[currentIndex];

  return (
    <section className="py-24 bg-brand-black relative overflow-hidden border-t border-brand-red/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-brand-gold font-display font-bold uppercase tracking-widest text-xs sm:text-sm">
            Customer Love
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight mt-2">
            Reviews from Our <span className="text-brand-red">Delighted Guests</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-red to-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonial Box */}
        <div className="relative bg-brand-dark-gray/40 border border-brand-red/10 rounded-3xl p-8 sm:p-12 shadow-2xl gold-glow min-h-[300px] flex flex-col justify-between">
          <Quote className="absolute top-6 left-6 text-brand-red/20" size={60} />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Star Rating */}
              <div className="flex gap-1 justify-center sm:justify-start">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>

              {/* Review Comment */}
              <p className="text-gray-300 text-base sm:text-xl italic font-light leading-relaxed text-center sm:text-left">
                "{currentReview.comment}"
              </p>

              {/* Reviewer Details */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-brand-red/10">
                <img
                  src={currentReview.avatar}
                  alt={currentReview.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-gold shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div className="text-center sm:text-left">
                  <h4 className="text-white font-display font-black text-base sm:text-lg flex items-center gap-1.5 justify-center sm:justify-start">
                    <span>{currentReview.name}</span>
                    <CheckCircle2 size={14} className="text-emerald-500 fill-emerald-500/10" />
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm font-mono uppercase tracking-wider">
                    {currentReview.location || 'Pakistan'}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center sm:justify-end gap-3 mt-8 pt-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-brand-black border border-brand-red/20 text-brand-gold hover:bg-brand-red hover:text-white hover:border-brand-red transition-all cursor-pointer shadow-md"
              aria-label="Previous Review"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-brand-black border border-brand-red/20 text-brand-gold hover:bg-brand-red hover:text-white hover:border-brand-red transition-all cursor-pointer shadow-md"
              aria-label="Next Review"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Dots indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === i ? 'bg-brand-gold w-6' : 'bg-brand-red/30 hover:bg-brand-red/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
