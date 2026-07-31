import React, { useRef } from 'react';
import { ABOUT_DATA } from '../../constants/data';
import { motion, useScroll, useTransform } from 'framer-motion';

function ScrollWordReveal({ text }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const words = text.split(' ');

  return (
    <h2
      ref={targetRef}
      className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-normal leading-[1.18] tracking-tight max-w-5xl text-[#1F1F1F]"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        const color = useTransform(scrollYProgress, [start, end], ['#C5C5C5', '#1F1F1F']);

        return (
          <motion.span
            key={i}
            style={{ opacity, color }}
            className="inline-block mr-[0.28em] mb-1.5"
          >
            {word}
          </motion.span>
        );
      })}
    </h2>
  );
}

export function About() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.4], [1.03, 1]);
  const detailsOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const detailsY = useTransform(scrollYProgress, [0.25, 0.45], [30, 0]);

  const philosophyTenets = [
    {
      num: '01',
      title: 'Spatial Harmony',
      description: 'Designing architectural layouts tailored to human flow, natural daylight, and atmospheric stillness.',
    },
    {
      num: '02',
      title: 'Material Honesty',
      description: 'Selecting raw stone, tactile linens, and solid hardwoods that age gracefully with time.',
    },
    {
      num: '03',
      title: 'Bespoke Precision',
      description: 'Obsessing over every custom shadow line, concealed millwork junction, and tailored detail.',
    },
  ];

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-36 bg-[#F8F6F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Subtitle Badge & Editorial Serif Word-by-Word Reveal */}
        <div className="mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.35em] text-[#8C6D46] font-semibold block mb-6">
            {ABOUT_DATA.subtitle}
          </span>
          <ScrollWordReveal text={ABOUT_DATA.headline} />
        </div>

        {/* Editorial 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          {/* Left Column: Large Founder Portrait + Short Editorial Quote */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Large Founder Image Frame with 10px Radius & Muted Warm Filter */}
            <div className="w-full rounded-[10px] overflow-hidden bg-[#EFECE6] border border-[#E8E2D8] aspect-[4/3] relative mb-8 shadow-sm">
              <motion.img
                style={{ scale: imageScale }}
                src={ABOUT_DATA.principalImage}
                alt={ABOUT_DATA.principalName}
                className="w-full h-full object-cover object-top origin-top luxury-image-filter"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Founder Attribution & Editorial Italic Quote */}
            <motion.div style={{ opacity: detailsOpacity, y: detailsY }} className="w-full pl-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-[#8C6D46]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#6F6F6F] font-medium">
                  {ABOUT_DATA.principalName} • {ABOUT_DATA.principalTitle}
                </span>
              </div>

              <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#1F1F1F] font-normal leading-snug relative">
                <span className="text-[#8C6D46] not-italic mr-1 text-4xl leading-none">“</span>
                {ABOUT_DATA.quote}
                <span className="text-[#8C6D46] not-italic ml-1 text-4xl leading-none">”</span>
              </blockquote>
            </motion.div>
          </div>

          {/* Right Column: Studio Philosophy & Impact Numbers */}
          <motion.div
            style={{ opacity: detailsOpacity, y: detailsY }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            {/* Studio Philosophy Block */}
            <div className="bg-[#EFECE6] p-8 md:p-10 rounded-[10px] border border-[#E8E2D8] mb-10">
              <span className="text-xs uppercase tracking-[0.35em] text-[#8C6D46] font-semibold block mb-6">
                STUDIO PHILOSOPHY
              </span>

              <div className="flex flex-col gap-6">
                {philosophyTenets.map((tenet) => (
                  <div key={tenet.num} className="border-b border-[#E8E2D8] pb-5 last:border-b-0 last:pb-0">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-xs font-mono text-[#8C6D46] font-medium">{tenet.num}</span>
                      <h4 className="font-serif text-xl text-[#1F1F1F] font-normal tracking-wide">
                        {tenet.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#6F6F6F] font-light leading-relaxed pl-7">
                      {tenet.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Studio Impact Metrics */}
            <div className="border-t border-[#E8E2D8] pt-8">
              <span className="text-xs uppercase tracking-[0.35em] text-[#1F1F1F] font-semibold block mb-6">
                STUDIO IMPRINT
              </span>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="font-serif text-4xl sm:text-5xl text-[#1F1F1F] font-light block mb-1">
                    50+
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#6F6F6F] font-medium block">
                    Luxury Projects
                  </span>
                </div>

                <div>
                  <span className="font-serif text-4xl sm:text-5xl text-[#1F1F1F] font-light block mb-1">
                    7+ Years
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#6F6F6F] font-medium block">
                    Architectural Legacy
                  </span>
                </div>

                <div>
                  <span className="font-serif text-4xl sm:text-5xl text-[#8C6D46] font-light block mb-1">
                    100%
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#6F6F6F] font-medium block">
                    Turnkey Service
                  </span>
                </div>

                <div>
                  <span className="font-serif text-2xl sm:text-3xl text-[#1F1F1F] font-light block mb-1">
                    Mumbai, IN
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#6F6F6F] font-medium block">
                    Bandra Studio
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
