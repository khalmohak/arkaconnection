"use client";

import { servicesData } from "@/data/services";
import { useRouter } from "next/navigation";
import React from "react";

function SingleService({
  serviceImage,
  serviceName,
  slugName,
  divIndex,
}: {
  serviceImage: string;
  serviceName: string;
  slugName: string;
  divIndex: number;
}) {
  const router = useRouter();

  const routeToService = () => {
    if (divIndex === 0) {
      router.push("/services/Finding-Shubh-Muhurta");
    }
  };

  return (
    <div
      className="
        h-40 w-40 flex flex-col justify-center items-center rounded-lg transition-transform duration-300 hover:cursor-pointer hover:scale-105 text-black
        sm:h-64 sm:w-64
        md:h-52 md:w-52
        lg:h-72 lg:w-72
        xl:h-96 xl:w-96
        2xl:h-96 2xl:w-96
      "
      onClick={routeToService}
    >
      {/* IMAGE */}
      <div
        className="
          h-2/3 w-full flex justify-center items-center rounded-lg shadow-lg
        "
      >
        <img
          src={serviceImage}
          alt={serviceName}
          className="h-full w-full rounded-lg object-cover border-2"
        />
      </div>

      {/* SERVICE DETAILS */}
      <div
        className="
          h-1/3 w-full text-center flex justify-center items-start mt-4 text-xs sm:text-base font-bold
        "
      >
        {serviceName}
      </div>
    </div>
  );
}

function Testimonials() {
  const router = useRouter();

  const navigateToServices = () => {
    router.push("/services");
  };

  return (
    <div className="h-full w-full flex flex-col items-center gap-y-10 py-10 px-4">
      <div className="text-3xl font-extrabold text-[#344e41]">Our Services</div>

      <div
        className="
          grid grid-cols-1 gap-6 place-content-center place-items-center
          sm:grid-cols-2 sm:gap-10
          md:grid-cols-3 md:gap-12
        "
      >
        {servicesData.map((service, index) => (
          <SingleService
            key={index}
            serviceImage={service.image}
            serviceName={service.name}
            slugName={service.slug}
            divIndex={index}
          />
        ))}
      </div>

      <button
        onClick={navigateToServices}
        className="
           px-6 py-2 rounded-lg bg-[#344e41] text-white font-bold transition-transform duration-300 hover:scale-105 hover:bg-[#2a3b31]
        "
      >
        View All Services
      </button>
    </div>
  );
}

export default Testimonials;
