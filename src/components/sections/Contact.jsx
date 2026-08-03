import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CONTACT_DATA } from '../../constants/data';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import { CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(6, 'Valid phone number is required'),
  email: z.string().email('Valid email address is required'),
  message: z.string().min(10, 'Message should be at least 10 characters'),
});

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log('Form submission:', data);
    setSubmitted(true);
    reset();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CONTACT_DATA.images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#EFECE6] border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle
          subtitle={CONTACT_DATA.subtitle}
          title={CONTACT_DATA.title}
          description={CONTACT_DATA.description}
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-6 relative h-full min-h-[440px] md:min-h-[540px] rounded-[10px] overflow-hidden bg-[#EFECE6] border border-[#E8E2D8] shadow-[0_30px_70px_-30px_rgba(31,31,31,0.4)]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={currentSlide}
                initial={{ x: '100%', scale: 1.06, opacity: 0.9 }}
                animate={{ x: '0%', scale: 1, opacity: 1 }}
                exit={{ x: '-15%', opacity: 0, scale: 0.98 }}
                transition={{
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 w-full h-full overflow-hidden"
              >
                <img
                  src={CONTACT_DATA.images[currentSlide]}
                  alt={`Interior showcase ${currentSlide + 1}`}
                  className="w-full h-full object-cover luxury-image-filter"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Signature registration marks */}
            <div className="pointer-events-none absolute inset-4 z-20">
              <span className="absolute top-0 left-0 w-7 h-7 border-t border-l border-white/60" />
              <span className="absolute top-0 right-0 w-7 h-7 border-t border-r border-white/60" />
            </div>

            {/* Pagination dots */}
            {CONTACT_DATA.images.length > 1 && (
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2">
                {CONTACT_DATA.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`View image ${idx + 1}`}
                    className="relative h-1.5 rounded-full bg-white/40 overflow-hidden transition-all duration-500"
                    style={{ width: idx === currentSlide ? '28px' : '8px' }}
                  >
                    {idx === currentSlide && (
                      <motion.span
                        layoutId="contact-dot-fill"
                        className="absolute inset-0 bg-white rounded-full"
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 bg-white p-8 md:p-10 rounded-[10px] border border-[#E8E2D8] shadow-[0_25px_60px_-35px_rgba(31,31,31,0.45)] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="py-12 flex flex-col items-center text-center my-auto"
                >
                  <motion.div
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                  >
                    <CheckCircle2 size={48} className="text-[#8C6D46] mb-4" />
                  </motion.div>
                  <h3 className="font-serif text-3xl text-[#1F1F1F] mb-2">Thank You!</h3>
                  <p className="text-sm text-[#6F6F6F] max-w-md font-light">
                    Your inquiry has been received. Our architectural team will reach out to schedule your consultation within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs uppercase tracking-wider text-[#8C6D46] font-semibold underline underline-offset-4 hover:text-[#6F5636] transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-5 my-auto"
                >
                  <div>
                    <input
                      {...register('name')}
                      placeholder="Name *"
                      className="w-full px-4 py-3.5 rounded-[10px] bg-[#F8F6F2] border border-[#E8E2D8] text-sm text-[#1F1F1F] placeholder:text-[#6F6F6F] focus:outline-none focus:border-[#8C6D46] focus:ring-4 focus:ring-[#8C6D46]/10 transition-all duration-300"
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.name.message}</span>
                    )}
                  </div>

                  <div>
                    <input
                      {...register('phone')}
                      placeholder="Phone *"
                      type="tel"
                      className="w-full px-4 py-3.5 rounded-[10px] bg-[#F8F6F2] border border-[#E8E2D8] text-sm text-[#1F1F1F] placeholder:text-[#6F6F6F] focus:outline-none focus:border-[#8C6D46] focus:ring-4 focus:ring-[#8C6D46]/10 transition-all duration-300"
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.phone.message}</span>
                    )}
                  </div>

                  <div>
                    <input
                      {...register('email')}
                      placeholder="Email *"
                      type="email"
                      className="w-full px-4 py-3.5 rounded-[10px] bg-[#F8F6F2] border border-[#E8E2D8] text-sm text-[#1F1F1F] placeholder:text-[#6F6F6F] focus:outline-none focus:border-[#8C6D46] focus:ring-4 focus:ring-[#8C6D46]/10 transition-all duration-300"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>
                    )}
                  </div>

                  <div>
                    <textarea
                      {...register('message')}
                      placeholder="Project Details & Requirements *"
                      rows={4}
                      className="w-full px-4 py-3.5 rounded-[10px] bg-[#F8F6F2] border border-[#E8E2D8] text-sm text-[#1F1F1F] placeholder:text-[#6F6F6F] focus:outline-none focus:border-[#8C6D46] focus:ring-4 focus:ring-[#8C6D46]/10 transition-all duration-300 resize-none"
                    />
                    {errors.message && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.message.message}</span>
                    )}
                  </div>

                  <Button type="submit" variant="brown" fillEffect={false} className="w-full py-4 mt-2" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending Request...' : 'Send Request'}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}