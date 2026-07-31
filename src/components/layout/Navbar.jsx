import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { SITE_BRAND } from '../../constants/data';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Service', href: '#services' },
    { name: 'Project', href: '#projects' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#F8F6F2]/90 backdrop-blur-md py-4 shadow-sm border-b border-[#E8E2D8]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex flex-col group">
          <span
            className={`font-serif text-2xl md:text-3xl font-normal tracking-tight transition-colors capitalize ${
              isScrolled ? 'text-[#1F1F1F]' : 'text-white'
            }`}
          >
            {SITE_BRAND.fullName.includes('न्वी') ? (
              <span className="inline-flex items-baseline">
                <span>Kaa</span>
                <span className="font-arya font-bold px-[1px] text-[1.1em]">न्वी</span>
                <span className="ml-1.5 font-sans text-xs uppercase tracking-[0.2em] opacity-80 self-center">Design Studio</span>
              </span>
            ) : (
              SITE_BRAND.logoText
            )}
          </span>
        </a>

        {/* Desktop Navigation Links — Architectural text links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 relative py-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled
                  ? 'text-[#1F1F1F] hover:text-[#8C6D46] after:bg-[#8C6D46]'
                  : 'text-white/90 hover:text-white after:bg-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Single Outlined Consultation Button */}
        <div className="hidden md:block">
          <Button variant={isScrolled ? 'outline' : 'transparent-white'} href="#contact">
            Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 focus:outline-none ${isScrolled ? 'text-[#1F1F1F]' : 'text-white'}`}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8F6F2] border-b border-[#E8E2D8] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-[#1F1F1F] hover:text-[#8C6D46] py-2"
            >
              {link.name}
            </a>
          ))}
          <Button variant="brown" href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full mt-2">
            Contact
          </Button>
        </div>
      )}
    </header>
  );
}
