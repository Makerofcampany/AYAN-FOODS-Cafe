import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2, ShoppingCart, MessageSquare, MapPin } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
}

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }: CartDrawerProps) {
  const [address, setAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  const subtotal = cartItems.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);
  const deliveryCharges = subtotal > 0 && subtotal < 2000 ? 100 : 0; // Free delivery over PKR 2,000!
  const grandTotal = subtotal + deliveryCharges;

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    let orderListText = '';
    cartItems.forEach((item) => {
      orderListText += `- *${item.quantity}x* ${item.menuItem.name} (PKR ${item.menuItem.price * item.quantity})\n`;
    });

    const message = `Assalam-o-Alaikum Ayan Food Corner! I would like to place an order:\n\n` +
      `*Order Details:*\n${orderListText}\n` +
      `*Special Instructions:* ${specialInstructions || 'None'}\n` +
      `*Delivery Address:* ${address || 'Not Provided'}\n\n` +
      `*Subtotal:* PKR ${subtotal}\n` +
      `*Delivery Charges:* ${deliveryCharges === 0 ? 'FREE' : `PKR ${deliveryCharges}`}\n` +
      `*Grand Total:* *PKR ${grandTotal}*\n\n` +
      `Please confirm my order and let me know the estimated delivery time. JazakAllah!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/923122800519?text=${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:max-w-md bg-brand-black border-l border-brand-red/20 shadow-2xl z-55 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-5 border-b border-brand-red/10 flex items-center justify-between bg-brand-dark-gray/50">
              <div className="flex items-center gap-2">
                <ShoppingCart className="text-brand-gold" size={20} />
                <h3 className="font-display font-black text-lg sm:text-xl text-white">Your Order Basket</h3>
                <span className="bg-brand-red text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-brand-red hover:text-white text-gray-400 transition-colors cursor-pointer"
                aria-label="Close Basket"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-grow overflow-y-auto p-5 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-16 h-16 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-gold">
                    <ShoppingCart size={30} />
                  </div>
                  <div>
                    <h4 className="text-white font-display font-extrabold text-base">Your basket is empty</h4>
                    <p className="text-gray-400 text-xs sm:text-sm max-w-xs mx-auto mt-1 leading-relaxed">
                      Explore our delicious menu and add spicy biryani or crispy burgers to your order!
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div
                        key={item.menuItem.id}
                        className="flex gap-3 p-3 bg-brand-dark-gray/30 border border-brand-red/10 rounded-xl relative"
                      >
                        {/* Thumbnail */}
                        <img
                          src={item.menuItem.image}
                          alt={item.menuItem.name}
                          className="w-16 h-16 rounded-lg object-cover object-center border border-brand-red/20 shrink-0"
                          referrerPolicy="no-referrer"
                        />

                        {/* Info & Adjustments */}
                        <div className="flex-grow flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <h4 className="text-white font-display font-bold text-sm sm:text-base pr-4 line-clamp-1">
                                {item.menuItem.name}
                              </h4>
                              <button
                                onClick={() => onRemoveItem(item.menuItem.id)}
                                className="text-gray-500 hover:text-brand-red transition-colors absolute top-3 right-3 cursor-pointer"
                                aria-label="Remove item"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                            <p className="text-brand-gold font-mono text-xs font-semibold mt-0.5">
                              PKR {item.menuItem.price * item.quantity}
                            </p>
                          </div>

                          {/* Qty controller */}
                          <div className="flex items-center gap-2.5 mt-2">
                            <button
                              onClick={() => onUpdateQuantity(item.menuItem.id, -1)}
                              className="w-6 h-6 rounded-md bg-brand-black border border-brand-red/20 text-gray-300 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all cursor-pointer"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-white font-mono text-xs font-bold w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.menuItem.id, 1)}
                              className="w-6 h-6 rounded-md bg-brand-black border border-brand-red/20 text-gray-300 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all cursor-pointer"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Delivery Inputs */}
                  <div className="pt-4 border-t border-brand-red/10 space-y-4">
                    {/* Delivery Address */}
                    <div className="space-y-1">
                      <label className="text-gray-400 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5">
                        <MapPin size={12} className="text-brand-gold" />
                        <span>Delivery Address (Karachi)</span>
                      </label>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="e.g. House #12, Block 4, Gulshan-e-Iqbal"
                        className="w-full bg-brand-black border border-brand-red/20 focus:border-brand-gold rounded-xl px-3.5 py-2.5 text-white text-xs outline-none transition-all placeholder:text-gray-600"
                      />
                    </div>

                    {/* Kitchen Instructions */}
                    <div className="space-y-1">
                      <label className="text-gray-400 text-xs font-mono uppercase tracking-wider block">Special Instructions</label>
                      <input
                        type="text"
                        value={specialInstructions}
                        onChange={(e) => setSpecialInstructions(e.target.value)}
                        placeholder="e.g. Make biryani extra spicy, Coke instead of Pepsi"
                        className="w-full bg-brand-black border border-brand-red/20 focus:border-brand-gold rounded-xl px-3.5 py-2.5 text-white text-xs outline-none transition-all placeholder:text-gray-600"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Calculations & Submit */}
            {cartItems.length > 0 && (
              <div className="p-5 border-t border-brand-red/10 bg-brand-dark-gray/40 space-y-4">
                {/* Free Delivery Promo Bar */}
                {subtotal < 2000 ? (
                  <div className="text-center py-1.5 px-3 rounded bg-brand-gold/10 border border-brand-gold/20 text-[11px] text-brand-gold">
                    Add <strong>PKR {2000 - subtotal}</strong> more for <strong>FREE Delivery!</strong>
                  </div>
                ) : (
                  <div className="text-center py-1.5 px-3 rounded bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400">
                    🎉 You've unlocked <strong>FREE Delivery</strong> across Karachi!
                  </div>
                )}

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Subtotal</span>
                    <span>PKR {subtotal}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Delivery Charges</span>
                    <span>{deliveryCharges === 0 ? 'FREE' : `PKR ${deliveryCharges}`}</span>
                  </div>
                  <div className="flex justify-between text-base font-extrabold text-white pt-2 border-t border-dashed border-brand-red/10">
                    <span>Grand Total</span>
                    <span className="text-brand-gold">PKR {grandTotal}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-display font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare size={16} />
                  <span>Place Order on WhatsApp</span>
                </button>

                <p className="text-[10px] text-center text-gray-500">
                  This will launch WhatsApp Web or Mobile App automatically to confirm order.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
