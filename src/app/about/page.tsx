import React from "react";
import Navbar from "../appComponents/Navbar";
import Footer from "../appComponents/Footer";

function AboutUsPage() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-12 lg:py-24 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-purple-900 mb-4">
            Gurukul Reaching to Your Doorstep
          </h1>
          <p className="text-lg lg:text-xl text-gray-700">
            Restoring the Guru-Shishya Parampara
          </p>
        </section>

        {/* About Section */}
        <section className="container mx-auto px-6 py-12 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://arkaconnection.in/wp-content/uploads/2023/11/maharishi.webp"
              alt="Acharya Alok Awasthi"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-900 mb-6">
              Acharya Alok Awasthi
            </h2>
            <p className="text-gray-700 text-lg lg:text-xl mb-4 leading-relaxed">
              This is an institution of higher learning in the field of
              Vedic-Studies and other Traditional Shastras. Acharya Alok Awasthi
              has uniquely interpreted astrology and astronomy for the corporate
              world through his expertise in decoding Vedic mantras and
              Upanishads.
            </p>
            <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
              With courses tailored for professionals, the institute bridges
              ancient wisdom with modern applications, helping individuals
              achieve personal and professional growth.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-6 py-12 lg:py-24">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-900 mb-6">
              Why Choose Us?
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                The concept of astrology developed by Maharishi Kapi is
                considered a science of stars, planets, and celestial bodies
                that extracts information about life, future events, and human
                behavior.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Acharya Awasthi has invented specialized courses for various
                corporate roles, empowering individuals to work with their
                dominant astronomy and achieve their goals.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                These courses blend the practical application of astrology with
                a deep understanding of Vedic traditions, paving the way for a
                unique learning experience.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Whether you're in marketing, operations, or management, these
                courses are designed to help you understand your dominant
                strengths and perform successfully in your career.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                The institute aims to make ancient Vedic knowledge accessible to
                modern learners, ensuring spiritual growth and professional
                success.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Learn how to align your actions with the cosmic forces and
                discover your true potential through our specialized programs.
              </p>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="bg-purple-50 py-12 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-purple-900">
                Our Mission
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="text-gray-700 text-lg space-y-6">
                <p>
                  To impart education in Vedic Science in the modern context.
                </p>
                <p>
                  To provide lifestyle education in Veda, Upanishad, Astrology,
                  Numerology, Vastu, Meditation, Ayurveda, and other traditional
                  subjects.
                </p>
                <p>
                  To recognize students with certification as scholars in these
                  fields from Maharishi Kapi.
                </p>
                <p>
                  To conduct workshops, lectures, and demonstrations in the
                  Vedic tradition to help individuals worldwide.
                </p>
              </div>
              <div className="text-gray-700 text-lg space-y-6">
                <h3 className="text-2xl font-bold text-purple-900">
                  Our Vision
                </h3>
                <p>
                  To establish spiritual well-being through Vedic knowledge and
                  create a high level of faith and purpose to existence.
                </p>
                <p>
                  To promote ethical paths to personal fulfillment and
                  self-realization.
                </p>
                <p>
                  To build a platform for learning, understanding, and
                  practicing Vedic science in a structured and modernized
                  manner.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AboutUsPage;
