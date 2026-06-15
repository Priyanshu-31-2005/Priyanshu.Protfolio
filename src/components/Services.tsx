import React, { useState } from 'react';
import { Cpu, Code, MessageSquare, TrendingUp, Layers, ArrowRight } from 'lucide-react';
import { servicesData } from '../data';

interface ServicesProps {
  onNavClick: (sectionId: string) => void;
}

export default function Services({ onNavClick }: ServicesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="h-5 w-5" />;
      case 'Code': return <Code className="h-5 w-5" />;
      case 'MessageSquareText': return <MessageSquare className="h-5 w-5" />;
      case 'TrendingUp': return <TrendingUp className="h-5 w-5" />;
      case 'Layers': return <Layers className="h-5 w-5" />;
      default: return <Cpu className="h-5 w-5" />;
    }
  };

  return (
    <section id="services" className="relative py-28 border-t border-[#E5E5E5] bg-white">
      {/* Subtle light background gradients */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-emerald-50/20 rounded-full filter blur-[80px]" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-2xl mx-auto space-y-4">
          <span className="font-mono text-[10px] font-bold tracking-widest text-[#666666] uppercase block">
            // 03 . CONSULTING CAPABILITIES
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-black text-[#111111] tracking-tighter uppercase leading-[0.95]">
            High-value engineering with measurable business impact
          </h2>
          <p className="font-sans text-sm text-[#666666]">
            Whether automating dynamic lead funnels, installing self-improving support engines, or building full SaaS products, we design for absolute ROI.
          </p>
        </div>

        {/* Services Grid (Premium Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative bg-white rounded-[32px] border border-[#E5E5E5] p-6 sm:p-8 flex flex-col justify-between group overflow-hidden transition-all duration-300 hover:border-gray-900 shadow-sm hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:-translate-y-1"
            >
              {/* Dynamic glow effect on hover */}
              <div
                className={`absolute inset-x-0 bottom-0 h-1.5 bg-[#00D26A] transition-transform duration-500 origin-left ${
                  hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'
                }`}
              />

              <div className="space-y-6">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  {/* Icon Frame */}
                  <div className="h-10 w-10 rounded-xl bg-[#111111] hover:bg-[#00D26A] text-white hover:text-[#111111] flex items-center justify-center transition-colors duration-300 shadow-sm border border-black/10">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-xs text-slate-300 select-none">/ 0{index + 1}</span>
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                  <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-[#111111] group-hover:text-black">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-[#666666] leading-relaxed">
                    {service.description}
                  </p>
                </div>


              </div>

              {/* Action Button */}
              <div className="pt-8">
                <button
                  onClick={() => onNavClick('contact')}
                  className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider text-[#111111] group-hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                >
                  <span>Request Custom Setup</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
