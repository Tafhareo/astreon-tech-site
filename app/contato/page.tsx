import FadeIn from "@/components/FadeIn";

export default function Contato() {
  const whatsappLink =
    "https://wa.me/551132302090?text=Olá,%20vim%20pelo%20site%20da%20Astreon%20Tech%20e%20quero%20um%20diagnóstico%20de%20TI.";

  const reasons = [
    "Resolver falhas, lentidão ou instabilidade no ambiente",
    "Organizar infraestrutura, rede e servidores",
    "Melhorar segurança da informação e acessos",
    "Ajustar discador, telefonia ou operação de call center",
    "Ter suporte técnico mais confiável e estratégico",
  ];

  return (
    <main className="bg-slate-950 text-white">
      
      {/* HERO */}
      <section className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-6 md:px-10 md:py-20">
        <FadeIn>
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Fale com a Astreon Tech
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base text-slate-300 sm:text-lg">
            Se sua empresa enfrenta problemas de TI, falhas ou precisa melhorar
            a estrutura, podemos te ajudar a resolver isso de forma prática.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            className="mt-8 inline-block rounded-2xl bg-green-500 px-8 py-3 font-semibold text-white hover:bg-green-600"
          >
            Solicitar diagnóstico no WhatsApp
          </a>
        </FadeIn>
      </section>

      {/* BENEFÍCIOS */}
      <section className="mx-auto max-w-5xl px-5 pb-14 sm:px-6 md:px-10 md:pb-16">
        <FadeIn>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Podemos ajudar sua empresa em situações como:
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {reasons.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
                >
                  <p className="text-sm text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CONTATO SECUNDÁRIO */}
      <section className="mx-auto max-w-5xl px-5 pb-14 sm:px-6 md:px-10 md:pb-16">
        <FadeIn>
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-center">
            <h2 className="text-xl font-semibold text-cyan-300">
              Prefere enviar um e-mail?
            </h2>

            <p className="mt-3 text-sm text-slate-300">
              Você também pode entrar em contato pelo e-mail:
            </p>

            <a
              href="mailto:contato@astreontech.com.br"
              className="mt-4 inline-block text-cyan-400 font-semibold hover:underline"
            >
              contato@astreontech.com.br
            </a>
          </div>
        </FadeIn>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-white/10 bg-cyan-500/10">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-6 md:px-10 md:py-20">
          <FadeIn>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Quanto antes resolver, menor o impacto na sua operação
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-slate-300">
              Solicite um diagnóstico e entenda exatamente o que pode ser
              melhorado no seu ambiente de TI.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              className="mt-8 inline-block rounded-2xl bg-cyan-500 px-8 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
            >
              Falar no WhatsApp agora
            </a>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}