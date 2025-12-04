import Hero from "@/components/home/Hero";
import ValueSection from "@/components/home/ValueSection";
import Testimonials from "@/components/home/Testimonials";
import AboutSection from "@/components/home/AboutSection";
import ProductsSection from "@/components/home/ProductsSection";
import SupportSection from "@/components/home/SupportSection";
import KukuCareChatbot from "@/components/support/KukuCareChatbot";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ValueSection />
      <AboutSection />
      <ProductsSection />
      <Testimonials />
      <SupportSection />
      <KukuCareChatbot />
    </div>
  );
}
