import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { statsData } from '../data';
import { Sparkles, Trophy, Flame, Zap } from 'lucide-react';

export default function Stats() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    // Elegant number ticking simulator
    const duration = 2000; // ms
    const steps = 50;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        const progress = currentStep / steps;
        // Ease out quadratic
        const easeProgress = progress * (2 - progress);
        
        setCounts(
          statsData.map((stat) => Math.floor(stat.value * easeProgress))
        );
      } else {
        setCounts(statsData.map((stat) => stat.value));
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const getStatIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Trophy className="h-4 w-4 text-[#00D26A]" />;
      case 1: return <Flame className="h-4 w-4 text-[#00D26A]" />;
      case 2: return <Zap className="h-4 w-4 text-[#00D26A]" />;
      case 3: return <Sparkles className="h-4 w-4 text-[#00D26A]" />;
      default: return <Sparkles className="h-4 w-4 text-[#00D26A]" />;
    }
  };

  return (
    <section className="relative py-20 bg-white border-t border-[#E5E5E5]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              className="bg-white rounded-[32px] border border-[#E5E5E5] p-6 md:p-8 flex flex-col justify-between group overflow-hidden transition-all duration-300 hover:border-gray-900 shadow-sm"
            >
              {/* Card Title Metadata */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] mb-6">
                <span className="font-mono text-[9px] font-bold tracking-widest text-[#666666] uppercase">
                  METRIC_0{idx + 1}
                </span>
                <div className="p-1 rounded-full bg-white border border-[#E5E5E5]">
                  {getStatIcon(idx)}
                </div>
              </div>

              {/* Incremental Number Display */}
              <div className="space-y-2">
                <div className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tighter flex items-baseline">
                  <span>{counts[idx]}</span>
                  <span className="text-[#00D26A] font-light ml-0.5 select-none text-2xl md:text-3xl">
                    {stat.suffix}
                  </span>
                </div>
                
                {/* Secondary description label */}
                <p className="font-sans text-xs sm:text-sm font-semibold text-[#666666]">
                  {stat.label}
                </p>
              </div>

              {/* Dynamic bottom glow trail */}
              <div className="w-full h-[2px] bg-gray-200 mt-6 relative overflow-hidden rounded-full">
                <div className="absolute left-0 top-0 bottom-0 bg-[#00D26A] w-1/3 transition-all duration-500 group-hover:w-full group-hover:bg-[#00D26A]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
