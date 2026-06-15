import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Calendar, ArrowRight, MessageSquare } from 'lucide-react';

interface HeroProps {
  onNavClick: (sectionId: string) => void;
}

export default function Hero({ onNavClick }: HeroProps) {
  const [imgSrc, setImgSrc] = React.useState("https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=700");

  React.useEffect(() => {
    // Check if the user uploaded their own profile photo to the root or public folders
    const checkCustomImage = async () => {
      try {
        const resJpg = await fetch('/profile.jpg', { method: 'HEAD' });
        if (resJpg.ok) {
          setImgSrc('/profile.jpg');
          return;
        }
        const resPng = await fetch('/profile.png', { method: 'HEAD' });
        if (resPng.ok) {
          setImgSrc('/profile.png');
          return;
        }
        const resJpeg = await fetch('/profile.jpeg', { method: 'HEAD' });
        if (resJpeg.ok) {
          setImgSrc('/profile.jpeg');
          return;
        }
      } catch (err) {
        // Fallback to gorgeous placeholder
      }
    };
    checkCustomImage();
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Decorative blurred soft circles for minimal premium atmosphere */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-100/30 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-20 w-[450px] h-[450px] bg-slate-200/40 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Premium Floating Container Framing (Similar to the reference layout) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* Floating Interior Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column (Hero copy and status badge) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8">

            {/* Elegant glassmorphism available status badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/70 border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D26A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D26A]"></span>
              </span>
              <span className="font-sans text-xs font-semibold tracking-wider text-gray-800 uppercase">
                Available for New Projects
              </span>
            </motion.div>

            {/* Main Header / Display details */}
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans text-[12px] font-bold tracking-[0.25em] text-[#666666] uppercase"
              >
                Priyanshu Patel
              </motion.h2>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-sans text-5xl sm:text-6xl xl:text-[80px] leading-[0.85] font-black tracking-tighter text-[#111111] uppercase"
              >
                AI AUTOMATION<br />
                & SOFTWARE<br />
                <span className="text-[#666666]">DEVELOPER</span>
              </motion.h1>
            </div>

            {/* Subtext description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-sans text-sm sm:text-base text-[#666666] max-w-md leading-relaxed font-normal"
            >
              Building AI automations, systems architecture, and high-conversion software solutions that save hours, boost revenue, and eliminate repetitive work.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 pt-2"
            >
              <button
                onClick={() => onNavClick('projects')}
                className="bg-white border border-[#E5E5E5] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#111111] hover:bg-[#111111] hover:text-white transition-all shadow-sm cursor-pointer whitespace-nowrap"
              >
                View Projects
              </button>

              <button
                onClick={() => onNavClick('contact')}
                className="border-b-2 border-[#111111] px-2 py-4 text-xs font-bold uppercase tracking-widest text-[#111111] hover:text-[#666666] hover:border-gray-400 transition-all cursor-pointer whitespace-nowrap"
              >
                Book a Call
              </button>
            </motion.div>
          </div>

          {/* Right Column (Cutout portrait & massive backing typography) */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-12 lg:mt-0">

            {/* Outline Backdrop typography */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none z-0">
              <span className="font-sans text-[150px] font-black rotate-90 tracking-widest text-[#111111]">
                BUILDER
              </span>
            </div>

            {/* Portrait Frame Card with luxurious layout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[420px] aspect-[4/5] bg-white rounded-[40px] shadow-2xl overflow-hidden border border-white p-2.5 z-10 flex items-center justify-center group animate-[float_6s_easeInOut_infinite]"
            >
              <div className="absolute inset-2.5 rounded-[32px] border border-gray-100 bg-gray-50 flex items-center justify-center overflow-hidden">
                {/* Professional corporate studio portrait */}
                <img
                  src={imgSrc}
                  alt="Priyanshu Patel Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                />

                {/* Modern subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Elegant floating Project Card from Design HTML */}
              <div className="absolute top-12 -left-6 bg-white/95 backdrop-blur-md border border-[#E5E5E5] p-4 rounded-2xl shadow-xl w-48 hidden sm:block">
                <div className="flex justify-between items-start mb-3">
                  <div className="w-8 h-8 bg-[#00D26A]/20 rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#00D26A] rounded-sm"></div>
                  </div>
                  <span className="text-[9px] font-bold text-[#666666] uppercase tracking-widest">Active Agent</span>
                </div>
                <div className="h-1.5 w-full bg-[#E5E5E5] rounded-full mb-2"></div>
                <div className="h-1.5 w-2/3 bg-[#E5E5E5] rounded-full"></div>
              </div>

              {/* Status capsule overlaying portrait */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#111111]/90 text-white font-mono text-[9px] tracking-widest uppercase px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10 shadow-lg whitespace-nowrap">
                AI INTEGRATIVE HUB
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll indicator banner at bottom of Hero */}
        <div className="flex justify-center mt-12 lg:mt-24">
          <button
            onClick={() => onNavClick('about')}
            className="flex flex-col items-center space-y-2 text-gray-400 hover:text-gray-900 transition-colors duration-200"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase">Explore Core Specs</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown className="h-4 w-4" />
            </motion.div>
          </button>
        </div>

      </div>
    </section>
  );
}
