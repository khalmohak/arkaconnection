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

    <div className="
    min-h-screen w-full flex flex-col justify-center items-center text-white
    sm:min-h-screen sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center sm:text-white
    md:min-h-screen md:w-full md:flex md:flex-col md:justify-center md:items-center md:text-white
    lg:min-h-screen lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center lg:text-white
    xl:min-h-screen xl:w-full xl:flex xl:flex-col xl:justify-center xl:items-center  xl:text-white
    2xl:min-h-screen 2xl:w-full 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center bg-white 2xl:text-white">
      <div className="h-5 w-full"></div>
      <Navbar />
      <Hero />
      <Testimonials />
      <VideoTestimonials  />
      <Courses />
      <HomeGallery />
      <Quiz />
      <Email />
      {/* <Planets /> */}
      <Footer />
      
    </div>

  );
}
