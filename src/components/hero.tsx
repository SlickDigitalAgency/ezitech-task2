import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import gsap from 'gsap';

const Hero: React.FC = () => {
  useEffect(() => {
    // GSAP animation for subtle background effect
    gsap.to('.hero-bg', {
      duration: 20,
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);
  
  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 hero-bg">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('./herobg.jpg')",
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="block">uicookies.com Creates High</span>
            <span className="block">Quality Bootstrap Template For</span>
            <span className="block italic">Free</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8"
          >
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-sm hover:bg-blue-700 transition-colors"
              >
                Get Them Now
              </motion.button>
            </Link>
            
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-transparent text-white font-medium border border-white rounded-sm hover:bg-white/10 transition-colors"
              >
                See Features
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;