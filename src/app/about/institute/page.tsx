"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Book, Users, Star, ArrowRight, GraduationCap } from "lucide-react";
import Navbar from "@/app/appComponents/Navbar";
import Footer from "@/app/appComponents/Footer";

 function AboutInstitute() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative bg-[#344e41] text-white py-20 mt-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#B69D74]/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#B69D74]/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#B69D74]/20 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-[#B69D74]" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Arka Connection Institute
            </h1>
            <p className="text-xl text-gray-200">
              Where Mind Meets the Cosmos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users />, title: "Students Transformed", value: "16,000+" },
              { icon: <GraduationCap />, title: "Certified Experts", value: "700+" },
              { icon: <Star />, title: "Years of Legacy", value: "9 Generations" },
              { icon: <Book />, title: "Vedic Courses", value: "20+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:border-[#B69D74] 
                         transition-colors duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#B69D74]/10 flex items-center 
                                justify-center text-[#B69D74] mb-4">
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#B69D74]/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#B69D74]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>To bridge the timeless wisdom of the Vedas with modern personal growth and holistic wellness.</p>
                <p>Through transformative teachings in Vedic Astrology, Psychology, Ayurveda, and other ancient sciences, we empower individuals to achieve spiritual alignment, emotional well-being, and material success.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#B69D74]/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#B69D74]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>To be a global leader in integrating ancient Vedic knowledge with contemporary practices.</p>
                <p>Creating a harmonious world where individuals live in alignment with cosmic rhythms, fostering holistic success and spiritual enlightenment.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Arka Connection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the perfect blend of ancient wisdom and modern practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ancient Wisdom Meets Modern Life",
                description: "Blending traditional Vedic knowledge with contemporary practices to address modern challenges."
              },
              {
                title: "Holistic Growth",
                description: "Comprehensive tools and teachings to nurture spiritual alignment, emotional resilience, and material success."
              },
              {
                title: "Transformative Learning",
                description: "From beginner workshops to advanced certifications, each program inspires self-discovery."
              }
              // Add more features as needed
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#B69D74]/10 flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-[#B69D74]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <motion.a
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-[#B69D74] hover:text-[#8a745a] transition-colors"
                  href="#"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default AboutInstitute;
