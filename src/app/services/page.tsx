"use client";
import React, { useState } from "react";
import Layout from "@/components/common/layout";
import { servicesData } from "@/data/services";
import { motion } from "framer-motion";
import { Search, Star, Clock, Users, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

const serviceTags = ["All", ...new Set(servicesData.map((service) => service.tag))];

function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = servicesData.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.tag === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-[#FAF9F6] mt-10">
        {/* Hero Section */}
        <div className="relative bg-[#344e41] text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#B69D74]/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#B69D74]/10 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center items-center gap-2 mb-6">
                <Sparkles className="w-6 h-6 text-[#B69D74]" />
                <span className="text-[#B69D74] font-medium">Discover Our Services</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Sacred Services & Consultations
              </h1>
              
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12">
                Explore our range of spiritual services designed to guide you on your journey of enlightenment
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 border border-white/20 
                             text-white placeholder-gray-300 focus:outline-none focus:ring-2 
                             focus:ring-[#B69D74] focus:border-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {serviceTags.map((tag, index) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(tag)}
                className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300
                  ${selectedCategory === tag
                    ? "bg-[#B69D74] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-[#B69D74]/10"
                  }`}
              >
                {tag}
              </motion.button>
            ))}
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
                         transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    height={200}
                    width={200}
                    className="w-full h-full object-cover transform transition-transform duration-300 
                             group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-[#B69D74] text-white px-3 py-1 
                                rounded-full text-sm font-semibold">
                    Save {Math.round(((service.price - service.discountedPrice) / service.price) * 100)}%
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Service Info */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-[#B69D74] font-medium">{service.tag}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-[#B69D74] fill-current" />
                      <span className="ml-1 text-sm text-gray-600">4.9</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>

                  {/* Service Features */}
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-[#B69D74] mr-1" />
                      <span>1 hour</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-[#B69D74] mr-1" />
                      <span>1-on-1</span>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-500 line-through text-sm">
                        ${service.price.toLocaleString()}
                      </span>
                      <div className="text-2xl font-bold text-[#344e41]">
                        ${service.discountedPrice.toLocaleString()}
                      </div>
                    </div>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-2 px-6 py-2 bg-[#344e41] text-white rounded-full 
                               font-semibold hover:bg-[#2a3b31] transition-colors duration-300"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Sparkles className="w-16 h-16 text-[#B69D74] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Services Found</h3>
              <p className="text-gray-600">Try adjusting your search or browse all services</p>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default ServicesPage;