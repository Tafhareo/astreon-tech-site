import FadeIn from "@/components/FadeIn";

const whyAstreon = [
  {
    title: "Empresa de tecnologia, não apenas suporte",
    description:
      "Projetamos, implantamos e sustentamos soluções completas para empresas que precisam de tecnologia confiável.",
  },
  {
    title: "Infraestrutura própria e dedicada",
    description:
      "Ambientes organizados com foco em disponibilidade, segurança, backup e continuidade operacional.",
  },
  {
    title: "Segurança desde a implantação",
    description:
      "A solução nasce com boas práticas de acesso, documentação, monitoramento e proteção da informação.",
  },
  {
    title: "Suporte humano e próximo",
    description:
      "Você fala com quem entende do ambiente e acompanha a operação de ponta a ponta.",
  },
];

export default function HomeWhyAstreon() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
      <FadeIn>
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Por que a Astreon Tech
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Tecnologia com implantação, segurança e suporte contínuo.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {whyAstreon.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 h-1 w-12 rounded-full bg-cyan-400" />
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
