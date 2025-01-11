"use client";
import { CourseList, HomePageCourseList } from "@/data/courses";
import React from "react";
import { motion } from "framer-motion";
import { Clock, Users, Star, BookOpen } from "lucide-react";

function SingleCourse({
  courseImage,
  courseName,
  price,
  discountedPrice,
  path,
  index,
}: {
  courseImage: string;
  courseName: string;
  price: number;
  discountedPrice: number;
  path: string;
  index: number;
}) {
  // Calculate savings percentage
  const savingsPercent = Math.round(((price - discountedPrice) / price) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full max-w-sm mx-auto"
    >
      <div
        onClick={() => {
          window.location.href = path;
        }}
        className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
                   transition-all duration-300 cursor-pointer group"
      >
        {/* Savings Badge */}
        <div className="absolute top-4 right-4 bg-[#B69D74] text-white px-3 py-1 rounded-full 
                      text-sm font-semibold z-10">
          Save {savingsPercent}%
        </div>

        {/* Image Container */}
        <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
          <img
            src={courseImage}
            alt={courseName}
            className="w-full h-full object-cover transform transition-transform duration-300 
                     group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Container */}
        <div className="p-6">
          {/* Course Info Row */}
          <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Clock size={14} />
              <span>4 weeks</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users size={14} />
              <span>150+ enrolled</span>
            </div>
          </div>

          {/* Course Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#B69D74] 
                       transition-colors duration-300">
            {courseName}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={16}
                className="text-[#B69D74] fill-current"
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">(4.8)</span>
          </div>

          {/* Course Features */}
          <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <BookOpen size={14} />
              <span>12 lessons</span>
            </div>
          </div>

          {/* Price Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-[#344e41]">
                ${discountedPrice.toLocaleString()}
              </span>
              <span className="text-sm text-gray-500 line-through">
                ${price.toLocaleString()}
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-semibold text-[#B69D74] hover:text-[#8a745a] 
                       transition-colors duration-300"
            >
              Learn More →
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Courses() {
  return (
    <div className="bg-[#FAF9F6] py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#344e41] mb-4">
          Sacred Knowledge & Teachings
        </h2>
        <p className="text-gray-600 text-lg">
          Discover our curated collection of spiritual courses designed to guide you on your journey
        </p>
      </motion.div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {HomePageCourseList.map((course, index) => (
            <SingleCourse
              key={index}
              courseImage={course?.image}
              courseName={course.name}
              price={course.price}
              discountedPrice={course.discountedPrice}
              path={"/courses/" + course.tag + "/" + course.slug}
              index={index}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            onClick={() => window.location.href = "/courses"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-[#344e41] text-white font-bold 
                     shadow-lg hover:bg-[#2a3b31] transition-all duration-300
                     hover:shadow-xl"
          >
            Explore All Courses
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-20 left-[10%] text-6xl rotate-12">✧</div>
        <div className="absolute bottom-40 right-[15%] text-6xl -rotate-12">✧</div>
      </div>
    </div>
  );
}

export default Courses;