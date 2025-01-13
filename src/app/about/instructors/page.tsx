"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Star, Book, Users, ArrowRight, Search, GraduationCap, BookOpen } from "lucide-react";
import Footer from "@/app/appComponents/Footer";
import Navbar from "@/app/appComponents/Navbar";

// Mock data for instructors
const instructors = [
  {
    id: 1,
    name: "Acharya Alok Awasthi",
    role: "Founder & Lead Instructor",
    image:"/alok1.webp",
    expertise: ["Vedic Astrology", "Psychology", "Vedanta"],
    experience: "12+ years",
    studentsCount: "16,000+",
    description: "A prominent figure in Vedic studies with expertise in decoding mantras from Vedas and Upanishads.",
    achievements: [
      "Trained 700+ experts",
      "Published multiple books",
      "Mental wellness coach"
    ],
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  // {
  //   id: 2,
  //   name: "Dr. Ananya Sharma",
  //   role: "Senior Vedic Instructor",
  //   image: "/placeholder-instructor.jpg",
  //   expertise: ["Ayurveda", "Meditation", "Yoga"],
  //   experience: "8+ years",
  //   studentsCount: "5,000+",
  //   description: "Specializes in integrating traditional Ayurvedic practices with modern wellness approaches.",
  //   achievements: [
  //     "Ph.D. in Ayurvedic Sciences",
  //     "Published researcher",
  //     "Wellness consultant"
  //   ]
  // },
  // Add more instructors as needed
];

export function OurInstructors() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState("All");

  const expertiseCategories = ["All", ...new Set(instructors.flatMap(i => i.expertise))];

  const filteredInstructors = instructors.filter(instructor => {
    const matchesSearch = instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         instructor.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesExpertise = selectedExpertise === "All" || instructor.expertise.includes(selectedExpertise);
    return matchesSearch && matchesExpertise;
  });

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
                <Users className="w-8 h-8 text-[#B69D74]" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Expert Instructors</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12">
              Meet our team of accomplished educators and spiritual guides dedicated to your growth and enlightenment
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search instructors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 border border-white/20 
                           text-white placeholder-gray-300 focus:outline-none focus:ring-2 
                           focus:ring-[#B69D74] focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {expertiseCategories.map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedExpertise(category)}
                className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-300
                  ${selectedExpertise === category
                    ? "bg-[#B69D74] text-white shadow-lg"
                    : "bg-[#FAF9F6] text-gray-700 hover:bg-[#B69D74]/10"
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInstructors.map((instructor, index) => (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                         overflow-hidden group"
              >
                {/* Instructor Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover transform transition-transform duration-300 
                             group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{instructor.name}</h3>
                    <p className="text-sm text-gray-200">{instructor.role}</p>
                  </div>
                </div>

                {/* Instructor Details */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#B69D74]" />
                      <span className="text-sm text-gray-600">{instructor.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#B69D74]" />
                      <span className="text-sm text-gray-600">{instructor.studentsCount} students</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{instructor.description}</p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {instructor.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#FAF9F6] text-[#B69D74] text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2 mb-6">
                    {instructor.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <Star className="w-4 h-4 text-[#B69D74]" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* View Profile Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-4 py-2 bg-[#344e41] text-white rounded-full font-medium 
                             hover:bg-[#2a3b31] transition-colors duration-300 flex items-center 
                             justify-center gap-2"
                  >
                    View Full Profile
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredInstructors.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <BookOpen className="w-16 h-16 text-[#B69D74] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Instructors Found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default OurInstructors;