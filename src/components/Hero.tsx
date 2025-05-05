import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Player
          autoplay
          loop
          src="https://lottie.host/2a1e9691-9d38-4fc8-a4c3-1a3e67cdf0c4/xpEoQwxWGy.json"
          style={{ height: '100%', width: '100%' }}
        />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Predict. Prevent. Perform.
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-6 text-cyan"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AI-powered predictive maintenance for HVAC systems, cutting downtime and energy costs.
        </motion.p>

        <motion.p 
          className="text-lg mb-8 text-soft-white/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Monitor assets in real-time, forecast failures before they occur, and schedule service exactly when it's needed.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            className="bg-lime text-charcoal px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Demo
          </button>
          <button
            className="bg-transparent border-2 border-cyan text-cyan px-8 py-3 rounded-full text-lg font-semibold hover:bg-cyan/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Watch Video
          </button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="animate-bounce text-soft-white/50">
          ↓
        </div>
      </motion.div>
    </section>
  );
};