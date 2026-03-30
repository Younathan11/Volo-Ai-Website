import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, User, Mail, Phone, CheckCircle2 } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({ firstName: "", lastName: "", email: "", phone: "" });
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-surface-bright border border-outline-variant/20 rounded-2xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8">
              {!isSubmitted ? (
                <>
                  <div className="mb-8">
                    <h2 className="text-3xl font-extrabold font-headline tracking-tighter text-on-surface mb-2">
                      Request a Demo
                    </h2>
                    <p className="text-on-surface-variant font-light">
                      Fill out the form below and our team will get in touch with you shortly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                          <User className="w-3 h-3" /> First Name
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="John"
                          className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                          <User className="w-3 h-3" /> Last Name
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Doe"
                          className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                        <Mail className="w-3 h-3" /> Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@agency.com"
                        className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                        <Phone className="w-3 h-3" /> Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+20 123 456 7890"
                        className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full monolith-button py-4 rounded-lg text-white font-headline font-bold text-lg flex items-center justify-center gap-2 mt-4"
                    >
                      <Send className="w-5 h-5" />
                      Send Request
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-3xl font-extrabold font-headline tracking-tighter text-on-surface">
                    Request Received!
                  </h2>
                  <p className="text-on-surface-variant font-light max-w-xs mx-auto">
                    Thank you for your interest. Our team will contact you within 24 hours to schedule your personalized demo.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
