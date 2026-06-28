import FadeIn from "@/components/FadeIn";

const testimonials = [
  {
    name: "Tamara Estrela",
    text: "A empresa foi excepcional na montagem da nossa infraestrutura e configuração de redes, garantindo proteção total com firewalls robustos e máxima estabilidade operacional.",
  },
  {
    name: "Alberto Junior",
    text: "A Astreon Tech elevou nossa operação com VICIdial e Telefonia estáveis, além de uma consultoria estratégica que realmente fez diferença.",
  },
  {
    name: "Kleber Conforte",
    text: "Empresa nota 1000, melhor empresa de TI disparada que já contratei. Extremamente educados e muito competentes.",
  },
  {
    name: "Eliete Maria Ferraz",
    text: "Atendimento maravilhoso, empresa nota 10.",
  },
  {
    name: "Lucivane Lira",
    text: "Melhor atendimento, serviço de qualidade.",
  },
  {
    name: "Jarrid Lima",
    text: "Muito experiente e confiável.",
  },
];

export default function HomeTestimonials() {
  return (
    <section className="overflow-hidden border-b border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
        <FadeIn>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Prova social
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Clientes que já confiaram na Astreon Tech.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
              Avaliações reais de clientes que já contaram com a Astreon para
              melhorar infraestrutura, atendimento e operação.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-6"
              >
                <div className="text-sm text-yellow-300">★★★★★</div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-sm font-semibold text-cyan-300">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-500">Cliente Astreon Tech</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
