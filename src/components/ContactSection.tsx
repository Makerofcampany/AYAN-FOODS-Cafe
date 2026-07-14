import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Order Query',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;
    
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', subject: 'Order Query', message: '' });
    }, 5000);
  };

  const handleForwardToWhatsApp = () => {
    const text = `Assalam-o-Alaikum! My name is ${formData.name}. Phone: ${formData.phone}. Query: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/923122800519?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-brand-black relative">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-brand-gold font-display font-bold uppercase tracking-widest text-xs sm:text-sm">
            Visit & Connect
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight mt-2">
            Contact <span className="text-brand-red">Ayan Food Corner</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-red to-brand-gold mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base mt-4 font-light">
            Have a question, catering event, or big party order? Reach out to us via the secure form, direct phone line, or press the floating WhatsApp buttons.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Column 1: Contact Details & Map (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-display font-black text-white">
              Direct <span className="text-brand-gold">Channels</span>
            </h3>
            
            <div className="space-y-6">
              {/* Contact Item 1 */}
              <div className="flex gap-4 p-4 rounded-xl bg-brand-dark-gray/40 border border-brand-red/10">
                <div className="w-12 h-12 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-xs font-mono uppercase tracking-wider">Phone Call & WhatsApp</h4>
                  <a href="tel:+923122800519" className="text-white font-display font-extrabold text-base sm:text-lg hover:text-brand-gold transition-colors block mt-1">
                    +92 312 2800519
                  </a>
                  <span className="text-xs text-emerald-500 font-medium block mt-0.5">Available 24/7 for catering queries</span>
                </div>
              </div>

              {/* Contact Item 2 */}
              <div className="flex gap-4 p-4 rounded-xl bg-brand-dark-gray/40 border border-brand-red/10">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-gold shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-xs font-mono uppercase tracking-wider">Email Address</h4>
                  <a href="mailto:ayanhuyarr@gmail.com" className="text-white font-display font-extrabold text-base sm:text-lg hover:text-brand-gold transition-colors block mt-1">
                    ayanhuyarr@gmail.com
                  </a>
                </div>
              </div>

              {/* Contact Item 3 */}
              <div className="flex gap-4 p-4 rounded-xl bg-brand-dark-gray/40 border border-brand-red/10">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-xs font-mono uppercase tracking-wider">Our Location</h4>
                  <p className="text-white font-display font-extrabold text-base sm:text-lg mt-1">
                    Gulshan-e-Iqbal, Karachi
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">Sindh, Pakistan. Serving nationwide catering events.</p>
                </div>
              </div>
            </div>

            {/* Simulated Premium Dark Google Maps Placeholder */}
            <div className="rounded-2xl overflow-hidden border border-brand-gold/20 shadow-xl relative aspect-[16/10] bg-brand-dark-gray/80 flex flex-col justify-between p-6">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="text-brand-red animate-bounce" size={24} />
                  <div>
                    <h5 className="text-white font-display font-extrabold text-sm sm:text-base">Ayan Food Corner Location</h5>
                    <p className="text-gray-400 text-xs font-light">Karachi, Pakistan</p>
                  </div>
                </div>
                <span className="bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-[9px] font-mono uppercase px-2 py-0.5 rounded">
                  Live Hub
                </span>
              </div>

              <div className="relative z-10 flex flex-col gap-2 bg-brand-black/90 p-3 rounded-lg border border-brand-red/15 max-w-xs">
                <p className="text-gray-300 text-[11px] leading-relaxed">
                  We currently operate as a premium cloud & catering kitchen. Enjoy blazing-fast delivery straight to your doorstep across Karachi!
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Gulshan-e-Iqbal,Karachi,Pakistan"
                target="_blank"
                rel="noreferrer"
                className="relative z-10 w-full py-2.5 bg-brand-red hover:bg-brand-red-dark text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors text-center shadow-lg cursor-pointer"
              >
                Open in Google Maps
              </a>
            </div>

          </div>

          {/* Column 2: Interactive Contact & WhatsApp Form (7 Columns) */}
          <div className="lg:col-span-7 bg-brand-dark-gray/30 border border-brand-red/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            <h3 className="text-2xl font-display font-black text-white mb-6">
              Send Us a <span className="text-brand-red">Message</span>
            </h3>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-gray-400 text-xs font-mono uppercase tracking-wider block">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="e.g. Obaid Abbasi"
                        className="w-full bg-brand-black/60 border border-brand-red/20 focus:border-brand-gold rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-all placeholder:text-gray-600"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-gray-400 text-xs font-mono uppercase tracking-wider block">Phone / WhatsApp Number</label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        placeholder="e.g. +92 312 2800519"
                        className="w-full bg-brand-black/60 border border-brand-red/20 focus:border-brand-gold rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-all placeholder:text-gray-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-gray-400 text-xs font-mono uppercase tracking-wider block">Subject</label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-brand-black/60 border border-brand-red/20 focus:border-brand-gold rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-all cursor-pointer"
                    >
                      <option value="Order Query">Order Query</option>
                      <option value="Catering Service">Catering Service</option>
                      <option value="Feedback">Customer Feedback</option>
                      <option value="Other">Other Inquiries</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-gray-400 text-xs font-mono uppercase tracking-wider block">Your Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder="Write your culinary question or details of your delivery request here..."
                      className="w-full bg-brand-black/60 border border-brand-red/20 focus:border-brand-gold rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-all placeholder:text-gray-600 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-display font-extrabold tracking-wide uppercase rounded-xl transition-all shadow-lg hover:shadow-brand-red/30 flex items-center justify-center gap-2 cursor-pointer border border-brand-red-light/10"
                    >
                      <Send size={16} />
                      <span>Submit Query</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleForwardToWhatsApp}
                      disabled={!formData.name || !formData.phone || !formData.message}
                      className="w-full sm:w-auto px-6 py-4 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:hover:bg-emerald-600 text-white font-display font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare size={16} />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 size={40} className="fill-emerald-500/10" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-display font-black text-white">Message Sent Successfully!</h4>
                    <p className="text-gray-400 max-w-md mx-auto text-sm font-light">
                      JazakAllah Khair! Thank you for contacting Ayan Food Corner. We have received your query and will reply in less than 30 minutes.
                    </p>
                  </div>
                  <button
                    onClick={() => handleForwardToWhatsApp()}
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center gap-2 cursor-pointer"
                  >
                    <MessageSquare size={14} />
                    <span>Instant WhatsApp Reply</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
