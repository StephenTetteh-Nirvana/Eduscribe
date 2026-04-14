import HeroSection from "@/components/layout/home/HeroSection";
import HowItWorks from "@/components/layout/home/HowItWorks";
import Services from "@/components/layout/home/Services";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Services/>
      <HowItWorks/>
    </div>
  );
}
