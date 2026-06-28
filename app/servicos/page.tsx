import type { Metadata } from "next";
import ServicesFinalCTA from "@/components/services/ServicesFinalCTA";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServicesTechnologies from "@/components/services/ServicesTechnologies";

export const metadata: Metadata = {
  title: "Serviços e Soluções de Tecnologia",
  description:
    "Soluções de infraestrutura, segurança da informação, suporte técnico, telefonia, cloud e Central Omnichannel para empresas.",
  alternates: {
    canonical: "/servicos",
  },
};

export default function Servicos() {
  return (
    <main className="bg-slate-950 text-white">
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesTechnologies />
      <ServicesFinalCTA />
    </main>
  );
}
