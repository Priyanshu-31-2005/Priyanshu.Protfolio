import React, { useState } from 'react';
import { motion } from 'motion/react';
import { skillsData } from '../data';
import * as Icons from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Tech Stack' },
    ...skillsData.map(cat => ({ id: cat.id, label: cat.name }))
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(cat => cat.id === activeCategory);

  // Helper helper to get icon component dynamically
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'zap': return <Icons.Zap className="h-4 w-4" />;
      case 'network': return <Icons.Network className="h-4 w-4" />;
      case 'brain-circuit': return <Icons.BrainCircuit className="h-4 w-4" />;
      case 'bot': return <Icons.Bot className="h-4 w-4" />;
      case 'terminal': return <Icons.Terminal className="h-4 w-4" />;
      case 'code': return <Icons.Code2 className="h-4 w-4" />;
      case 'link': return <Icons.Compass className="h-4 w-4" />;
      case 'database': return <Icons.Database className="h-4 w-4" />;
      case 'atom': return <Icons.Atom className="h-4 w-4" />;
      case 'palette': return <Icons.Palette className="h-4 w-4" />;
      case 'server': return <Icons.Server className="h-4 w-4" />;
      case 'shield-check': return <Icons.ShieldCheck className="h-4 w-4" />;
      case 'file-text': return <Icons.FileText className="h-4 w-4" />;
      case 'table': return <Icons.Table className="h-4 w-4" />;
      case 'users': return <Icons.Users className="h-4 w-4" />;
      case 'git-branch': return <Icons.GitBranch className="h-4 w-4" />;
      default: return <Icons.Cpu className="h-4 w-4" />;
    }
  };

  return (
    <section id="skills" className="relative py-28 bg-[#FAFAFA] border-t border-[#E5E5E5]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-[10px] font-bold tracking-widest text-[#666666] uppercase block">
            // 02 . TECHNOLOGY SPECIFICATION
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-black text-[#111111] tracking-tighter uppercase leading-[0.95]">
            Curated weapons of choice for scaling systems
          </h2>
          <p className="font-sans text-xs text-[#666666]">
            A fine-tuned ecosystem of automation engines, modern databases, custom software frameworks, and strategic business interfaces.
          </p>
        </div>

        {/* Category Controls */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-sans text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#111111] text-white border-[#111111] shadow-sm'
                  : 'bg-white hover:bg-gray-50 text-[#666666] hover:text-[#111111] border-[#E5E5E5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Area */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredSkills.map((cat) => (
            <motion.div
              layout
              id={cat.id}
              key={cat.id}
              className="bg-white rounded-[32px] border border-[#E5E5E5] p-6 sm:p-8 hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-2.5 pb-4 mb-6 border-b border-[#E5E5E5]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00D26A]" />
                <h3 className="font-sans text-xs font-bold text-[#111111] uppercase tracking-wider">
                  {cat.name}
                </h3>
              </div>

              {/* Skills List within Category */}
              <div className="space-y-4">
                {cat.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group flex items-center justify-between p-3 rounded-2xl border border-transparent hover:border-[#E5E5E5] hover:bg-zinc-50 transition-all duration-200"
                  >
                    <div className="flex items-center space-x-3.5">
                      {/* Icon */}
                      <div className="h-8 w-8 rounded-lg bg-[#111111] text-white flex items-center justify-center transition-all duration-300 group-hover:bg-[#00D26A] group-hover:text-[#111111]">
                        {getIcon(skill.icon || 'cpu')}
                      </div>
                      <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#111111]">
                        {skill.name}
                      </span>
                    </div>

                    {/* Badge and Level indicator */}
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-[9px] tracking-widest uppercase text-[#666666] bg-zinc-50 group-hover:bg-white px-2 py-1 rounded border border-[#E5E5E5]">
                        {skill.level}
                      </span>
                      {/* Interactive glowing visual target */}
                      <div className="h-1.5 w-8 rounded-full bg-gray-200 overflow-hidden relative">
                        <div
                          className={`absolute left-0 top-0 bottom-0 rounded-full bg-gray-900 transition-all duration-500 ${
                            skill.level === 'Expert' ? 'w-full' : 'w-[80%]'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick status footer block inside skills */}
        <div className="mt-12 p-6 rounded-[24px] border border-dashed border-[#E5E5E5] bg-white text-center max-w-2xl mx-auto">
          <p className="font-sans text-xs text-[#666666] leading-relaxed">
            🚀 <strong>Looking for a custom API or workflow integration?</strong> All projects represent clean documentation, modular git version control logic, and a secure multi-environment credentials framework.
          </p>
        </div>

      </div>
    </section>
  );
}
