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
    handle: '@lazyshrey',
    href: 'https://github.com/lazyshrey',
    icon: <Github className="h-6 w-6" />,
    description: 'Explore my open-source repositories, system codes, and LLM experiments.',
    colorClass: 'hover:bg-foreground hover:text-background'
  },
  {
    name: 'LinkedIn',
    handle: '/in/lazyshrey',
    href: 'https://linkedin.com/in/lazyshrey',
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
    handle: 'Lazy Devs',
    href: 'https://discord.gg/cNBReEyvK',
    icon: <SiDiscord className="h-6 w-6" />,
    description: 'Join Lazy Devs, a chill developer community for coders, designers, and tech enthusiasts.',
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
    <section className="py-32 px-4 md:px-8 relative z-20 bg-background border-t border-foreground/10">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >

          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-foreground mb-2">
            CONNECT
          </h2>
          <p className="text-sm md:text-base text-[#a58261] uppercase font-bold tracking-wider mb-6">
            GET IN TOUCH / COLLABORATION / SOCIAL NODES
          </p>
          <hr className="border-t border-foreground/10 mb-8" />

          <p className="text-foreground-secondary text-xl md:text-2xl max-w-3xl leading-relaxed font-medium mx-auto md:mx-0">
            Let's build systems, talk servers, or discuss AI tooling. Pick your preferred node to reach out.
          </p>
        </motion.div>

        {/* Brutalist Platform Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {platforms.map((platform, idx) => (
            <motion.a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.8, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, x: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`group h-full p-4 sm:p-6 flex flex-col justify-between border-2 border-foreground bg-background text-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all ${platform.colorClass}`}
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
