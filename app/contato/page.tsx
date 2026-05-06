import FadeIn from "@/components/FadeIn";

export default function Contato() {
  const whatsappLink =
    "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Astreon%20Tech%20e%20quero%20um%20diagn%C3%B3stico%20de%20TI.";

  const reasons = [
    { icon: "⚡", text: "Resolver falhas, lentidão ou instabilidade no ambiente" },
    { icon: "🏗️", text: "Organizar infraestrutura, rede e servidores" },
    { icon: "🔒", text: "Melhorar segurança da informação e acessos" },
    { icon: "📞", text: "Ajustar discador, telefonia ou operação de call center" },
    { icon: "💰", text: "Reduzir custos de TI e eliminar desperdícios" },
    { icon: "📄", text: "Adequação à LGPD e criação de políticas internas" },
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-24">
          <FadeIn>
            <span className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
              Contato
            </span>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Vamos resolver os problemas de TI da sua empresa?
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Entre em contato pelo WhatsApp ou e-mail. O diagnóstico inicial é
              sem custo — conversamos sobre sua situação e indicamos o melhor caminho.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CANAIS + SITUAÇÕES */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

            {/* Canais de contato */}
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Canais de atendimento
              </p>

              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/20 transition hover:border-green-400/30 hover:bg-slate-800/70"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-green-500/20 text-3xl">
                  💬
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
                    Recomendado
                  </p>
                  <p className="mt-0.5 text-base font-bold text-white">WhatsApp</p>
                  <p className="text-sm text-slate-400">(11) 3230-2090 — Resposta rápida</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Clique para iniciar uma conversa agora
                  </p>
                </div>
              </a>

              {/* E-mail */}
              <a
                href="mailto:contato@astreontech.com.br"
                className="flex items-center gap-5 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/20 transition hover:border-cyan-400/30 hover:bg-slate-800/70"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-cyan-500/20 text-3xl">
                  ✉️
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                    E-mail
                  </p>
                  <p className="mt-0.5 text-base font-bold text-white">
                    contato@astreontech.com.br
                  </p>
                  <p className="text-sm text-slate-400">Retorno em até 24 horas úteis</p>
                </div>
              </a>

              {/* Horário */}
              <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-700/50 text-3xl">
                  🕐
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Horário de atendimento
                  </p>
                  <p className="mt-0.5 text-base font-bold text-white">Segunda a Sexta</p>
                  <p className="text-sm text-slate-400">
                    08h às 18h — Remoto e presencial
                  </p>
                </div>
              </div>
            </div>

            {/* Situações */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Podemos ajudar com
              </p>
              <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                Sua empresa enfrenta alguma dessas situações?
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Se sim, o diagnóstico inicial é o primeiro passo para resolver.
              </p>

              <div className="mt-6 space-y-3">
                {reasons.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/50 px-5 py-4"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <p className="text-sm text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block w-full rounded-2xl bg-cyan-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Sim, quero um diagnóstico gratuito
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-white/10 bg-cyan-500/10">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
          <FadeIn>
            <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-6 text-center sm:p-8 md:p-10">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Quanto antes resolver, menor o impacto na sua operação
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
                O diagnóstico inicial é gratuito e sem compromisso. Em uma
                conversa rápida entendemos sua situação e indicamos o que pode
                ser melhorado.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-2xl bg-cyan-500 px-8 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Falar no WhatsApp agora
                </a>
                <a
                  href="mailto:contato@astreontech.com.br"
                  className="inline-block rounded-2xl border border-cyan-400 px-8 py-3 text-center text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
                >
                  Enviar e-mail
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}