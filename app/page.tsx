import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import Services from "@/components/home/Services";
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
