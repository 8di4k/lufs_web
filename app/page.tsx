import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { SocialProof } from "@/components/sections/SocialProof";
import { Features } from "@/components/sections/Features";
import { LiveDemo } from "@/components/sections/LiveDemo";
import { Comparison } from "@/components/sections/Comparison";
import { FAQ } from "@/components/sections/FAQ";
import { Pricing } from "@/components/sections/Pricing";
import { GlobalBackground } from "@/components/shared/GlobalBackground";

export default function Home() {
  return (
    <main className="relative bg-black">
      {/* Unified seamless background */}
      <GlobalBackground />
      
      {/* Content sections */}
      <div className="relative z-10">
        <Hero />
        <Stats />
        <SocialProof />
        <Features />
        <LiveDemo />
        <Comparison />
        <Pricing />
        <FAQ />
      </div>
    </main>
  );
}
