import FadeIn from "@/components/FadeIn";
import { CheckCircle2 } from "lucide-react";

const whatsappBriefing =
  "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Astreon%20Tech.%0A%0ANome%3A%0AEmpresa%3A%0AWhatsApp%3A%0AE-mail%3A%0AN%C3%BAmero%20de%20atendentes%2Fusu%C3%A1rios%3A%0APrincipal%20desafio%3A";

const briefingItems = [
  "Organizar atendimento via WhatsApp",
  "Melhorar infraestrutura, redes ou servidores",
  "Aumentar segurança da informação",
  "Implantar firewall, VPN, backup ou controles",
  "Corrigir instabilidade, lentidão ou falhas",
  "Planejar cloud, automação ou integração",
];

export default function ContactBriefing() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Briefing rápido
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Envie as informações principais e aceleramos o diagnóstico.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            Para facilitar o primeiro contato, preparamos uma mensagem no
            WhatsApp com os campos mais importantes. Você só completa e envia.
          </p>

          <a
            href={whatsappBriefing}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-2xl bg-cyan-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Preencher briefing pelo WhatsApp
          </a>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/80 p-6">
            <div className="grid gap-3">
              {briefingItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <CheckCircle2 className="h-5 w-5 flex-none text-emerald-300" />
                  <span className="text-sm font-medium text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
