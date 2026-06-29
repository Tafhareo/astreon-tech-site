import FadeIn from "@/components/FadeIn";

const faqs = [
  {
    question: "O setup está incluso na mensalidade?",
    answer:
      "Não. O setup é cobrado uma única vez e cobre implantação, configuração, integração, treinamento, documentação e entrada em produção.",
  },
  {
    question: "A mensalidade cobra por mensagem enviada ou recebida?",
    answer:
      "Não. O modelo comercial da Astreon trabalha com mensalidade fixa por plano, sem cobrança por mensagem enviada ou recebida.",
  },
  {
    question: "Posso usar meu número atual de WhatsApp?",
    answer:
      "Em muitos cenários é possível trabalhar com o número já utilizado pela empresa. A viabilidade é validada durante o diagnóstico técnico.",
  },
  {
    question: "Preciso contratar servidor ou infraestrutura separada?",
    answer:
      "No modelo gerenciado, a Astreon cuida da plataforma, hospedagem, sustentação, backup e suporte. Cenários dedicados ou no ambiente do cliente são tratados como projeto específico.",
  },
  {
    question: "A Astreon faz treinamento da equipe?",
    answer:
      "Sim. O setup inclui orientação inicial para que a equipe consiga operar a central com filas, histórico, atendimento e boas práticas.",
  },
  {
    question: "Existe plano para mais de 15 atendentes?",
    answer:
      "Sim. Para operações maiores, indicamos o plano Enterprise, com projeto sob medida, onboarding dedicado e condições personalizadas.",
  },
];

export default function OmnichannelFAQ() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
      <FadeIn>
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            FAQ comercial
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Perguntas comuns antes da contratação.
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
