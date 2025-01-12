"use client";
import React, { useState } from "react";
import {
  Play,
  Clock,
  Users,
  Video,
  Headphones,
  ChevronDown,
  ChevronUp,
  Star,
  Sparkles,
  BookOpen,
  Calendar,
  CheckCircle,
  BookMarked,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import VideoTestimonials from "@/app/appComponents/VideoTestimonials";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { db } from "@/config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useParams } from "next/navigation";
import { CourseDetailData } from "@/data/courses";

const CourseDetail = () => {
  const { courseId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [enrollmentData, setEnrollmentData] = useState({
    name: "",
    email: "",
  });

  const courseData = CourseDetailData.find((item) => item.slug === courseId);

  if (!courseData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-[#B69D74] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900">Course Not Found</h2>
          <p className="text-gray-600">The course you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const handleEnrollSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await addDoc(collection(db, "enrollments"), {
        ...enrollmentData,
        courseId,
        timestamp: new Date(),
      });
      alert("Enrollment successful!");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving enrollment: ", error);
      alert("Failed to enroll. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] mt-10">
      {/* Hero Section */}
      <section className="relative bg-[#344e41] text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#B69D74]/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#B69D74]/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-[#B69D74]" />
                <span className="text-[#B69D74] font-medium">Featured Course</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold mb-6">{courseData.title}</h1>

              <p className="text-lg text-gray-200 mb-8">{courseData.description}</p>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-[#B69D74] fill-current" />
                  <span className="ml-2">4.9 (250+ reviews)</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-[#B69D74]" />
                  <span className="ml-2">{courseData.stats.enrolled} students</span>
                </div>
              </div>

              <div className="flex items-center gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold">${courseData.discountedPrice}</span>
                    <span className="text-xl text-gray-400 line-through">${courseData.price}</span>
                    <span className="bg-[#B69D74] text-white px-3 py-1 rounded-full text-sm">
                      Save {Math.round(((courseData.price - courseData.discountedPrice) / courseData.price) * 100)}%
                    </span>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 bg-[#B69D74] text-white rounded-full font-semibold 
                           hover:bg-[#a38a64] transition-all duration-300 shadow-lg 
                           flex items-center gap-2"
                >
                  <BookMarked className="w-5 h-5" />
                  Enroll Now
                </button>
              </motion.div>
            </motion.div>

            {/* Course Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center cursor-pointer"
                >
                  <Play className="w-6 h-6 text-[#344e41] ml-1" />
                </motion.div>
              </div>
              <img
                src={courseData.image || "/course-preview.jpg"}
                alt="Course Preview"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: <Clock />, title: "Duration", value: courseData.stats.duration },
              { icon: <Users />, title: "Students", value: courseData.stats.enrolled },
              { icon: <Video />, title: "Videos", value: courseData.stats.videos },
              { icon: <Headphones />, title: "Support", value: courseData.stats.support }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:border-[#B69D74] 
                         transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#B69D74]/10 flex items-center 
                                justify-center text-[#B69D74]">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What You'll Get</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive learning resources designed to guide you on your spiritual journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {courseData.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#B69D74]/10 flex items-center justify-center mb-4">
                  <img src={benefit.icon} alt="" className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Continue with other sections... */}
      {/* Curriculum Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Curriculum</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive journey through ancient wisdom and spiritual practices
            </p>
          </motion.div>
      
          <div className="max-w-3xl mx-auto space-y-4">
            {courseData.curriculum.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-[#B69D74] 
                         transition-colors duration-300"
              >
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#B69D74]/10 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-[#B69D74]" />
                    </div>
                    <span className="font-semibold text-gray-900">{item.title}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#B69D74]" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-100"
                    >
                      <div className="px-6 py-4">
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mentor Section */}
      <section className="py-16 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <Sparkles className="w-8 h-8 text-[#B69D74] mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Your Guide</h2>
            </div>
      
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl"
                >
                  <img
                    src={courseData.mentor.image}
                    alt={courseData.mentor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#B69D74]/10 rounded-full" />
                </motion.div>
      
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{courseData.mentor.name}</h3>
                  <p className="text-[#B69D74] font-medium mb-4">{courseData.mentor.credentials}</p>
                  <p className="text-gray-600 mb-6">{courseData.mentor.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-[#B69D74] fill-current" />
                      <span className="text-gray-600">4.9 Instructor Rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#B69D74]" />
                      <span className="text-gray-600">1000+ Students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Video Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear transformative experiences from our students
            </p>
          </motion.div>
      
          <div className="relative">
            <VideoTestimonials showTitle={false} />
          </div>
        </div>
      </section>
      
      {/* Who Should Enroll Section */}
      {courseData.whoShouldEnroll && (
        <section className="py-16 bg-[#FAF9F6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect For You If...</h2>
            </motion.div>
      
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {courseData.whoShouldEnroll.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl 
                           transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 
                               group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#344e41]/10 group-hover:bg-[#344e41]/20 
                                 transition-colors duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about the course
            </p>
          </motion.div>
      
          <div className="max-w-3xl mx-auto">
            {courseData.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-4"
              >
                <button
                  onClick={() => setActiveAccordion(
                    activeAccordion === `faq-${index}` ? null : `faq-${index}`
                  )}
                  className="w-full bg-white rounded-xl p-6 text-left shadow-lg hover:shadow-xl 
                           transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#B69D74]/10 flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-[#B69D74]" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                    </div>
                    <motion.div
                      animate={{ rotate: activeAccordion === `faq-${index}` ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-[#B69D74]" />
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {activeAccordion === `faq-${index}` && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-gray-600 mt-4 ml-14">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Floating Action Button */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold text-[#344e41]">${courseData.discountedPrice}</div>
            <div className="text-gray-500 line-through">${courseData.price}</div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 bg-[#344e41] text-white rounded-full font-semibold 
                     hover:bg-[#2a3b31] transition-all duration-300 flex items-center gap-2"
          >
            <BookMarked className="w-5 h-5" />
            Enroll Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default CourseDetail;