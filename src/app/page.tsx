import Script from "next/script";
import Courses from "./appComponents/Courses";
import Email from "./appComponents/Email";
import Footer from "./appComponents/Footer";
import Hero from "./appComponents/Hero";
import HomeGallery from "./appComponents/HomeGallery";
import Navbar from "./appComponents/Navbar";
import Planets from "./appComponents/Planets";
import Quiz from "./appComponents/Quiz";
import OurServices from "./appComponents/Testimonials";
import VideoTestimonials from "./appComponents/VideoTestimonials";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#FAF9F6]">
      {/* Navbar */}
      <header className="w-full">
        <Navbar />
      </header>
      {/* Hero Section */}
      <main className="flex-grow">
        <Hero/>


        <section className="px-4 sm:px-8 md:px-12 lg:px-20 mt-12 bg-[#FAF9F6]">
          <OurServices />
        </section>

        <section className="px-4 sm:px-8 md:px-12 lg:px-20 mt-12 bg-[#FAF9F6]">
          <VideoTestimonials />
        </section>

        <section className="px-4 sm:px-8 md:px-12 lg:px-20 mt-12 bg-[#FAF9F6]">
          <Courses />
        </section>

        <section className="px-4 sm:px-8 md:px-12 lg:px-20 mt-12 bg-[#FAF9F6]">
          <HomeGallery />
        </section>

        <section className="px-4 sm:px-8 md:px-12 lg:px-20 mt-12 bg-[#FAF9F6]">
          <Quiz />
        </section>

        <section className="px-4 sm:px-8 md:px-12 lg:px-20 mt-12 bg-[#FAF9F6]">
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

