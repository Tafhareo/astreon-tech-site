import FadeIn from "@/components/FadeIn";
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

const whatsappDemo =
  "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Astreon%20Tech%20e%20quero%20solicitar%20uma%20demonstra%C3%A7%C3%A3o%20da%20Central%20Omnichannel.";

export default function OmnichannelHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_36%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 md:px-10 md:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            Produto Astreon Tech
          </span>

          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Central Omnichannel para organizar o atendimento da sua empresa.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
            Centralize WhatsApp, equipes, filas, histórico, automações e
            indicadores em uma plataforma profissional, com implantação e
            suporte da Astreon Tech.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-400"
            >
              Solicitar demonstração
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#planos"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-300"
            >
              Ver planos
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
              Setup separado
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
              Mensalidade fixa
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
              Sem cobrança por mensagem
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="rounded-[1.75rem] border border-cyan-400/20 bg-slate-900/80 p-4 shadow-2xl shadow-cyan-950/30">
            <div className="rounded-[1.35rem] border border-white/10 bg-slate-950 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Central Astreon
                    </p>
                    <p className="text-xs text-slate-400">
                      Atendimento em tempo real
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Online
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["18", "ativos"],
                  ["1m42s", "tempo médio"],
                  ["147", "finalizados"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center"
                  >
                    <p className="text-lg font-bold text-cyan-300">{value}</p>
                    <p className="mt-1 text-xs text-slate-400">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-3">
                {[
                  ["Comercial", "12 conversas na fila"],
                  ["Suporte", "8 atendimentos em andamento"],
                  ["Financeiro", "5 retornos pendentes"],
                ].map(([team, status]) => (
                  <div
                    key={team}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">{team}</p>
                      <p className="text-xs text-slate-400">{status}</p>
                    </div>
                    <ShieldCheck className="h-5 w-5 text-emerald-300" />
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