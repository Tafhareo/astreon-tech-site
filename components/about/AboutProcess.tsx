import FadeIn from "@/components/FadeIn";

const steps = [
  {
    title: "Diagnóstico",
    text: "Entendemos o ambiente, os riscos, as dores operacionais e os objetivos da empresa.",
  },
  {
    title: "Planejamento",
    text: "Desenhamos a solução com foco em segurança, continuidade e crescimento.",
  },
  {
    title: "Implantação",
    text: "Executamos configurações, integrações, documentação e validações técnicas.",
  },
  {
    title: "Treinamento",
    text: "Orientamos a equipe para operar com clareza, padrão e autonomia.",
  },
  {
    title: "Evolução contínua",
    text: "Acompanhamos a operação e propomos melhorias conforme o ambiente cresce.",
  },
];

export default function AboutProcess() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
      <FadeIn>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Nossa forma de trabalhar
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Método, implantação e sustentação em cada projeto.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
              O objetivo da Astreon Tech é entregar tecnologia funcionando,
              documentada e preparada para continuidade, não apenas executar uma
              configuração pontual.
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
    </section>
  );
}
