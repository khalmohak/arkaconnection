"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Book, Star } from "lucide-react";
import Navbar from "@/app/appComponents/Navbar";
import Footer from "@/app/appComponents/Footer";

function AboutFounder() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative bg-[#344e41] text-white py-20 mt-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#B69D74]/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#B69D74]/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-[#B69D74]" />
                <span className="text-[#B69D74] font-medium">Founder & Visionary</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Acharya Alok Awasthi</h1>
              <p className="text-xl text-gray-200 mb-8">
                Mental wellness coach, Creator, Author, President and Co-founder of Arka Connection
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://arkaconnection.in/wp-content/uploads/2023/11/maharishi.webp"
                alt="Acharya Alok Awasthi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#B69D74]/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#B69D74]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Legacy & Experience</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>With over 12 years of experience in teaching and practicing Vedic Astrology, Psychology, and Vedanta, Acharya Alok has transformed the lives of more than 16,000 individuals and trained over 700 experts.</p>
                <p>His journey represents a continuation of a profound legacy spanning nine generations, including illustrious ancestors such as Shree Krishna Saraswat and Kanhaiya Lal Saraswat.</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#B69D74]/10 flex items-center justify-center">
                  <Book className="w-6 h-6 text-[#B69D74]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Publications</h2>
              </div>
              <div className="space-y-4">
                {[
                  "बाल मन के संस्कार सूत्र",
                  "Vedic Diet: The Science of DNA Transformation",
                  "Chronos and Consciousness: Panchanga's Rhythm of Mind and Soul"
                ].map((book, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-[#FAF9F6] rounded-lg"
                  >
                    <Book className="w-5 h-5 text-[#B69D74]" />
                    <span className="text-gray-800">{book}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}


export default AboutFounder;