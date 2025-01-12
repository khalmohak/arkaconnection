"use client";
import React, { useState } from "react";
import Layout from "@/components/common/layout";
import { motion } from "framer-motion";
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Sparkles,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Visit Us",
      details: "Near Lakshamana Jhula, Rishikesh - 249137"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Us",
      details: "+91-8791691675"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Us",
      details: "arkaconnection@gmail.com"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Office Hours",
      details: "Mon - Sat: 9:00 AM - 6:00 PM"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay
    setIsSubmitting(false);
    // Reset form or show success message
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#FAF9F6] mt-10">
        {/* Hero Section */}
        <section className="relative bg-[#344e41] text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#B69D74]/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#B69D74]/10 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#B69D74]/20 flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-[#B69D74]" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get in Touch</h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Connect with us to begin your spiritual journey and discover ancient wisdom
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#B69D74]/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#B69D74]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                  <p className="text-gray-600">We'd love to hear from you</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 
                             focus:ring-[#B69D74] focus:border-transparent transition-colors"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 
                             focus:ring-[#B69D74] focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 
                             focus:ring-[#B69D74] focus:border-transparent transition-colors"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 
                             focus:ring-[#B69D74] focus:border-transparent transition-colors"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[#344e41] text-white rounded-lg font-semibold 
                           hover:bg-[#2a3b31] transition-colors duration-300 flex items-center 
                           justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl 
                             transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#B69D74]/10 flex items-center 
                                    justify-center text-[#B69D74]">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        <p className="text-gray-600">{info.details}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Us</h3>
                <div className="flex gap-4">
                  {[
                    { icon: <Facebook className="w-5 h-5" />, link: "#", label: "Facebook" },
                    { icon: <Instagram className="w-5 h-5" />, link: "#", label: "Instagram" },
                    { icon: <Twitter className="w-5 h-5" />, link: "#", label: "Twitter" }
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-[#B69D74]/10 flex items-center justify-center 
                               text-[#B69D74] hover:bg-[#B69D74] hover:text-white transition-colors 
                               duration-300"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Map or Additional Info */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Location</h3>
                <p className="text-gray-600 mb-4">
                  Visit us at our peaceful retreat in Rishikesh, where ancient wisdom meets modern learning.
                </p>
                {/* Add map component or image here if needed */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;