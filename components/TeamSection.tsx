import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '../constants';

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 relative bg-black/80">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="cinematic-font text-4xl md:text-5xl font-bold text-white mb-4">
            The <span className="text-purple-500">Creators</span>
          </h2>
          <p className="text-gray-400">The minds behind the magic.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          {TEAM.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group text-center w-56"
            >
              {/* Modern Avatar Container */}
              <div className="relative w-40 h-40 mx-auto mb-6">
                {/* Gradient Ring / Border */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-pink-500 to-blue-600 rounded-full p-[3px] shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-shadow duration-300">
                  <div className="w-full h-full rounded-full bg-black p-1">
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Subtle Overlay */}
                      <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <motion.div 
                   className="absolute -right-2 top-0 text-2xl"
                   animate={{ rotate: [0, 10, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  ✨
                </motion.div>
              </div>

              {/* Text Info */}
              <div className="relative z-20">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {member.name}
                </h3>
                <div className="inline-block px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20">
                  <p className="text-xs font-bold text-purple-300 uppercase tracking-widest">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;