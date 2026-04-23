"use client"

import Typewriter from 'typewriter-effect';
import { motion } from "motion/react";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  
  return (
    <div className="relative w-full h-screen">
      {/* Background Image  */} 
      <Image 
        src="/images/bannerImage.jpg"
        alt="Background"
        fill
        className="relative object-cover object-center h-screen w-full"
        loading="eager"
      />

      <div className="absolute inset-0 bg-black/60 w-full h-screen flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[30px] md:text-[40px] lg:text-[60px]
          text-center text-white flex flex-col md:flex-row items-center md:gap-2 font-[600]"
        >
          Are You  
          <Typewriter
            options={{
              strings: ['A University Student ?', 'A Postgraduate Researcher ?', 'A Working Professional ?', 'A Corporate Institution ?'],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 50,
              wrapperClassName: 'text-[var(--secondaryTheme)] font-[900]',
            }}
          />
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="leading-relaxed text-[13px] text-white text-center w-[86%] md:w-[600px] lg:text-[18px]">
          Empowering learners and professionals
          with accesible, quality and ethical
          academic asssitance through innovative
          technology.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
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
