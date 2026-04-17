import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TickerSection } from "@/components/sections/TickerSection";
import { BlueprintSection } from "@/components/sections/BlueprintSection";
import { CoreFourSection } from "@/components/sections/CoreFourSection";
import { GalleryStrip } from "@/components/sections/GalleryStrip";
import { VideoFeatureSection } from "@/components/sections/VideoFeatureSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <main className="bg-surface text-on-surface overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TickerSection />
      <BlueprintSection />
      <CoreFourSection />
      <GalleryStrip />
      <VideoFeatureSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
