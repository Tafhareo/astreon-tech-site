import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020617] to-[#0f172a] text-white">
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <FadeIn>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
              Sobre
            </p>

            <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Tecnologia com foco em resultado, segurança e eficiência
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              A Astreon Tech atua com suporte de TI, infraestrutura,
              cibersegurança e soluções especializadas para empresas que precisam
              de ambientes mais organizados, seguros e preparados para crescer.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Estabilidade",
              desc: "Ambientes mais confiáveis, organizados e preparados para o dia a dia da operação.",
            },
            {
              title: "Proteção",
              desc: "Redução de riscos, fortalecimento de controles e mais segurança para o ambiente digital.",
            },
            {
              title: "Eficiência",
              desc: "Soluções práticas com foco em resultado, desempenho e melhor custo-benefício.",
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg">
                <div className="flex h-full flex-col">
                  <h2 className="text-2xl font-semibold">{item.title}</h2>
                  <p className="mt-4 text-base leading-7 text-slate-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-white/5">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <FadeIn>
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
                Como atuamos
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Visão técnica com postura consultiva
              </h2>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-8">
            {[
              {
                title: "Nossa proposta",
                desc: "Trabalhamos para que a tecnologia seja uma aliada do negócio, apoiando empresas com soluções em suporte, infraestrutura, segurança e eficiência operacional.",
              },
              {
                title: "Forma de atuação",
                desc: "Unimos atendimento técnico, visão consultiva e foco em melhoria contínua, respeitando o porte, a maturidade e a realidade de cada empresa.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg">
                  <div className="flex h-full flex-col">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-4 text-base leading-8 text-slate-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="pb-20 pt-16 text-center">
        <FadeIn delay={0.1}>
          <Link
            href="/contato"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-cyan-600"
          >
            Falar com a Astreon Tech
          </Link>
        </FadeIn>
      </div>
    </main>
  );
}