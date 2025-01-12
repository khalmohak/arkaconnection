"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Image as ImageIcon, ZoomIn, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '../appComponents/Footer';
import Navbar from '../appComponents/Navbar';

const categories = ["All", "Astrology", "Spiritual", "Healing", "Meditation"];

const images = [
  { 
    src: "https://img.freepik.com/free-vector/geometric-astrological-symbols-tarot-card_53876-78879.jpg", 
    alt: "Astrological Symbols", 
    category: "Astrology",
    description: "Sacred geometric patterns in astrology"
  },
  { 
    src: "https://img.freepik.com/free-vector/zodiac-wheel-space-background_52683-10930.jpg", 
    alt: "Zodiac Wheel", 
    category: "Astrology",
    description: "Ancient zodiac wisdom"
  },
  // Add more images with categories and descriptions...
];

const HomeGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const filteredImages = images.filter(
    img => selectedCategory === "All" || img.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-[#FAF9F6] mt-10">
      {/* Hero Section */}
      <section className="relative bg-[#344e41] text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#B69D74]/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#B69D74]/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#B69D74]/20 flex items-center justify-center">
                <ImageIcon className="w-8 h-8 text-[#B69D74]" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6"> Gallery</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore our collection of mystical and spiritual imagery
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-300 
                ${selectedCategory === category 
                  ? 'bg-[#B69D74] text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-[#B69D74]/10'}`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="aspect-square overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300"
                  onLoad={() => setIsLoading(false)}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                             transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{image.alt}</h3>
                <p className="text-sm text-gray-600">{image.description}</p>
                <div className="mt-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#B69D74]/10 text-[#B69D74]">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-[#B69D74] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <h3 className="text-xl font-bold text-white mb-2">{selectedImage.alt}</h3>
              <p className="text-gray-200">{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col">
      <Navbar />
      <HomeGallery />
      <Footer />
    </div>
  );
}