import Link from "next/link";

export default function Contato() {
  const whatsappLink =
    "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Astreon%20Tech%20e%20quero%20entender%20como%20voc%C3%AAs%20podem%20me%20ajudar.";

  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Fale com a Astreon Tech
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            Precisa de suporte de TI, melhorar sua infraestrutura ou aumentar a
            segurança da sua empresa? Entre em contato e receba um diagnóstico
            inicial.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* WhatsApp */}
          <div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-8">
            <h2 className="text-2xl font-semibold text-green-400">
              Atendimento rápido via WhatsApp
            </h2>

            <p className="mt-4 text-slate-300">
              Fale diretamente para entender sua necessidade e receber uma
              orientação inicial sobre o seu ambiente de TI.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block w-full rounded-2xl bg-green-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-green-600"
            >
              Chamar no WhatsApp
            </a>
          </div>

          {/* Email */}
          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-8">
            <h2 className="text-2xl font-semibold text-cyan-300">
              Prefere enviar um e-mail?
            </h2>

            <p className="mt-4 text-slate-300">
              Envie sua necessidade e retornaremos com orientações ou proposta
              conforme o seu cenário.
            </p>

            <a
              href="mailto:contato@astreontech.com.br"
              className="mt-6 inline-block w-full rounded-2xl border border-cyan-400 px-6 py-3 text-center font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
            >
              contato@astreontech.com.br
            </a>
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Quanto antes ajustar sua TI, menor o risco para o seu negócio
          </h2>

          <p className="mt-4 text-slate-300">
            Empresas que deixam para depois acabam enfrentando problemas maiores.
            Comece com um diagnóstico simples e entenda como melhorar sua
            operação.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-2xl bg-cyan-500 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Solicitar diagnóstico agora
          </a>
        </div>
      </section>
    </main>
  );
}