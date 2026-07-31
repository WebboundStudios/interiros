import React, { useState } from 'react';
import { HERO_DATA, SITE_BRAND } from '../../constants/data';
import { Button } from '../ui/Button';
import { TextRoll } from '../ui/TextRoll';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Service', href: '#services' },
    { name: 'Project', href: '#projects' },
  ];

  return (
    <section id="hero" className="fixed top-0 left-0 right-0 h-screen flex items-end pb-20 md:pb-28 overflow-hidden bg-[#161616] text-white z-0">
      {/* Navbar INSIDE Hero Section ONLY */}
      <header className="absolute top-0 left-0 right-0 z-20 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo & Full Name */}
          <motion.a
            initial="initial"
            whileHover="hovered"
            href="#hero"
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            <img
              src={SITE_BRAND.logoImage || "/Kaanvi_logo.png"}
              alt={SITE_BRAND.fullName}
              className="h-14 md:h-16 lg:h-20 w-auto object-contain rounded-[10px]"
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
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#161616]/95 backdrop-blur-md border-b border-white/10 px-6 py-6 flex flex-col gap-4 mt-4 text-white">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-white hover:text-[#B08D57] py-2"
              >
                {link.name}
              </a>
            ))}
            <Button variant="white" href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full mt-2">
              Consultation
            </Button>
          </div>
        )}
      </header>

      {/* Fullscreen Background Image with subtle warm overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_DATA.bgImage}
          alt={SITE_BRAND.fullName}
          className="w-full h-full object-cover object-top opacity-90 scale-100 transition-transform duration-1000 luxury-image-filter"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Left-Aligned Hero Content Matching Dekora Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start text-left">
        {/* Editorial Serif Headline */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[84px] font-normal leading-[1.05] tracking-tight mb-6 text-white max-w-3xl drop-shadow-sm">
          {HERO_DATA.title}
        </h1>

        {/* Supporting Narrative */}
        <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xl font-normal leading-relaxed mb-8 drop-shadow-sm">
          {HERO_DATA.description}
        </p>

        {/* Dual CTAs — Stacked full-width on mobile to prevent horizontal clipping, horizontal on tablet/desktop */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <Button variant="white" href={HERO_DATA.primaryCta.href} className="w-full sm:w-auto text-center justify-center px-5 sm:px-7">
            {HERO_DATA.primaryCta.text}
          </Button>
          <Button variant="transparent-white" href={HERO_DATA.secondaryCta.href} className="w-full sm:w-auto text-center justify-center px-5 sm:px-7">
            {HERO_DATA.secondaryCta.text}
          </Button>
        </div>
      </div>
    </section>
  );
}
