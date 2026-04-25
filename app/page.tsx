import FadeIn from "@/components/FadeIn";

export default function Home() {
  const whatsappLink =
    "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Astreon%20Tech%20e%20quero%20solicitar%20um%20diagn%C3%B3stico%20de%20TI.";

  const services = [
    {
      title: "Suporte de TI",
      description:
        "Atendimento técnico para empresas que precisam reduzir falhas, lentidão e interrupções na operação.",
    },
    {
      title: "Infraestrutura de TI",
      description:
        "Organização de redes, servidores, conectividade e ambiente corporativo para mais estabilidade.",
    },
    {
      title: "Segurança da Informação",
      description:
        "Apoio para reduzir riscos, melhorar controles e proteger dados, acessos e sistemas.",
    },
    {
      title: "Redes e Firewall",
      description:
        "Configuração e melhoria de redes, firewall, acessos e proteção perimetral.",
    },
    {
      title: "VICIdial e Telefonia",
      description:
        "Suporte para operações com discador, telefonia, call center e ambientes de atendimento.",
    },
    {
      title: "Consultoria e Projetos",
      description:
        "Diagnóstico, planejamento e execução de melhorias em TI com foco em resultado.",
    },
  ];

  const testimonials = [
    {
      name: "Melquisedec Paulo Santana",
      text: "Muito bom, pessoal profissional. Taffarel, sem palavras, muito bom trabalhar com o pessoal. Nota 10.",
    },
    {
      name: "Kleber Conforte",
      text: "Empresa nota 1000, melhor empresa de TI disparada que já contratei. Extremamente educados e muito competentes.",
    },
    {
      name: "Lucivane Lira",
      text: "Melhor atendimento, serviço de qualidade.",
    },
    {
      name: "Mércia Silva",
      text: "Serviço de qualidade, atendimento impecável e muita eficiência. Super recomendo!",
    },
    {
      name: "Bruna Estrela",
      text: "Melhor atendimento, excelência e eficácia sempre.",
    },
    {
      name: "Jarrid Lima",
      text: "Muito experiente e confiável.",
    },
  ];

  return (
    <main className="bg-slate-950 text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-24">
          <FadeIn>
            <div className="max-w-5xl">
              <span className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                Astreon Tech
              </span>

              <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Ajudamos empresas a evitar falhas, travamentos e problemas de TI
                que impactam a operação
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                Suporte de TI, infraestrutura, redes, segurança da informação e
                soluções para empresas que dependem de estabilidade para vender,
                atender clientes e manter a operação funcionando.
              </p>

              <div className="mt-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full rounded-2xl bg-cyan-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400 sm:w-auto"
                >
                  Solicitar diagnóstico no WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/5">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 sm:px-6 md:grid-cols-3 md:px-10">
          {[
            "Atendimento para pequenas e médias empresas",
            "Foco em estabilidade, segurança e produtividade",
            "Diagnóstico inicial para entender o cenário",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-sm font-medium text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
        <FadeIn>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Serviços
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
              Soluções para manter sua empresa funcionando com mais segurança
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
              Atuamos nos pontos que mais impactam o dia a dia da empresa:
              suporte, infraestrutura, segurança, redes, telefonia e projetos.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
              >
                <h3 className="text-lg font-semibold">{service.title}</h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">
                  {service.description}
                </p>

                <a
                  href={`https://wa.me/551132302090?text=${encodeURIComponent(
                    `Olá, vi no site o serviço de ${service.title} e quero entender como a Astreon Tech pode me ajudar.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  Falar sobre este serviço
                </a>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="overflow-hidden border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
          <FadeIn>
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Prova social
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
                O que dizem sobre nosso trabalho
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
                Avaliações reais do Google ajudam novos clientes a entenderem a
                qualidade, clareza e comprometimento da Astreon Tech.
              </p>
            </div>

            <div className="relative w-full overflow-hidden">
              <div className="flex w-max gap-6 testimonial-scroll">
                {[...testimonials, ...testimonials].map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex min-h-[260px] w-[300px] flex-shrink-0 flex-col rounded-3xl border border-white/10 bg-slate-900/70 p-6 sm:w-[360px]"
                  >
                    <div className="text-lg text-yellow-300">★★★★★</div>

                    <p className="mt-4 flex-1 whitespace-normal text-sm leading-7 text-slate-300">
                      “{item.text}”
                    </p>

                    <p className="mt-5 text-sm font-semibold text-cyan-300">
                      — {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full rounded-2xl border border-cyan-400 px-6 py-3 text-center text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10 sm:w-auto"
              >
                Também quero melhorar minha TI
              </a>
            </div>
          </FadeIn>
        </div>

        <style>{`
          .testimonial-scroll {
            animation: testimonial-scroll 35s linear infinite;
          }

          .testimonial-scroll:hover {
            animation-play-state: paused;
          }

          @keyframes testimonial-scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Ideal para
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
                Empresas que dependem de tecnologia para operar todos os dias
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
                Atendemos negócios que precisam de suporte confiável, ambiente
                estável e mais controle sobre infraestrutura e segurança.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Empresas de crédito e operações comerciais",
                "Call centers e operações com telefonia",
                "Escritórios, clínicas e empresas administrativas",
                "Pequenas e médias empresas em crescimento",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="font-medium text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-white/10 bg-cyan-500/10">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
          <FadeIn>
            <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-6 text-center sm:p-8 md:p-10">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                Sua empresa está enfrentando falhas, lentidão ou falta de
                organização na TI?
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                Solicite um diagnóstico inicial pelo WhatsApp e entenda quais
                pontos podem ser melhorados para aumentar estabilidade, segurança
                e produtividade.
              </p>

              <div className="mt-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full rounded-2xl bg-cyan-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400 sm:w-auto"
                >
                  Solicitar diagnóstico no WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}