import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section
        className="relative min-h-[720px] overflow-hidden text-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(2,6,23,0.90), rgba(2,6,23,0.78), rgba(15,23,42,0.35)), url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-20">
          <FadeIn>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Astreon Tech
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
                Suporte de TI, Cibersegurança e Infraestrutura para empresas
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Soluções em suporte técnico, consultoria, redes, firewall,
                servidores, segurança da informação e implantação de discadoras
                como VICIdial para empresas que precisam de estabilidade,
                proteção e eficiência operacional.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/551132302090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-[1.02] hover:bg-cyan-400"
                >
                  Solicitar atendimento
                </a>

                <Link
                  href="/servicos"
                  className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-white/10"
                >
                  Ver serviços
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <FadeIn>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                ["Suporte", "Atendimento técnico consultivo"],
                ["Segurança", "Proteção e redução de riscos"],
                ["Estrutura", "Redes, servidores, firewall e VPN"],
                ["Eficiência", "Melhor custo-benefício operacional"],
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex h-full flex-col justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
                >
                  <p className="text-2xl font-bold text-slate-900">{item[0]}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item[1]}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Serviços
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Soluções completas em tecnologia
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Atuamos com suporte técnico, infraestrutura, segurança da
              informação e implantação de discadoras corporativas para melhorar a
              eficiência tecnológica das empresas.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: "🖥️",
              title: "Suporte de TI",
              desc: "Atendimento técnico para usuários, computadores, impressoras, redes corporativas e suporte remoto para resolução rápida de incidentes.",
            },
            {
              icon: "🌐",
              title: "Infraestrutura de TI",
              desc: "Implantação e organização de redes, servidores, firewall, VPN e conectividade para garantir estabilidade e performance do ambiente corporativo.",
            },
            {
              icon: "🔐",
              title: "Segurança da Informação",
              desc: "Proteção do ambiente tecnológico com análise de riscos, revisão de acessos, políticas de segurança e fortalecimento da proteção contra ameaças digitais.",
            },
            {
              icon: "📞",
              title: "Discadora VICIdial",
              desc: "Implantação, configuração e suporte para discadoras baseadas em VICIdial, oferecendo alta eficiência operacional com excelente custo-benefício.",
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-full flex-col">
                  <div className="text-3xl">{item.icon}</div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                Segmentos atendidos
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Soluções para diferentes tipos de operação
              </h2>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Pequenas e médias empresas",
              "Operações de atendimento e cobrança",
              "Escritórios e empresas administrativas",
              "Empresas que precisam de suporte recorrente",
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-full items-center justify-center text-center">
                    <p className="text-lg font-semibold text-slate-900">
                      {item}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Como trabalhamos
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Diagnóstico, implementação e acompanhamento
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Diagnóstico",
              desc: "Entendimento do cenário atual, dos riscos, falhas e oportunidades de melhoria no ambiente.",
            },
            {
              title: "Implementação",
              desc: "Aplicação das correções, melhorias e soluções necessárias com foco em resultado e estabilidade.",
            },
            {
              title: "Acompanhamento",
              desc: "Suporte contínuo, orientação e evolução do ambiente conforme a realidade do negócio.",
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-full flex-col">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                Diferenciais
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Por que escolher a Astreon Tech
              </h2>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Atendimento consultivo",
                desc: "Não entregamos apenas suporte. Ajudamos sua empresa a tomar decisões melhores em tecnologia, com foco em resultado e continuidade operacional.",
              },
              {
                title: "Foco em segurança",
                desc: "Nossa atuação busca reduzir riscos, fortalecer controles e melhorar a proteção do ambiente corporativo.",
              },
              {
                title: "Soluções sob medida",
                desc: "Cada empresa possui uma realidade. Trabalhamos conforme a necessidade, o porte e a maturidade do negócio.",
              },
              {
                title: "Melhor custo-benefício",
                desc: "Buscamos soluções eficientes e viáveis, inclusive em cenários de telefonia e discagem, priorizando desempenho, economia e sustentabilidade operacional.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-full flex-col">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <FadeIn>
          <div className="rounded-3xl bg-slate-950 px-8 py-14 text-white md:px-14">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Fale com a Astreon Tech
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                  Precisa de suporte de TI confiável para sua empresa?
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-300">
                  Entre em contato para solicitar atendimento, orçamento ou uma
                  conversa inicial sobre o seu ambiente.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 md:justify-end">
                <a
                  href="https://wa.me/551132302090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-green-700"
                >
                  Chamar no WhatsApp
                </a>

                <Link
                  href="/contato"
                  className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-white/10"
                >
                  Ir para contato
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}