"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

// Testimonial data structure
const testimonials = [
  {
    id: 1,
    name: "Ramesh",
    country: "Bharat",
    text: "The Ayurvedic Numerology course is a life-changer. It helped me understand my personal numbers and their influence on my decisions. Thank you, Acharya Ji, for your guidance!",
    rating: 5,
    course: "Ayurvedic Numerology"
  },
  {
    id: 2,
    name: "Sophia",
    country: "USA",
    text: "Acharya Alok Awasthi's teachings are so clear and insightful. The way he explained compatibility analysis was exceptional.",
    rating: 5,
    course: "Compatibility Analysis"
  },
  // Add more testimonials...
].map(t => ({ ...t, avatar: "https://api.dicebear.com/7.x/initials/svg?seed="+t.name }));

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [direction, setDirection] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlay]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative bg-[#FAF9F6] py-16">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#B69D74]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#B69D74]/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our community of spiritual seekers and practitioners
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white rounded-xl shadow-xl p-8 mx-4 relative">
                  {/* Quote Icon */}
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 rounded-full bg-[#B69D74] flex items-center justify-center">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-6">
                    {/* Rating */}
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#B69D74] fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-xl text-gray-700 text-center mb-8">
                      {testimonials[currentIndex].text}
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full border-2 border-[#B69D74]"
                      />
                      <div className="text-left">
                        <div className="font-bold text-gray-900">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-[#B69D74]">
                          {testimonials[currentIndex].country}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonials[currentIndex].course}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full 
                       bg-white/80 hover:bg-white shadow-lg flex items-center justify-center 
                       transition-all duration-300 hover:scale-110"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full 
                       bg-white/80 hover:bg-white shadow-lg flex items-center justify-center 
                       transition-all duration-300 hover:scale-110"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 
                          ${index === currentIndex 
                            ? 'w-8 bg-[#B69D74]' 
                            : 'bg-gray-300 hover:bg-[#B69D74]/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}