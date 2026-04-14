import HeroSection from "@/components/layout/home/HeroSection";
import Services from "@/components/layout/home/Services";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar/>
      <HeroSection/>
      <Services/>
    </div>
  );
}
