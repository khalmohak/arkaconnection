"use client";
import React, { useState } from "react";
import Layout from "@/components/common/layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Clock, Calendar, ArrowRight, Sparkles, Book, CheckCircle, HelpCircle } from "lucide-react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useParams } from "next/navigation";
import servicesDetail from "@/data/services";

const faqs = [
  {
    question: "What is included in the service?",
    answer:
      "Each service includes detailed analysis, personalized insights, and tailored remedies to address your specific concerns or objectives.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "You can book a consultation by clicking on the 'Book a Service' button and selecting a time slot that works best for you.",
  },
  {
    question: "Are the consultations confidential?",
    answer:
      "Yes, all consultations are 100% confidential. Your privacy and trust are our top priorities.",
  },
  {
    question: "Can I customize the service to my needs?",
    answer:
      "Absolutely! Each service is designed to be personalized based on your specific requirements and goals.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept major payment methods PayPal, and online banking.",
  },
  {
    question: "What if I need to reschedule my appointment?",
    answer:
      "You can reschedule your appointment using the confirmation email link or by contacting our support team at least 24 hours in advance.",
  },
  {
    question: "Are the remedies practical and easy to follow?",
    answer:
      "Yes, all remedies are designed to be practical, logical, and easy to integrate into your daily life.",
  },
  {
    question: "Do I need prior knowledge of astrology for these services?",
    answer:
      "No prior knowledge is required. Our experts will guide you through everything you need to know during the session.",
  },
  {
    question: "Can I ask additional questions during the consultation?",
    answer:
      "Yes, you are encouraged to ask questions during the consultation to get the most out of your session.",
  },
  {
    question: "What if I’m not satisfied with the service?",
    answer:
      "Your satisfaction is important to us. If you have concerns, please let us know, and we'll do our best to address them.",
  },
];


const EXCHANGE_RATE = 0.012;

function PriceDisplay({ priceINR }: { priceINR: number }) {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "INR" ? "USD" : "INR"));
  };

  const displayPrice = currency === "INR" ? priceINR : priceINR * EXCHANGE_RATE;
  const formattedPrice = displayPrice.toFixed(2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-3xl font-bold text-[#344e41]">
          {currency === "INR" ? "₹" : "$"}{formattedPrice}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleCurrency}
          className="px-4 py-2 border-2 border-[#B69D74] text-[#B69D74] rounded-full 
                   hover:bg-[#B69D74] hover:text-white transition-colors duration-300"
        >
          Switch to {currency === "INR" ? "USD" : "INR"}
        </motion.button>
      </div>
    </motion.div>
  );
}

function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesDetail.find(
    (item) => item.slug.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Book className="w-16 h-16 text-[#B69D74] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900">Service Not Found</h2>
          <p className="text-gray-600">The service you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-[#FAF9F6] mt-10">
        {/* Hero Section */}
        <section className="relative bg-[#344e41] text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#B69D74]/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#B69D74]/10 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-[#B69D74]" />
                  <span className="text-[#B69D74] font-medium">Sacred Service</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">{service.title}</h1>
                
                <p className="text-lg text-gray-200 mb-8">{service.description}</p>
                
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-[#B69D74] fill-current" />
                    <span className="ml-2">4.9 (120+ reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-[#B69D74]" />
                    <span className="ml-2">60 minutes</span>
                  </div>
                </div>

                <PriceDisplay priceINR={5000} />

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8"
                >
                  <Button
                    onClick={() => window.open("https://calendly.com/your-calendly-link", "_blank")}
                    className="px-8 py-4 bg-[#B69D74] text-white rounded-full font-semibold 
                             hover:bg-[#a38a64] transition-all duration-300 shadow-lg"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://arkaconnection.in/wp-content/uploads/2024/01/90f37e_732dc7d9eb8344a4b204b9493d728043mv2.webp"
                  alt="Service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Benefits Section */}
          {service.benefits && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Sacred Benefits
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <CheckCircle className="w-8 h-8 text-[#B69D74] mb-4" />
                    <p className="text-gray-700">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Features and Facts Combined Section */}
          {(service.features || service.facts) && (
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {service.features && (
                <motion.section
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white p-8 rounded-xl shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                  <div className="space-y-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#B69D74]/10 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-[#B69D74]" />
                        </div>
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {service.facts && (
                <motion.section
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white p-8 rounded-xl shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Sacred Facts</h2>
                  <div className="space-y-4">
                    {service.facts.map((fact, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#B69D74]/10 flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-[#B69D74]" />
                        </div>
                        <p className="text-gray-700">{fact}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}
            </div>
          )}

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Common Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-[#B69D74] shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Floating Booking Bar */}
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-[#344e41]">₹5,000</div>
              <span className="text-gray-600">/ consultation</span>
            </div>
            
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://calendly.com/your-calendly-link", "_blank")}
                className="px-6 py-3 bg-[#344e41] text-white rounded-full font-semibold 
                         hover:bg-[#2a3b31] transition-all duration-300 flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Schedule Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

export default ServiceDetail;