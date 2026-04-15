import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import PaymentSubscription from "@/components/home/PaymentSubscription";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Services/>
      <HowItWorks/>
      <Testimonials/>
      <PaymentSubscription/>
    </div>
  );
}
