import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageSquare, ExternalLink } from 'lucide-react';
import { SiDiscord, SiBuymeacoffee, SiX } from 'react-icons/si';

interface ConnectPlatform {
  name: string;
  handle: string;
  href: string;
  icon: React.ReactNode;
  description: string;
  colorClass: string;
}

const platforms: ConnectPlatform[] = [
  {
    name: 'GitHub',
    handle: '@ShreyJaiswal1',
    href: 'https://github.com/ShreyJaiswal1',
    icon: <Github className="h-6 w-6" />,
    description: 'Explore my open-source repositories, system codes, and LLM experiments.',
    colorClass: 'hover:bg-foreground hover:text-background'
  },
  {
    name: 'LinkedIn',
    handle: '/in/shreyjaiswal1',
    href: 'https://linkedin.com/in/shreyjaiswal1',
    icon: <Linkedin className="h-6 w-6" />,
    description: 'Connect with me professionally, discuss opportunities, and view my timeline.',
    colorClass: 'hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]'
  },
  {
    name: 'X / Twitter',
    handle: '@lazy_shrey',
    href: 'https://x.com/lazy_shrey',
    icon: <SiX className="h-6 w-6" />,
    description: 'Follow me for real-time updates on local models, server stats, and tech rants.',
    colorClass: 'hover:bg-foreground hover:text-background'
  },
  {
    name: 'Discord',
    handle: 'lazy_shrey',
    href: 'https://discord.gg/ZVCB8EnRX2',
    icon: <SiDiscord className="h-6 w-6" />,
    description: 'Join my server or send a message to chat about bots, LLMs, or gaming.',
    colorClass: 'hover:bg-[#5865f2] hover:text-white hover:border-[#5865f2]'
  },
  {
    name: 'Email',
    handle: '5aprilshrey@gmail.com',
    href: 'mailto:5aprilshrey@gmail.com',
    icon: <Mail className="h-6 w-6" />,
    description: 'Send me a direct email for freelance projects, consultations, or queries.',
    colorClass: 'hover:bg-[#e15b5b] hover:text-white hover:border-[#e15b5b]'
  },
  {
    name: 'Buy Me A Coffee',
    handle: 'shrey',
    href: 'https://payments.cashfree.com/forms/shrey',
    icon: <SiBuymeacoffee className="h-6 w-6" />,
    description: 'Support my open-source work and buy me some specialty coffee beans!',
    colorClass: 'hover:bg-[#FFDD00] hover:text-black hover:border-[#FFDD00]'
  }
];

export const Connect: React.FC = () => {
  return (
    <section className="py-32 px-4 md:px-8 relative z-20 bg-background border-t-4 border-foreground">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-foreground bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] mb-6">
            <MessageSquare className="h-4 w-4 text-foreground" />
            <span className="text-sm font-bold tracking-widest uppercase text-foreground">Communications</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-foreground mb-6">
            Connect.
          </h2>
          
          <div className="w-24 h-2 bg-foreground mb-8 mx-auto md:mx-0"></div>

          <p className="text-foreground-secondary text-xl md:text-2xl max-w-3xl leading-relaxed font-medium mx-auto md:mx-0">
            Let's build systems, talk servers, or discuss AI tooling. Pick your preferred node to reach out.
          </p>
        </motion.div>

        {/* Brutalist Platform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {platforms.map((platform, idx) => (
            <motion.a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className={`group h-full p-6 flex flex-col justify-between border-2 border-foreground bg-background text-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all ${platform.colorClass}`}
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 border-2 border-foreground bg-background text-foreground group-hover:bg-background group-hover:text-foreground">
                    {platform.icon}
                  </div>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-xl font-black uppercase tracking-tight mb-1">
                  {platform.name}
                </h3>
                
                <span className="text-xs font-bold opacity-80 block mb-2 font-mono">
                  {platform.handle}
                </span>

                <p className="text-xs font-medium leading-relaxed opacity-95 group-hover:opacity-100 mb-4">
                  {platform.description}
                </p>
              </div>

              <div className="w-full h-[2px] bg-foreground/20 group-hover:bg-foreground/50 transition-colors mt-auto pt-2" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
