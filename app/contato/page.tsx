import FadeIn from "@/components/FadeIn";

const canais = [
  {
    title: "WhatsApp",
    desc: "Fale conosco de forma rápida para solicitar atendimento, suporte ou orçamento.",
    value: "(11) 3230-2090",
    href: "https://wa.me/551132302090",
    cta: "Chamar no WhatsApp",
  },
  {
    title: "E-mail",
    desc: "Envie sua necessidade por e-mail para um contato mais formal e detalhado.",
    value: "contato@astreontech.com.br",
    href: "mailto:contato@astreontech.com.br",
    cta: "Enviar e-mail",
  },
  {
    title: "Atendimento",
    desc: "Atendimento remoto e presencial sob consulta, de acordo com a necessidade da empresa.",
    value: "Sob consulta",
    href: "https://wa.me/551132302090",
    cta: "Solicitar atendimento",
  },
];

const etapas = [
  {
    title: "1. Entendimento inicial",
    desc: "Você nos apresenta sua necessidade, dificuldade atual ou objetivo em tecnologia.",
  },
  {
    title: "2. Avaliação do cenário",
    desc: "Analisamos o contexto para entender a melhor forma de apoiar sua operação.",
  },
  {
    title: "3. Proposta de atendimento",
    desc: "Indicamos a abordagem mais adequada, com foco em organização, segurança e resultado.",
  },
];

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0b1220] to-[#0f172a] text-white">
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <FadeIn>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Contato
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Fale com a Astreon Tech
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Entre em contato para solicitar suporte, orçamento ou entender
              como podemos ajudar sua empresa com infraestrutura, segurança da
              informação, suporte técnico e soluções corporativas.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {canais.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg">
                <h2 className="text-2xl font-semibold text-white">
                  {item.title}
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-300">
                  {item.desc}
                </p>

                <p className="mt-5 text-base font-semibold text-cyan-400">
                  {item.value}
                </p>

                <div className="mt-6">
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-cyan-600"
                  >
                    {item.cta}
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Como funciona
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Um contato simples e objetivo
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-300">
                Nosso processo é direto: entendemos sua necessidade, avaliamos o
                cenário e indicamos a melhor forma de apoiar sua empresa.
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

      <section className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-12 text-center backdrop-blur-sm md:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Atendimento rápido
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Prefere falar direto no WhatsApp?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Clique abaixo e inicie uma conversa para solicitar atendimento ou
              tirar dúvidas sobre os serviços da Astreon Tech.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="https://wa.me/551132302090"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-green-700"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}