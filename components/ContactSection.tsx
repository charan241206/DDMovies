import React from 'react';
import { Mail, Youtube, Instagram, Facebook } from 'lucide-react';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="relative max-w-4xl mx-auto rounded-2xl p-[1px] overflow-hidden group">
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 animate-[spin_4s_linear_infinite] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative bg-black rounded-2xl p-8 md:p-12 h-full w-full backdrop-blur-xl">
                <div className="text-center mb-12">
                    <h2 className="cinematic-font text-3xl md:text-4xl font-bold text-white mb-4">
                    Get In <span className="text-purple-500">Touch</span>
                    </h2>
                    <p className="text-gray-400">
                    For collaborations, business inquiries, or just to say hello.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Info */}
                    <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-purple-900/30 rounded-lg text-purple-400 border border-purple-500/20">
                        <Mail size={24} />
                        </div>
                        <div>
                        <h4 className="text-white font-bold mb-1">Email Us</h4>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-400 hover:text-white transition-colors">
                            {CONTACT_EMAIL}
                        </a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="text-white font-bold mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                        <a href={SOCIAL_LINKS.youtube} className="p-3 bg-gray-800 rounded-full text-white hover:bg-red-600 transition-all hover:scale-110">
                            <Youtube size={20} />
                        </a>
                        <a href={SOCIAL_LINKS.instagram} className="p-3 bg-gray-800 rounded-full text-white hover:bg-pink-600 transition-all hover:scale-110">
                            <Instagram size={20} />
                        </a>
                        <a href={SOCIAL_LINKS.facebook} className="p-3 bg-gray-800 rounded-full text-white hover:bg-blue-600 transition-all hover:scale-110">
                            <Facebook size={20} />
                        </a>
                        </div>
                    </div>
                    </div>

                    {/* Form */}
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="group">
                        <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all focus:bg-gray-900"
                        />
                    </div>
                    <div>
                        <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all focus:bg-gray-900"
                        />
                    </div>
                    <div>
                        <textarea
                        rows={4}
                        placeholder="Message"
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all focus:bg-gray-900"
                        ></textarea>
                    </div>
                    <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 rounded-lg hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-purple-900/20">
                        Send Message
                    </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;