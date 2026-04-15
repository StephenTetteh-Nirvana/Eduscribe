import Image from "next/image"
import { Button } from "../ui/button"

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

          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80">
            <h1 className="text-[30px] md:text-[40px] lg:text-[60px]
              text-white font-[900] text-[var(--primaryTheme)] text-center"
            > 
              Welcome to Eduscribe
            </h1>
            <p 
              className="leading-relaxed text-[13px] text-white text-center w-[86%] md:w-[600px] lg:text-[18px]"
            >
              Empowering learners and professionals with accesible, quality and ethical academic asssitance through innovative mobile technology.
            </p>
            <Button className="border-none bg-[var(--secondaryTheme)] text-[15px] text-white rounded-full p-6 mt-4 w-[200px] mx-auto cursor-pointer font-bold">Learn More</Button>
          </div>

        </div>
    )
}

export default HeroSection