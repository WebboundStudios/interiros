import React, { useState } from 'react';
import { HERO_DATA, SITE_BRAND } from '../../constants/data';
import { Button } from '../ui/Button';
import { TextRoll } from '../ui/TextRoll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const heroContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.5 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Service', href: '#services' },
    { name: 'Project', href: '#projects' },
  ];

  return (
    <section id="hero" className="fixed top-0 left-0 right-0 h-screen flex items-end pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-[#161616] text-white z-0">
      {/* Navbar INSIDE Hero Section ONLY */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 z-20 py-5 md:py-6"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo & Full Name */}
          <motion.a
            initial="initial"
            whileHover="hovered"
            href="#hero"
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            <img
              src={SITE_BRAND.logoImage || "/Kasa_logo.jpg"}
              alt={SITE_BRAND.fullName}
              className="h-10 md:h-12 w-auto object-contain rounded-md"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg md:text-xl font-normal tracking-wide text-white leading-tight">
                {SITE_BRAND.fullName.includes('न्वी') ? (
                  <span className="inline-flex items-baseline">
                    <span>Kaa</span>
                    <span className="font-arya font-bold px-[1px] text-white text-[1.1em]">न्वी</span>
                    <span className="ml-1.5">Design Studio</span>
                  </span>
                ) : (
                  <TextRoll>{SITE_BRAND.fullName}</TextRoll>
                )}
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D0C7BC] font-medium mt-0.5">
                {`${SITE_BRAND.city} • Studio`}
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation Links — Architectural text links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                initial="initial"
                whileHover="hovered"
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-white/90 hover:text-white transition-colors duration-300 relative py-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
              >
                <TextRoll>{link.name}</TextRoll>
              </motion.a>
            ))}
          </nav>

          {/* Single Outlined Consultation Button */}
          <div className="hidden md:block">
            <Button variant="transparent-white" href="#contact">
              Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Drawer inside Hero */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden bg-[#161616]/95 backdrop-blur-md border-b border-white/10 overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4 mt-4 text-white">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-semibold uppercase tracking-wider text-white hover:text-[#B08D57] py-2"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <Button variant="white" href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full mt-2">
                  Consultation
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Fullscreen Background Image with subtle warm overlay + slow Ken Burns drift */}
      <div className="bg-grain absolute inset-0 z-0">
        <motion.img
          src={HERO_DATA.bgImage}
          alt={SITE_BRAND.fullName}
          className="w-full h-full object-cover object-top opacity-90 luxury-image-filter"
          referrerPolicy="no-referrer"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/35" />
      </div>

      {/* Left-Aligned Hero Content Matching Dekora Layout */}
      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start text-left"
      >
        {/* Editorial Serif Headline */}
        <motion.h1
          variants={heroItem}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.12] tracking-tight mb-6 text-white max-w-3xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
        >
          {HERO_DATA.title}
        </motion.h1>

        {/* Supporting Narrative */}
        <motion.p
          variants={heroItem}
          className="text-sm sm:text-base md:text-lg text-white/90 max-w-xl font-normal leading-relaxed mb-8 drop-shadow-sm"
        >
          {HERO_DATA.description}
        </motion.p>

        {/* Dual CTAs — Stacked full-width on mobile to prevent horizontal clipping, horizontal on tablet/desktop */}
        <motion.div
          variants={heroItem}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
        >
          <Button variant="white" href={HERO_DATA.primaryCta.href} className="w-full sm:w-auto text-center justify-center px-5 sm:px-7 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
            {HERO_DATA.primaryCta.text}
          </Button>
          <Button variant="transparent-white" href={HERO_DATA.secondaryCta.href} className="w-full sm:w-auto text-center justify-center px-5 sm:px-7">
            {HERO_DATA.secondaryCta.text}
          </Button>
        </motion.div>
      </motion.div>

      {/* Subtle scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="hidden sm:flex absolute bottom-8 right-6 md:right-12 z-10 flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-white/70 to-transparent"
        />
      </motion.div>
    </section>
  );
}