"use client"

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="relative bg-[var(--primaryTheme)] w-full h-[100vh] md:h-[80vh] lg:h-screen">
      {/* Background Image */}
      <Image
        src="/images/BannnerImage.jpg"
        width={500}
        height={500}
        alt="Hero Image"
        quality={75}
        loading="eager"
        className="relative w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[40px] md:text-[40px] lg:text-[60px]
          text-white font-[900] text-[var(--primaryTheme)] text-center"
        >
          Welcome to Eduscribe
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="leading-relaxed text-[13px] text-white text-center w-[86%] md:w-[600px] lg:text-[18px]">
          Empowering learners and professionals
          with accesible, quality and ethical
          academic asssitance through innovative
          technology.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <Button
            className="border-none bg-[var(--secondaryTheme)] 
            text-[15px] text-white rounded-full p-6 mt-4 w-[200px] mx-auto cursor-pointer font-bold"
          >
            Learn More
          </Button>
        </motion.div>

      </div>
    </div>
  );
};

export default HeroSection;
