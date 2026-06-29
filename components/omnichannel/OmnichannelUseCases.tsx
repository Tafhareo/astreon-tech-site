import FadeIn from "@/components/FadeIn";

const useCases = [
  "Comercial",
  "Suporte",
  "Financeiro",
  "Cobrança",
  "Clínicas",
  "Escolas",
  "Imobiliárias",
  "Call centers",
  "Atendimento interno",
  "Pós-venda",
];

export default function OmnichannelUseCases() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
      <FadeIn>
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Casos de uso
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Uma central para diferentes áreas da empresa.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            A solução se adapta a empresas que precisam organizar comunicação,
            relacionamento, suporte e atendimento recorrente.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
          {useCases.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center text-sm font-semibold text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
            >
              {item}
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
