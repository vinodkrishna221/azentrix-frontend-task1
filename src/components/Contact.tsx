'use client';

import React, { useState } from 'react';
import { Mail, Check, Loader2, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (touched[name as keyof typeof touched]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let hasError = false;
    if (name === 'name' || name === 'message') {
      hasError = value.trim() === '';
    } else if (name === 'email') {
      hasError = !validateEmail(value);
    }

    setErrors((prev) => ({ ...prev, [name]: hasError }));
    return !hasError;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trigger validation on all fields
    const nameValid = validateField('name', formData.name);
    const emailValid = validateField('email', formData.email);
    const messageValid = validateField('message', formData.message);
    
    setTouched({ name: true, email: true, message: true });

    if (!nameValid || !emailValid || !messageValid) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Dynamic import for canvas-confetti to prevent server-side rendering issues
    try {
      const confetti = (await import('canvas-confetti')).default;
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#6366F1', '#06B6D4', '#10B981'],
      });
    } catch (e) {
      console.warn('Confetti load error:', e);
    }

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setTouched({ name: false, email: false, message: false });
  };

  const getInputClass = (fieldName: 'name' | 'email' | 'message') => {
    const value = formData[fieldName];
    const isTouched = touched[fieldName];
    const hasError = errors[fieldName];

    if (!isTouched) return '';
    if (hasError) return 'input-error';
    if (value.trim() !== '' && (fieldName !== 'email' || validateEmail(value))) {
      return 'input-success';
    }
    return '';
  };

  return (
    <section 
      id="contact" 
      className="section-padding relative max-w-4xl mx-auto w-full flex flex-col items-center"
    >
      {/* Decorative background glow */}
      <div className="absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 w-[60%] h-[50%] rounded-full bg-cyan-500/[0.03] blur-[150px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <h3 className="text-xs md:text-sm font-semibold tracking-widest font-outfit uppercase text-cyan-400 mb-3">
          The Conversion
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-100">
          Get In Touch
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Main glass card container */}
      <div className="glass-panel p-8 md:p-12 w-full max-w-2xl relative">
        {isSuccess ? (
          /* Success Screen Animation */
          <div className="flex flex-col items-center text-center py-8 animate-[fadeIn_0.5s_ease-out]">
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
              <Check className="w-10 h-10 text-emerald-400 animate-[scaleUp_0.4s_cubic-bezier(0.175,0.885,0.32,1.275)]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-outfit text-slate-100 mb-3">
              Message Received!
            </h3>
            <p className="text-slate-400 font-light max-w-sm leading-relaxed mb-8">
              Thank you for reaching out. Aria Vance will get back to you within 24 business hours to discuss your creative projects.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider font-outfit border border-slate-700 hover:border-slate-500 hover:bg-slate-800/40 text-slate-300 hover:text-slate-100 transition-all duration-300 cursor-pointer"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          /* Core Form Layout */
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold font-outfit text-slate-200 text-left mb-6">
              Let’s build something remarkable.
            </h3>

            {/* Name Input Field */}
            <div className="form-group text-left">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`form-input ${getInputClass('name')}`}
                placeholder=" "
                required
              />
              <label htmlFor="name" className="form-label font-outfit">
                Full Name
              </label>
              {touched.name && errors.name && (
                <span className="text-xs text-rose-500 mt-1 block">Please enter your name.</span>
              )}
            </div>

            {/* Email Input Field */}
            <div className="form-group text-left">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`form-input ${getInputClass('email')}`}
                placeholder=" "
                required
              />
              <label htmlFor="email" className="form-label font-outfit">
                Email Address
              </label>
              {touched.email && errors.email && (
                <span className="text-xs text-rose-500 mt-1 block">Please enter a valid email address.</span>
              )}
            </div>

            {/* Message Input Field */}
            <div className="form-group text-left">
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`form-input min-h-[120px] resize-y ${getInputClass('message')}`}
                placeholder=" "
                required
              />
              <label htmlFor="message" className="form-label font-outfit">
                Project Details
              </label>
              {touched.message && errors.message && (
                <span className="text-xs text-rose-500 mt-1 block">Please include details about your request.</span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full py-4 rounded-full font-bold text-sm tracking-wider font-outfit uppercase bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-slate-100 shadow-[0_4px_24px_rgba(99,102,241,0.2)] hover:shadow-[0_4px_32px_rgba(99,102,241,0.35)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Transmitting...</span>
                </>
              ) : (
                <>
                  <span>Transmit Inquiry</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-[-1px] transition-transform duration-300" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
