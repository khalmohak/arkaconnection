import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  MapPin,
  Youtube,
  MessageCircle,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className=" text-gray-800 py-12 h-full w-full px-12">
      <div className="relative px-0 md:px-6 w-full">
        <div
          className="
          relative
                  h-[30rem] 
                  sm:h-72
                  bg-contain
                  bg-center
                  items-center
                  "
          style={{
            backgroundImage:
              'url("./FooterImage.jpg")',
            backgroundBlendMode: "overlay",
            opacity: 0.1,
          }}
        ></div>
        <div className="absolute top-10 flex flex-col sm:flex-row justify-around gap-8 w-full  ">
          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Social Links</h3>
            <div className="font-bold space-y-2">
              <div
                className="hover:scale-105 cursor-pointer transition-all duration-300"
              >
                <SocialLink
                  href="https://www.facebook.com/maharishikapi?mibextid=ZbWKwL"
                  icon={<Facebook className="text-blue-600" />}
                  label="Facebook"
                  
                />
              </div>
              <div
                className="hover:scale-105 cursor-pointer transition-all duration-300"
              >
              <SocialLink href="#" icon={<Instagram className="text-orange-600" />} label="Instagram" />
              </div>

              <div
                className="hover:scale-105 cursor-pointer transition-all duration-300"
              >
              <SocialLink href="#" icon={<Twitter className="text-blue-400" />} label="Twitter" />
              </div>

              <div
                className="hover:scale-105 cursor-pointer transition-all duration-300"
              >
              <SocialLink href="https://youtube.com/@Maharishikapi?si=qp2D3AGCOqzfy7gL" icon={<Youtube className="text-red-500" />} label="Youtube" />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Get In Touch</h3>
            <div className=" font-bold space-y-2">
              <ContactInfo
                icon={<Phone className="h-5 w-5" />}
                info="+91-8791691675"
              />
              <ContactInfo
                icon={<Mail className="h-5 w-5" />}
                info="arkaconnection@gmail.com"
              />
              <ContactInfo
                icon={<MapPin className="h-5 w-5" />}
                info="Near Lakshamana Jhula, Rishikesh - 249137"
              />
            </div>
          </div>

          {/* YouTube Subscription */}
          {/* <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Subscribe to us</h3>
            <Link href="https://youtube.com/@Maharishikapi?si=qp2D3AGCOqzfy7gL" className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors">
              <Youtube className="h-8 w-8" />
              <span className="text-lg font-semibold">On YouTube</span>
            </Link>
          </div> */}
        </div>

        <div className="mt-4 pt-3 border-t border-gray-200 text-center text-sm font-extrabold text-gray-500">
          © {new Date().getFullYear()} ArkConnection. All rights reserved.
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
      className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

function ContactInfo({ icon, info }: { icon: React.ReactNode; info: string }) {
  return (
    <div className="flex items-center space-x-2 text-gray-600">
      {icon}
      <span>{info}</span>
    </div>
  );
}
