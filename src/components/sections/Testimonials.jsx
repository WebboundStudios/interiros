import React from 'react';
import { useGoogleReviews } from '../../hooks/useGoogleReviews';
import { SITE_BRAND } from '../../constants/data';
import { SectionTitle } from '../ui/SectionTitle';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

// Extract client initials for avatar
const getInitials = (name) => {
  if (!name) return 'K';
  const parts = name.split(' ').filter(Boolean);
  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  return name.substring(0, 2).toUpperCase();
};

export function Testimonials() {
  const { reviews } = useGoogleReviews();

  // Duplicate dataset 3x for seamless infinite marquee loop on desktop
  const marqueeItems = [...reviews, ...reviews, ...reviews];

  return (
    <section id="testimonials" className="py-24 md:py-36 bg-[#F8F6F2] overflow-hidden border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14 md:mb-20">
        <SectionTitle
          subtitle="TESTIMONIALS"
          title={`What our clients say about ${SITE_BRAND.fullName}`}
        />
      </div>

      {/* MOBILE VIEW — Touch Swiper Carousel (< md) */}
      <div className="block md:hidden px-6">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1.08}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          className="!overflow-visible"
        >
          {reviews.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="p-8 bg-white rounded-[10px] border border-[#E8E2D8] flex flex-col justify-between min-h-[320px] transition-colors duration-300">
                {/* Top Header: Bronze Quote Mark Accent + Rating Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-5xl text-[#8C6D46] leading-none select-none">
                    “
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1 rounded-[10px] bg-[#F8F6F2] text-[#6F6F6F] border border-[#E8E2D8]">
                    ★ 5.0 Review
                  </span>
                </div>

                {/* Body Quote */}
                <p className="font-serif text-base text-[#1F1F1F] font-normal leading-relaxed mb-6">
                  "{t.quote}"
                </p>

                {/* Footer Profile */}
                <div className="flex items-center gap-3.5 border-t border-[#E8E2D8] pt-4">
                  <div className="w-10 h-10 rounded-[10px] bg-[#EFECE6] text-[#1F1F1F] border border-[#E8E2D8] shrink-0 flex items-center justify-center font-serif text-sm font-semibold tracking-wider">
                    {getInitials(t.client)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold tracking-wide text-[#1F1F1F]">
                      {t.client}
                    </span>
                    <span className="text-[11px] text-[#6F6F6F] font-light">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* DESKTOP VIEW — Continuous Marquee Stream with Calm Monochrome Editorial Cards (≥ md) */}
      <div className="hidden md:block relative w-full overflow-hidden py-4">
        <motion.div
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{
            duration: 42,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="flex gap-8 w-max px-6 cursor-grab"
        >
          {marqueeItems.map((t, idx) => (
            <div
              key={idx}
              className="w-[380px] lg:w-[440px] shrink-0 p-9 md:p-10 bg-white rounded-[10px] border border-[#E8E2D8] flex flex-col justify-between min-h-[330px] transition-all duration-300 hover:border-[#8C6D46]/60 cursor-pointer group"
            >
              {/* Top Header: Bronze Quote Mark Accent + Rating Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-6xl text-[#8C6D46] leading-none select-none transition-colors duration-300">
                  “
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold px-3.5 py-1 rounded-[10px] bg-[#F8F6F2] text-[#6F6F6F] border border-[#E8E2D8]">
                  ★ 5.0 Google Review
                </span>
              </div>

              {/* Body Quote */}
              <p className="font-serif text-lg lg:text-xl text-[#1F1F1F] font-normal leading-relaxed mb-8">
                "{t.quote}"
              </p>

              {/* Footer Profile */}
              <div className="flex items-center gap-4 border-t border-[#E8E2D8] pt-5">
                <div className="w-11 h-11 rounded-[10px] bg-[#EFECE6] text-[#1F1F1F] border border-[#E8E2D8] shrink-0 flex items-center justify-center font-serif text-base font-semibold tracking-wider">
                  {getInitials(t.client)}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold tracking-wide text-[#1F1F1F]">
                    {t.client}
                  </span>
                  <span className="text-xs text-[#6F6F6F] font-light">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
