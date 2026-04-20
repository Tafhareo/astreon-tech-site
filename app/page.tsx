import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section
        className="relative min-h-[720px] overflow-hidden text-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(2,6,23,0.90), rgba(2,6,23,0.78), rgba(15,23,42,0.35)), url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-24">
          <FadeIn>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Astreon Tech
              </p>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
                Suporte de TI, Cibersegurança e Infraestrutura para empresas
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Soluções em suporte técnico, redes, firewall, servidores e segurança da informação para empresas que precisam de estabilidade e proteção.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/551132302090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.03] hover:bg-cyan-400"
                >
                  Solicitar atendimento
                </a>

                <Link
                  href="/servicos"
                  className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:scale-[1.03] hover:bg-white/10"
                >
                  Ver serviços
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <FadeIn>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                ["Suporte", "Atendimento técnico consultivo"],
                ["Segurança", "Proteção e redução de riscos"],
                ["Estrutura", "Redes, servidores e firewall"],
                ["Eficiência", "Melhor custo-benefício"],
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex min-h-[140px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition hover:shadow-sm"
                >
                  <div>
                    <p className="text-xl font-bold text-slate-900">{item[0]}</p>
                    <p className="mt-2 text-sm text-slate-600">{item[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Serviços
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Soluções completas em tecnologia
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Atuamos com suporte técnico, infraestrutura e segurança da informação para melhorar a eficiência das empresas.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: "🖥️",
              title: "Suporte de TI",
              desc: "Atendimento técnico rápido e eficiente para usuários e infraestrutura.",
            },
            {
              icon: "🌐",
              title: "Infraestrutura",
              desc: "Implantação de redes, servidores e conectividade corporativa.",
            },
            {
              icon: "🔐",
              title: "Segurança",
              desc: "Proteção contra riscos e ameaças digitais.",
            },
            {
              icon: "📞",
              title: "VICIdial",
              desc: "Implantação de discadoras com alta eficiência operacional.",
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-md">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <FadeIn>
          <div className="rounded-3xl bg-slate-950 px-8 py-16 text-white md:px-14">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
                  Fale conosco
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  Precisa de suporte de TI confiável?
                </h2>

                <p className="mt-4 text-slate-300">
                  Entre em contato agora e vamos entender seu ambiente.
                </p>
              </div>

              <div className="flex gap-4 md:justify-end">
                <a
                  href="https://wa.me/551132302090"
                  target="_blank"
                  className="rounded-xl bg-green-600 px-6 py-3 font-semibold transition hover:bg-green-700"
                >
                  WhatsApp
                </a>

                <Link
                  href="/contato"
                  className="rounded-xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/10"
                >
                  Contato
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

    </main>
  );
}