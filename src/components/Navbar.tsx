import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavClick, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav
        id="app_navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'mx-auto my-4 max-w-4xl rounded-full border border-[#E5E5E5] bg-white/90 shadow-md backdrop-blur-md px-6 py-2.5 sm:py-3'
            : 'bg-white/60 border-b border-[#E5E5E5] py-5 px-6 md:px-12 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo / Name */}
          <div className="flex items-center space-x-6">
            <button
              onClick={() => onNavClick('home')}
              className="font-sans text-sm font-black tracking-tighter uppercase text-[#111111] hover:opacity-85 transition-opacity"
            >
              Priyanshu Patel
            </button>
            
            {/* Status indicator pill */}
            <div className="hidden sm:flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-[#E5E5E5] shadow-sm">
              <span className="w-2 h-2 bg-[#00D26A] rounded-full animate-pulse"></span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#111111]">Available for Projects</span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={`relative font-sans text-[11px] font-bold uppercase tracking-widest px-1 py-1.5 transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-[#111111]'
                    : 'text-[#666666] hover:text-[#111111]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#111111]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Let's Build CTA & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onNavClick('contact')}
              className="bg-[#0A0A0A] hover:bg-zinc-800 text-white text-[11px] font-bold uppercase px-6 py-3 rounded-full shadow-sm transition-colors cursor-pointer whitespace-nowrap"
            >
              Let's Build →
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-gray-700 hover:text-black hover:bg-gray-100 rounded-full lg:hidden"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 mx-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-lg backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col space-y-3.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavClick(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between font-sans text-sm font-medium py-1 px-2.5 rounded-lg text-left transition-colors duration-150 ${
                    activeSection === item.id
                      ? 'bg-gray-50 text-[#111111]'
                      : 'text-[#666666] hover:bg-gray-50 hover:text-[#111111]'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00D26A]" />
                  )}
                </button>
              ))}
              <div className="h-[1px] bg-gray-100 my-1" />
              <button
                onClick={() => {
                  onNavClick('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-center space-x-2 w-full bg-[#111111] hover:bg-gray-800 text-white font-sans text-sm font-medium py-2.5 px-4 rounded-xl shadow-sm transition-all duration-200"
              >
                <span>Let's Build</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
