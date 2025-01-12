"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  Building2,
  Users,
  User,
  ArrowRight,
  GraduationCap,
  Star,
  ScrollText
} from "lucide-react";
import Navbar from "../appComponents/Navbar";
import Footer from "../appComponents/Footer";

export default function AboutPage() {
  const router = useRouter();

  // Navigation sections
  const sections = [
    {
      title: "About Our Institute",
      description: "Discover the vision, mission, and legacy of Arka Connection - where ancient wisdom meets modern learning.",
      icon: <Building2 className="w-6 h-6" />,
      stats: [
        { label: "Years of Legacy", value: "9+" },
        { label: "Students", value: "16,000+" }
      ],
      path: "/about/institute",
      image: "/institute-image.jpg" // Replace with actual image
    },
    {
      title: "Meet Our Founder",
      description: "Learn about Acharya Alok Awasthi's journey and his vision for transforming lives through Vedic wisdom.",
      icon: <User className="w-6 h-6" />,
      stats: [
        { label: "Experience", value: "12+ Years" },
        { label: "Published Books", value: "3+" }
      ],
      path: "/about/alok",
      image: "https://arkaconnection.in/wp-content/uploads/2023/11/maharishi.webp"
    },
    {
      title: "Our Expert Instructors",
      description: "Meet our team of accomplished educators and spiritual guides dedicated to your growth.",
      icon: <Users className="w-6 h-6" />,
      stats: [
        { label: "Expert Guides", value: "700+" },
        { label: "Specializations", value: "10+" }
      ],
      path: "/about/instructors",
      image: "/instructors-image.jpg" // Replace with actual image
    }
  ];

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
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#B69D74]/20 flex items-center justify-center">
                <ScrollText className="w-8 h-8 text-[#B69D74]" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Story & Legacy
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Discover the journey of Arka Connection, our visionary leaders, and the experts guiding your spiritual path
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Cards Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => router.push(section.path)}
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                             overflow-hidden h-full">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 
                               group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                        {section.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#B69D74] 
                                 transition-colors duration-300">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{section.description}</p>

                    {/* Stats */}
                    <div className="flex items-center gap-6 mb-6">
                      {section.stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-[#B69D74]" />
                          <div>
                            <div className="font-bold text-gray-900">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <motion.div
                      className="flex items-center text-[#B69D74] font-medium group-hover:text-[#8a745a]"
                      whileHover={{ x: 5 }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <GraduationCap />, label: "Students Transformed", value: "16,000+" },
              { icon: <Users />, label: "Expert Instructors", value: "700+" },
              { icon: <Star />, label: "Years of Legacy", value: "9 Generations" },
              { icon: <Sparkles />, label: "Specializations", value: "10+" }
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
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}