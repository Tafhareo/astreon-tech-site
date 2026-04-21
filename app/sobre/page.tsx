export default function Sobre() {
  return (
    <main className="bg-slate-950 text-white">
      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">
          Sobre a Astreon Tech
        </h1>

        <p className="mt-6 text-lg text-slate-300">
          Especialistas em soluções de TI, infraestrutura e segurança da
          informação para empresas que precisam de estabilidade, organização e
          proteção no ambiente tecnológico.
        </p>
      </section>

      {/* HISTÓRIA / POSICIONAMENTO */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="space-y-6 text-slate-300">
          <p>
            A Astreon Tech nasceu com o objetivo de ajudar empresas a terem mais
            controle, segurança e eficiência em seus ambientes de tecnologia.
          </p>

          <p>
            Sabemos que, na prática, muitos negócios enfrentam problemas como
            lentidão, falhas constantes, falta de organização na infraestrutura
            e riscos relacionados à segurança da informação.
          </p>

          <p>
            Nosso trabalho é atuar diretamente nesses pontos, com uma abordagem
            prática e consultiva, trazendo soluções que realmente fazem
            diferença no dia a dia da operação.
          </p>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-center text-3xl font-bold">
            Por que escolher a Astreon Tech?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <h3 className="font-semibold text-cyan-400">
                Experiência prática em ambientes corporativos
              </h3>
              <p className="mt-2 text-slate-300">
                Atuação direta com infraestrutura, segurança, redes e suporte em
                ambientes reais de empresas.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <h3 className="font-semibold text-cyan-400">
                Foco em solução, não apenas em tecnologia
              </h3>
              <p className="mt-2 text-slate-300">
                O objetivo não é só implementar ferramentas, mas resolver os
                problemas que impactam o negócio.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <h3 className="font-semibold text-cyan-400">
                Atendimento consultivo e personalizado
              </h3>
              <p className="mt-2 text-slate-300">
                Cada empresa tem uma realidade diferente, e as soluções são
                adaptadas para cada cenário.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <h3 className="font-semibold text-cyan-400">
                Compromisso com estabilidade e segurança
              </h3>
              <p className="mt-2 text-slate-300">
                Redução de falhas, melhoria de desempenho e proteção do ambiente
                são prioridades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">
          Nosso foco é simples: fazer a TI da sua empresa funcionar de verdade
        </h2>

        <p className="mt-6 text-slate-300">
          A tecnologia deve ser um apoio para o crescimento da empresa, e não um
          problema constante. A Astreon Tech trabalha para garantir que o seu
          ambiente esteja organizado, seguro e preparado para o dia a dia.
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold">
            Quer entender como melhorar a TI da sua empresa?
          </h2>

          <p className="mt-4 text-slate-300">
            Entre em contato e receba um diagnóstico inicial para identificar
            melhorias no seu ambiente.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20Sobre%20da%20Astreon%20Tech%20e%20quero%20entender%20como%20voc%C3%AAs%20podem%20me%20ajudar."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-cyan-500 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Falar no WhatsApp
            </a>

            <a
              href="/contato"
              className="rounded-2xl border border-white/20 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Ir para contato
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}