import Link from "next/link";

export default function Sobre() {
  const whatsappLink =
    "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20Sobre%20da%20Astreon%20Tech%20e%20quero%20entender%20como%20voc%C3%AAs%20podem%20me%20ajudar.";

  const highlights = [
    {
      title: "Experiência prática em ambientes corporativos",
      description:
        "Atuação direta com infraestrutura, segurança, redes, suporte técnico e operações que exigem estabilidade e organização.",
    },
    {
      title: "Foco em solução, não apenas em tecnologia",
      description:
        "Mais do que implementar ferramentas, o objetivo é resolver problemas que impactam o funcionamento do negócio.",
    },
    {
      title: "Atendimento consultivo e personalizado",
      description:
        "Cada empresa tem um cenário diferente, por isso as recomendações e soluções são ajustadas à realidade de cada operação.",
    },
    {
      title: "Compromisso com estabilidade e segurança",
      description:
        "Redução de falhas, melhoria de desempenho e reforço da proteção do ambiente são prioridades em cada atuação.",
    },
  ];

  const idealFor = [
    "empresas que sofrem com lentidão, falhas ou paradas recorrentes",
    "negócios que precisam organizar melhor a infraestrutura de TI",
    "operações que buscam reduzir riscos e melhorar a segurança",
    "empresas que precisam de apoio técnico mais confiável e estratégico",
  ];

  const actingAreas = [
    "Suporte de TI",
    "Infraestrutura",
    "Redes e firewall",
    "Segurança da informação",
    "VICIdial e telefonia",
    "Consultoria e projetos",
  ];

  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-6 md:px-10 md:py-20">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Sobre a Astreon Tech
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          Soluções em TI, infraestrutura e segurança da informação para empresas
          que precisam de mais estabilidade, organização e proteção no ambiente
          tecnológico.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-14 sm:px-6 md:px-10 md:pb-16">
        <div className="space-y-6 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          <p>
            A Astreon Tech nasceu com o objetivo de ajudar empresas a terem mais
            controle, segurança e eficiência em seus ambientes de tecnologia.
          </p>

          <p>
            Na prática, muitos negócios enfrentam problemas como lentidão,
            falhas constantes, falta de organização na infraestrutura e riscos
            relacionados à segurança da informação.
          </p>

          <p>
            Nosso trabalho é atuar diretamente nesses pontos com uma abordagem
            prática e consultiva, trazendo soluções que realmente fazem
            diferença no dia a dia da operação.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Diferenciais
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
              Por que escolher a Astreon Tech?
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/70 p-6"
              >
                <h3 className="font-semibold text-cyan-400">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Ideal para
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
              Empresas que precisam de apoio técnico com mais estratégia
            </h2>

            <div className="mt-6 grid gap-4">
              {idealFor.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-sm leading-7 text-slate-200 sm:text-base">
                    A Astreon Tech é ideal para {item}.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Atuação
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
              Áreas em que podemos apoiar sua empresa
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {actingAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
                >
                  <p className="font-medium text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-cyan-500/10">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-6 md:px-10 md:py-20">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Nosso foco é simples: fazer a TI da sua empresa funcionar de verdade
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            A tecnologia deve apoiar o crescimento do negócio, e não se tornar
            uma fonte constante de problema. A Astreon Tech trabalha para ajudar
            empresas a terem um ambiente mais organizado, seguro e preparado
            para a rotina operacional.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-cyan-500 px-8 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 sm:text-base"
            >
              Falar no WhatsApp
            </a>

            <Link
              href="/contato"
              className="rounded-2xl border border-white/20 px-8 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
            >
              Ir para contato
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}