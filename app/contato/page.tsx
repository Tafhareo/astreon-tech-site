import type { Metadata } from "next";
import ContactBriefing from "@/components/contact/ContactBriefing";
import ContactChannels from "@/components/contact/ContactChannels";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactFinalCTA from "@/components/contact/ContactFinalCTA";
import ContactHero from "@/components/contact/ContactHero";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Astreon Tech para solicitar diagnóstico, demonstração da Central Omnichannel ou apoio em infraestrutura, segurança e suporte de TI.",
  alternates: {
    canonical: "/contato",
  },
};

export default function Contato() {
  return (
    <main className="bg-slate-950 text-white">
      <ContactHero />
      <ContactChannels />
      <ContactBriefing />
      <ContactFAQ />
      <ContactFinalCTA />
    </main>
  );
}
