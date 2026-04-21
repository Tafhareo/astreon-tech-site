export default function Contato() {
  const whatsappLink =
    "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Astreon%20Tech%20e%20quero%20entender%20como%20voc%C3%AAs%20podem%20me%20ajudar.";

  const reasons = [
    "Solicitar um diagnóstico inicial do ambiente de TI",
    "Falar sobre suporte técnico para a empresa",
    "Entender melhorias em infraestrutura, redes e firewall",
    "Tratar segurança da informação e redução de riscos",
    "Falar sobre VICIdial, telefonia ou projetos de tecnologia",
  ];

  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Fale com a Astreon Tech
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Precisa de suporte de TI, melhorar sua infraestrutura ou aumentar a
            segurança da sua empresa? Entre em contato e receba uma orientação
            inicial sobre o melhor próximo passo.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-green-400">
              Atendimento rápido via WhatsApp
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Fale diretamente para apresentar sua necessidade e entender como a
              Astreon Tech pode apoiar sua empresa.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block w-full rounded-2xl bg-green-500 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-green-600 sm:text-base"
            >
              Chamar no WhatsApp
            </a>
          </div>

          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-cyan-300">
              Prefere enviar um e-mail?
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Envie sua necessidade e retornaremos para entender o cenário e
              orientar o melhor caminho para a sua empresa.
            </p>

            <a
              href="mailto:contato@astreontech.com.br"
              className="mt-6 inline-block w-full break-all rounded-2xl border border-cyan-400 px-6 py-3 text-center text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10 sm:text-base sm:break-normal"
            >
              contato@astreontech.com.br
            </a>
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Você pode entrar em contato para
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
              Situações em que podemos ajudar
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {reasons.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
              >
                <p className="text-sm leading-7 text-slate-200 sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-white/10 bg-cyan-500/10 p-8 text-center sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Quanto antes ajustar sua TI, menor o risco para o seu negócio
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            Empresas que deixam para depois acabam enfrentando impactos maiores
            na operação. Comece com um contato simples e entenda o que pode ser
            melhorado.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-2xl bg-cyan-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 sm:text-base"
          >
            Solicitar diagnóstico agora
          </a>
        </div>
      </section>
    </main>
  );
}