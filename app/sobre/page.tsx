import type { Metadata } from "next";
import AboutCompany from "@/components/about/AboutCompany";
import AboutDifferentials from "@/components/about/AboutDifferentials";
import AboutFinalCTA from "@/components/about/AboutFinalCTA";
import AboutHero from "@/components/about/AboutHero";
import AboutProcess from "@/components/about/AboutProcess";
import AboutTechnologies from "@/components/about/AboutTechnologies";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça a Astreon Tech, empresa de tecnologia especializada em infraestrutura, segurança da informação, suporte e soluções omnichannel para empresas.",
  alternates: {
    canonical: "/sobre",
  },
};

export default function Sobre() {
  return (
    <main className="bg-slate-950 text-white">
      <AboutHero />
      <AboutCompany />
      <AboutDifferentials />
      <AboutProcess />
      <AboutTechnologies />
      <AboutFinalCTA />
    </main>
  );
}
