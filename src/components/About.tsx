import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Terminal, Layers, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Cpu,
      title: 'AI Workflows',
      desc: 'Orchestrating autonomous LangChain and custom REST agents.'
    },
    {
      icon: ShieldCheck,
      title: 'Technical Credibility',
      desc: 'Full-stack systems designed with absolute type safety.'
    },
    {
      icon: Layers,
      title: 'Startup Execution',
      desc: 'Rapid iteration from initial system architecture to production launch.'
    }
  ];

  return (
    <section id="about" className="relative py-28 border-t border-[#E5E5E5] bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F7F5]/30 to-transparent pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="font-mono text-[10px] font-bold tracking-widest text-[#666666] uppercase block">
              // 01 . THE PROTOCOL
            </span>
            <h2 className="font-sans text-4xl sm:text-5xl font-black text-[#111111] tracking-tighter uppercase leading-[0.95]">
              Bridging the gap between manual work<br/>
              <span className="text-[#666666]">& absolute AI scalability.</span>
            </h2>
          </div>
          <div className="font-sans text-xs uppercase tracking-widest font-bold text-[#666666] max-w-xs md:pb-1 leading-relaxed">
            Combining development aesthetics with elite computational execution framework metrics.
          </div>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Professional Image frame with luxury styling */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden border border-[#E5E5E5] shadow-xl bg-white p-2.5 group">
              <div className="w-full h-full rounded-[24px] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
                  alt="Priyanshu Working"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-95 contrast-110 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />
              </div>
              
              {/* Overlay Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-[#E5E5E5] shadow-lg">
                <p className="font-mono text-[9px] uppercase text-[#666666] tracking-widest mb-1.5 font-bold">Active Mission Metric</p>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm font-bold uppercase tracking-wider text-[#111111]">300+ Manual Hours Cut</span>
                  <span className="h-2 w-2 rounded-full bg-[#00D26A] animate-pulse" />
                </div>
              </div>
            </div>

            {/* Quote block */}
            <div className="p-6 bg-white rounded-2xl border border-[#E5E5E5] shadow-sm">
              <p className="font-sans text-sm italic text-[#666666] leading-relaxed">
                "Computers should handle the loops, humans should handle the vision. My goal is to orchestrate software that never slips a metric."
              </p>
              <p className="font-mono text-[9px] uppercase font-bold text-[#111111] tracking-widest mt-4 text-right">
                - Priyanshu Patel
              </p>
            </div>
          </div>

          {/* Right: Detailed text details about skills, mission, and ambitions */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <h3 className="font-sans text-xl font-bold uppercase tracking-wider text-[#111111] border-b border-[#E5E5E5] pb-4">
                Who I Am & What I Build
              </h3>
              
              <div className="space-y-4 font-sans text-sm text-[#666666] leading-relaxed">
                <p>
                  As an <span className="text-[#111111] font-semibold uppercase tracking-wide text-xs">AI Automation Engineer and Full-Stack Developer</span>, I specialize in crafting autonomous software systems. I help fast-scaling organizations discard fragile spreadsheets and manual overhead in favor of bulletproof, integrated APIs, modern databases, and stateful AI agent routers.
                </p>
                <p>
                  By joining the technical precision of structured languages like <span className="text-gray-900 font-semibold">Python & C++</span> with the dynamic responsiveness of <span className="text-gray-900 font-semibold">Next.js, React, and server pipelines</span>, I orchestrate applications that load in milliseconds and scale infinitely.
                </p>
                <p>
                  My mission is to design scalable software products and high-value workflow automation systems. Whether consulting as a Digital Solutions expert or engineering custom AI chatbots, code performance and conversion-driven aesthetics guide every decision.
                </p>
              </div>
            </div>

            {/* Mini Cards of Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E5E5E5]">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-5 border border-[#E5E5E5] rounded-2xl bg-white hover:border-[#111111] hover:shadow-md transition-all duration-300">
                    <div className="h-9 w-9 rounded-xl bg-[#111111] text-white flex items-center justify-center mb-4 shadow-sm">
                      <Icon className="h-4 w-4 text-[#00D26A]" />
                    </div>
                    <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">{item.title}</h4>
                    <p className="font-sans text-xs text-[#666666] leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
