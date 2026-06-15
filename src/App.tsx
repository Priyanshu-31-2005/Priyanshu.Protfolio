import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Stats from './components/Stats';
import Contact from './components/Contact';
import SocialFloating from './components/SocialFloating';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll handler
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset for sticky navbar
      const yOffset = -90; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Scrollspy to update active section in navbar automatically
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'services', 'projects', 'experience', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset, slightly earlier activation

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#EBEBE9] py-4 sm:py-8 md:py-12 px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 flex items-center justify-center relative overflow-x-hidden selection:bg-[#00D26A] selection:text-[#111111]">
      
      {/* Decorative luxury cloud backdrop patterns in outer viewport space */}
      <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-20%] w-[60%] h-[50%] bg-white/40 rounded-full filter blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-50/20 rounded-full filter blur-[150px]" />
        <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] bg-slate-350/15 rounded-full filter blur-[120px]" />
      </div>

      {/* Primary Floating Card Container (Designed directly from reference layout image) */}
      <div 
         id="premium_main_stage"
        className="w-full max-w-[1440px] bg-[#F7F7F5] rounded-3xl sm:rounded-[36px] shadow-[0_25px_80px_-15px_rgba(0,0,0,0.12)] border border-white/60 relative z-10 flex flex-col overflow-hidden"
      >
        
        {/* Transparent header container for the sticky card-style navbar */}
        <header className="relative w-full">
          <Navbar onNavClick={handleNavClick} activeSection={activeSection} />
        </header>

        {/* Floating Social Pill Menu */}
        <SocialFloating />

        {/* Master Portfolio Content Sections block */}
        <main className="flex-grow">
          {/* Hero split-screen greeting */}
          <Hero onNavClick={handleNavClick} />
          
          {/* Stats section */}
          <Stats />

          {/* About specification */}
          <About />

          {/* Service items */}
          <Services onNavClick={handleNavClick} />

          {/* Project entries */}
          <Projects />

          {/* Technical skill matrix panel */}
          <Skills />

          {/* Career chronology */}
          <Experience />

          {/* Secure conversion inquiries client contact */}
          <Contact />
        </main>

        {/* Premium bottom block */}
        <Footer onNavClick={handleNavClick} />

      </div>
    </div>
  );
}
