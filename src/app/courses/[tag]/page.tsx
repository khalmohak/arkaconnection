"use client";
import React from "react";
import { useRouter } from "next/router";
import { CourseList } from "@/data/courses";
import Layout from "@/components/common/layout";

const CategoryPage = ({ params }) => {
  const { tag:category } = params;
  const filteredCourses = CourseList.filter((course) => course.tag.toLowerCase() === category);

  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white px-4 py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-900 mb-8 capitalize">
          {category} Courses
        </h1>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.slug}
                className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <h3 className="text-lg font-bold text-purple-900">
                  {course.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 line-through">${course.price}</p>
                    <p className="text-lg text-green-600 font-bold">
                      ${course.discountedPrice}
                    </p>
                  </div>
                  <a
                    href={`/courses/${category}/${course.slug}`}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-700">No courses available in this category.</p>
        )}
      </div>
    </div>
    </Layout>
  );
};

export default CategoryPage;
