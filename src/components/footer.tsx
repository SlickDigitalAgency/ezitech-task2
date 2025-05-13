import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import gsap from "gsap";
import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const footerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const el = footerRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <motion.footer
      ref={footerRef}
      className="bg-[#1f4d91] text-white text-center py-10 px-4 flex flex-col items-center space-y-6"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      {/* Social Icons */}
      <div className="flex space-x-6 text-white text-xl">
        <a href="#" className="hover:text-gray-300 transition" aria-label="Twitter">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-gray-300 transition" aria-label="Facebook">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-gray-300 transition" aria-label="Instagram">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-gray-300 transition" aria-label="LinkedIn">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm font-semibold text-white">
        © 2019 Frame. All Rights Reserved.
      </p>

      {/* Designer Credit */}
      <p className="text-sm text-white">
        Designed &amp; <a href="#" className="text-blue-300 hover:underline">Bootstrap templates</a> by <span className="text-white font-bold">uiCookies</span>
      </p>

      {/* Image Credit */}
      <p className="text-sm text-white">
        Demo Images by <a href="#" className="text-blue-300 hover:underline">Unsplash</a>
      </p>
    </motion.footer>
  );
};

export default Footer;
