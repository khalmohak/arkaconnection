"use client";
import Layout from "@/components/common/layout";
import { CourseList, CourseTags, getCoursesByTag } from "@/data/courses";
import React, { useState } from "react";

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses =
    selectedCategory === "All"
      ? CourseList
      : CourseList.filter((course) => course.tag === selectedCategory);

  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white px-4 py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-900 mb-8">
          Explore Our Courses
        </h1>

        {/* Filter Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-6 py-2 rounded-lg text-lg font-semibold ${
              selectedCategory === "All"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
          >
            All
          </button>
          {CourseTags.map((tag) => (
            <button
              key={tag.name}
              onClick={() => setSelectedCategory(tag.name)}
              className={`px-6 py-2 rounded-lg text-lg font-semibold ${
                selectedCategory === tag.name
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              {tag.name}
            </button>
          ))}
        </div>

        {/* Courses Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.slug}
              className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-lg font-bold text-purple-900">{course.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 line-through">${course.price}</p>
                  <p className="text-lg text-green-600 font-bold">
                    ${course.discountedPrice}
                  </p>
                </div>
                <a
                  href={`/courses/${course.tag.toLowerCase()}/${course.slug}`}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default CoursesPage;
