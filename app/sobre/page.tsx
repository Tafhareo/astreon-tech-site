import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const pilares = [
  {
    title: "Estabilidade",
    desc: "Ambientes mais confiáveis, organizados e preparados para sustentar a operação no dia a dia com mais previsibilidade.",
  },
  {
    title: "Proteção",
    desc: "Redução de riscos, fortalecimento de controles e maior segurança para o ambiente digital e para os processos da empresa.",
  },
  {
    title: "Eficiência",
    desc: "Soluções práticas com foco em resultado, desempenho e melhor custo-benefício para a realidade do negócio.",
  },
];

const blocos = [
  {
    title: "Quem somos",
    desc: "A Astreon Tech nasceu com o propósito de apoiar empresas por meio de soluções em tecnologia que combinem organização, segurança e eficiência operacional. Atuamos com uma visão prática e consultiva para transformar a tecnologia em suporte real ao negócio.",
  },
  {
    title: "Nossa proposta",
    desc: "Trabalhamos para que a infraestrutura, o suporte técnico e a segurança da informação deixem de ser apenas demandas operacionais e passem a contribuir para a continuidade, estabilidade e evolução da empresa.",
  },
  {
    title: "Forma de atuação",
    desc: "Unimos atendimento técnico, postura consultiva e foco em melhoria contínua, respeitando o porte, a maturidade e a necessidade de cada cliente. Cada ambiente é analisado de forma individual para que a solução seja realmente adequada ao cenário.",
  },
];

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0b1220] to-[#0f172a] text-white">
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <FadeIn>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Sobre
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Tecnologia com foco em resultado, segurança e eficiência
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              A Astreon Tech atua com suporte de TI, infraestrutura,
              cibersegurança e soluções especializadas para empresas que
              precisam de ambientes mais organizados, seguros e preparados para
              crescer com mais estabilidade.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {pilares.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg">
                <h2 className="text-2xl font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <FadeIn>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Como atuamos
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Visão técnica com postura consultiva
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                Nossa atuação busca unir conhecimento técnico, organização e
                estratégia para entregar soluções sustentáveis, alinhadas à
                realidade operacional de cada empresa.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-8">
            {blocos.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg">
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-300">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-12 text-center backdrop-blur-sm md:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Fale com a Astreon Tech
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Vamos entender o que sua empresa precisa
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Entre em contato para conversar sobre suporte técnico,
              infraestrutura, segurança da informação e melhorias para o seu
              ambiente corporativo.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
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
                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-cyan-600"
              >
                Ir para contato
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}