import FadeIn from "@/components/FadeIn";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";

const whatsappLink =
  "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Astreon%20Tech%20e%20quero%20falar%20com%20um%20especialista.";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 md:px-10 md:py-24 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            Contato
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Vamos entender o cenário da sua empresa?
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Fale com a Astreon Tech para solicitar um diagnóstico, conhecer a
            Central Omnichannel ou conversar sobre infraestrutura, segurança,
            suporte e projetos de tecnologia.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Falar no WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="mailto:contato@astreontech.com.br"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-7 py-3 font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-300"
            >
              Enviar e-mail
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/30">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Atendimento Astreon
                  </p>
                  <p className="text-xs text-slate-400">
                    Resposta rápida pelo WhatsApp
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  "Diagnóstico inicial",
                  "Demonstração Omnichannel",
                  "Infraestrutura e segurança",
                  "Suporte e consultoria",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <ShieldCheck className="h-5 w-5 flex-none text-emerald-300" />
                    <span className="text-sm font-medium text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
