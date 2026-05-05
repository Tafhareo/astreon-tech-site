import FadeIn from "@/components/FadeIn";

export default function Servicos() {
  const whatsappBase = "https://wa.me/551132302090?text=";

  const services = [
    {
      title: "Suporte de TI",
      problem: "Sua equipe enfrenta lentidão, erros ou paradas frequentes nos sistemas?",
      solution: "Atuamos na resolução rápida de problemas, suporte aos usuários e manutenção do ambiente para garantir estabilidade e produtividade no dia a dia.",
      icon: "🖥️",
    },
    {
      title: "Infraestrutura de TI",
      problem: "Sua empresa não tem uma estrutura organizada ou sofre com instabilidade?",
      solution: "Implantamos e organizamos redes, servidores e a base de TI para garantir desempenho, segurança e continuidade operacional.",
      icon: "🏗️",
    },
    {
      title: "Segurança da Informação",
      problem: "Preocupado com vazamento de dados, acessos indevidos ou falhas de segurança?",
      solution: "Aplicamos boas práticas, controles e ajustes no ambiente para reduzir riscos, reforçar a proteção e melhorar a segurança da operação.",
      icon: "🔒",
    },
    {
      title: "Redes e Firewall",
      problem: "Sua rede é lenta, instável ou não possui controle adequado de acessos?",
      solution: "Configuramos e otimizamos redes e firewall para melhorar desempenho, proteção perimetral e controle do ambiente.",
      icon: "🌐",
    },
    {
      title: "VICIdial e Telefonia",
      problem: "Seu call center apresenta falhas, quedas ou baixa performance operacional?",
      solution: "Implantamos, ajustamos e mantemos ambientes de discagem e telefonia para garantir uma operação mais estável e eficiente.",
      icon: "📞",
    },
    {
      title: "Consultoria e Projetos",
      problem: "Não sabe por onde começar para melhorar a TI da sua empresa?",
      solution: "Analisamos o cenário atual, priorizamos melhorias e indicamos um plano de ação prático para evolução do ambiente.",
      icon: "📋",
    },
    {
      title: "Redução de Custos de TI",
      problem: "Sua empresa gasta mais do que deveria com tecnologia sem saber onde estão os desperdícios?",
      solution: "Mapeamos contratos, licenças, infraestrutura e fornecedores para identificar desperdícios e propor reduções reais no custo operacional de TI — sem abrir mão da qualidade.",
      icon: "💰",
    },
    {
      title: "Adequação à LGPD e Políticas Internas",
      problem: "Sua empresa ainda não tem políticas claras de segurança e privacidade de dados?",
      solution: "Criamos e implementamos políticas internas de segurança da informação, controles de acesso e adequação à LGPD, protegendo sua empresa de riscos legais e vazamentos de dados.",
      icon: "📄",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Entendimento do cenário",
      desc: "Conversamos para entender a necessidade, os problemas atuais e o impacto na operação da empresa.",
    },
    {
      number: "2",
      title: "Diagnóstico inicial",
      desc: "Avaliamos o cenário e identificamos os principais pontos de atenção, risco ou melhoria.",
    },
    {
      number: "3",
      title: "Recomendação",
      desc: "Indicamos o melhor caminho para correção, estruturação ou evolução do ambiente.",
    },
    {
      number: "4",
      title: "Execução ou suporte",
      desc: "Seguimos com a implementação, ajustes ou apoio técnico conforme a necessidade do negócio.",
    },
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-24">
          <FadeIn>
            <span className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
              Serviços
            </span>
            <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Serviços de TI pensados para resolver problemas reais da sua empresa
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Atuamos diretamente nos pontos críticos da operação para melhorar desempenho, reduzir falhas e aumentar a segurança do ambiente tecnológico.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Serviços */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
        <FadeIn>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/20"
              >
                <div className="mb-4 text-3xl">{service.icon}</div>
                <h2 className="text-lg font-bold text-white">{service.title}</h2>

                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl border border-red-400/10 bg-red-400/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-red-400">Problema</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{service.problem}</p>
                  </div>
                  <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Solução</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{service.solution}</p>
                  </div>
                </div>

                <a
                  href={`${whatsappBase}${encodeURIComponent(
                    `Olá, vi no site o serviço de ${service.title} e quero entender como a Astreon Tech pode me ajudar.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  Falar sobre este serviço →
                </a>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Como funciona */}
      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
          <FadeIn>
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Como funciona
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
                Um processo simples, claro e objetivo
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Trabalhamos de forma prática para entender a necessidade da sua empresa, orientar o melhor caminho e apoiar a execução.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-3xl border border-white/10 bg-slate-900/70 p-6"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/20 text-lg font-bold text-cyan-300">
                    {step.number}
                  </div>
                  <h3 className="text-base font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-cyan-500/10">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
          <FadeIn>
            <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-6 text-center sm:p-8 md:p-10">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                Sua empresa não precisa continuar enfrentando problemas de TI
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                Quanto antes você agir, menor o impacto na operação. Solicite um diagnóstico e entenda exatamente o que pode ser melhorado.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="https://wa.me/551132302090?text=Ol%C3%A1%2C%20vi%20os%20servi%C3%A7os%20da%20Astreon%20Tech%20e%20quero%20entender%20como%20podem%20me%20ajudar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-2xl bg-cyan-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Falar no WhatsApp
                </a>
                <a
                  href="/contato"
                  className="inline-block rounded-2xl border border-cyan-400 px-6 py-3 text-center text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
                >
                  Solicitar diagnóstico
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
