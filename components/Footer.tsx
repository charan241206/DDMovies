import React from 'react';
import { LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-900 py-12 relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-3">
           <img 
              src={LOGO_URL} 
              alt="DD Movies Logo" 
              className="w-8 h-8 rounded-full object-cover" 
           />
           <span className="text-xl font-bold cinematic-font text-white">
            DD <span className="text-purple-600">MOVIES</span>
          </span>
        </div>

        <div className="text-gray-500 text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} DD Movies Entertainment. All rights reserved.</p>
          <div className="flex gap-4 justify-center md:justify-end mt-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;