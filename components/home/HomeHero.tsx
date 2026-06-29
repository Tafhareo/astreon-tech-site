import FadeIn from "@/components/FadeIn";
import { ArrowRight, BarChart3, CheckCircle2 } from "lucide-react";

const whatsappDemo =
  "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Astreon%20Tech%20e%20quero%20solicitar%20uma%20demonstra%C3%A7%C3%A3o.";

const highlights = [
  "WhatsApp centralizado",
  "Múltiplos atendentes",
  "Filas e histórico",
  "Dashboard gerencial",
];

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_36%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:px-10 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <FadeIn>
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            Astreon Tech
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Transforme o atendimento da sua empresa em uma operação profissional.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Centralize WhatsApp, equipes, filas, histórico, automações e
            indicadores com a Central Omnichannel Astreon, sem deixar de contar
            com infraestrutura, segurança e suporte especializado.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/omnichannel"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Conhecer solução
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={whatsappDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-7 py-3 font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-300"
            >
              Solicitar demonstração
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
              Omnichannel
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
              Infraestrutura
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
              Segurança
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
              Suporte
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/80 p-5 shadow-2xl shadow-cyan-950/30">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">Painel Astreon</p>
                  <p className="text-xs text-slate-400">
                    Atendimento monitorado em tempo real
                  </p>
                </div>

                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Online
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["18", "em atendimento"],
                  ["1m42s", "tempo médio"],
                  ["147", "finalizados hoje"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="text-2xl font-bold text-cyan-300">{value}</p>
                    <p className="mt-1 text-xs text-slate-400">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 flex-none text-emerald-300" />
                    <span className="text-sm font-semibold text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 text-cyan-300" />
                  <p className="text-sm font-semibold text-slate-200">
                    Gestão com dados, histórico e controle da operação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
