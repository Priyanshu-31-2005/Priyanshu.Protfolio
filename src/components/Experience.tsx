import React, { useState } from 'react';
import { motion } from 'motion/react';
import { experienceData } from '../data';
import { Briefcase, GraduationCap, Award, Rocket, CheckCircle } from 'lucide-react';
import { ExperienceType } from '../types';

export default function Experience() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const getIcon = (type: ExperienceType) => {
    switch (type) {
      case 'experience':
        return <Briefcase className="h-4 w-4" />;
      case 'education':
        return <GraduationCap className="h-4 w-4" />;
      case 'certification':
        return <Award className="h-4 w-4" />;
      case 'startup':
        return <Rocket className="h-4 w-4" />;
      default:
        return <Briefcase className="h-4 w-4" />;
    }
  };

  const badgeColor = (type: ExperienceType) => {
    switch (type) {
      case 'experience':
        return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'education':
        return 'bg-purple-50 text-purple-800 border-purple-200';
      case 'certification':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'startup':
        return 'bg-emerald-50 text-emerald-800 border-emerald-250';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="experience" className="relative py-28 bg-white border-t border-[#E5E5E5]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F7F5]/20 to-transparent pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-2xl mx-auto space-y-4">
          <span className="font-mono text-[10px] font-bold tracking-widest text-[#666666] uppercase block">
            // 05 . ACADEMIC PROVENANCE
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-black text-[#111111] tracking-tighter uppercase leading-[0.95]">
            Academic Milestones
          </h2>
          <p className="font-sans text-xs text-[#666666]">
            Foundational computer science education and academic evolution.
          </p>
        </div>

        {/* Timeline Core Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Centered vertical connecting pole wire */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[1.5px] bg-gray-200 -translate-x-1/2" />

          {/* Timeline Nodes Iteration */}
          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const itemTypeStr = item.type === 'experience' ? 'CORP NODE' 
                : item.type === 'startup' ? 'VENTURE UNIT' 
                : item.type === 'certification' ? 'TECHNICAL SPEC' 
                : 'ALMA MATER';

              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row items-start relative ${
                    isLeft ? 'md:flex-row-reverse' : ''
                  }`}
                  onMouseEnter={() => setHoveredNode(item.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  
                  {/* Outer connecting circle status widget */}
                  <div className="absolute left-6 md:left-1/2 top-2 h-9 w-9 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center -translate-x-1/2 z-20 group transition-all duration-300 shadow-sm shadow-gray-100/50">
                    <div
                      className={`h-5 w-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredNode === item.id
                          ? 'bg-[#111111] text-white scale-110'
                          : 'bg-zinc-50 border border-gray-200 text-gray-600'
                      }`}
                    >
                      {getIcon(item.type)}
                    </div>
                  </div>

                  {/* Spacer or Side block */}
                  <div className="w-full md:w-1/2" />

                  {/* Card Container block */}
                  <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isLeft ? 'md:pr-14' : 'md:pl-14'}`}>
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-[32px] border border-[#E5E5E5] p-6 hover:border-gray-900 shadow-sm relative group"
                    >
                      {/* Interactive edge badge */}
                      <span className="absolute top-6 right-6 font-mono text-[9px] text-[#666666] tracking-widest font-bold">
                        {item.duration}
                      </span>

                      {/* Header tags metadata */}
                      <div className="space-y-2 mb-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`font-mono text-[8px] font-bold tracking-widest uppercase px-2 py-0.5 rounded border ${badgeColor(item.type)}`}>
                            {itemTypeStr}
                          </span>
                        </div>
                        
                        <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-[#111111] pt-1 leading-snug">
                          {item.role}
                        </h3>
                        <p className="font-sans text-[10px] font-bold text-[#00D26A] uppercase tracking-widest">
                          {item.company}
                        </p>
                      </div>

                      {/* Decisive body text */}
                      <p className="font-sans text-xs text-[#666666] leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlight badges inside card if available */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E5E5E5]">
                          {item.tags.map((tg) => (
                            <span
                              key={tg}
                              className="font-mono text-[9px] text-[#666666] bg-zinc-50 border border-[#E5E5E5] px-2 py-0.5 rounded"
                            >
                              {tg}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
