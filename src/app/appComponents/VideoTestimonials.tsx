"use client";
import React from "react";
import { motion } from "framer-motion";
import { Play, Star, Quote } from "lucide-react";

const videoUrls = [
  "https://youtube.com/shorts/zQUSUZ9fPgo?si=dYEy6kreu-ohljlS",
  "https://youtube.com/shorts/G06KlmaMvYc?si=MP0pbYInRIaShiH9"
];

const VideoTestimonials = ({ showTitle = true }) => {
  const getEmbedUrl = (url: string) => {
    let videoId = "";
    if (url.includes("youtu.be")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    } else if (url.includes("youtube.com/watch")) {
      videoId = url.split("v=")[1]?.split("&")[0];
    } else if (url.includes("youtube.com/shorts")) {
      videoId = url.split("shorts/")[1].split("?")[0];
    }
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="relative bg-[#FAF9F6] py-16">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <Quote className="absolute top-10 left-[10%] w-20 h-20 transform rotate-180 text-[#B69D74]" />
        <Quote className="absolute bottom-10 right-[10%] w-20 h-20 text-[#B69D74]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#344e41] mb-4">
              Sacred Experiences
            </h2>
            <p className="text-gray-600 text-lg">
              Hear transformative stories from our spiritual community
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {videoUrls.map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              {/* Video Container */}
              <div className="relative rounded-xl overflow-hidden shadow-xl bg-white">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={getEmbedUrl(url)}
                    title={`Spiritual Journey Testimony ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Video Info Card */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Play size={18} className="text-[#B69D74]" />
                      <span className="text-sm font-medium text-gray-600">
                        Spiritual Journey
                      </span>
                    </div>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          className="text-[#B69D74] fill-[#B69D74]"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Preview */}
                  <blockquote className="text-gray-600 text-sm italic">
                    "A transformative experience that opened my spiritual awareness..."
                  </blockquote>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center"
                  >
                    <Play size={24} className="text-[#344e41] ml-1" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
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

export default VideoTestimonials;