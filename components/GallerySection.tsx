import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FILMS } from '../constants';

const GallerySection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Create parallax effects for two rows moving in opposite directions
  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['-30%', '0%']);

  // Triple duplicate films to ensure infinite feel
  const galleryItems = [...FILMS, ...FILMS, ...FILMS];

  return (
    <section className="py-24 overflow-hidden relative bg-black">
        {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 mb-12 relative z-20">
        <h2 className="cinematic-font text-3xl md:text-4xl font-bold text-white mb-4">
          Visual <span className="text-purple-500">Journey</span>
        </h2>
        <p className="text-gray-400">Behind the scenes and production stills</p>
      </div>

      <div className="flex flex-col gap-8 rotate-1 scale-105 opacity-80 hover:opacity-100 transition-opacity duration-700">
         {/* Row 1 - Left */}
         <div className="relative w-full overflow-hidden">
             <motion.div 
                className="flex gap-4 w-max"
                style={{ x: x1 }}
             >
                {galleryItems.map((item, index) => (
                    <div 
                        key={`r1-${index}`} 
                        className="flex-shrink-0 w-[300px] md:w-[400px] aspect-[16/9] rounded-lg overflow-hidden relative group"
                    >
                        <img 
                            src={item.thumbnail} 
                            alt="Gallery" 
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-transparent transition-colors"></div>
                    </div>
                ))}
             </motion.div>
         </div>

         {/* Row 2 - Right */}
         <div className="relative w-full overflow-hidden">
             <motion.div 
                className="flex gap-4 w-max"
                style={{ x: x2 }}
             >
                {galleryItems.slice().reverse().map((item, index) => (
                    <div 
                        key={`r2-${index}`} 
                        className="flex-shrink-0 w-[300px] md:w-[400px] aspect-[16/9] rounded-lg overflow-hidden relative group"
                    >
                        <img 
                            src={item.thumbnail} 
                            alt="Gallery" 
                            className="w-full h-full object-cover filter sepia-[0.5] group-hover:sepia-0 transition-all duration-500 transform group-hover:scale-110"
                        />
                         <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors"></div>
                    </div>
                ))}
             </motion.div>
         </div>
      </div>
    </section>
  );
};

export default GallerySection;