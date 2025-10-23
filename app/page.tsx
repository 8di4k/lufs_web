import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { SocialProof } from "@/components/sections/SocialProof";
import { Features } from "@/components/sections/Features";
import { LiveDemo } from "@/components/sections/LiveDemo";
import { Comparison } from "@/components/sections/Comparison";
import { FAQ } from "@/components/sections/FAQ";
import { Pricing } from "@/components/sections/Pricing";

export default function Home() {
  return (
    <main className="bg-dark">
      <Hero />
      <Stats />
      <SocialProof />
      <Features />
      <LiveDemo />
      <Comparison />
      <Pricing />
      <FAQ />
    </main>
  );
}
