import FadeIn from "@/components/FadeIn";

const values = [
  {
    title: "Missão",
    text: "Ajudar empresas a crescer utilizando tecnologia de forma organizada, segura e escalável.",
  },
  {
    title: "Visão",
    text: "Ser referência em soluções corporativas que unem infraestrutura, segurança e comunicação inteligente.",
  },
  {
    title: "Valores",
    text: "Transparência, segurança, proximidade, excelência técnica e evolução contínua.",
  },
];

export default function AboutCompany() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
      <FadeIn>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Nossa essência
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Uma empresa de tecnologia criada para resolver problemas reais.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              A Astreon Tech atua com foco em ambientes corporativos que
              dependem de estabilidade, segurança e atendimento eficiente. Nosso
              papel é entender o cenário, projetar a solução, implantar com
              responsabilidade e acompanhar a evolução da operação.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Mais do que prestar suporte, buscamos construir soluções que
              permaneçam organizadas, documentadas e preparadas para o
              crescimento da empresa.
            </p>
          </div>

          <div className="grid gap-4">
            {values.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="mb-4 h-1 w-12 rounded-full bg-cyan-400" />
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
