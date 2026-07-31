import React from 'react';
import { CTA_DATA } from '../../constants/data';
import { Button } from '../ui/Button';

export function CTASection() {
  const bgImage = "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmv-KYV49vH1-nIpaGafCnabWK7f-v8XlOnGwZXslJopiEQLuFCZgs9DLL2glvv83yryqR9jNhYS7qAQzE8zxzXuw-dlJkmCenNyhY6ql2ByIDa9qoptRNzAdUEztx9ubJEeuizN1-KKZbc=s1360-w1360-h1020-rw";

  return (
    <section className="relative min-h-[580px] md:min-h-[660px] flex items-center justify-center overflow-hidden py-24">
      {/* Background Image with Mood Lighting & Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Warm luxury interior mood lighting"
          className="w-full h-full object-cover luxury-image-filter"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-black/40" />
      </div>

      {/* Centered Editorial Content matching Dekora Screenshot */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <span className="text-xs uppercase tracking-[0.35em] text-[#D0C7BC] font-medium mb-5 block">
          {CTA_DATA.subtitle}
        </span>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white mb-6 leading-[1.05] tracking-tight drop-shadow-md">
          {CTA_DATA.title}
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xl mx-auto font-light mb-10 leading-relaxed drop-shadow-sm">
          {CTA_DATA.description}
        </p>

        {/* Dual CTAs — Stacked on small mobile screens to prevent right edge clipping */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <Button variant="white" href={CTA_DATA.primaryCta.href} className="w-full sm:w-auto text-center justify-center px-5 sm:px-7">
            {CTA_DATA.primaryCta.text}
          </Button>
          <Button variant="transparent-white" href={CTA_DATA.secondaryCta.href} className="w-full sm:w-auto text-center justify-center px-5 sm:px-7">
            {CTA_DATA.secondaryCta.text}
          </Button>
        </div>
      </div>
    </section>
  );
}
