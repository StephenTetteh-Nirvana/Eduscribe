"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "motion/react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="relative mt-15 md:mt-30 py-5 flex flex-col items-center justify-center">
      {/* Heading   */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-[var(--primaryTheme)] font-[900] text-[27px] lg:text-[40px] md:text-[35px]">
        Clients Testimonials
      </motion.h1>

      <Carousel className="w-[90%] py-5 mt-5">
        {/* Carousel Buttons  */}
        <div className="absolute right-10 top-1 z-50 flex">
          <CarouselPrevious className="border border-slate-300 hover:border hover:border-[var(--accentTheme)] cursor-pointer" />
          <CarouselNext className="border border-slate-300 hover:border hover:border-[var(--accentTheme)] cursor-pointer" />
        </div>

        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-1/1 pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1}}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-1">
                <Card className="rounded-md ring-0 bg-[var(--backgroundTheme)]">
                  <CardContent className="px-5 py-2">
                    {/* Client Image  */}
                    <div className="w-15 h-15 mx-auto flex items-center justify-center rounded-full border border-slate-400">
                      <Image 
                        src="/images/client-avatar.jpg"
                        alt="Client Image"
                        width={60}
                        height={60}
                        loading="eager"
                        className="rounded-full w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Client Feedback  */}
                    <p className="w-full mt-3">
                      “ I was honestly overwhelmed with my coursework, but their
                      team completely changed the experience for me. The quality
                      of writing was exceptional, everything was delivered on
                      time. I wouldn’t hesitate to recommend their services to
                      anyone needing reliable academic support.”
                    </p>

                    {/* Client Details  */}
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-[var(--primaryTheme)] font-[700] text-center mt-2 text-[16px]">
                        Sarah.k
                      </p>
                      <p className="text-[16px] text-[var(--accentTheme)]">
                        Head Of Anglican Presby
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Testimonials;
