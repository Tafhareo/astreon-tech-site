import FadeIn from "@/components/FadeIn";

const steps = [
  {
    title: "Diagnóstico",
    text: "Entendemos o ambiente, gargalos, riscos, operação e objetivos do negócio.",
  },
  {
    title: "Projeto",
    text: "Desenhamos a solução mais adequada para infraestrutura, segurança ou atendimento.",
  },
  {
    title: "Implantação",
    text: "Executamos a configuração com organização, documentação e validação técnica.",
  },
  {
    title: "Treinamento",
    text: "Orientamos usuários e responsáveis para operar com clareza e segurança.",
  },
  {
    title: "Sustentação",
    text: "Acompanhamos o ambiente para manter estabilidade, evolução e continuidade.",
  },
];

export default function ServicesProcess() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Como trabalhamos
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Método técnico para entregar soluções estáveis.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
                A Astreon Tech atua com processo, documentação e visão de
                continuidade. O objetivo é entregar tecnologia funcionando, não
                apenas executar tarefas isoladas.
              </p>
            </div>

            <div className="grid gap-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
                >
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-cyan-400/10 text-sm font-bold text-cyan-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
