import FadeIn from "@/components/FadeIn";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  const whatsappDiagnostico =
    "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Astreon%20Tech%20e%20quero%20solicitar%20um%20diagn%C3%B3stico%20de%20TI.";

  const whatsappDemo =
    "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Astreon%20Tech%20e%20quero%20solicitar%20uma%20demonstra%C3%A7%C3%A3o%20da%20Central%20de%20Atendimento%20Omnichannel.";

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
      href: "/servicos",
      cta: "Ver serviços",
      featured: false,
    },
    {
      eyebrow: "Segurança",
      title: "Proteção para dados e acessos",
      description:
        "Boas práticas de segurança da informação para reduzir riscos, fortalecer controles e proteger sua operação.",
      href: "/servicos",
      cta: "Ver serviços",
      featured: false,
    },
    {
      eyebrow: "Serviços gerenciados",
      title: "Suporte e sustentação contínua",
      description:
        "Acompanhamento técnico próximo para manter sua empresa funcionando com estabilidade, performance e previsibilidade.",
      href: "/contato",
      cta: "Falar com especialista",
      featured: false,
    },
  ];

  const omnichannelBenefits = [
    "Múltiplos atendentes no mesmo número",
    "Filas por setor: comercial, suporte e financeiro",
    "Histórico centralizado das conversas",
    "Automações e respostas rápidas",
    "Painel gerencial com indicadores",
    "Sem cobrança por mensagem enviada ou recebida",
  ];

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

  const testimonials = [
    {
      name: "Tamara Estrela",
      text: "A empresa foi excepcional na montagem da nossa infraestrutura e configuração de redes, garantindo proteção total com firewalls robustos e máxima estabilidade operacional.",
    },
    {
      name: "Alberto Junior",
      text: "A Astreon Tech elevou nossa operação com VICIdial e Telefonia estáveis, além de uma consultoria estratégica que realmente fez diferença.",
    },
    {
      name: "Kleber Conforte",
      text: "Empresa nota 1000, melhor empresa de TI disparada que já contratei. Extremamente educados e muito competentes.",
    },
    {
      name: "Eliete Maria Ferraz",
      text: "Atendimento maravilhoso, empresa nota 10.",
    },
    {
      name: "Lucivane Lira",
      text: "Melhor atendimento, serviço de qualidade.",
    },
    {
      name: "Jarrid Lima",
      text: "Muito experiente e confiável.",
    },
  ];

  return (
    <main className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.22),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.16),transparent_32%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 md:px-10 md:py-24 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
              Astreon Tech
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Tecnologia que conecta, protege e impulsiona empresas.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Infraestrutura, Segurança da Informação e uma Central de
              Atendimento Omnichannel para empresas que precisam de controle,
              estabilidade e suporte especializado.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#solucoes"
                className="rounded-2xl bg-cyan-500 px-7 py-3 text-center font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
              >
                Conhecer soluções
              </a>

              <a
                href={whatsappDiagnostico}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/20 px-7 py-3 text-center font-semibold text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
              >
                Solicitar diagnóstico
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-xs font-medium text-slate-400">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Infraestrutura
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Segurança
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Comunicação Omnichannel
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Suporte contínuo
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/80 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950 p-5">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Painel Astreon
                    </p>
                    <p className="text-xs text-slate-400">
                      Operação monitorada em tempo real
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Online
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    ["18", "em atendimento"],
                    ["1m42s", "tempo médio"],
                    ["147", "finalizados hoje"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <p className="text-2xl font-bold text-cyan-300">
                        {value}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    ["Comercial", "12 conversas na fila"],
                    ["Suporte", "8 atendimentos ativos"],
                    ["Financeiro", "5 retornos pendentes"],
                  ].map(([team, status]) => (
                    <div
                      key={team}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {team}
                        </p>
                        <p className="text-xs text-slate-400">{status}</p>
                      </div>
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

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

            <div className="grid gap-6 lg:grid-cols-4">
              {solutions.map((solution) => (
                <a
                  key={solution.title}
                  href={solution.href}
                  className={`group rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-2xl ${
                    solution.featured
                      ? "border-cyan-400/30 bg-cyan-500/10 shadow-cyan-950/30"
                      : "border-white/10 bg-slate-900/70 shadow-black/20"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    {solution.eyebrow}
                  </p>
                  <h3 className="mt-4 text-xl font-bold text-white">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
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

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.14),transparent_42%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
              Produto em destaque
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Central de Atendimento Omnichannel Astreon.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Pare de perder clientes no WhatsApp pessoal do vendedor.
              Centralize conversas, distribua atendimentos por fila, preserve o
              histórico e acompanhe indicadores da operação em tempo real.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/omnichannel"
                className="rounded-2xl bg-cyan-500 px-7 py-3 text-center font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
              >
                Conhecer a solução
              </a>

              <a
                href={whatsappDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/20 px-7 py-3 text-center font-semibold text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
              >
                Solicitar demonstração
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/30">
              <div className="grid gap-4 sm:grid-cols-2">
                {omnichannelBenefits.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="mb-4 h-2 w-2 rounded-full bg-cyan-400" />
                    <p className="text-sm font-medium leading-6 text-slate-200">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
          <FadeIn>
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Antes e depois
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                O atendimento deixa de depender de pessoas isoladas e passa a
                pertencer à empresa.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-red-400/20 bg-red-500/5 p-6">
                <h3 className="text-xl font-bold text-red-200">Antes</h3>
                <div className="mt-6 space-y-4 text-sm text-slate-300">
                  {[
                    "Cada vendedor atende pelo próprio WhatsApp.",
                    "O histórico fica perdido no celular do colaborador.",
                    "A gestão não sabe quantos clientes foram atendidos.",
                    "Não existe fila, prioridade ou padrão de resposta.",
                  ].map((item) => (
                    <p key={item}>✕ {item}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-emerald-400/20 bg-emerald-500/5 p-6">
                <h3 className="text-xl font-bold text-emerald-200">Depois</h3>
                <div className="mt-6 space-y-4 text-sm text-slate-300">
                  {[
                    "A empresa atende por uma central profissional.",
                    "O histórico permanece mesmo com troca de colaborador.",
                    "Filas e setores organizam o fluxo de atendimento.",
                    "Indicadores ajudam a acompanhar produtividade e qualidade.",
                  ].map((item) => (
                    <p key={item}>✓ {item}</p>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

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
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <StatsSection />

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
          <FadeIn>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Processo de implantação
                </p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Não entregamos apenas acesso. Entregamos a solução funcionando.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
                  Cada projeto começa com diagnóstico, passa por implantação
                  orientada e segue com acompanhamento técnico para manter a
                  operação estável.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  "Diagnóstico do cenário atual",
                  "Planejamento da solução ideal",
                  "Implantação e configuração",
                  "Treinamento da equipe",
                  "Suporte e evolução contínua",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5"
                  >
                    <span className="text-sm font-bold text-cyan-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-medium text-slate-100">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
          <FadeIn>
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Prova social
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Clientes que já confiaram na Astreon Tech.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
                Avaliações reais de clientes que já contaram com a Astreon para
                melhorar infraestrutura, atendimento e operação.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-3xl border border-white/10 bg-slate-900/70 p-6"
                >
                  <div className="text-sm text-yellow-300">★★★★★</div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="text-sm font-semibold text-cyan-300">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      Cliente Astreon Tech
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-cyan-500/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
          <FadeIn>
            <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/90 p-8 text-center shadow-2xl shadow-cyan-950/30 md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Vamos conversar?
              </p>
              <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-bold sm:text-4xl md:text-5xl">
                Transforme tecnologia em estabilidade, segurança e crescimento.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Fale com a Astreon Tech e entenda como organizar sua
                infraestrutura, proteger sua empresa e profissionalizar o
                atendimento ao cliente.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href={whatsappDiagnostico}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-cyan-500 px-8 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Solicitar diagnóstico
                </a>

                <a
                  href="/omnichannel"
                  className="rounded-2xl border border-white/20 px-8 py-3 text-center font-semibold text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
                >
                  Conhecer Central Omnichannel
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
