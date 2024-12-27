import Script from "next/script";
import Courses from "./appComponents/Courses";
import Email from "./appComponents/Email";
import Footer from "./appComponents/Footer";
import Hero from "./appComponents/Hero";
import HomeGallery from "./appComponents/HomeGallery";
import Navbar from "./appComponents/Navbar";
import Planets from "./appComponents/Planets";
import Quiz from "./appComponents/Quiz";
import Testimonials from "./appComponents/Testimonials";
import VideoTestimonials from "./appComponents/VideoTestimonials";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-gray-50 to-gray-200">
      {/* Navbar */}
      <header className="w-full">
        <Navbar />
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 to-purple-700">
          <Image
            src="/kalachakra.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="opacity-20"
          />
          <div className="relative z-10 text-center px-6 sm:px-8 lg:px-16 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
              Connecting Modern Minds with Ancient Wisdom
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover the rich tapestry of spiritual and healing practices
              passed down through generations, reimagined for today's world.
            </p>
            <Button
              asChild
              className="h-14 w-48 bg-white text-blue-900 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
            >
              <a href="https://calendly.com/arkaconnection" target="_blank">
                Chat Now
              </a>
            </Button>
          </div>
        </section>

        <section className="px-4 sm:px-8 md:px-12 lg:px-20 mt-12">
          <Testimonials />
        </section>

        <section className="px-4 sm:px-8 md:px-12 lg:px-20 mt-12">
          <VideoTestimonials />
        </section>

        <section className="px-4 sm:px-8 md:px-12 lg:px-20 mt-12">
          <Courses />
        </section>

        <section className="px-4 sm:px-8 md:px-12 lg:px-20 mt-12">
          <HomeGallery />
        </section>

        <section className="px-4 sm:px-8 md:px-12 lg:px-20 mt-12">
          <Quiz />
        </section>

        <section className="px-4 sm:px-8 md:px-12 lg:px-20 mt-12">
          <Email />
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}

export function Home2() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      {/* Full-width Navbar */}
      <header className="w-full">
        <Navbar />
      </header>

      {/* Content Section */}
      <main className="flex-grow">
        <section className="px-4 sm:px-8 md:px-12 lg:px-20">
          <Hero />
        </section>

        <section className="px-4 sm:px-8 md:px-12 lg:px-20 mt-12">
          <Testimonials />
        </section>

        <section className="px-4 sm:px-8 md:px-12 lg:px-20 mt-12">
          <VideoTestimonials />
        </section>

        <section className="px-4 sm:px-8 md:px-12 lg:px-20 mt-12">
          <Courses />
        </section>

        <section className="px-4 sm:px-8 md:px-12 lg:px-20 mt-12">
          <HomeGallery />
        </section>

        <section className="px-4 sm:px-8 md:px-12 lg:px-20 mt-12">
          <Quiz />
        </section>

        <section className="px-4 sm:px-8 md:px-12 lg:px-20 mt-12">
          <Email />
        </section>
      </main>

      {/* Full-width Footer */}
      <footer className="w-full bg-gradient-to-r from-purple-900 to-purple-700">
        <Footer />
      </footer>
    </div>
  );
}
