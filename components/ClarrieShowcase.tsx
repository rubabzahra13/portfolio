'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import MarshmallowClarrie from './MarshmallowClarrie';
import ClarrieDialogueDoodles from './ClarrieDialogueDoodles';
import Link from 'next/link';

const ClarrieShowcase = () => {
  const [mascotSize, setMascotSize] = useState<'md' | 'lg' | 'xl'>('md');

  useEffect(() => {
    const pick = () => {
      if (typeof window === 'undefined') return;
      const w = window.innerWidth;
      if (w >= 1024) setMascotSize('xl');
      else if (w >= 640) setMascotSize('lg');
      else setMascotSize('md');
    };
    pick();
    window.addEventListener('resize', pick);
    return () => window.removeEventListener('resize', pick);
  }, []);

  return (
    <section id="villi" className="relative min-h-[min(100dvh,720px)] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center overflow-x-clip bg-background border-b-2 border-gray-800/50 py-12 sm:py-16">
      {/* Animated Background - Matching Hero Section Vibrancy */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glowing orbs - same intensity as Hero section */}
        <div className="absolute top-10 -left-20 sm:left-0 w-52 sm:w-72 md:w-[500px] h-52 sm:h-72 md:h-[500px] max-w-[min(100vw,500px)] bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 -right-16 sm:right-10 w-60 sm:w-80 md:w-[600px] h-60 sm:h-80 md:h-[600px] max-w-[min(100vw,600px)] bg-secondary/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-tertiary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
        
        {/* Additional glow layers */}
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
      </div>

      {/* Starfield Container */}
      <div className="absolute inset-0">
        {/* Dense starfield */}
        <div className="absolute inset-0">
          {[...Array(80)].map((_, i) => {
            const size = Math.random() * 2.5 + 0.5
            return (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity: Math.random() * 0.5 + 0.4,
                  boxShadow: `0 0 ${size * 2}px rgba(224, 255, 255, 0.6)`
                }}
              />
            )
          })}
        </div>

        {/* Larger star shapes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute text-white/20 text-2xl"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
            }}
          >
            ✦
          </div>
        ))}
      </div>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center flex flex-col justify-center gap-8 sm:gap-10 min-h-0 py-8 sm:py-12 w-full min-w-0">
        {/* Headline - positioned in upper section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance px-1"
        >
          <span className="text-white">Your AI Guide to </span>
          <span className="bg-gradient-to-r from-accent via-tertiary to-secondary bg-clip-text text-transparent">
            Everything
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Marshmallow mascot — inner div: Framer owns outer transform; CSS loop = subtle breathe + float */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 sm:mb-6 flex w-full max-w-full justify-center overflow-x-visible px-2 sm:px-3"
          >
            <ClarrieDialogueDoodles>
              <div className="mascot-breathe flex justify-center">
                <MarshmallowClarrie size={mascotSize} />
              </div>
            </ClarrieDialogueDoodles>
          </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-base sm:text-xl md:text-2xl text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-pretty px-1"
        >
          Chat with Villi to explore our portfolio, discover projects, and learn how we can bring your ideas to life
        </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/chat" className="block w-full max-w-md mx-auto">
              <motion.div
                className="group relative w-full justify-center inline-flex flex-wrap items-center gap-2 sm:gap-3 bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white px-6 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold text-base sm:text-xl transition-all shadow-2xl shadow-accent/30 hover:shadow-3xl hover:shadow-accent/50"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                <span className="text-center">Start Chatting with Villi</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              </motion.div>
            </Link>
          </motion.div>

        {/* Fun tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          viewport={{ once: true }}
          className="mt-2 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-500 px-2"
        >
          <Sparkles className="w-4 h-4 text-accent shrink-0" />
          <p className="text-xs sm:text-sm italic text-center text-pretty max-w-md">Available 24/7 • Powered by GPT-4 • Infinitely Patient</p>
          <Sparkles className="w-4 h-4 text-secondary shrink-0" />
        </motion.div>
      </motion.div>

        <style jsx>{`
          @keyframes mascot-breathe {
            0%,
            100% {
              transform: scale(1) translateY(0);
            }
            50% {
              transform: scale(1.015) translateY(-4px);
            }
          }
          .mascot-breathe {
            animation: mascot-breathe 5s ease-in-out infinite;
            transform-origin: center bottom;
            will-change: transform;
          }
        `}</style>
      </div>
    </section>
  );
};

export default ClarrieShowcase;
