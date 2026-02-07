import React, { Suspense, useState } from 'react';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FilmSection from './components/FilmSection';
import GallerySection from './components/GallerySection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import { FILMS } from './constants';

function App() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handlePlayVideo = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  return (
    <div className="min-h-screen bg-[#020205] text-white selection:bg-purple-500 selection:text-white">
      {/* 3D Background Layer - Suspense handles lazy loading of 3D assets */}
      <Suspense fallback={<div className="fixed inset-0 bg-black pointer-events-none -z-10" />}>
        <ThreeBackground />
      </Suspense>

      <Navbar />

      {/* Main Content */}
      <div className="relative z-10">
        <main>
          <Hero onPlayLatest={() => handlePlayVideo(FILMS[0].youtubeId)} />
          <AboutSection />
          <FilmSection />
          <GallerySection />
          <TeamSection />
          <ContactSection />
        </main>
        <Footer />
      </div>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        youtubeId={selectedVideo || ''}
      />
    </div>
  );
}

export default App;