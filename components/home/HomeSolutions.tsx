import FadeIn from "@/components/FadeIn";

const solutions = [
  {
    eyebrow: "Comunicação",
    title: "Central de Atendimento Omnichannel",
    description:
      "Transforme o atendimento da sua empresa em uma operação organizada, com múltiplos atendentes, filas, histórico e indicadores.",
    href: "/omnichannel",
    cta: "Conhecer solução",
    featured: true,
  },
  {
    eyebrow: "Infraestrutura",
    title: "Ambientes corporativos estáveis",
    description:
      "Redes, servidores, firewall, cloud e conectividade preparados para empresas que não podem parar.",
    href: "/servicos#infraestrutura",
    cta: "Ver serviços",
    featured: false,
  },
  {
    eyebrow: "Segurança",
    title: "Proteção para dados e acessos",
    description:
      "Boas práticas de segurança da informação para reduzir riscos, fortalecer controles e proteger sua operação.",
    href: "/servicos#seguranca",
    cta: "Ver serviços",
    featured: false,
  },
  {
    eyebrow: "Serviços gerenciados",
    title: "Suporte e sustentação contínua",
    description:
      "Acompanhamento técnico próximo para manter sua empresa funcionando com estabilidade, performance e previsibilidade.",
    href: "/servicos#suporte",
    cta: "Falar com especialista",
    featured: false,
  },
];

export default function HomeSolutions() {
  return (
    <section id="solucoes" className="border-b border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
        <FadeIn>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Soluções Astreon
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Tecnologia organizada em pilares para sua empresa crescer.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
              Da comunicação com o cliente à infraestrutura e segurança, a
              Astreon Tech entrega soluções implantadas, documentadas e
              sustentadas por uma equipe técnica.
            </p>
          </div>

          <div className="grid items-stretch gap-6 lg:grid-cols-4">
            {solutions.map((solution) => (
              <a
                key={solution.title}
                href={solution.href}
                className={`group flex h-full min-h-[320px] flex-col rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-2xl ${
                  solution.featured
                    ? "border-cyan-400/30 bg-cyan-500/10 shadow-cyan-950/30"
                    : "border-white/10 bg-slate-900/70 shadow-black/20"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  {solution.eyebrow}
                </p>

                <h3 className="mt-4 min-h-[64px] text-xl font-bold leading-tight text-white">
                  {solution.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                  {solution.description}
                </p>

                <p className="mt-6 text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-200">
                  {solution.cta} →
                </p>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
