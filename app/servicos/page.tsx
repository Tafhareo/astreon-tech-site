import Link from "next/link";

export default function Servicos() {
  const whatsappBase = "https://wa.me/551132302090";
  const whatsappLink =
    "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vi%20os%20servi%C3%A7os%20da%20Astreon%20Tech%20e%20quero%20entender%20como%20podem%20me%20ajudar.";

  const services = [
    {
      title: "Suporte de TI",
      problem:
        "Sua equipe enfrenta lentidão, erros ou paradas frequentes nos sistemas?",
      solution:
        "Atuamos na resolução rápida de problemas, suporte aos usuários e manutenção do ambiente para garantir estabilidade e produtividade no dia a dia.",
    },
    {
      title: "Infraestrutura de TI",
      problem:
        "Sua empresa não tem uma estrutura organizada ou sofre com instabilidade?",
      solution:
        "Implantamos e organizamos redes, servidores e a base de TI para garantir desempenho, segurança e continuidade operacional.",
    },
    {
      title: "Segurança da Informação",
      problem:
        "Preocupado com vazamento de dados, acessos indevidos ou falhas de segurança?",
      solution:
        "Aplicamos boas práticas, controles e ajustes no ambiente para reduzir riscos, reforçar a proteção e melhorar a segurança da operação.",
    },
    {
      title: "Redes e Firewall",
      problem:
        "Sua rede é lenta, instável ou não possui controle adequado de acessos?",
      solution:
        "Configuramos e otimizamos redes e firewall para melhorar desempenho, proteção perimetral e controle do ambiente.",
    },
    {
      title: "VICIdial e Telefonia",
      problem:
        "Seu call center apresenta falhas, quedas ou baixa performance operacional?",
      solution:
        "Implantamos, ajustamos e mantemos ambientes de discagem e telefonia para garantir uma operação mais estável e eficiente.",
    },
    {
      title: "Consultoria e Projetos",
      problem:
        "Não sabe por onde começar para melhorar a TI da sua empresa?",
      solution:
        "Analisamos o cenário atual, priorizamos melhorias e indicamos um plano de ação prático para evolução do ambiente.",
    },
  ];

  const steps = [
    {
      title: "1. Entendimento do cenário",
      description:
        "Conversamos para entender a necessidade, os problemas atuais e o impacto na operação da empresa.",
    },
    {
      title: "2. Diagnóstico inicial",
      description:
        "Avaliamos o cenário e identificamos os principais pontos de atenção, risco ou melhoria.",
    },
    {
      title: "3. Recomendação",
      description:
        "Indicamos o melhor caminho para correção, estruturação ou evolução do ambiente.",
    },
    {
      title: "4. Execução ou suporte",
      description:
        "Seguimos com a implementação, ajustes ou apoio técnico conforme a necessidade do negócio.",
    },
  ];

  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-6 md:px-10 md:py-20">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Serviços de TI pensados para resolver problemas reais da sua empresa
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          Atuamos diretamente nos pontos críticos da operação para melhorar
          desempenho, reduzir falhas e aumentar a segurança do ambiente
          tecnológico.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-6 md:px-10 md:pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8"
            >
              <h2 className="text-2xl font-semibold text-cyan-400">
                {service.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                <strong className="text-white">Problema:</strong>{" "}
                {service.problem}
              </p>

              <p className="mt-3 flex-1 text-sm leading-7 text-slate-300 sm:text-base">
                <strong className="text-white">Solução:</strong>{" "}
                {service.solution}
              </p>

              <a
                href={`${whatsappBase}?text=${encodeURIComponent(
                  `Olá, vi no site o serviço de ${service.title} e quero entender como vocês podem me ajudar.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-xl bg-cyan-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 sm:text-base"
              >
                Falar sobre este serviço
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Como funciona
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
              Um processo simples, claro e objetivo
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
              Trabalhamos de forma prática para entender a necessidade da sua
              empresa, orientar o melhor caminho e apoiar a execução.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cyan-500/10">
        <div className="mx-auto max-w-5xl px-5 py-14 text-center sm:px-6 md:px-10 md:py-16">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Sua empresa não precisa continuar enfrentando problemas de TI
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            Quanto antes você agir, menor o impacto na operação. Solicite um
            diagnóstico e entenda exatamente o que pode ser melhorado.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <Link
              href="/contato"
              className="rounded-2xl bg-cyan-500 px-8 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 sm:text-base"
            >
              Solicitar diagnóstico
            </Link>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/20 px-8 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}