import React from 'react';
import { useLenis } from './hooks/useLenis';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Process } from './components/sections/Process';
import { Projects } from './components/sections/Projects';
import { Testimonials } from './components/sections/Testimonials';
import { CTASection } from './components/sections/CTASection';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export default function App() {
  // Initialize Lenis smooth scrolling
  useLenis();

  return (
    <div className="min-h-screen bg-[#161616] text-[#1F1F1F] font-sans antialiased">
      <main className="relative">
        {/* Fixed Hero Section (includes Navbar at top of Hero) */}
        <Hero />

        {/* Content Wrapper sliding up OVER fixed Hero (mt-[100vh] provides 100vh offset) */}
        <div className="relative z-10 mt-[100vh] bg-[#F8F6F2] shadow-[0_-25px_60px_rgba(0,0,0,0.3)]">
          <About />
          <Services />
          <WhyChooseUs />
          <Process />
          <Projects />
          <Testimonials />
          <CTASection />
          <FAQ />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}