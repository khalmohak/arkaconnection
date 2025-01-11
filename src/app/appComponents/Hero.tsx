"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <main className="flex-grow">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FAF9F6] to-[#F5EFE6]">
        {/* Animated Background Elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/kalachakra.png"
            alt="Background Mandala"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="transform scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F5EFE6]/50" />
        </motion.div>

        {/* Animated Decorative Elements */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-[#B69D74]/10 blur-2xl"
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1 
          }}
          className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-[#B69D74]/10 blur-2xl"
        />

        {/* Animated Zodiac Symbols */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          {['♈', '♉', '♊', '♋'].map((symbol, index) => (
            <motion.div
              key={symbol}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
              className={`absolute text-6xl ${
                index === 0 ? 'top-20 left-[10%]' :
                index === 1 ? 'top-40 right-[15%]' :
                index === 2 ? 'bottom-32 left-[20%]' :
                'top-60 right-[25%]'
              }`}
            >
              {symbol}
            </motion.div>
          ))}
        </div>

        {/* Main Content with Animations */}
        <div className="relative z-10 text-center px-6 sm:px-8 lg:px-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#B69D74] font-medium text-lg mb-4 tracking-wide"
          >
            Explore Your Destiny
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-tight"
          >
            <span className="block">Connecting Modern Minds</span>
            <span className="block mt-2">with Ancient Wisdom</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the rich tapestry of spiritual and healing practices
            passed down through generations, reimagined for today's seekers
            of truth and enlightenment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                className="h-14 w-48 bg-[#B69D74] text-white font-bold rounded-full shadow-lg 
                          hover:bg-[#A38A64] transition-all duration-300"
              >
                <a href="https://calendly.com/arkaconnection" target="_blank">
                  Begin Your Journey
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                variant="outline"
                className="h-14 w-48 border-2 border-[#B69D74] text-[#B69D74] font-bold 
                          rounded-full bg-transparent hover:bg-[#B69D74] hover:text-white 
                          transition-all duration-300"
              >
                <a href="#learn-more">
                  Learn More
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated Decorative Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex items-center justify-center gap-4"
          >
            <motion.div
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-0.5 bg-[#B69D74]/30 rounded"
            />
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-2xl text-[#B69D74]"
            >
              ✧
            </motion.div>
            <motion.div
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-0.5 bg-[#B69D74]/30 rounded"
            />
          </motion.div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-24 bg-gradient-to-t from-[#F5EFE6] to-transparent"></div>
        </div>
      </section>

      
    </main>
  );
}

export default Hero;