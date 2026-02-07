import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useAnimationControls } from 'framer-motion';
import { Play, ChevronDown, Youtube } from 'lucide-react';

interface HeroProps {
  onPlayLatest: () => void;
}

const AnimatedLetter = ({ char, index, isGradient = false }: { char: string; index: number, isGradient?: boolean }) => {
  const controls = useAnimationControls();
  
  useEffect(() => {
    const sequence = async () => {
      // 1. Initial Reveal (Entrance)
      await controls.start({
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
        transition: {
          duration: 1,
          ease: "easeOut",
          delay: index * 0.05 // Stagger entrance
        }
      });

      // 2. Continuous Loop (Wave)
      // We start this after the entrance is mostly complete for the whole word
      // The delay in transition below controls the wave stagger.
      controls.start({
        y: [0, -15, 0],
        scale: [1, 1.1, 1],
        ...(isGradient 
            ? { filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"] } 
            : { 
                color: ["#ffffff", "#e9d5ff", "#ffffff"],
                textShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 15px rgba(168,85,247,0.6)", "0px 0px 0px rgba(0,0,0,0)"]
              }
        ),
        transition: {
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 3, // Pause between waves
          delay: index * 0.1 // Stagger the wave
        }
      });
    };

    sequence();
  }, [controls, index, isGradient]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 50, rotateX: 90, filter: "blur(10px)" }}
      animate={controls}
      className={`inline-block transform-gpu select-none ${isGradient ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600' : 'text-white'}`}
      style={{ 
        display: "inline-block",
        transformStyle: "preserve-3d",
        minWidth: char === " " ? "0.5em" : "auto"
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

const Hero: React.FC<HeroProps> = ({ onPlayLatest }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      setMousePosition({ x, y });
    }
  };

  const title1 = "DD MOVIES";
  const title2 = "ENTERTAINMENT";

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden perspective-1000"
    >
      {/* Interactive Spotlight Background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          background: `radial-gradient(800px circle at ${50 + mousePosition.x * 15}% ${50 + mousePosition.y * 15}%, rgba(88, 28, 135, 0.12), transparent 40%)`
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />

      {/* Content Container */}
      <motion.div 
        style={{ y: y1 }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <div className="perspective-500">
          <motion.h2 
             className="text-purple-400 text-sm md:text-xl font-bold tracking-[0.5em] uppercase mb-8"
             animate={{ 
               opacity: [0.6, 1, 0.6],
               letterSpacing: ["0.5em", "0.55em", "0.5em"]
             }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Official Productions
          </motion.h2>
          
          <div className="cinematic-font text-5xl md:text-7xl lg:text-9xl font-bold mb-8 tracking-tighter drop-shadow-2xl leading-[0.9]">
            <div className="overflow-hidden py-4">
              {title1.split("").map((char, i) => (
                <AnimatedLetter key={`t1-${i}`} char={char} index={i} />
              ))}
            </div>
            <div className="overflow-hidden py-4">
               {title2.split("").map((char, i) => (
                <AnimatedLetter key={`t2-${i}`} char={char} index={i + title1.length} isGradient={true} />
              ))}
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            Telugu Films, Short Films, Web Series & Premium Storytelling
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8, type: "spring" }}
            className="relative z-20 flex flex-col md:flex-row gap-6 justify-center items-center flex-wrap"
          >
            <motion.button
              onClick={onPlayLatest}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative z-30 px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden flex items-center gap-3 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-shadow"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity"></span>
              <Play className="w-5 h-5 fill-black group-hover:fill-white transition-colors" />
              <span className="relative z-10 group-hover:text-white transition-colors">Watch Latest Film</span>
            </motion.button>

            <motion.a
              href="#films"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-30 px-8 py-4 border border-white/30 hover:border-white text-white rounded-full transition-colors backdrop-blur-sm cursor-pointer hover:bg-white/5"
            >
              Explore Projects
            </motion.a>

            <motion.a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "#DC2626" }}
              whileTap={{ scale: 0.95 }}
              className="relative z-30 px-8 py-4 bg-red-600/90 text-white font-bold rounded-full transition-colors flex items-center gap-2 hover:bg-red-700 shadow-lg shadow-red-900/30 cursor-pointer"
            >
              <Youtube size={20} />
              Subscribe
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/30 pointer-events-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;