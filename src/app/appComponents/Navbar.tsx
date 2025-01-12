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
    { name: "Gallery", onClick: () => router.push("/gallery") },
    { name: "Contact Us", onClick: () => router.push("/contact") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#EEEBE5] z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={item.onClick}
                className="text-base font-medium text-gray-800 hover:text-gray-600 relative group"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-600 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
              </button>
            ))}

            {/* Courses Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="flex items-center space-x-1 text-base font-medium text-gray-800 hover:text-gray-600 relative group"
              >
                <span className="relative z-10">Courses</span>
                <ChevronDown
                  size={20}
                  className="transform transition-transform duration-200 group-hover:rotate-180"
                />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-600 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
              </button>

              <div className="absolute right-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
                  {CourseTags.map((course) => (
                    <button
                      key={course.name}
                      onClick={() => router.push(course.path)}
                      className="w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 text-base font-medium transition-colors duration-150"
                    >
                      {course.name}
                    </button>
                  ))}
                  <button
                    onClick={() => router.push("/courses")}
                    className="w-full text-left px-6 py-3 text-gray-600 hover:bg-gray-50 text-base font-medium border-t border-gray-100 transition-colors duration-150"
                  >
                    View All
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-3 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  item.onClick();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-150"
              >
                {item.name}
              </button>
            ))}

            {/* Mobile Courses Menu */}
            <div>
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-150"
              >
                <span>Courses</span>
                <ChevronDown
                  size={20}
                  className={`transform transition-transform duration-200 ${
                    isCoursesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`${
                  isCoursesOpen ? "max-h-96" : "max-h-0"
                } overflow-hidden transition-all duration-300 ease-in-out`}
              >
                {CourseTags.map((course) => (
                  <button
                    key={course.name}
                    onClick={() => {
                      router.push(course.path);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-8 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 transition-colors duration-150"
                  >
                    {course.name}
                  </button>
                ))}
                <button
                  onClick={() => {
                    router.push("/courses");
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-8 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 border-t border-gray-100 transition-colors duration-150"
                >
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
