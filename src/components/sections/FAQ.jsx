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
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 max-w-sm"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-[#8C6D46] font-semibold flex items-center gap-3 mb-4">
            FAQS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.18] text-[#1F1F1F]">
            Frequently Asked Questions Answered
          </h2>
        </motion.div>

        {/* Accordion — Indented to the right (offset grid like Dekora) */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8 lg:col-start-5">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="relative border-t border-[#D8D4CE] last:border-b overflow-hidden"
                >
                  {/* Sliding accent bar behind the row when open */}
                  <motion.span
                    initial={false}
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -left-6 md:-left-8 top-0 bottom-0 w-[3px] bg-[#8C6D46]"
                  />

                  <button
                    onClick={() => toggle(idx)}
                    className="w-full py-6 md:py-7 flex items-center justify-between gap-6 text-left group"
                  >
                    {/* Question: Dark when active or nothing open, grey when another is open */}
                    <span
                      className={`font-serif text-xl sm:text-2xl font-normal leading-snug transition-all duration-300 ${
                        isOpen
                          ? 'text-[#1F1F1F] translate-x-1'
                          : openIndex !== null
                          ? 'text-[#B8B0A8]'
                          : 'text-[#1F1F1F] group-hover:translate-x-1 group-hover:text-[#8C6D46]'
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Icon: Single + that smoothly rotates 45deg into an X cross when opened */}
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0, backgroundColor: isOpen ? '#8C6D46' : 'rgba(255,255,255,0)' }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-2xl font-light select-none leading-none border transition-colors duration-300 ${
                        isOpen
                          ? 'text-white border-[#8C6D46]'
                          : 'text-[#9E9991] border-[#E8E2D8] group-hover:text-[#8C6D46] group-hover:border-[#8C6D46]'
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
                        transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm md:text-[15px] text-[#6F6F6F] font-light leading-relaxed pb-7 pr-12">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}