import FadeIn from "@/components/FadeIn";

export default function Sobre() {
  const whatsappLink =
    "https://wa.me/551132302090?text=Olá,%20vim%20pela%20página%20Sobre%20e%20quero%20um%20diagnóstico%20de%20TI.";

  const highlights = [
    {
      title: "Experiência prática em ambientes reais",
      description:
        "Atuação direta em infraestrutura, redes, segurança, suporte e operações que exigem estabilidade contínua.",
    },
    {
      title: "Foco em resolver problemas de negócio",
      description:
        "Mais do que tecnologia, o objetivo é eliminar falhas que impactam produtividade, vendas e operação.",
    },
    {
      title: "Atendimento consultivo",
      description:
        "Cada empresa possui uma realidade diferente, por isso as soluções são direcionadas para o cenário específico.",
    },
    {
      title: "Compromisso com estabilidade",
      description:
        "Redução de falhas, melhoria de desempenho e segurança são prioridades em cada atuação.",
    },
  ];

  const idealFor = [
    "empresas que enfrentam lentidão ou falhas frequentes",
    "negócios que precisam organizar melhor sua TI",
    "operações que querem mais segurança e controle",
    "empresas que dependem da tecnologia para funcionar",
  ];

  return (
    <main className="bg-slate-950 text-white">
      
      {/* HERO */}
      <section className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-6 md:px-10 md:py-20">
        <FadeIn>
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Sobre a Astreon Tech
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base text-slate-300 sm:text-lg">
            Ajudamos empresas a evitar falhas, melhorar a infraestrutura e ter
            um ambiente de TI mais estável, seguro e preparado para o dia a dia.
          </p>
        </FadeIn>
      </section>

      {/* CONTEÚDO */}
      <section className="mx-auto max-w-5xl px-5 pb-14 sm:px-6 md:px-10 md:pb-16">
        <FadeIn>
          <div className="space-y-6 text-base text-slate-300 sm:text-lg">
            <p>
              A Astreon Tech nasceu com o objetivo de resolver um problema comum
              em muitas empresas: ambientes de TI desorganizados, instáveis e
              que impactam diretamente a operação.
            </p>

            <p>
              Na prática, isso se traduz em lentidão, falhas, interrupções,
              riscos de segurança e perda de produtividade.
            </p>

            <p>
              Nosso trabalho é atuar diretamente nesses pontos com uma abordagem
              prática e focada em resultado, trazendo melhorias reais para o
              funcionamento da empresa.
            </p>

            <p>
              Mais do que suporte técnico, entregamos organização, estabilidade
              e segurança para o ambiente de TI.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* DIFERENCIAIS */}
      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Por que escolher a Astreon Tech
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-6"
                >
                  <h3 className="text-cyan-400 font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* IDEAL PARA */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
        <FadeIn>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Ideal para empresas que precisam de suporte de verdade
            </h2>
          </div>

          <div className="mt-8 grid gap-4">
            {idealFor.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-sm text-slate-200">
                  A Astreon Tech é ideal para {item}.
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-white/10 bg-cyan-500/10">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-6 md:px-10 md:py-20">
          <FadeIn>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Se sua empresa enfrenta problemas de TI, é possível resolver
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-slate-300">
              Solicite um diagnóstico e entenda exatamente o que pode ser
              melhorado no seu ambiente.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              className="mt-8 inline-block rounded-2xl bg-cyan-500 px-8 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
            >
              Solicitar diagnóstico no WhatsApp
            </a>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}