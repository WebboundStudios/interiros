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
          <div className="lg:col-span-6 relative h-full min-h-[440px] md:min-h-[540px] rounded-[10px] overflow-hidden bg-[#EFECE6] border border-[#E8E2D8]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={currentSlide}
                initial={{ x: '100%', scale: 1 }}
                animate={{ x: '0%', scale: 1 }}
                exit={{ x: '-15%', opacity: 0.7 }}
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
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 bg-white p-8 md:p-10 rounded-[10px] border border-[#E8E2D8] shadow-sm flex flex-col justify-between">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center my-auto">
                <CheckCircle2 size={48} className="text-[#8C6D46] mb-4" />
                <h3 className="font-serif text-3xl text-[#1F1F1F] mb-2">Thank You!</h3>
                <p className="text-sm text-[#6F6F6F] max-w-md font-light">
                  Your inquiry has been received. Our architectural team will reach out to schedule your consultation within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs uppercase tracking-wider text-[#8C6D46] font-semibold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 my-auto">
                <div>
                  <input
                    {...register('name')}
                    placeholder="Name *"
                    className="w-full px-4 py-3.5 rounded-[10px] bg-[#F8F6F2] border border-[#E8E2D8] text-sm text-[#1F1F1F] placeholder:text-[#6F6F6F] focus:outline-none focus:border-[#8C6D46] transition-colors"
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
                    className="w-full px-4 py-3.5 rounded-[10px] bg-[#F8F6F2] border border-[#E8E2D8] text-sm text-[#1F1F1F] placeholder:text-[#6F6F6F] focus:outline-none focus:border-[#8C6D46] transition-colors"
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
                    className="w-full px-4 py-3.5 rounded-[10px] bg-[#F8F6F2] border border-[#E8E2D8] text-sm text-[#1F1F1F] placeholder:text-[#6F6F6F] focus:outline-none focus:border-[#8C6D46] transition-colors"
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
                    className="w-full px-4 py-3.5 rounded-[10px] bg-[#F8F6F2] border border-[#E8E2D8] text-sm text-[#1F1F1F] placeholder:text-[#6F6F6F] focus:outline-none focus:border-[#8C6D46] transition-colors"
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500 mt-1 block">{errors.message.message}</span>
                  )}
                </div>

                <Button type="submit" variant="brown" fillEffect={false} className="w-full py-4 mt-2" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending Request...' : 'Send Request'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
