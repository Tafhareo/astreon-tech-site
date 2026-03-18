import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020617] to-[#0f172a] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <FadeIn>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Serviços
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold md:text-5xl">
              Soluções completas em tecnologia para empresas
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Atuamos com suporte técnico, infraestrutura, segurança da
              informação e soluções de discagem com foco em estabilidade,
              proteção e eficiência operacional.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              icon: "🖥️",
              title: "Suporte de TI",
              desc: "Atendimento técnico para usuários, estações de trabalho, sistemas, acessos e suporte remoto para o dia a dia da operação.",
            },
            {
              icon: "🌐",
              title: "Infraestrutura",
              desc: "Redes, servidores, firewall, VPN e organização do ambiente tecnológico para melhorar estabilidade e performance.",
            },
            {
              icon: "🔐",
              title: "Segurança da Informação",
              desc: "Proteção do ambiente, revisão de acessos, análise de riscos e fortalecimento dos controles de segurança.",
            },
            {
              icon: "📞",
              title: "Discadora / VICIdial",
              desc: "Implantação, configuração, suporte e consultoria com foco em eficiência operacional e melhor custo-benefício.",
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg">
                <div className="flex h-full flex-col">
                  <div className="text-3xl">{item.icon}</div>
                  <h2 className="mt-4 text-2xl font-semibold">{item.title}</h2>
                  <p className="mt-3 text-base leading-7 text-slate-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Como atuamos
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Tecnologia alinhada ao seu negócio
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-300">
                Nosso trabalho combina visão técnica e consultiva para entregar
                ambientes mais seguros, organizados e sustentáveis.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Diagnóstico",
                desc: "Entendemos o cenário atual, riscos, falhas e necessidades do ambiente.",
              },
              {
                title: "Implementação",
                desc: "Executamos as melhorias e correções com foco em resultado e estabilidade.",
              },
              {
                title: "Acompanhamento",
                desc: "Oferecemos suporte contínuo e evolução do ambiente conforme a realidade da empresa.",
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

          <div className="mt-12 text-center">
            <FadeIn delay={0.1}>
              <Link
                href="/contato"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-cyan-600"
              >
                Solicitar atendimento
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}