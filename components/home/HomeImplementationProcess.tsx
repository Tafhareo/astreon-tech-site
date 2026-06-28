import FadeIn from "@/components/FadeIn";

const steps = [
  "Diagnóstico do cenário atual",
  "Planejamento da solução ideal",
  "Implantação e configuração",
  "Treinamento da equipe",
  "Suporte e evolução contínua",
];

export default function HomeImplementationProcess() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Processo de implantação
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Não entregamos apenas acesso. Entregamos a solução funcionando.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
                Cada projeto começa com diagnóstico, passa por implantação
                orientada e segue com acompanhamento técnico para manter a
                operação estável.
              </p>
            </div>

            <div className="grid gap-4">
              {steps.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5"
                >
                  <span className="text-sm font-bold text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-medium text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
