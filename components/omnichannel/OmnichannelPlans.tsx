import FadeIn from "@/components/FadeIn";
import { Check, Info } from "lucide-react";

const whatsappDemo =
  "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Astreon%20Tech%20e%20quero%20uma%20demonstra%C3%A7%C3%A3o%20e%20proposta%20da%20Central%20Omnichannel.";

const plans = [
  {
    name: "Essencial",
    audience: "Até 5 atendentes",
    monthly: "R$ 347/mês",
    setup: "Setup a partir de R$ 1.500",
    description: "Para pequenas empresas que querem organizar o atendimento inicial.",
    highlight: false,
    features: [
      "Central de atendimento",
      "Até 5 atendentes",
      "Filas básicas",
      "Histórico centralizado",
      "Dashboard inicial",
      "Suporte Astreon",
      "Sem cobrança por mensagem",
    ],
  },
  {
    name: "Profissional",
    audience: "Até 15 atendentes",
    monthly: "R$ 597/mês",
    setup: "Setup a partir de R$ 2.500",
    description: "Para equipes com múltiplos setores e maior volume de atendimento.",
    highlight: true,
    features: [
      "Tudo do Essencial",
      "Até 15 atendentes",
      "Múltiplas filas e setores",
      "Automações e respostas rápidas",
      "Indicadores gerenciais",
      "Prioridade na sustentação",
      "Sem cobrança por mensagem",
    ],
  },
  {
    name: "Enterprise",
    audience: "Acima de 15 atendentes",
    monthly: "Sob consulta",
    setup: "Projeto personalizado",
    description: "Para operações maiores, multiárea ou com necessidade de integrações.",
    highlight: false,
    features: [
      "Projeto sob medida",
      "Mais de 15 atendentes",
      "Múltiplas unidades ou equipes",
      "Integrações sob avaliação",
      "Onboarding dedicado",
      "SLA e condições sob consulta",
      "Ambiente dedicado quando necessário",
    ],
  },
];

const setupItems = [
  "Levantamento de requisitos",
  "Configuração da plataforma",
  "Integração com WhatsApp",
  "Usuários, filas e permissões",
  "Treinamento inicial",
  "Documentação e entrada em produção",
];

const monthlyItems = [
  "Hospedagem e sustentação",
  "Monitoramento",
  "Backups",
  "Atualizações",
  "Correções",
  "Suporte contínuo",
];

export default function OmnichannelPlans() {
  return (
    <section id="planos" className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
        <FadeIn>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Planos
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Setup separado da mensalidade, com custo previsível.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
              A implantação é cobrada uma única vez. A mensalidade cobre a
              operação contínua da plataforma, suporte, sustentação e evolução.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex h-full flex-col rounded-3xl border p-7 ${
                  plan.highlight
                    ? "border-cyan-400/50 bg-cyan-400/10 shadow-2xl shadow-cyan-950/30"
                    : "border-white/10 bg-slate-900/70"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-4 left-6 rounded-full bg-cyan-400 px-4 py-1 text-xs font-bold uppercase tracking-widest text-slate-950">
                    Mais vendido
                  </span>
                )}

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  {plan.name}
                </p>
                <h3 className="mt-4 text-3xl font-bold text-white">
                  {plan.monthly}
                </h3>
                <p className="mt-2 text-sm font-semibold text-slate-200">
                  {plan.audience}
                </p>
                <p className="mt-2 text-sm text-cyan-300">{plan.setup}</p>
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {plan.description}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-300" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold transition ${
                    plan.highlight
                      ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                      : "border border-white/20 text-white hover:border-cyan-400/50 hover:text-cyan-300"
                  }`}
                >
                  Solicitar proposta
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <div className="flex items-center gap-3">
                <Info className="h-5 w-5 text-cyan-300" />
                <h3 className="font-bold text-white">O que entra no setup?</h3>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {setupItems.map((item) => (
                  <p key={item} className="text-sm text-slate-300">
                    ✓ {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <div className="flex items-center gap-3">
                <Info className="h-5 w-5 text-cyan-300" />
                <h3 className="font-bold text-white">O que entra na mensalidade?</h3>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {monthlyItems.map((item) => (
                  <p key={item} className="text-sm text-slate-300">
                    ✓ {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
