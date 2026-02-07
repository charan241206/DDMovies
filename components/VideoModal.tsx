import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  youtubeId: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, youtubeId }) => {
  // Construct URL safely and ensure youtubeId is valid
  // Added playsinline=1 to prevent iOS from forcing fullscreen, which can feel like a redirect
  // Added origin to prevent cross-origin issues
  const validId = youtubeId && typeof youtubeId === 'string' ? youtubeId : '';
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  
  const embedUrl = validId 
    ? `https://www.youtube.com/embed/${validId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${origin}` 
    : '';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-5xl aspect-video bg-black rounded-lg shadow-2xl shadow-purple-900/40 overflow-hidden border border-purple-900/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-600 text-white rounded-full transition-colors group"
            >
              <X size={24} className="group-hover:scale-110 transition-transform" />
            </button>
            {validId && (
              <iframe
                className="w-full h-full"
                src={embedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;