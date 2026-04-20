import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const servicos = [
  {
    icon: "🖥️",
    title: "Suporte de TI",
    desc: "Atendimento técnico para usuários, computadores, impressoras, sistemas, acessos e suporte remoto para manter a operação funcionando com rapidez e estabilidade.",
  },
  {
    icon: "🌐",
    title: "Infraestrutura de TI",
    desc: "Implantação e organização de redes, servidores, firewall, VPN e conectividade corporativa para aumentar estabilidade, desempenho e controle do ambiente.",
  },
  {
    icon: "🔐",
    title: "Segurança da Informação",
    desc: "Revisão de acessos, análise de riscos, fortalecimento de controles e melhoria da proteção do ambiente contra ameaças e falhas operacionais.",
  },
  {
    icon: "📞",
    title: "Discadora / VICIdial",
    desc: "Implantação, configuração, suporte e consultoria em discadoras corporativas com foco em eficiência operacional, estabilidade e melhor custo-benefício.",
  },
];

const etapas = [
  {
    title: "Diagnóstico",
    desc: "Entendemos o cenário atual, os riscos, as falhas e as oportunidades de melhoria para definir a melhor abordagem.",
  },
  {
    title: "Implementação",
    desc: "Executamos as melhorias necessárias com foco em resultado, organização e continuidade operacional.",
  },
  {
    title: "Acompanhamento",
    desc: "Mantemos suporte, orientação e evolução do ambiente de acordo com a necessidade e a realidade do negócio.",
  },
];

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0b1220] to-[#0f172a] text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <FadeIn>
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Serviços
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Soluções completas em tecnologia para empresas
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Atuamos com suporte técnico, infraestrutura, segurança da
              informação e soluções de discagem para empresas que precisam de
              estabilidade, proteção e eficiência operacional.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {servicos.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg">
                <div className="text-3xl">{item.icon}</div>

                <h2 className="mt-4 text-2xl font-semibold text-white">
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
        <div className="mx-auto max-w-7xl px-6 py-24">
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
                ambientes mais organizados, seguros e sustentáveis para a sua
                operação.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {etapas.map((item, i) => (
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

      <section className="mx-auto max-w-7xl px-6 py-24">
        <FadeIn>
          <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-12 text-center backdrop-blur-sm md:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Fale com a Astreon Tech
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Precisa de apoio em tecnologia para sua empresa?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Solicite atendimento e entenda como podemos apoiar sua operação
              com suporte técnico, infraestrutura, segurança da informação e
              soluções corporativas.
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
                Solicitar atendimento
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}