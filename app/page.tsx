import StatsSection from "@/components/StatsSection";
import HomeFinalCTA from "@/components/home/HomeFinalCTA";
import HomeHero from "@/components/home/HomeHero";
import HomeImplementationProcess from "@/components/home/HomeImplementationProcess";
import HomeOmnichannel from "@/components/home/HomeOmnichannel";
import HomeSolutions from "@/components/home/HomeSolutions";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeWhyAstreon from "@/components/home/HomeWhyAstreon";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <HomeHero />
      <HomeSolutions />
      <HomeOmnichannel />
      <HomeWhyAstreon />
      <StatsSection />
      <HomeImplementationProcess />
      <HomeTestimonials />
      <HomeFinalCTA />
    </main>
  );
}
