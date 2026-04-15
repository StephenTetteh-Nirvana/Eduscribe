'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel
} from "@/components/ui/carousel"
import { Button } from "../ui/button";

const Testimonials = () => {

  return (
    <div className="mt-15 flex flex-col items-center justify-center">

      {/* Heading   */}
      <h1 className="text-[var(--primaryTheme)] font-[900] text-[27px] lg:text-[40px] md:text-[35px]">What Our Clients Say About Us</h1>


      <Carousel className="w-[90%] py-5">

        {/* Carousel Buttons  */}
        <div className="absolute z-50 flex flex-row gap-2 items-end justify-end">
            <Button className="cursor-pointer">
              <CarouselPrevious/>
            </Button>

            <Button className="cursor-pointer">
              <CarouselNext/>
            </Button>
        </div>

        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/1 pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="rounded-md ring-0 bg-[var(--backgroundTheme)]">
                  <CardContent className="px-5 py-2">
                    {/* Client Image  */}
                    <div className="w-15 h-15 mx-auto rounded-full border border-slate-400">
                        
                    </div>
                    
                    {/* Client Feedback  */}
                    <p className="w-full mt-3"> “ I was honestly overwhelmed with my coursework, but their team completely changed the experience for me. 
                        The quality of writing was exceptional, everything was delivered on time. 
                        I wouldn’t hesitate to recommend their services to anyone needing reliable academic support.”
                    </p>
                    
                    {/* Client Details  */}
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-[var(--primaryTheme)] font-[700] text-center mt-2 text-[16px]">Sarah.k</p>
                      <p className="text-[16px] text-[var(--accentTheme)]">Head Of Anglican Presby</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>

  )
}

export default Testimonials;
