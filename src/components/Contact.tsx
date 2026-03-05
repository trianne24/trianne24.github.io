import React from 'react';
import { motion } from 'motion/react';
import { 
  ExternalLink,
  FileDown,
  Languages,
  Paintbrush,
  Coffee,
  Mail,
  MessageCircle,
  Linkedin
} from 'lucide-react';

import { 
  SiGithub, 
  SiBehance, 
  SiGooglescholar 
} from '@icons-pack/react-simple-icons';

const CONTACT_LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: Linkedin,
    color: 'text-[#0077b5] bg-[#0077b5]/10 border-[#0077b5]/20',
    hover: 'hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]'
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: SiGithub,
    color: 'text-[#333] bg-[#333]/10 border-[#333]/20',
    hover: 'hover:bg-[#333] hover:text-white hover:border-[#333]'
  },
  {
    name: 'Behance',
    url: 'https://behance.net',
    icon: SiBehance,
    color: 'text-[#1769ff] bg-[#1769ff]/10 border-[#1769ff]/20',
    hover: 'hover:bg-[#1769ff] hover:text-white hover:border-[#1769ff]'
  },
  {
    name: 'Google Scholar',
    url: 'https://scholar.google.com',
    icon: SiGooglescholar,
    color: 'text-[#4285F4] bg-[#4285F4]/10 border-[#4285F4]/20',
    hover: 'hover:bg-[#4285F4] hover:text-white hover:border-[#4285F4]'
  }
];

export const Contact: React.FC = () => {
  return (
    <div className="pb-12 pt-8 md:pt-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-ink font-heading tracking-tight mb-3">Let's Connect!</h2>
          <p className="text-stone-500 font-heading italic text-lg max-w-2xl">
            Whether we end up collaborating or just chatting, I'm always open to connecting!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Links */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Primary Actions: Email & Resume */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.a 
                href="mailto:trianne24@gmail.com"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-stone-900 text-white hover:bg-accent transition-all duration-300 shadow-md group"
              >
                <div className="p-2.5 bg-white/10 rounded-xl group-hover:bg-white/20">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Email Me</span>
                  <span className="font-bold text-sm">trianne24@gmail.com</span>
                </div>
              </motion.a>

              <motion.a 
                href="#"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-4 p-4 rounded-2xl border-2 border-accent/20 bg-accent/5 text-accent hover:bg-accent hover:text-white transition-all duration-300 shadow-sm group"
              >
                <div className="p-2.5 bg-accent/10 rounded-xl group-hover:bg-white/20">
                  <FileDown size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Download</span>
                  <span className="font-bold text-sm">Latest CV</span>
                </div>
              </motion.a>
            </div>

            {/* Social & Research Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CONTACT_LINKS.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 + 0.2 }}
                    className={`group flex items-center gap-3 p-3 rounded-xl border bg-white shadow-sm transition-all duration-300 ${link.hover} border-stone-200`}
                  >
                    <div className={`p-2 rounded-lg transition-colors duration-300 ${link.color} group-hover:bg-white/20 group-hover:text-white group-hover:border-transparent`}>
                      <Icon size={18} />
                    </div>
                    <span className="font-bold text-sm flex-1">{link.name}</span>
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity mr-2" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Special Menu */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="bg-stone-900 text-stone-300 p-8 rounded-3xl shadow-xl h-full flex flex-col relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
              
              <h3 className="text-xl text-white font-heading font-bold mb-6 relative z-10 flex items-center gap-2">
                Special Menu
              </h3>
              
              <ul className="space-y-5 relative z-10 flex-1">
                <li className="flex gap-4 group">
                  <div className="p-2.5 bg-white/5 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <Languages size={18} />
                  </div>
                  <div>
                    <strong className="text-white block text-sm">Translation</strong>
                    <span className="text-[11px] text-stone-400">English ↔ Indonesian proofreading.</span>
                  </div>
                </li>
                <li className="flex gap-4 group">
                  <div className="p-2.5 bg-white/5 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <Paintbrush size={18} />
                  </div>
                  <div>
                    <strong className="text-white block text-sm">Freelance</strong>
                    <span className="text-[11px] text-stone-400">UI/UX & Branding projects.</span>
                  </div>
                </li>
              </ul>

              {/* Discord Note */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3">
                <div className="p-2 bg-[#5865F2]/10 rounded-full text-[#5865F2]">
                  <MessageCircle size={16} />
                </div>
                <p className="text-[10px] text-stone-500">
                  I'm also on Discord and Steam, just hit me up!
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
