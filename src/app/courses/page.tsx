"use client";
import Layout from "@/components/common/layout";
import { CourseList, CourseTags, getCoursesByTag } from "@/data/courses";
import { motion } from "framer-motion";
import { BookOpen, Clock, Users, Star, Search, Filter, Book } from "lucide-react";
import React, { useState } from "react";

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = CourseList.filter(course => {
    const matchesCategory = selectedCategory === "All" || course.tag === selectedCategory;
    const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-[#FAF9F6] mt-10">
        {/* Hero Section */}
        <div className="relative bg-[#344e41] text-white py-20 px-4">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#B69D74]/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#B69D74]/10 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Sacred Knowledge & Wisdom
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-200 max-w-3xl mx-auto mb-8"
            >
              Discover our curated collection of spiritual courses designed to guide you on your journey of enlightenment and self-discovery.
            </motion.p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 border border-white/20 
                           text-white placeholder-gray-300 focus:outline-none focus:ring-2 
                           focus:ring-[#B69D74] focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Category Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-6 py-2 rounded-full text-base font-semibold transition-all duration-300
                ${selectedCategory === "All"
                  ? "bg-[#B69D74] text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-[#B69D74]/10"
                }`}
            >
              All Courses
            </button>
            {CourseTags.map((tag) => (
              <button
                key={tag.name}
                onClick={() => setSelectedCategory(tag.name)}
                className={`px-6 py-2 rounded-full text-base font-semibold transition-all duration-300
                  ${selectedCategory === tag.name
                    ? "bg-[#B69D74] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-[#B69D74]/10"
                  }`}
              >
                {tag.name}
              </button>
            ))}
          </motion.div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
                         transition-all duration-300"
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image || "/placeholder-course.jpg"}
                    alt={course.name}
                    className="w-full h-full object-cover transform transition-transform duration-300 
                             hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-[#B69D74] text-white px-3 py-1 
                                rounded-full text-sm font-semibold">
                    Save {Math.round(((course.price - course.discountedPrice) / course.price) * 100)}%
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  {/* Course Info */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Clock size={14} />
                      <span>4 weeks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={14} />
                      <span>150+ enrolled</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className="text-[#B69D74] fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">(4.8)</span>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-[#344e41]">
                        ${course.discountedPrice}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        ${course.price}
                      </span>
                    </div>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={`/courses/${course.tag.toLowerCase()}/${course.slug}`}
                      className="px-6 py-2 bg-[#344e41] text-white rounded-full font-semibold 
                               hover:bg-[#2a3b31] transition-colors duration-300"
                    >
                      View Course
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Book className="w-16 h-16 text-[#B69D74] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Courses Found</h3>
              <p className="text-gray-600">
                Try adjusting your search or browse all courses
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CoursesPage;