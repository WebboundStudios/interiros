import React, { useRef, useState } from 'react';
import { SERVICES_DATA } from '../../constants/data';
import { Button } from '../ui/Button';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

export function Services() {
  const desktopSectionRef = useRef(null);
  const mobileSectionRef = useRef(null);

  const [desktopActiveIndex, setDesktopActiveIndex] = useState(0);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  const { scrollYProgress: desktopScrollProgress } = useScroll({
    target: desktopSectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(desktopScrollProgress, 'change', (latest) => {
    const index = Math.min(
      SERVICES_DATA.length - 1,
      Math.floor(latest * SERVICES_DATA.length)
    );
    if (index !== desktopActiveIndex) setDesktopActiveIndex(index);
  });

  const { scrollYProgress: mobileScrollProgress } = useScroll({
    target: mobileSectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(mobileScrollProgress, 'change', (latest) => {
    const index = Math.min(
      SERVICES_DATA.length - 1,
      Math.floor(latest * SERVICES_DATA.length)
    );
    if (index !== mobileActiveIndex) setMobileActiveIndex(index);
  });

  const desktopService = SERVICES_DATA[desktopActiveIndex] || SERVICES_DATA[0];

  return (
    <>
      {/* MOBILE VIEW ONLY (< md) */}
      <section ref={mobileSectionRef} id="services-mobile" className="block md:hidden relative bg-[#F8F6F2] py-4">
        <div className="sticky top-0 z-30 bg-[#F8F6F2] pt-14 pb-4 overflow-hidden border-b border-[#E8E2D8]/50">
          <div className="w-full pl-6 pr-0 overflow-hidden">
            <motion.div
              className="flex items-center gap-2"
              animate={{ x: `calc(-${mobileActiveIndex * 83}% - ${mobileActiveIndex * 8}px)` }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {SERVICES_DATA.map((service, idx) => {
                const isActive = idx === mobileActiveIndex;
                return (
                  <motion.div
                    key={service.id}
                    onClick={() => setMobileActiveIndex(idx)}
                    animate={{
                      scale: isActive ? 1 : 0.85,
                    }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className={`shrink-0 w-[83vw] aspect-[4/3] rounded-[10px] overflow-hidden bg-[#EFECE6] border border-[#E8E2D8] cursor-pointer origin-left ${
                      isActive ? 'ring-1 ring-[#8C6D46]/40' : ''
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover luxury-image-filter"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-12 pt-10 pb-16">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-start min-h-[200px] justify-center border-b border-[#E8E2D8]/60 pb-8 last:border-b-0"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-[#8C6D46] font-semibold mb-2 block">
                {service.subtitle || 'OUR SERVICE'}
              </span>

              <h2 className="font-serif text-3xl font-normal leading-[1.12] text-[#1F1F1F] mb-4">
                {service.title}
              </h2>

              <p className="text-sm text-[#6F6F6F] font-light leading-relaxed mb-6">
                {service.description}
              </p>

              <Button
                variant="dark"
                href="#contact"
                fillEffect={false}
                className="w-full justify-center py-3.5 px-8 rounded-[10px] bg-[#1F1F1F] text-white border-[#1F1F1F]"
              >
                {service.ctaText || 'Service Detail'}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* DESKTOP VIEW ONLY (≥ md) */}
      <section ref={desktopSectionRef} id="services" className="hidden md:block relative h-[300vh] bg-[#F8F6F2]">
        <div className="sticky top-0 h-screen overflow-hidden flex">
          {/* LEFT — text column */}
          <div className="flex flex-col justify-center pl-14 md:pl-20 pr-10 w-[44%] shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={desktopService.id}
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -36 }}
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-start"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-[#8C6D46] font-semibold mb-3 block">
                  {desktopService.subtitle || 'OUR SERVICE'}
                </span>

                <h2 className="font-serif text-[2.8rem] lg:text-5xl font-normal leading-[1.08] text-[#1F1F1F] mb-7 tracking-tight">
                  {desktopService.title}
                </h2>

                <p className="text-sm text-[#6F6F6F] font-light leading-[1.75] mb-9 max-w-[360px]">
                  {desktopService.description}
                </p>

                <Button variant="dark" href="#contact">
                  {desktopService.ctaText}
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT — full height image track */}
          <div className="flex-1 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 flex items-stretch gap-2"
              animate={{ x: `-${desktopActiveIndex * 86.5}%` }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {SERVICES_DATA.map((service, idx) => {
                const isActive = idx === desktopActiveIndex;
                return (
                  <motion.div
                    key={service.id}
                    onClick={() => setDesktopActiveIndex(idx)}
                    animate={{
                      scale: isActive ? 1 : 0.85,
                    }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="shrink-0 w-[86%] my-12 rounded-[10px] overflow-hidden bg-[#EFECE6] border border-[#E8E2D8] cursor-pointer origin-left"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover luxury-image-filter"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
