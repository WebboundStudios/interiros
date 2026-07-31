import React from 'react';
import { PROCESS_DATA } from '../../constants/data';
import { motion } from 'framer-motion';

export function Process() {
  return (
    <section id="process" className="py-24 md:py-36 bg-[#161616] text-white relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 bg-[#8C6D46]/15 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 bg-[#8C6D46]/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.35em] text-[#D0C7BC] font-semibold block mb-3">
              {PROCESS_DATA.subtitle || 'WORKING PROCESS'}
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.08] text-white">
              {PROCESS_DATA.headline || 'Our 4-Step Method'}
            </h2>
          </div>
          <div className="lg:col-span-8 lg:pl-12">
            <p className="text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
              From initial conceptualization to white-glove turnkey completion, our 4-step architectural methodology ensures total clarity, spatial efficiency, and flawless execution.
            </p>
          </div>
        </div>

        {/* 4-Step Method Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PROCESS_DATA.steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 md:p-10 rounded-3xl bg-[#22201E]/70 backdrop-blur-md border border-white/10 hover:border-[#8C6D46] flex flex-col justify-between min-h-[340px] md:min-h-[380px] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] cursor-pointer overflow-hidden"
            >
              {/* Card Corner Subtle Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-tr-3xl pointer-events-none" />

              {/* Top Header: Massive Step Numeral + Step Pill */}
              <div className="flex items-start justify-between mb-8 relative z-10">
                <span className="font-serif text-6xl md:text-7xl font-light text-[#D0C7BC] group-hover:text-white transition-colors duration-400 leading-none">
                  {step.number}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/15">
                  Phase {step.number}
                </span>
              </div>

              {/* Body Content */}
              <div className="relative z-10 pt-4">
                <h3 className="font-sans text-2xl md:text-3xl font-normal text-white mb-3 group-hover:text-[#D0C7BC] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom Interactive Progress Bar Line */}
              <div className="w-full h-0.5 bg-white/10 mt-8 relative overflow-hidden rounded-full">
                <div className="w-0 group-hover:w-full h-full bg-[#8C6D46] transition-all duration-500 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
