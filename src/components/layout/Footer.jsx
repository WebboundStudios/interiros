import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { TextRoll } from '../ui/TextRoll';
import { SITE_BRAND } from '../../constants/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-grain relative bg-[#161616] text-white pt-20 pb-12 border-t border-white/10 overflow-hidden">
      {/* Ambient glow, ties the footer back to the dark sections' visual language */}
      <div className="pointer-events-none absolute -bottom-32 left-1/4 w-96 h-96 bg-[#8C6D46]/10 rounded-full blur-[130px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10"
        >
          {/* Brand Narrative */}
          <div className="md:col-span-6 flex flex-col items-start pr-4">
            <motion.a
              initial="initial"
              whileHover="hovered"
              href="#hero"
              className="flex items-center gap-3.5 mb-4 cursor-pointer max-w-full"
            >
              {SITE_BRAND.logoImage && (
                <img
                  src={SITE_BRAND.logoImage}
                  alt={SITE_BRAND.name}
                  className="h-10 md:h-12 w-auto object-contain rounded-sm shrink-0"
                />
              )}
              <div className="flex flex-col min-w-0">
                <span className="font-serif text-2xl md:text-3xl font-normal tracking-wide text-white break-words">
                  {SITE_BRAND.fullName.includes('न्वी') ? (
                    <span className="inline-flex items-baseline">
                      <span>Kaa</span>
                      <span className="font-arya font-bold px-[1px] text-white text-[1.1em]">न्वी</span>
                      <span className="ml-1.5 font-sans text-xs uppercase tracking-[0.2em] opacity-80 self-center">Design Studio</span>
                    </span>
                  ) : (
                    <TextRoll>{SITE_BRAND.fullName}</TextRoll>
                  )}
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#D0C7BC] font-medium mt-1 block leading-tight">
                  {`${SITE_BRAND.category} • ${SITE_BRAND.city}`}
                </span>
              </div>
            </motion.a>
            <p className="text-sm text-white/70 max-w-md font-light leading-relaxed">
              {`${SITE_BRAND.name} — ${SITE_BRAND.tagline.toLowerCase()}`}
            </p>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-3 flex flex-col">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D0C7BC] font-semibold mb-4 block">
              <TextRoll>Navigation</TextRoll>
            </span>
            <ul className="flex flex-col gap-2.5 text-xs uppercase tracking-wider text-white/80">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    initial="initial"
                    whileHover="hovered"
                    href={link.href}
                    className="inline-flex items-center gap-1.5 hover:text-[#D0C7BC] transition-colors cursor-pointer"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#D0C7BC] transition-all duration-300" />
                    <TextRoll>{link.name}</TextRoll>
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Location & Contact */}
          <div className="md:col-span-3 flex flex-col">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D0C7BC] font-semibold mb-4 block">
              <TextRoll>Studio Location</TextRoll>
            </span>
            <div className="text-xs text-white/70 flex flex-col gap-2 font-light">
              <p className="leading-relaxed">{SITE_BRAND.address}</p>
              <p>Phone: {SITE_BRAND.phone}</p>
              <motion.a
                initial="initial"
                whileHover="hovered"
                href={`https://www.instagram.com/${SITE_BRAND.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D0C7BC] hover:underline font-normal mt-1 inline-block cursor-pointer"
              >
                {`Instagram: ${SITE_BRAND.instagram}`}
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-light">
          <p>© {currentYear} {SITE_BRAND.fullName}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <p className="text-[11px]">
              Concept Design & Development by{' '}
              <motion.a
                initial="initial"
                whileHover="hovered"
                href="https://webbound-nine.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D0C7BC] font-normal hover:underline inline-block cursor-pointer"
              >
                <TextRoll>Webbound Studios</TextRoll>
              </motion.a>
            </p>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              aria-label="Back to top"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-[#8C6D46] transition-colors duration-300 shrink-0"
            >
              <ArrowUp size={15} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}