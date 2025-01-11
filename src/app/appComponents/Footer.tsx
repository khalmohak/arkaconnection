"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  MapPin,
  Youtube,
  Mail,
} from "lucide-react";

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-3 text-gray-200 hover:text-[#B69D74] transition-all duration-300 group"
      whileHover={{ x: 5 }}
    >
      <span className="transform transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </motion.a>
  );
}

function ContactInfo({ icon, info }: { icon: React.ReactNode; info: string }) {
  return (
    <motion.div 
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center space-x-3 text-gray-200 group"
    >
      <span className="text-[#B69D74] transform transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
      <span className="font-medium">{info}</span>
    </motion.div>
  );
}

export default function Footer() {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <footer className="relative bg-gray-900 text-white py-16 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-[10%] text-6xl rotate-12">✧</div>
        <div className="absolute bottom-40 right-[15%] text-6xl -rotate-12">✧</div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />

      <div className="relative container mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >
          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-[#B69D74]">Follow Us</h3>
            <div className="space-y-4">
              <SocialLink
                href="https://www.facebook.com/maharishikapi?mibextid=ZbWKwL"
                icon={<Facebook className="text-[#B69D74]" />}
                label="Facebook"
              />
              <SocialLink
                href="#"
                icon={<Instagram className="text-[#B69D74]" />}
                label="Instagram"
              />
              <SocialLink
                href="#"
                icon={<Twitter className="text-[#B69D74]" />}
                label="Twitter"
              />
              <SocialLink
                href="https://youtube.com/@Maharishikapi?si=qp2D3AGCOqzfy7gL"
                icon={<Youtube className="text-[#B69D74]" />}
                label="YouTube"
              />
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-[#B69D74]">Contact Us</h3>
            <div className="space-y-4">
              <ContactInfo
                icon={<Phone size={20} />}
                info="+91-8791691675"
              />
              <ContactInfo
                icon={<Mail size={20} />}
                info="arkaconnection@gmail.com"
              />
              <ContactInfo
                icon={<MapPin size={20} />}
                info="Near Lakshamana Jhula, Rishikesh - 249137"
              />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-[#B69D74]">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <motion.li key={link.href} whileHover={{ x: 5 }}>
                  <Link 
                    href={link.href} 
                    className="text-gray-200 hover:text-[#B69D74] transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center my-12">
          <div className="w-16 h-px bg-[#B69D74]/30" />
          <div className="mx-4 text-[#B69D74]">✧</div>
          <div className="w-16 h-px bg-[#B69D74]/30" />
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-gray-400"
        >
          <p className="font-medium">
            © {new Date().getFullYear()} ArkConnection. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}