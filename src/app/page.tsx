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
export default function Home() {
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
