import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE } from '../constants';
import { useInView } from 'react-intersection-observer';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 relative bg-black/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-purple-500 font-bold uppercase tracking-wider mb-2">Our Story</h4>
            <h2 className="cinematic-font text-4xl md:text-5xl font-bold text-white mb-6">
              Crafting Stories That <span className="text-purple-400">Resonate</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              DD Movies Entertainment is a leading Telugu entertainment production company creating original short films, web series, comedy content, and high-quality storytelling that connects audiences worldwide.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              From humble beginnings to viral hits, we believe in the power of visual media to inspire, entertain, and provoke thought.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative border-l border-purple-900/50 pl-8 ml-4 lg:ml-0">
             {TIMELINE.map((event, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="mb-10 relative"
                >
                    <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-purple-600 border-4 border-black"></span>
                    <span className="text-sm text-purple-400 font-bold tracking-widest">{event.year}</span>
                    <h3 className="text-xl font-bold text-white mt-1 mb-2">{event.title}</h3>
                    <p className="text-gray-500 text-sm">{event.description}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
