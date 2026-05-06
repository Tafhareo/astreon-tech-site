import FadeIn from "@/components/FadeIn";

export default function Sobre() {
  const whatsappLink =
    "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20Sobre%20da%20Astreon%20Tech%20e%20quero%20entender%20como%20voc%C3%AAs%20podem%20me%20ajudar.";

  return (
    <main className="bg-slate-950 text-white">

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-24">
          <FadeIn>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                  Sobre
                </span>
                <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                  10 anos resolvendo problemas reais de TI em empresas de verdade
                </h1>
                <p className="mt-6 text-base leading-7 text-slate-300 sm:text-lg">
                  Meu nome é <strong className="text-white">Tafhareo Estrela</strong>. Sou especialista em infraestrutura de TI, segurança da informação e operações corporativas. Ao longo de uma década atuando em empresas de diferentes segmentos, acumulei experiência prática nos pontos que mais impactam o dia a dia de um negócio.
                </p>
                <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
                  A Astreon Tech nasceu para transformar esse conhecimento em resultado para empresas que dependem de tecnologia para operar — e que não podem se dar ao luxo de ter falhas, lentidão ou vulnerabilidades no ambiente de TI.
                </p>
                <div className="mt-8">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full rounded-2xl bg-cyan-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400 sm:w-auto"
                  >
                    Falar com o especialista
                  </a>
                </div>
              </div>

              {/* Avatar profissional */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative flex h-56 w-56 items-center justify-center rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl shadow-black/40 sm:h-64 sm:w-64">
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-500/20 text-5xl">
                      👨‍💻
                    </div>
                    <div className="text-center">
                      <p className="text-base font-bold text-white">Tafhareo Estrela</p>
                      <p className="text-xs text-cyan-300">Especialista em TI & Segurança</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-3 -right-3 rounded-xl border border-white/10 bg-slate-800 px-3 py-1.5 text-xs font-semibold text-cyan-300">
                    10+ anos de experiência
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trajetória */}
      <section className="border-b border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
          <FadeIn>
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Trajetória
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
                Uma década de experiência em campo
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "🖥️",
                  title: "Infraestrutura & Servidores",
                  desc: "Implantação, organização e gestão de ambientes de servidores físicos e em nuvem em empresas de médio e grande porte.",
                },
                {
                  icon: "🔒",
                  title: "Segurança da Informação",
                  desc: "Criação de políticas internas, controles de acesso, firewall e adequação à LGPD em diferentes segmentos de negócio.",
                },
                {
                  icon: "📞",
                  title: "Telefonia & VICIdial",
                  desc: "Implantação e suporte de discadoras opensource e ambientes de call center com foco em estabilidade e performance.",
                },
                {
                  icon: "☁️",
                  title: "Cloud & Redes",
                  desc: "Migração e gestão de ambientes em nuvem, configuração de redes corporativas e proteção perimetral.",
                },
                {
                  icon: "💰",
                  title: "Redução de Custos",
                  desc: "Identificação de desperdícios e otimização de contratos e infraestrutura para reduzir o custo operacional de TI.",
                },
                {
                  icon: "🏢",
                  title: "Múltiplos Segmentos",
                  desc: "Atuação em empresas de crédito, call centers, clínicas, escritórios e comércio — cada realidade com sua solução.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/20"
                >
                  <div className="mb-3 text-3xl">{item.icon}</div>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
          <FadeIn>
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Por que a Astreon Tech
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
                O que diferencia nosso trabalho
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Experiência prática, não teórica",
                  desc: "Cada solução é baseada em situações reais enfrentadas ao longo de 10 anos em ambientes corporativos — não em manuais.",
                },
                {
                  title: "Atendimento direto com o especialista",
                  desc: "Você fala diretamente com quem vai resolver o problema. Sem intermediários, sem terceirizações surpresa.",
                },
                {
                  title: "Foco no impacto no negócio",
                  desc: "O objetivo não é apenas resolver o problema técnico, mas eliminar o impacto que ele causa na operação e nos resultados da empresa.",
                },
                {
                  title: "Visão além da TI",
                  desc: "Com experiência em retenção de custos e múltiplos segmentos, entendo o negócio do cliente e não só a infraestrutura.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="mb-2 h-1 w-10 rounded-full bg-cyan-400" />
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.desc}</p>
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
                Vamos conversar sobre a TI da sua empresa?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Solicite um diagnóstico inicial sem compromisso e entenda o que pode ser melhorado no seu ambiente de TI.
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
