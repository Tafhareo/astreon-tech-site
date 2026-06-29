import type { Metadata } from "next";
import OmnichannelBenefits from "@/components/omnichannel/OmnichannelBenefits";
import OmnichannelComparison from "@/components/omnichannel/OmnichannelComparison";
import OmnichannelDashboard from "@/components/omnichannel/OmnichannelDashboard";
import OmnichannelFAQ from "@/components/omnichannel/OmnichannelFAQ";
import OmnichannelFinalCTA from "@/components/omnichannel/OmnichannelFinalCTA";
import OmnichannelHero from "@/components/omnichannel/OmnichannelHero";
import OmnichannelIntegrations from "@/components/omnichannel/OmnichannelIntegrations";
import OmnichannelPlans from "@/components/omnichannel/OmnichannelPlans";
import OmnichannelProblems from "@/components/omnichannel/OmnichannelProblems";
import OmnichannelUseCases from "@/components/omnichannel/OmnichannelUseCases";

export const metadata: Metadata = {
  title: "Central Omnichannel Astreon",
  description:
    "Central Omnichannel Astreon para empresas que querem organizar o atendimento via WhatsApp com múltiplos atendentes, filas, histórico, automações, dashboard e suporte especializado.",
  alternates: {
    canonical: "/omnichannel",
  },
  openGraph: {
    title: "Central Omnichannel Astreon",
    description:
      "Organize atendimento, filas, histórico, automações, indicadores e suporte em uma central profissional para sua empresa.",
    url: "/omnichannel",
    type: "website",
  },
};

export default function OmnichannelPage() {
  return (
    <main className="bg-slate-950 text-white">
      <OmnichannelHero />
      <OmnichannelProblems />
      <OmnichannelBenefits />
      <OmnichannelDashboard />
      <OmnichannelUseCases />
      <OmnichannelIntegrations />
      <OmnichannelComparison />
      <OmnichannelPlans />
      <OmnichannelFAQ />
      <OmnichannelFinalCTA />
    </main>
  );
}
