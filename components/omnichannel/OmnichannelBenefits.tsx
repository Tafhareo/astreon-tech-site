import FadeIn from "@/components/FadeIn";
import {
  BarChart3,
  Bot,
  Clock3,
  Layers3,
  MessageCircle,
  ShieldCheck,
  UsersRound,
  Workflow,
} from "lucide-react";

const benefits = [
  {
    icon: UsersRound,
    title: "Múltiplos atendentes",
    text: "Vários colaboradores atendendo pelo mesmo número, com organização e controle.",
  },
  {
    icon: Layers3,
    title: "Filas por setor",
    text: "Organize comercial, suporte, financeiro, cobrança e SAC em filas separadas.",
  },
  {
    icon: Clock3,
    title: "Histórico centralizado",
    text: "A conversa deixa de pertencer ao colaborador e passa a pertencer à empresa.",
  },
  {
    icon: Bot,
    title: "IA e automações",
    text: "Padronize respostas, fluxos iniciais, encaminhamentos e apoio ao atendimento.",
  },
  {
    icon: BarChart3,
    title: "Dashboard gerencial",
    text: "Acompanhe volume, tempo de resposta, produtividade e status da operação.",
  },
  {
    icon: Workflow,
    title: "APIs e webhooks",
    text: "Prepare integrações com CRM, automações, relatórios e sistemas internos.",
  },
  {
    icon: MessageCircle,
    title: "Número corporativo",
    text: "Organize o atendimento usando o número da empresa, conforme viabilidade técnica.",
  },
  {
    icon: ShieldCheck,
    title: "Suporte Astreon",
    text: "Implantação, treinamento, sustentação, backups e acompanhamento contínuo.",
  },
];

export default function OmnichannelBenefits() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
      <FadeIn>
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            A solução
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Tudo que sua empresa precisa para profissionalizar o atendimento.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            A Central Omnichannel Astreon combina operação, tecnologia e suporte
            para que sua equipe atenda melhor e sua gestão tenha controle.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
}
