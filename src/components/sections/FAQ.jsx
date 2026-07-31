import React, { useState } from 'react';
import { FAQ_DATA } from '../../constants/data';
import { motion, AnimatePresence } from 'framer-motion';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Label + Title — Left-aligned, full width */}
        <div className="mb-16 md:mb-24 max-w-sm">
          <span className="text-xs uppercase tracking-[0.35em] text-[#8C6D46] font-semibold block mb-4">
            FAQS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.18] text-[#1F1F1F]">
            Frequently Asked Questions Answered
          </h2>
        </div>

        {/* Accordion — Indented to the right (offset grid like Dekora) */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8 lg:col-start-5">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="border-t border-[#D8D4CE] last:border-b">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full py-6 md:py-7 flex items-center justify-between gap-6 text-left group"
                  >
                    {/* Question: Dark when active or nothing open, grey when another is open */}
                    <span
                      className={`font-serif text-xl sm:text-2xl font-normal leading-snug transition-colors duration-300 ${
                        isOpen
                          ? 'text-[#1F1F1F]'
                          : openIndex !== null
                          ? 'text-[#B8B0A8]'
                          : 'text-[#1F1F1F]'
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Icon: Single + that smoothly rotates 45deg into an X cross when opened */}
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className={`shrink-0 text-2xl font-light select-none leading-none inline-block transition-colors duration-300 ${
                        isOpen ? 'text-[#1F1F1F]' : 'text-[#9E9991] group-hover:text-[#1F1F1F]'
                      }`}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm md:text-[15px] text-[#6F6F6F] font-light leading-relaxed pb-7 pr-12">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
