"use client";
import { servicesData } from "@/data/services";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";


function SingleService({
  serviceImage,
  serviceName,
  description,
  price,
  discountedPrice,
  slugName,
  divIndex,
}: {
  serviceImage: string;
  serviceName: string;
  description: string;
  price: number;
  discountedPrice: number;
  slugName: string;
  divIndex: number;
}) {
  const router = useRouter();
  
  const routeToService = () => {
    router.push("/services/"+slugName);
  };
  // Calculate savings percentage
  const savingsPercent = Math.round(((price - discountedPrice) / price) * 100);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: divIndex * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative w-full max-w-sm mx-auto"
    >
      <div
        onClick={routeToService}
        className="relative h-[28rem] w-full rounded-xl overflow-hidden cursor-pointer
                 transition-all duration-300 shadow-lg hover:shadow-xl bg-white"
      >
        {/* Savings Badge */}
        <div className="absolute top-4 right-4 bg-[#B69D74] text-white px-3 py-1 rounded-full 
                      text-sm font-semibold z-20">
          Save {savingsPercent}%
        </div>
        {/* Decorative Border */}
        <div className="absolute inset-0 border-2 border-[#B69D74]/20 rounded-xl z-10 
                      group-hover:border-[#B69D74]/40 transition-colors duration-300" />
        {/* Image Container */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="h-1/2 w-full overflow-hidden"
        >
          <img
            src={serviceImage}
            alt={serviceName}
            className="h-full w-full object-cover transform transition-transform duration-300"
          />
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white opacity-90" />
        </motion.div>
        {/* Content Container */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
          <div className="max-w-full overflow-hidden">
            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 
                         group-hover:text-[#B69D74] transition-colors duration-300
                         overflow-hidden text-ellipsis whitespace-nowrap px-2">
              {serviceName}
            </h3>
            
            {/* Description */}
            <p className="text-sm text-gray-600 mb-4 line-clamp-3 px-2">
              {description}
            </p>
          </div>
          {/* Price Section */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-2xl font-bold text-[#344e41]">
              INR {discountedPrice}
            </span>
            <span className="text-lg text-gray-400 line-through">
              INR {price}
            </span>
          </div>
          
          {/* Learn More Button */}
          <motion.div
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#344e41]/10 
                     text-[#344e41] font-medium group-hover:bg-[#344e41] group-hover:text-white 
                     transition-all duration-300"
          >
            Learn More
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-4 left-4 text-2xl opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 text-[#B69D74]">
          ✧
        </div>
      </div>
    </motion.div>
  );
}

function OurServices() {
  const router = useRouter();
  const navigateToServices = () => {
    router.push("/services");
  };

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#FAF9F6]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-[10%] text-6xl rotate-12">✧</div>
        <div className="absolute bottom-40 right-[15%] text-6xl -rotate-12">✧</div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#344e41] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover ancient wisdom and spiritual guidance through our carefully curated services
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-16">
          {servicesData.map((service, index) => (
            <SingleService
              key={index}
              serviceImage={service.image}
              serviceName={service.name}
              slugName={service.slug}
              divIndex={index}
              discountedPrice={service.discountedPrice}
              price={service.price}
              description={service.description}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={navigateToServices}
            className="px-8 py-3 rounded-full bg-[#344e41] text-white font-bold 
                     shadow-lg hover:bg-[#2a3b31] transition-all duration-300
                     hover:shadow-xl"
          >
            Explore All Services
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#B69D74]/30 rounded-full"
      />
    </div>
  );
}

export default OurServices;