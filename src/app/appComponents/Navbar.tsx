"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { CourseTags } from "@/data/courses";

function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const navItems = [
    { name: "Home", onClick: () => router.push("/") },
    { name: "About", onClick: () => router.push("/about") },
    { name: "Services", onClick: () => router.push("/services") },
    { name: "Contact Us", onClick: () => router.push("/contact") },
  ];

  return (
    <nav className="relative w-full z-50 mb-4 mt-4">
      <div
        className="mx-auto w-[95%] flex justify-between items-center
        bg-[#dad7cd] bg-opacity-35 border border-gray-400 backdrop-blur-sm
        text-black rounded-full h-20 px-6 transition-all duration-300
        hover:shadow-lg hover:bg-opacity-45"
      >
        {/* Logo */}
        <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
          <img
            src="/arkConnection-horizontal.png"
            alt="Website logo"
            className="h-56 mt-2 sm:h-48 md:h-56 lg:h-64 xl:h-64 2xl:h-64
              hover:cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>

        {/* Hamburger menu for small screens */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 transition-colors duration-200 hover:bg-gray-200 rounded-full"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="text-sm md:text-base hidden sm:flex justify-center items-center gap-x-8 font-bold">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={item.onClick}
              className="relative group py-2"
            >
              <span className="relative z-10 transition-colors duration-200 hover:text-gray-600">
                {item.name}
              </span>
              <span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-600 transform scale-x-0
                transition-transform duration-200 group-hover:scale-x-100"
              />
            </button>
          ))}

          {/* Courses Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 py-2 relative group font-bold"
              onClick={() => setIsCoursesOpen(!isCoursesOpen)}
            >
              <span className="relative z-10 transition-colors duration-200 hover:text-gray-600">
                Courses
              </span>
              <ChevronDown
                size={16}
                className="transform transition-transform duration-200 group-hover:rotate-180"
              />
              <span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-600 transform scale-x-0
                transition-transform duration-200 group-hover:scale-x-100"
              />
            </button>
          
            <div
              className="absolute right-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100
              group-hover:visible transition-all duration-200 transform -translate-x-1/4"
            >
              <div
                className="bg-[#dad7cd] bg-opacity-100 border border-gray-400
                rounded-3xl overflow-hidden shadow-lg"
              >
                {CourseTags.map((course) => (
                  <button
                    key={course.name}
                    onClick={() => router.push(course.path)}
                    className="w-full text-left px-6 py-4 hover:bg-white/30 transition-all
                      duration-200 block text-black font-semibold"
                  >
                    {course.name}
                  </button>
                ))}
                {/* Add the "View All" button */}
                <button
                  onClick={() => router.push('/courses')}
                  className="w-full text-left px-6 py-4 hover:bg-gray-300/30 transition-all
                    duration-200 block text-gray-700 font-semibold border-t border-gray-400"
                >
                  View All
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile menu */}
        <div
          className={`
          sm:hidden fixed inset-0 z-50 bg-[#dad7cd] bg-opacity-95
          transition-all duration-300 ease-in-out backdrop-blur-sm
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
          <div className="flex flex-col items-center justify-center h-full gap-y-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                className="text-xl font-bold transition-colors duration-200
                  hover:text-gray-600 relative group"
                onClick={() => {
                  item.onClick();
                  setIsMenuOpen(false);
                }}
              >
                <span>{item.name}</span>
                <span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-600
                  transform scale-x-0 transition-transform duration-200
                  group-hover:scale-x-100"
                />
              </button>
            ))}

            {/* Mobile Courses Section */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="text-xl font-bold flex items-center gap-2 mb-4"
              >
                Courses
                <ChevronDown
                  size={20}
                  className={`transform transition-transform duration-200
                    ${isCoursesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div className="flex flex-col items-center">
                <button
                  onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                  className="text-xl font-bold flex items-center gap-2 mb-4 relative group"
                >
                  <span>Courses</span>
                  <ChevronDown
                    size={20}
                    className={`transform transition-transform duration-200
                      ${isCoursesOpen ? "rotate-180" : ""}`}
                  />
                  <span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-600 transform scale-x-0
                    transition-transform duration-200 group-hover:scale-x-100"
                  />
                </button>

                <div
                  className={`flex flex-col items-center gap-y-4 transition-all duration-300
                  ${isCoursesOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"}`}
                >
                  {CourseTags.map((course) => (
                    <button
                      key={course.name}
                      onClick={() => {
                        router.push(course.path);
                        setIsMenuOpen(false);
                      }}
                      className="text-lg font-semibold hover:text-gray-600 transition-colors duration-200
                        relative group"
                    >
                      <span>{course.name}</span>
                      <span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-600 transform scale-x-0
                        transition-transform duration-200 group-hover:scale-x-100"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
