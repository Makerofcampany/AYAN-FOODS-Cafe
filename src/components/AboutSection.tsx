import React from 'react';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, Flame, Award } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: <Flame className="text-brand-red" size={24} />,
      title: 'Our Passionate Story',
      description: 'Ayan Food Corner started with a simple dream: to bring rich, traditional flavors of Pakistan to food lovers with uncompromised quality and authentic dumpukht recipes passed down for generations.'
    },
    {
      icon: <Heart className="text-brand-red" size={24} />,
      title: 'Fresh Ingredients',
      description: 'We source only premium hand-slaughtered Halal meats, top-grade Sindhi basmati rice, and grind our own authentic Pakistani spice blends daily in our sterile kitchen.'
    },
    {
      icon: <ShieldCheck className="text-brand-red" size={24} />,
      title: 'Hygiene & Quality Assurance',
      description: 'Cleanliness is our faith. Our kitchen maintains strict, hospital-grade daily cleaning schedules. We never use artificial tenderizers, synthetic food colorings, or recycled frying oil.'
    },
    {
      icon: <Award className="text-brand-red" size={24} />,
      title: 'Our Mission & Vision',
      description: 'To provide premium, restaurant-quality gourmet traditional foods and burgers at prices accessible to every family in Pakistan, supported by lightning-fast, secure doorstep delivery.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-display font-bold uppercase tracking-widest text-xs sm:text-sm"
          >
            Behind the Taste
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight mt-2"
          >
            Our Story, Mission & <span className="text-brand-red">Sanitation Standard</span>
          </motion.h2>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-brand-red to-brand-gold mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Dynamic Storytelling Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase (Overlapping Cards/Atmosphere) */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden aspect-[4/5] border border-brand-red/20 shadow-xl relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent z-10" />
                <img
                  src="/src/assets/images/chicken_biryani_1784037283353.jpg"
                  alt="Ayan Gourmet Kitchen Craft"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-4 left-4 z-20 font-display font-extrabold text-sm text-white">
                  Handcrafted Biryani
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-2xl overflow-hidden aspect-[4/5] border border-brand-gold/20 shadow-xl relative mt-8 group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent z-10" />
                <img
                  src="/src/assets/images/crispy_burger_1784037298891.jpg"
                  alt="Ayan Signature Spiced Ingredients"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-4 left-4 z-20 font-display font-extrabold text-sm text-white">
                  Crispy Hot Zingers
                </span>
              </motion.div>
            </div>

            {/* floating badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-brand-dark-gray border border-brand-gold rounded-full px-6 py-3 shadow-2xl flex items-center gap-2"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider font-display">
                Certified 100% Fresh & Halal
              </span>
            </motion.div>
          </div>

          {/* Right Column: Values Grid */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-display font-black text-white"
            >
              Crafting A Legacy Of <span className="text-brand-gold">Taste & Trust</span>
            </motion.h3>
            <p className="text-gray-300 leading-relaxed font-light text-sm sm:text-base">
              At Ayan Food Corner Pakistan, cooking is an art. We believe every single plate we serve is an opportunity to express our love for Pakistani cuisine. By merging traditional recipes with modern cooking hygiene systems, we set the absolute gold standard for delivery food in Karachi and beyond.
            </p>

            <div className="grid grid-cols-1 gap-6 pt-4">
              {values.map((val, index) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-brand-dark-gray/50 border border-brand-red/10 hover:border-brand-gold/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center shrink-0">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-display font-bold text-base sm:text-lg">
                      {val.title}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
