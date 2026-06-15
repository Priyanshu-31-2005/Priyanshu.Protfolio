import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Github, Twitter, Instagram, Mail, ArrowUpRight } from 'lucide-react';

export default function SocialFloating() {
  const socials = [
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com', icon: Github },
    { name: 'X / Twitter', url: 'https://x.com', icon: Twitter },
    { name: 'Instagram', url: 'https://instagram.com', icon: Instagram },
    { name: 'Email', url: 'mailto:priyanshu96240@gmail.com', icon: Mail }
  ];

  return (
    <div className="hidden xl:flex flex-col space-y-3.5 fixed right-8 bottom-12 z-40">
      <div className="font-mono text-[9px] tracking-widest text-[#666666] uppercase rotate-90 translate-y-[-40px] select-none text-right font-bold h-6">
        CHANNELS.IO
      </div>
      
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            whileHover={{ x: -6, scale: 1.02 }}
            className="flex items-center space-x-2 px-4 py-2 bg-white/90 hover:bg-[#111111] text-gray-800 hover:text-white border border-gray-200 hover:border-[#111111] rounded-full font-sans text-xs font-semibold shadow-sm backdrop-blur-md transition-colors duration-300 group"
          >
            <Icon className="h-3.5 w-3.5 text-gray-500 group-hover:text-[#00D26A]" />
            <span>{social.name}</span>
            <ArrowUpRight className="h-3 w-3 opacity-30 group-hover:opacity-100 transition-opacity duration-200" />
          </motion.a>
        );
      })}
    </div>
  );
}
