import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Brain, BookOpen, Rocket, Terminal, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className='py-32 px-4 md:px-8 relative z-20 bg-background'>
      <div className='max-w-6xl mx-auto'>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.8 }}
          viewport={{ once: true }}
          className='mb-20'
        >

          <h2 className='text-5xl md:text-7xl font-black uppercase tracking-tighter text-foreground mb-2'>
            ABOUT ME
          </h2>
          <p className="text-sm md:text-base text-[#a58261] uppercase font-bold tracking-wider mb-6">
            PROFILE / EDUCATION / INTERESTS
          </p>
          
          <hr className="border-t border-foreground/10 mb-8" />

          <p className='text-foreground-secondary text-xl md:text-2xl max-w-3xl leading-relaxed font-medium'>
            I engineer software applications and systems that solve real-world problems, focusing on clarity, robust architecture, and frictionless user experiences.
          </p>
        </motion.div>

        {/* Brutalist Bento Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto'>
          
          {/* Main Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, x: -4 }}
            whileTap={{ scale: 0.98 }}
            className="md:col-span-2 md:row-span-2"
          >
            <div className='h-full p-8 md:p-12 border-2 border-foreground bg-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all'>
              
              <div className='space-y-8 relative z-10'>
                <div className='flex items-center gap-5'>
                  <div className='p-4 border-2 border-foreground bg-foreground text-background'>
                    <Cpu className='h-8 w-8 animate-pulse' />
                  </div>
                  <div>
                    <h3 className='text-3xl font-black uppercase tracking-tight text-foreground'>
                      Software Dev
                    </h3>
                  </div>
                </div>

                <div className='space-y-6 text-foreground-secondary text-lg leading-relaxed font-medium'>
                  <p>
                    Hi, I’m <span className="text-foreground font-bold">Shrey Jaiswal</span>. I spend my time engineering cross-platform software systems across desktop, mobile, and web leveraging <span className="text-foreground font-bold">Tauri, Electron, Capacitor, Expo</span>, and the <span className="text-foreground font-bold">MERN stack</span>.
                  </p>
                  <p>
                    I believe that exceptional software doesn't just work, it flows. I focus on building high-performance native experiences, sleek web interfaces, and scalable architectures that deliver seamless end-user performance.
                  </p>
                  <p>
                    Currently pushing boundaries in <span className="text-foreground font-bold underline decoration-4 underline-offset-4">Applied AI</span>, creating intelligent automations and orchestrating LLM toolchains to solve real-world problems.
                  </p>
                </div>

                {/* Stats row */}
                <div className='flex gap-4 pt-8 flex-wrap border-t-2 border-foreground/10'>
                  {[
                    { label: "Experience", value: "3+ YRS" },
                    { label: "Shipped", value: "10+ Projects" },
                    { label: "Contributor", value: "Open Source" }
                  ].map((stat, i) => (
                    <div key={i} className='inline-flex flex-col justify-center px-6 py-4 border-2 border-foreground bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]'>
                      <span className='font-black text-2xl text-foreground uppercase tracking-tight'>{stat.value}</span>
                      <span className='text-sm text-foreground-secondary font-bold uppercase'>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, x: -4 }}
            whileTap={{ scale: 0.98 }}
            className="md:col-span-1"
          >
            <div className='h-full p-8 flex flex-col justify-center border-2 border-foreground bg-background shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all'>
              <div className='p-3 border-2 border-foreground bg-foreground text-background inline-block w-max mb-6'>
                <Server className='h-6 w-6' />
              </div>
              <h4 className='text-2xl font-black uppercase text-foreground mb-3'>DevOps.</h4>
              <p className='text-foreground-secondary font-medium leading-relaxed'>
                Configuring and maintaining Linux-based home lab servers, optimizing deployment pipelines, and managing self-hosted infrastructure.
              </p>
            </div>
          </motion.div>

          {/* Feature Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, x: -4 }}
            whileTap={{ scale: 0.98 }}
            className="md:col-span-1"
          >
            <div className='h-full p-8 flex flex-col justify-center border-2 border-foreground bg-foreground text-background shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all'>
              <div className='p-3 border-2 border-background bg-background text-foreground inline-block w-max mb-6'>
                <Brain className='h-6 w-6' />
              </div>
              <h4 className='text-2xl font-black uppercase text-background mb-3'>AI & ML.</h4>
              <p className='text-background/80 font-medium leading-relaxed'>
                Experimenting with open-source LLMs, fine-tuning models, and orchestrating modern neural workloads in self-hosted environments.
              </p>
            </div>
          </motion.div>

          {/* Feature Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, x: -4 }}
            whileTap={{ scale: 0.98 }}
            className="md:col-span-3 lg:col-span-3"
          >
             <div className='h-full p-8 lg:p-12 flex flex-col md:flex-row items-center gap-8 border-2 border-foreground bg-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all justify-between'>
               <div className="flex flex-col md:flex-row items-center md:items-start gap-8 w-full">
                 <div className='p-6 border-2 border-foreground bg-background shrink-0'>
                   <Rocket className='h-10 w-10 text-foreground' />
                 </div>
                 <div className="text-center md:text-left">
                   <h4 className='text-3xl font-black uppercase text-foreground mb-4'>Evolution</h4>
                   <p className='text-foreground-secondary font-medium leading-relaxed text-lg lg:max-w-4xl'>
                     Technology moves fast. I stay at the absolute frontier whether it's Next.js Server Components, LLM orchestration, or Cloud to guarantee my toolkit is always cutting-edge.
                   </p>
                 </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
