"use client";
import { CourseList, HomePageCourseList } from "@/data/courses";
import React from "react";

function SingleCourse({
  courseImage,
  courseName,
  price,
  discountedPrice,
  path,
}: {
  courseImage: string;
  courseName: string;
  price: number;
  discountedPrice: number;
  path: string;
}) {
  return (
    <div
      className="
        h-40 w-40 flex flex-col justify-center items-center rounded-lg text-black transition-transform duration-300 hover:cursor-pointer hover:scale-105
        sm:h-64 sm:w-64
        md:h-52 md:w-52
        lg:h-72 lg:w-72
        xl:h-96 xl:w-96
        2xl:h-96 2xl:w-96
      "
      onClick={() => {
        window.location.href = path;
      }}
    >
      {/* IMAGE */}
      <div className="h-2/3 w-full flex justify-center items-center rounded-lg shadow-lg">
        <img
          src={courseImage}
          alt={courseName}
          className="h-full w-full rounded-lg object-cover border-2"
        />
      </div>

      {/* COURSE DETAILS */}
      <div className="h-1/3 w-full text-center flex flex-col justify-center items-center text-xs sm:text-base font-bold">
        <div>{courseName}</div>
        <div className="flex flex-row justify-center items-center gap-2 ">
          <div className="text-sm text-gray-500 line-through">
            ${price.toLocaleString()}
          </div>
          <div className="text-lg text-[#344e41]">
            ${discountedPrice.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}

function Courses() {
  const navigateToCourses = () => {
    window.location.href = "/courses";
  };

  return (
    <div className="h-full w-full flex flex-col items-center gap-y-10 py-10 px-4">
      <div className="text-3xl font-extrabold text-[#344e41]">
        Our Courses and Offerings
      </div>

      <div
        className="
          grid grid-cols-1 gap-6 place-content-center place-items-center
          sm:grid-cols-2 sm:gap-10
          md:grid-cols-3 md:gap-12
        "
      >
        {HomePageCourseList.map((course, index) => (
          <SingleCourse
            key={index}
            courseImage={course?.image}
            courseName={course.name}
            price={course.price}
            discountedPrice={course.discountedPrice}
            path={"/courses/" + course.tag + "/" + course.slug}
          />
        ))}
      </div>

      <button
        onClick={navigateToCourses}
        className="
          px-6 py-2 rounded-lg bg-[#344e41] text-white font-bold transition-transform duration-300 hover:scale-105 hover:bg-[#2a3b31]
        "
      >
        View All Courses
      </button>
    </div>
  );
}

export default Courses;
