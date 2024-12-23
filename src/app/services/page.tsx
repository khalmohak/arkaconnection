"use client";

import React, { useState } from "react";
import Layout from "@/components/common/layout";
import { servicesData } from "@/data/services";



const serviceTags = [
  "All",
  ...new Set(servicesData.map((service) => service.tag)),
];

function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((service) => service.tag === selectedCategory);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-8">
        <div className="container mx-auto mb-10">
          <h1 className="text-4xl font-extrabold text-center text-purple-900 mb-10">
            Explore Our Services
          </h1>

          {/* Filter Section */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedCategory(tag)}
                className={`px-6 py-2 rounded-lg text-lg font-semibold ${
                  selectedCategory === tag
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Services Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow flex flex-col"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-56 object-cover rounded-t-xl"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-purple-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 line-through">
                        ${service.price.toLocaleString()}
                      </p>
                      <p className="text-lg text-green-600 font-bold">
                        ${service.discountedPrice.toLocaleString()}
                      </p>
                    </div>
                    <a
                      href={`/services/${service.slug}`}
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ServicesPage;
