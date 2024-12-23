import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  MapPin,
  Youtube,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="space-y-4">
              <SocialLink
                href="https://www.facebook.com/maharishikapi?mibextid=ZbWKwL"
                icon={<Facebook className="text-blue-500" />}
                label="Facebook"
              />
              <SocialLink
                href="#"
                icon={<Instagram className="text-pink-400" />}
                label="Instagram"
              />
              <SocialLink
                href="#"
                icon={<Twitter className="text-blue-400" />}
                label="Twitter"
              />
              <SocialLink
                href="https://youtube.com/@Maharishikapi?si=qp2D3AGCOqzfy7gL"
                icon={<Youtube className="text-red-500" />}
                label="YouTube"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <ContactInfo
                icon={<Phone />}
                info="+91-8791691675"
              />
              <ContactInfo
                icon={<Mail />}
                info="arkaconnection@gmail.com"
              />
              <ContactInfo
                icon={<MapPin />}
                info="Near Lakshamana Jhula, Rishikesh - 249137"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-purple-600 pt-6 text-center text-sm text-gray-300">
          <p>
            © {new Date().getFullYear()} ArkConnection. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-3 hover:text-purple-300 transition-colors"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

function ContactInfo({ icon, info }: { icon: React.ReactNode; info: string }) {
  return (
    <div className="flex items-center space-x-3 text-gray-300">
      <span className="text-purple-300">{icon}</span>
      <span>{info}</span>
    </div>
  );
}
