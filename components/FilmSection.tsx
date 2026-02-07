import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FILMS } from '../constants';
import { Play } from 'lucide-react';

const Card = ({ film, index }: { film: any, index: number }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-xl"
    >
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleFocus}
        onMouseLeave={handleBlur}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          window.open(`https://www.youtube.com/watch?v=${film.youtubeId}`, '_blank');
        }}
        className="relative h-full overflow-hidden rounded-xl border border-gray-800 bg-gray-900/80 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
      >
        {/* Spotlight Effect */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
          style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.25), transparent 40%)`,
          }}
        />
        
        {/* Spotlight Border Effect */}
        <div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
          style={{
            background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.4), transparent 40%)`,
            padding: '1px',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
          }}
        />

        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={film.thumbnail}
            alt={film.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <div className="w-16 h-16 bg-purple-600/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl hover:scale-110 transition-transform">
              <Play className="w-6 h-6 text-white ml-1" fill="white" />
            </div>
          </div>
          
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-purple-300 border border-purple-500/30 z-20">
            {film.category}
          </div>
        </div>

        {/* Info */}
        <div className="p-6 relative z-20 bg-gray-900/40">
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-purple-400 transition-colors">
            {film.title}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2">
            {film.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const FilmSection: React.FC = () => {
  return (
    <section id="films" className="py-24 relative z-10 bg-gradient-to-b from-transparent to-black/80">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cinematic-font text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Featured <span className="text-purple-500">Productions</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest short films, web series, and artistic creations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FILMS.map((film, index) => (
            <Card key={film.id} film={film} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmSection;