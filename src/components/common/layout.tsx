import Footer from "@/app/appComponents/Footer";
import Navbar from "@/app/appComponents/Navbar";

function Layout({ children }: any) {
  return (
    <div
    //   className="
    //     min-h-screen w-full flex flex-col justify-center items-center gap-y-20 bg-white
    //     sm:min-h-screen sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-y-20
    //     md:min-h-screen md:w-full md:flex md:flex-col md:justify-center md:items-center md:gap-y-20
    //     lg:min-h-screen lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-y-20
    //     xl:min-h-screen xl:w-full xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-y-20
    //     2xl:min-h-screen 2xl:w-full 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:gap-y-20
    // "
    >
      <div className="w-full">
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
