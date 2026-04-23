import FAQ from "@/components/home/FAQ";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import PaymentSubscription from "@/components/home/PaymentSubscription";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Services/>
      <HowItWorks/>
      <Testimonials/>
      <PaymentSubscription/>
      <FAQ/>
    </div>
  );
}
