import FadeIn from "@/components/FadeIn";

const whatsappDemo =
  "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Astreon%20Tech%20e%20quero%20solicitar%20uma%20demonstra%C3%A7%C3%A3o%20da%20Central%20de%20Atendimento%20Omnichannel.";

const omnichannelBenefits = [
  "Múltiplos atendentes no mesmo número",
  "Filas por setor: comercial, suporte e financeiro",
  "Histórico centralizado das conversas",
  "Automações e respostas rápidas",
  "Painel gerencial com indicadores",
  "Sem cobrança por mensagem enviada ou recebida",
];

export default function HomeOmnichannel() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.14),transparent_42%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
              Produto em destaque
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Central de Atendimento Omnichannel Astreon.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Pare de perder clientes no WhatsApp pessoal do vendedor.
              Centralize conversas, distribua atendimentos por fila, preserve o
              histórico e acompanhe indicadores da operação em tempo real.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/omnichannel"
                className="rounded-2xl bg-cyan-500 px-7 py-3 text-center font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
              >
                Conhecer a solução
              </a>

              <a
                href={whatsappDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/20 px-7 py-3 text-center font-semibold text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
              >
                Solicitar demonstração
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/30">
              <div className="grid gap-4 sm:grid-cols-2">
                {omnichannelBenefits.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="mb-4 h-2 w-2 rounded-full bg-cyan-400" />
                    <p className="text-sm font-medium leading-6 text-slate-200">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
          <FadeIn>
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Antes e depois
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                O atendimento deixa de depender de pessoas isoladas e passa a
                pertencer à empresa.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-red-400/20 bg-red-500/5 p-6">
                <h3 className="text-xl font-bold text-red-200">Antes</h3>
                <div className="mt-6 space-y-4 text-sm text-slate-300">
                  {[
                    "Cada vendedor atende pelo próprio WhatsApp.",
                    "O histórico fica perdido no celular do colaborador.",
                    "A gestão não sabe quantos clientes foram atendidos.",
                    "Não existe fila, prioridade ou padrão de resposta.",
                  ].map((item) => (
                    <p key={item}>✕ {item}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-emerald-400/20 bg-emerald-500/5 p-6">
                <h3 className="text-xl font-bold text-emerald-200">Depois</h3>
                <div className="mt-6 space-y-4 text-sm text-slate-300">
                  {[
                    "A empresa atende por uma central profissional.",
                    "O histórico permanece mesmo com troca de colaborador.",
                    "Filas e setores organizam o fluxo de atendimento.",
                    "Indicadores ajudam a acompanhar produtividade e qualidade.",
                  ].map((item) => (
                    <p key={item}>✓ {item}</p>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
