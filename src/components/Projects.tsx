import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data';
import { ExternalLink, ArrowUpRight, Code } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const categories = ['all', 'AI Workflows', 'AI Systems', 'AI Chatbots', 'Full-Stack SaaS', 'Custom Software', 'Business Systems'];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <section id="projects" className="relative py-28 bg-zinc-50 border-t border-[#E5E5E5]">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-xl">
            <span className="font-mono text-[10px] font-bold tracking-widest text-[#666666] uppercase block">
              // 04 . CASE STUDIES & BLUEPRINTS
            </span>
            <h2 className="font-sans text-4xl sm:text-5xl font-black text-[#111111] tracking-tighter uppercase leading-[0.95]">
              Sleek software systems deployed to active production pipelines
            </h2>
          </div>
          <div className="font-sans text-xs uppercase tracking-widest font-bold text-[#666666] max-w-xs md:pb-1 leading-relaxed">
            Browse custom full-stack solutions built to solve distinct operational bottlenecks with precise metrics attached.
          </div>
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-sans text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full border transition-all duration-300 pointer-events-auto cursor-pointer ${
                filter === cat
                  ? 'bg-[#111111] text-white border-[#111111] shadow-sm'
                  : 'bg-white hover:bg-gray-50 text-[#666666] hover:text-[#111111] border-[#E5E5E5]'
              }`}
            >
              {cat === 'all' ? 'Show All' : cat}
            </button>
          ))}
        </div>

        {/* Key Card Grid with dynamic layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="bg-white rounded-[32px] border border-[#E5E5E5] overflow-hidden flex flex-col justify-between hover:border-gray-900 shadow-sm hover:shadow-[0_20px_45px_rgba(0,0,0,0.04)] transition-all duration-500 group"
              >
                <div>
                  {/* Aspect Ratio Image Card banner */}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative aspect-video overflow-hidden border-b border-[#E5E5E5] bg-gray-100 pointer-events-auto cursor-pointer"
                    >
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                      
                      {/* Dark gradient blur covering overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                      {/* Category pill on top of image */}
                      <span className="absolute top-4 left-4 bg-[#111111]/90 text-white font-mono text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-md border border-white/15">
                        {project.category}
                      </span>

                      {/* Open link marker */}
                      <span className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </a>
                  ) : (
                    <div className="relative aspect-video overflow-hidden border-b border-[#E5E5E5] bg-gray-100">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                      
                      {/* Dark gradient blur covering overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                      {/* Category pill on top of image */}
                      <span className="absolute top-4 left-4 bg-[#111111]/90 text-white font-mono text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-md border border-white/15">
                        {project.category}
                      </span>

                      {/* Open link marker */}
                      <span className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  )}

                  {/* Body textual specs */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="space-y-3">
                      <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-[#111111] group-hover:text-black">
                        {project.githubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#00D26A] transition-colors hover:underline"
                          >
                            {project.title}
                          </a>
                        ) : (
                          project.title
                        )}
                      </h3>
                      <p className="font-sans text-xs text-[#666666] leading-relaxed font-normal">
                        {project.description}
                      </p>
                    </div>


                  </div>
                </div>

                {/* Footer specs (Tech tags and button) */}
                <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-gray-100 flex flex-wrap gap-1.5 items-center justify-between gap-y-4">
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[9px] font-bold tracking-widest uppercase text-gray-650 bg-gray-100 px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#111111] hover:text-[#00D26A] hover:underline transition-all duration-300 shrink-0 inline-flex items-center space-x-1 cursor-pointer pointer-events-auto"
                    >
                      <span>Inspect Stack</span>
                      <Code className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#00D26A] group-hover:underline transition-all duration-300 shrink-0 inline-flex items-center space-x-1 cursor-pointer">
                      <span>Inspect Stack</span>
                      <Code className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Additional Projects Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center max-w-2xl mx-auto p-10 rounded-[32px] bg-[#111111] text-white border border-white/10 shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/5 pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <span className="font-mono text-[9px] font-bold tracking-widest text-[#00D26A] uppercase block">
              // COMPLETE CODE ARCHIVE
            </span>
            <h3 className="font-sans text-2xl font-black tracking-tight uppercase leading-none">
              Explore my entire technical collection
            </h3>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed max-w-md mx-auto font-normal">
              Looking for client integrations, system audits, automated flow templates, or custom SaaS packages? Dive into my active development repositories.
            </p>
            <div className="pt-2">
              <a
                href="https://github.com/Priyanshu-31-2005/2302031800071"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white hover:bg-neutral-100 text-neutral-950 font-sans text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 pointer-events-auto cursor-pointer shadow-md hover:shadow-lg"
              >
                <span>View all projects on GitHub</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
