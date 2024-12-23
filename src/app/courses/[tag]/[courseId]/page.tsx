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
} from "lucide-react";
import VideoTestimonials from "@/app/appComponents/VideoTestimonials";

const CourseDetail = ({ courseId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Mock data - In real app, fetch this based on courseId
  const courseData = {
    title: "Advanced Spiritual Healing & Meditation",
    description:
      "Get an insight into everything the universe holds for your future.Enroll today in the best astrology course online and kick-start learning with masterfully-crafted guidance from world-renowned astrologer, Mr. Alok Khandelwal.",
    videoUrl: "https://youtube.com/embed/example",
    stats: {
      duration: "20 hours",
      enrolled: "100+",
      videos: "10+",
      support: "Lifetime",
    },
    benefits: [
      {
        title: "Live Classes & Recorded Videos",
        description:
          "Dive deep into spirituality with dynamic live sessions taught by renowned experts",
        icon: "/courses/static/live-classes.jpeg",
      },
      {
        title: "Downloadable PDFs",
        description:
          "Get comprehensive study material with 30+ downloadable PDFs",
        icon: "/courses/static/docs.jpeg",
      },
      {
        title: "Doubt Sessions",
        description: "25 dedicated doubt sessions with experienced mentors",
        icon: "/courses/static/doubt.jpeg",
      },
    ],
    curriculum: [
      {
        title: "Foundation of Spiritual Healing",
        content:
          "Learn the basic principles and history of spiritual healing practices",
      },
      {
        title: "Energy Centers & Chakras",
        content:
          "Deep dive into the seven major chakras and their significance",
      },
    ],
    mentor: {
      name: "Acharya Alok Awasthi",
      image:
        "https://arkaconnection.in/wp-content/uploads/2023/11/maharishi.webp",
      description: `Acharya Alok Awasthi is the founder of Maharishi Kapi, an institution focused on Vedic studies and traditional Shastras. He is notable for his unique approach to combining astrology and astronomy with modern corporate applications. Awasthi is distinguished by his innate ability to decode mantras from Vedas and Upanishads, which he has used to reinterpret astrological principles for the corporate world.
        As an educator and researcher, Awasthi maintains that astrology qualifies as a science, defining it as "a subject that needs probing, investigation and research." He has developed specialized courses that apply astronomical and astrological principles to various corporate designations and departments, aiming to help professionals achieve their goals methodically.`,
      credentials:
        "Vedic scholar and expert in decoding Vedic mantras, specializing in applying ancient astronomical and astrological principles to modern corporate development.",
    },
    testimonials: [
      {
        name: "John Doe",
        image: "/api/placeholder/50/50",
        review: "This course transformed my understanding of spiritual healing",
        rating: 5,
      },
    ],
    videoTestimonials: [
      {
        id: 1,
        thumbnail: "/api/placeholder/300/200",
        videoUrl: "https://youtube.com/embed/example1",
        studentName: "Maria Garcia",
        title: "Changed my perspective on spirituality",
      },
      {
        id: 2,
        thumbnail: "/api/placeholder/300/200",
        videoUrl: "https://youtube.com/embed/example2",
        studentName: "James Wilson",
        title: "Best investment in my spiritual journey",
      },
      // Add more video testimonials...
    ],
    whoShouldEnroll: [
      {
        image: "/courses/static/meditation.jpeg",
        title: "Spiritual Seekers",
        description:
          "Those who want to deepen their spiritual practice and understanding",
      },
      {
        image: "/courses/static/meditation2.jpeg",
        title: "Meditation Enthusiasts",
        description:
          "People looking to enhance their meditation practice with advanced techniques",
      },
      {
        image: "/courses/static/healing.jpeg",
        title: "Healing Practitioners",
        description:
          "Professional healers wanting to expand their knowledge and skills",
      },
      {
        image: "/courses/static/growth.jpeg",
        title: "Personal Growth Advocates",
        description:
          "Individuals committed to their personal and spiritual development",
      },
    ],
    faqs: [
      {
        question: "Do I need prior experience in spirituality?",
        answer:
          "No prior experience is required. This course is designed to accommodate both beginners and advanced practitioners.",
      },
      {
        question: "How long do I have access to the course?",
        answer:
          "You get lifetime access to all course materials, including future updates and additions.",
      },
      {
        question: "Are the live sessions recorded?",
        answer:
          "Yes, all live sessions are recorded and made available within 24 hours for those who cannot attend.",
      },
      // Add more FAQs...
    ],
    companyInfo: {
      name: "Maharishi Kapi",
      description: `Maharishi Kapi, founded by Acharya Alok Awasthi, is an institution dedicated to bridging ancient Vedic wisdom with modern applications. The institute offers comprehensive education in traditional subjects including Vedas, Upanishads, Astrology, Numerology, Vastu, Meditation, and Ayurveda, while uniquely applying these principles to contemporary corporate settings. Acharya Awasthi, known for his expertise in decoding Vedic mantras, has developed specialized courses that blend astronomical and astrological principles with professional development. The institution's mission extends beyond traditional education, aiming to build a community of Vedic learners while providing practical solutions for personal and professional growth. Through workshops, lectures, and certifications, Maharishi Kapi strives to make ancient wisdom accessible and applicable in today's world, helping individuals achieve success while maintaining spiritual well-being.`,
      values: `Driven by excellence, authenticity, and spiritual growth, Maharishi Kapi upholds the values of quality education, community building, and Vedic-centered learning while fostering personal transformation through the integration of ancient wisdom with modern practices. The institution values intellectual curiosity, traditional excellence, and practical application, ensuring that Vedic knowledge remains relevant and accessible in contemporary times, all while maintaining the highest standards of quality in knowledge transfer and spiritual development.`,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
              {courseData.title}
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              {courseData.description}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Enroll Now
            </button>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src={courseData.videoUrl}
              title="Course Introduction"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard
            icon={<Clock size={24} />}
            title="Course Duration"
            value={courseData.stats.duration}
          />
          <StatCard
            icon={<Users size={24} />}
            title="Students Enrolled"
            value={courseData.stats.enrolled}
          />
          <StatCard
            icon={<Video size={24} />}
            title="Video Lessons"
            value={courseData.stats.videos}
          />
          <StatCard
            icon={<Headphones size={24} />}
            title="Support"
            value={courseData.stats.support}
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-12 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">
          What You Will Get
        </h2>
        <div className="space-y-6">
          {courseData.benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start space-x-6 p-6 rounded-lg border border-purple-100 hover:border-purple-300 transition-colors"
            >
              <img src={benefit.icon} alt="" className="w-16 h-16 rounded-lg" />
              <div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">
          What You Will Learn
        </h2>
        <div className="space-y-4">
          {courseData.curriculum.map((item, index) => (
            <div key={index} className="border border-purple-100 rounded-lg">
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left"
                onClick={() =>
                  setActiveAccordion(activeAccordion === index ? null : index)
                }
              >
                <span className="font-semibold text-purple-900">
                  {item.title}
                </span>
                {activeAccordion === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {activeAccordion === index && (
                <div className="px-6 py-4 border-t border-purple-100">
                  <p className="text-gray-600">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Mentor Section */}
      <section className="container mx-auto px-4 py-12 bg-purple-50 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">
          Meet Your Mentor
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src={courseData.mentor.image}
            alt={courseData.mentor.name}
            className="w-48 h-48 rounded-full object-cover"
          />
          <div>
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              {courseData.mentor.name}
            </h3>
            <p className="text-gray-600 mb-4">
              {courseData.mentor.description}
            </p>
            <p className="text-purple-600 font-semibold">
              {courseData.mentor.credentials}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">
          What Our Students Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {courseData.testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 rounded-xl bg-white shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-purple-900">
                    {testimonial.name}
                  </h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Enroll Button */}
      <div className="fixed bottom-0 md:bottom-8 left-0 md:left-auto right-0 md:right-8 p-4 bg-white md:bg-transparent">
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full md:w-auto bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg"
        >
          Enroll Now
        </button>
      </div>

      <section className="container mx-auto px-4 py-12 bg-purple-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">
          Video Success Stories
        </h2>
        <div className="relative">
          <VideoTestimonials showTitle={false} />
          {/* <div className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide">
            {courseData.videoTestimonials.map((video) => (
              <div key={video.id} className="flex-none w-80">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src={video.videoUrl}
                      title={video.title}
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-purple-900">
                      {video.studentName}
                    </h4>
                    <p className="text-gray-600 text-sm">{video.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Who Should Enroll Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">
          Who Should Enroll?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {courseData.whoShouldEnroll.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg"
            >
              <img src={item.image} alt="" className="w-20 h-20 rounded-lg" />
              <div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12 bg-purple-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {courseData.faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left"
                onClick={() =>
                  setActiveAccordion(
                    activeAccordion === `faq-${index}` ? null : `faq-${index}`,
                  )
                }
              >
                <span className="font-semibold text-purple-900">
                  {faq.question}
                </span>
                {activeAccordion === `faq-${index}` ? (
                  <ChevronUp />
                ) : (
                  <ChevronDown />
                )}
              </button>
              {activeAccordion === `faq-${index}` && (
                <div className="px-6 py-4 border-t border-purple-100">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* About Company Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">
          About {courseData.companyInfo.name}
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-6">
            {courseData.companyInfo.description}
          </p>
          <p className="text-gray-600">{courseData.companyInfo.values}</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-12 bg-purple-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">
          Get in Touch
        </h2>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Enrollment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              Enroll in Course
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Confirm Enrollment
              </button>
            </form>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const StatCard = ({ icon, title, value }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg text-center">
    <div className="flex justify-center mb-4 text-purple-600">{icon}</div>
    <h3 className="text-gray-600 text-sm mb-2">{title}</h3>
    <p className="text-purple-900 font-bold text-xl">{value}</p>
  </div>
);

export default CourseDetail;
