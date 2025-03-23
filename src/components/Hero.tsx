import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden pt-16">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center lg:pt-32">
        <div className="space-y-8 animate-float">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Power the Future
            </span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-400">
              With Purpose
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl slide-in">
            Transforming industries through AI-powered solutions that enable smart, data-driven decisions.
            Join us in building the next generation of intelligent technology.
          </p>
          <div className="mt-10 flex justify-center gap-4 slide-in" style={{ animationDelay: '0.2s' }}>
            <a
              href="#contact"
              className="gradient-border inline-block"
            >
              <div className="px-6 py-3 bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors">
                <span className="flex items-center text-base font-medium text-white">
                  Let's Talk
                  <ChevronRight className="ml-2 h-5 w-5" />
                </span>
              </div>
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-purple-400 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(147,51,234,0.3),transparent_70%)] animate-pulse-glow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(79,70,229,0.3),transparent_70%)] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Images */}
      <div className="absolute top-1/4 left-10 w-32 h-32 animate-float opacity-20">
        <img
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=300"
          alt="AI Visualization"
          className="rounded-lg"
        />
      </div>
      <div className="absolute top-1/3 right-10 w-32 h-32 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=300"
          alt="Data Visualization"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;