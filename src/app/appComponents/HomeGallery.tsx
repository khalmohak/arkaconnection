'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import React from 'react';
import { Eye, ArrowRight } from 'lucide-react';

const HomeGallery: React.FC = () => {
  const router = useRouter();
  
  const images = [
    { 
      src: "https://img.freepik.com/free-vector/geometric-astrological-symbols-tarot-card_53876-78879.jpg", 
      alt: "Gallery Image 1",
      title: "Sacred Geometry",
      description: "Ancient symbols of wisdom"
    },
    { 
      src: "https://img.freepik.com/free-vector/zodiac-wheel-space-background_52683-10930.jpg", 
      alt: "Gallery Image 2",
      title: "Zodiac Wheel",
      description: "Celestial navigation guide"
    },
    { 
      src: "https://img.freepik.com/premium-photo/horoscope-astrology-collage_23-2150719043.jpg", 
      alt: "Gallery Image 3",
      title: "Astrological Elements",
      description: "Universal connections"
    },
  ];

  return (
    <div className="relative bg-[#FAF9F6] py-16">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-[10%] text-6xl rotate-12">✧</div>
        <div className="absolute bottom-40 right-[15%] text-6xl -rotate-12">✧</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#344e41] mb-4">
            Sacred Visual Journey
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our collection of mystical imagery and spiritual symbolism
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">{image.title}</h3>
                  <p className="text-gray-200 text-sm">{image.description}</p>
                </div>

                {/* View Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center 
                             justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Eye className="w-5 h-5 text-[#344e41]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/gallery")}
            className="group inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#344e41] 
                     text-white font-bold shadow-lg hover:bg-[#2a3b31] transition-all duration-300"
          >
            <span>Explore Full Gallery</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 mx-auto w-24 h-1 bg-[#B69D74]/30 rounded-full"
        />
      </div>
    </div>
  );
};

export default HomeGallery;