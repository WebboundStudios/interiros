import React, { useState } from 'react';
import { PILLARS_DATA } from '../../constants/data';
import { TextRoll } from '../ui/TextRoll';
import { motion } from 'framer-motion';

export function WhyChooseUs() {
  const [activeCard, setActiveCard] = useState(0); // Card 0 active by default matching Dekora design

  const getCardRadius = (idx, total) => {
    if (idx === 0) return 'rounded-[10px] lg:rounded-l-[10px] lg:rounded-r-none';
    if (idx === total - 1) return 'rounded-[10px] lg:rounded-r-[10px] lg:rounded-l-none';
    return 'rounded-[10px] lg:rounded-none';
  };

  const getCardBg = (idx) => {
    if (idx === 1 || idx === 3) return 'bg-[#F2EFE9]';
    if (idx === 2) return 'bg-[#F8F6F2]';
    return 'bg-[#EFECE6]';
  };

  return (
    <section id="why" className="py-24 md:py-36 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Grid: Subtitle Left, Headline Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 md:mb-24 items-start">
          <div className="lg:col-span-3">
            <motion.span
              initial="initial"
              whileHover="hovered"
              className="text-xs uppercase tracking-[0.35em] text-[#8C6D46] font-semibold block cursor-pointer"
            >
              <TextRoll>{PILLARS_DATA.subtitle}</TextRoll>
            </motion.span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-wide text-[#1F1F1F] max-w-5xl">
              {PILLARS_DATA.headline}
            </h2>
          </div>
        </div>

        {/* 4-Column Connected Card Strip (Matching Dekora screenshot layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 items-stretch border-y border-[#E8E2D8]/40 lg:border-none">
          {PILLARS_DATA.items.map((item, idx) => {
            const radius = getCardRadius(idx, PILLARS_DATA.items.length);
            const bgClass = getCardBg(idx);
            const isActive = activeCard === idx;

            return (
              <motion.div
                key={item.number}
                initial="initial"
                whileHover="hovered"
                onMouseEnter={() => setActiveCard(idx)}
                onClick={() => setActiveCard(idx)}
                className={`group relative p-6 sm:p-7 xl:p-8 min-h-[360px] md:min-h-[420px] flex flex-col justify-between transition-all duration-500 overflow-hidden cursor-pointer ${radius} ${bgClass} border border-[#E8E2D8]/60 lg:border-[#E8E2D8]/40`}
              >
                {/* Background Image Layer (Active or Hovered or Always Active on Mobile) */}
                <div
                  className={`absolute inset-0 z-0 transition-opacity duration-500 overflow-hidden ${
                    isActive
                      ? 'opacity-100'
                      : 'opacity-100 lg:opacity-0 lg:group-hover:opacity-100'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover scale-100 luxury-image-filter transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
                </div>

                {/* Large Number Top Left */}
                <div className="relative z-10">
                  <span
                    className={`font-sans text-5xl sm:text-6xl md:text-7xl font-light tracking-tight transition-colors duration-300 block ${
                      isActive
                        ? 'text-white'
                        : 'text-white lg:text-[#1F1F1F] lg:group-hover:text-white'
                    }`}
                  >
                    {item.number}
                  </span>
                </div>

                {/* Title Bottom Left & Description Reveal */}
                <div
                  className={`relative z-10 pt-4 border-b transition-colors duration-300 pb-3 ${
                    isActive
                      ? 'border-white/40'
                      : 'border-white/40 lg:border-[#1F1F1F]/20 lg:group-hover:border-white/40'
                  }`}
                >
                  <h3
                    className={`font-sans text-xl sm:text-2xl lg:text-[1.3rem] xl:text-2xl font-normal transition-colors duration-300 tracking-wide leading-tight ${
                      isActive
                        ? 'text-white'
                        : 'text-white lg:text-[#1F1F1F] lg:group-hover:text-white'
                    }`}
                  >
                    <TextRoll>{item.title}</TextRoll>
                  </h3>

                  {/* Description Paragraph — Always active on mobile, expanded on hover for desktop */}
                  <div
                    className={`grid transition-all duration-500 overflow-hidden ${
                      isActive
                        ? 'grid-rows-[1fr]'
                        : 'grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]'
                    }`}
                  >
                    <p
                      className={`min-h-0 text-xs sm:text-[13px] text-white/90 font-light leading-relaxed pt-3 transition-opacity duration-500 ${
                        isActive
                          ? 'opacity-100'
                          : 'opacity-100 lg:opacity-0 lg:group-hover:opacity-100'
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
