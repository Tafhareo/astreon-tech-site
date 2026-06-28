import FadeIn from "@/components/FadeIn";

const faqs = [
  {
    question: "O diagnóstico inicial tem custo?",
    answer:
      "O primeiro contato é sem custo. Entendemos o cenário, avaliamos a necessidade e indicamos o melhor caminho para a empresa.",
  },
  {
    question: "A Astreon atende empresas fora de São Paulo?",
    answer:
      "Sim. Muitos atendimentos, diagnósticos e implantações podem ser feitos de forma remota para empresas em todo o Brasil.",
  },
  {
    question: "Vocês atendem apenas suporte de TI?",
    answer:
      "Não. A Astreon Tech atua com infraestrutura, segurança da informação, cloud, telefonia, suporte, consultoria e Central Omnichannel.",
  },
  {
    question: "Posso solicitar uma demonstração da Central Omnichannel?",
    answer:
      "Sim. Podemos apresentar o funcionamento da central, os planos, o fluxo de implantação e como ela se aplica ao seu cenário.",
  },
];

export default function ContactFAQ() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
      <FadeIn>
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Dúvidas frequentes
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Antes de falar com a Astreon Tech.
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="font-semibold text-white">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
