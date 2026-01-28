"use client"; // If using Next.js (React Server Components)

import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";
import { gradientText, gradientBg, gradientHover } from "../utils/gradients";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { useTypewriter } from "../hooks/useTypewriter";

export default function Hero() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const { displayText, isComplete } = useTypewriter({
    text: "Machine Learning & Future Thinking",
    speed: 80,
    delay: 1000
  });

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      try {
        setVantaEffect(
          GLOBE({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 0.5,
            scaleMobile: 0.5,
            color: 0xFFD700,
            backgroundColor: 0x000000,
            backgroundAlpha: 1,
            size: 0.80,
            spacing: 15.00,
            showDots: true,
          })
        );
      } catch (error) {
        console.error("Vanta effect failed to initialize:", error);
      }
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Cleanup effect on unmount
    };
  }, [vantaEffect]);

  return (
    <section
      id="hero"
      ref={vantaRef} // Attach Vanta.js to this div
      className="min-h-screen flex items-center justify-center relative bg-gray-900"
    >
      {/* Content */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="space-y-9">
          <motion.h1 className="text-4xl md:text-6xl font-bold" variants={fadeInUp}>
            <motion.span className="block text-white opacity-90 leading-normal" variants={fadeInUp}>
              Building tomorrow's AI, today
            </motion.span>
            <motion.span className="block text-white opacity-90" style={{ margin: "0 0.5rem", fontSize: "0.8rem" }} variants={fadeInUp}>
              with
            </motion.span>
            <motion.span className={`block ${gradientText} leading-normal`} variants={fadeInUp}>
              {displayText}
              {!isComplete && (
                <span className="animate-pulse">|</span>
              )}
              {isComplete && (
                <span className="blink-dot">.</span>
              )}
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 text-transparent bg-clip-text"
            variants={fadeInUp}>
            Data Scientist | AI Engineer | Project Management Professional, PMP®
          </motion.p>


          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" variants={fadeInUp}>
            <motion.a
              href="#projects"
              className={`px-8 py-3 rounded-full text-white ${gradientBg} ${gradientHover} transition-all duration-300 shadow-lg shadow-purple-500/25`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 rounded-full text-white border-2 border-white/20 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>

        {/* Animated Arrow Down */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown className="w-6 h-6 text-white/70" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
    </section>
  );
}
