import FadeIn from "@/components/FadeIn";

export default function Servicos() {
  const whatsappBase = "https://wa.me/551132302090";

  const services = [
    {
      title: "Suporte de TI",
      problem:
        "Sua equipe enfrenta lentidão, erros ou paradas frequentes?",
      solution:
        "Atuamos na resolução rápida de falhas, suporte aos usuários e estabilização do ambiente para manter a operação funcionando.",
    },
    {
      title: "Infraestrutura de TI",
      problem:
        "Sua empresa não tem uma estrutura organizada ou sofre com instabilidade?",
      solution:
        "Implantamos e organizamos redes, servidores e base de TI para garantir desempenho e continuidade.",
    },
    {
      title: "Segurança da Informação",
      problem:
        "Preocupado com vazamento de dados ou acessos indevidos?",
      solution:
        "Aplicamos controles e boas práticas para reduzir riscos e aumentar a proteção do ambiente.",
    },
    {
      title: "Redes e Firewall",
      problem:
        "Sua rede é lenta ou sem controle adequado?",
      solution:
        "Configuramos e otimizamos redes e firewall para melhorar desempenho e segurança.",
    },
    {
      title: "VICIdial e Telefonia",
      problem:
        "Seu call center sofre com falhas ou baixa performance?",
      solution:
        "Ajustamos e mantemos ambientes de discagem para garantir operação estável e eficiente.",
    },
    {
      title: "Consultoria e Projetos",
      problem:
        "Não sabe por onde começar na TI da sua empresa?",
      solution:
        "Analisamos o cenário e indicamos um plano claro para evolução do ambiente.",
    },
  ];

  const steps = [
    {
      title: "1. Entendimento",
      description:
        "Identificamos os principais problemas e impactos na operação.",
    },
    {
      title: "2. Diagnóstico",
      description:
        "Mapeamos falhas, riscos e pontos de melhoria.",
    },
    {
      title: "3. Direcionamento",
      description:
        "Indicamos o melhor caminho para correção.",
    },
    {
      title: "4. Execução",
      description:
        "Aplicamos melhorias ou suporte contínuo.",
    },
  ];

  return (
    <main className="bg-slate-950 text-white">
      
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-6 md:px-10 md:py-20">
        <FadeIn>
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Serviços de TI focados em resolver problemas reais
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            Atuamos diretamente nos pontos críticos da operação para reduzir falhas,
            melhorar desempenho e aumentar a estabilidade da sua empresa.
          </p>

          <a
            href={`${whatsappBase}?text=Olá,%20vim%20pelo%20site%20e%20quero%20um%20diagnóstico%20de%20TI`}
            target="_blank"
            className="mt-8 inline-block rounded-2xl bg-cyan-500 px-8 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Solicitar diagnóstico no WhatsApp
          </a>
        </FadeIn>
      </section>

      {/* SERVIÇOS */}
      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-6 md:px-10 md:pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8"
            >
              <h2 className="text-2xl font-semibold text-cyan-400">
                {service.title}
              </h2>

              <p className="mt-4 text-sm text-slate-300">
                <strong className="text-white">Problema:</strong>{" "}
                {service.problem}
              </p>

              <p className="mt-3 flex-1 text-sm text-slate-300">
                <strong className="text-white">Solução:</strong>{" "}
                {service.solution}
              </p>

              <a
                href={`${whatsappBase}?text=${encodeURIComponent(
                  `Olá, preciso de ajuda com ${service.title}`
                )}`}
                target="_blank"
                className="mt-6 inline-block rounded-xl bg-cyan-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-cyan-400"
              >
                Falar sobre este serviço
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESSO */}
      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Como funciona
              </h2>
              <p className="mt-4 text-slate-300">
                Um processo simples para resolver problemas de TI rapidamente.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-slate-900/70 p-6"
                >
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-cyan-500/10">
        <div className="mx-auto max-w-5xl px-5 py-14 text-center sm:px-6 md:px-10 md:py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Pare de perder tempo com problemas de TI
          </h2>

          <p className="mt-4 text-slate-300">
            Solicite um diagnóstico e entenda como melhorar sua operação.
          </p>

          <a
            href={`${whatsappBase}?text=Olá,%20quero%20resolver%20problemas%20de%20TI`}
            target="_blank"
            className="mt-8 inline-block rounded-2xl bg-cyan-500 px-8 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Solicitar diagnóstico no WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}