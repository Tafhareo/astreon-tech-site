import FadeIn from "@/components/FadeIn";

const whatsappDiagnostico =
  "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Astreon%20Tech%20e%20quero%20solicitar%20um%20diagn%C3%B3stico%20de%20TI.";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.22),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 md:px-10 md:py-24 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            Astreon Tech
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Tecnologia que conecta, protege e impulsiona empresas.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            Infraestrutura, Segurança da Informação e uma Central de
            Atendimento Omnichannel para empresas que precisam de controle,
            estabilidade e suporte especializado.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#solucoes"
              className="rounded-2xl bg-cyan-500 px-7 py-3 text-center font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
            >
              Conhecer soluções
            </a>

            <a
              href={whatsappDiagnostico}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/20 px-7 py-3 text-center font-semibold text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
            >
              Solicitar diagnóstico
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-xs font-medium text-slate-400">
            {["Infraestrutura", "Segurança", "Comunicação Omnichannel", "Suporte contínuo"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                {item}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/80 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950 p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">Painel Astreon</p>
                  <p className="text-xs text-slate-400">
                    Operação monitorada em tempo real
                  </p>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Online
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["18", "em atendimento"],
                  ["1m42s", "tempo médio"],
                  ["147", "finalizados hoje"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-2xl font-bold text-cyan-300">{value}</p>
                    <p className="mt-1 text-xs text-slate-400">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                {[
                  ["Comercial", "12 conversas na fila"],
                  ["Suporte", "8 atendimentos ativos"],
                  ["Financeiro", "5 retornos pendentes"],
                ].map(([team, status]) => (
                  <div
                    key={team}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">{team}</p>
                      <p className="text-xs text-slate-400">{status}</p>
                    </div>
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
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
