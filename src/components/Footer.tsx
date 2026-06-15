import React from 'react';
import { Linkedin, Github, Twitter, Instagram, Mail, Cpu } from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Home', id: 'home' },
    { label: 'About Speclist', id: 'about' },
    { label: 'Services Block', id: 'services' },
    { label: 'Case Studies', id: 'projects' },
    { label: 'Education', id: 'experience' },
    { label: 'Contact Handshake', id: 'contact' }
  ];

  return (
    <footer className="bg-[#111111] text-white py-16 border-t border-white/10 relative overflow-hidden">
      {/* Decorative blurred backdrop glow */}
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-emerald-500/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid rows */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Core logo & status */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <span className="h-2 w-2 rounded-full bg-[#00D26A]" />
              <span className="font-sans text-sm font-bold tracking-wider uppercase text-white">
                Priyanshu Patel
              </span>
            </div>
            <p className="font-sans text-xs text-slate-400 max-w-sm leading-relaxed">
              AI Automation Engineer, Full-Stack Developer, and SaaS Builder.
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-500 pt-2">
              <span className="inline-block bg-white/5 border border-white/10 px-2 py-0.5 rounded text-[10px] tracking-wide">
                SYS ONLINE
              </span>
              <span>•</span>
              <span>LATENCY: 14ms</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-[9px] uppercase tracking-widest text-[#666666] font-bold">
              Directory Specifications
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavClick(link.id)}
                  className="text-left font-sans text-xs text-slate-400 hover:text-[#00D26A] transition-colors duration-150 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Direct handles */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-[9px] uppercase tracking-widest text-[#666666] font-bold">
              Channels Handshake
            </h4>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-9 w-9 rounded-full bg-white/5 hover:bg-[#00D26A] hover:text-[#111111] border border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="h-9 w-9 rounded-full bg-white/5 hover:bg-[#00D26A] hover:text-[#111111] border border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="h-9 w-9 rounded-full bg-white/5 hover:bg-[#00D26A] hover:text-[#111111] border border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 rounded-full bg-white/5 hover:bg-[#00D26A] hover:text-[#111111] border border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="mailto:priyanshu96240@gmail.com"
                aria-label="Email"
                className="h-9 w-9 rounded-full bg-white/5 hover:bg-[#00D26A] hover:text-[#111111] border border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-xs font-mono text-slate-500 gap-4">
          <p>© 2026 Priyanshu Patel. All Rights Reserved.</p>
          <div className="hover:text-white transition-colors duration-200">
            Designed & Developed by Priyanshu Patel
          </div>
        </div>

      </div>
    </footer>
  );
}
