import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  Check,
  Clock3,
  Headphones,
  Layers3,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
  X,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Central de Atendimento Omnichannel",
  description:
    "Central de Atendimento Omnichannel Astreon para empresas que precisam centralizar conversas, organizar filas, manter histórico e acompanhar indicadores de atendimento.",
  alternates: {
    canonical: "/omnichannel",
  },
  openGraph: {
    title: "Central de Atendimento Omnichannel Astreon",
    description:
      "Transforme o atendimento da sua empresa em uma operação profissional com múltiplos atendentes, filas, histórico, automações e suporte especializado.",
    url: "/omnichannel",
    type: "website",
  },
};

const whatsappDemo =
  "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Astreon%20Tech%20e%20quero%20solicitar%20uma%20demonstra%C3%A7%C3%A3o%20da%20Central%20de%20Atendimento%20Omnichannel.";

const pains = [
  "Conversas espalhadas em celulares pessoais",
  "Histórico perdido quando alguém sai da equipe",
  "Clientes sem resposta por falta de fila organizada",
  "Gestão sem visibilidade do volume de atendimento",
];

const results = [
  "Central única para sua equipe atender melhor",
  "Histórico preservado e acessível pela operação",
  "Filas por setor para organizar cada demanda",
  "Indicadores para acompanhar produtividade e tempo de resposta",
];

const benefits = [
  {
    icon: UsersRound,
    title: "Múltiplos atendentes",
    text: "Vários colaboradores atendendo pelo mesmo número, sem depender de aparelhos físicos compartilhados.",
  },
  {
    icon: Layers3,
    title: "Filas por setor",
    text: "Organize comercial, suporte, cobrança e financeiro com distribuição por fila e prioridade.",
  },
  {
    icon: Clock3,
    title: "Histórico centralizado",
    text: "A conversa deixa de pertencer ao colaborador e passa a pertencer à empresa.",
  },
  {
    icon: Bot,
    title: "Automações",
    text: "Padronize o primeiro contato, respostas rápidas e direcionamentos básicos da operação.",
  },
  {
    icon: BarChart3,
    title: "Visão gerencial",
    text: "Acompanhe volume, produtividade, tempo de resposta e organização do atendimento.",
  },
  {
    icon: ShieldCheck,
    title: "Infraestrutura dedicada",
    text: "Ambiente implantado, sustentado e acompanhado pela Astreon Tech.",
  },
];

const steps = [
  {
    title: "Diagnóstico",
    text: "Entendemos volume, setores, equipe, número utilizado e principais gargalos.",
  },
  {
    title: "Implantação",
    text: "Configuramos filas, permissões, automações, usuários e estrutura da central.",
  },
  {
    title: "Integração",
    text: "Conectamos o número da empresa e validamos o fluxo de atendimento.",
  },
  {
    title: "Treinamento",
    text: "Orientamos a equipe para operar com padrão, segurança e produtividade.",
  },
  {
    title: "Acompanhamento",
    text: "Sustentamos a infraestrutura e apoiamos melhorias contínuas da operação.",
  },
];

const plans = [
  {
    name: "Essencial",
    price: "R$ 347",
    period: "/mês",
    highlight: false,
    description: "Para empresas que querem organizar o atendimento inicial.",
    audience: "Até 5 atendentes",
    features: [
      "Central de atendimento via WhatsApp",
      "Até 5 atendentes",
      "Filas básicas",
      "Histórico centralizado",
      "Suporte Astreon Tech",
      "Sem cobrança por mensagem",
    ],
  },
  {
    name: "Profissional",
    price: "R$ 597",
    period: "/mês",
    highlight: true,
    description: "Para equipes com múltiplos setores e maior volume de atendimento.",
    audience: "Até 15 atendentes",
    features: [
      "Tudo do Essencial",
      "Até 15 atendentes",
      "Múltiplas filas e setores",
      "Automações e respostas rápidas",
      "Indicadores gerenciais",
      "Prioridade na sustentação",
    ],
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    highlight: false,
    description: "Para operações maiores, com necessidade de desenho personalizado.",
    audience: "Acima de 15 atendentes",
    features: [
      "Projeto personalizado",
      "Mais de 15 atendentes",
      "Múltiplas unidades ou equipes",
      "Integrações sob avaliação",
      "Onboarding dedicado",
      "Condições e SLA sob consulta",
    ],
  },
];

const faqs = [
  {
    question: "A solução cobra por mensagem enviada ou recebida?",
    answer:
      "Não. O modelo comercial da Astreon trabalha com mensalidade fixa por plano, sem cobrança por mensagem enviada ou recebida.",
  },
  {
    question: "Preciso trocar o número de WhatsApp da empresa?",
    answer:
      "Em muitos cenários é possível trabalhar com o número já utilizado pela empresa. A validação é feita durante o diagnóstico técnico.",
  },
  {
    question: "A Astreon apenas fornece o sistema?",
    answer:
      "Não. A entrega inclui implantação, configuração, treinamento, suporte e sustentação da infraestrutura.",
  },
  {
    question: "Serve para times comerciais, suporte e cobrança?",
    answer:
      "Sim. A central pode ser organizada por filas e setores, como comercial, suporte, cobrança, financeiro e SAC.",
  },
];

function DashboardMockup() {
  return (
    <div className="relative rounded-[2rem] border border-cyan-400/20 bg-slate-900/90 p-4 shadow-2xl shadow-cyan-950/40">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative rounded-[1.5rem] border border-white/10 bg-slate-950 p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-white">Central Astreon</p>
            <p className="text-xs text-slate-400">Atendimento em tempo real</p>
          </div>
          <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            Online
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["18", "Em atendimento"],
            ["147", "Finalizados hoje"],
            ["1m42s", "Tempo médio"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-2xl font-bold text-cyan-300">{value}</p>
              <p className="mt-1 text-xs text-slate-400">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-3">
          {[
            ["Comercial", "12 conversas na fila", "bg-cyan-400"],
            ["Suporte", "8 em atendimento", "bg-emerald-400"],
            ["Financeiro", "5 aguardando retorno", "bg-violet-400"],
          ].map(([name, desc, dot]) => (
            <div key={name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center gap-3">
                <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
                <div>
                  <p className="text-sm font-semibold text-white">{name}</p>
                  <p className="text-xs text-slate-400">{desc}</p>
                </div>
              </div>
              <MessageCircle className="h-5 w-5 text-cyan-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function OmnichannelPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 md:px-10 md:py-24 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" />
              Central de Atendimento Omnichannel Astreon
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Transforme seu atendimento em uma operação profissional.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Centralize conversas, distribua atendimentos por fila, mantenha histórico,
              acompanhe indicadores e tenha suporte especializado para operar com segurança.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Solicitar demonstração
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#planos"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-300"
              >
                Ver planos
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
              <span>Sem cobrança por mensagem</span>
              <span>•</span>
              <span>Implantação assistida</span>
              <span>•</span>
              <span>Suporte humano</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <DashboardMockup />
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
          <FadeIn>
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Antes e depois
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                O cliente deixa de falar com uma pessoa e passa a falar com a empresa.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-red-400/20 bg-red-950/20 p-6">
                <h3 className="text-xl font-bold text-white">Antes</h3>
                <div className="mt-6 space-y-4">
                  {pains.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <X className="mt-0.5 h-5 w-5 flex-none text-red-300" />
                      <p className="text-sm leading-6 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-emerald-400/20 bg-emerald-950/20 p-6">
                <h3 className="text-xl font-bold text-white">Depois</h3>
                <div className="mt-6 space-y-4">
                  {results.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <Check className="mt-0.5 h-5 w-5 flex-none text-emerald-300" />
                      <p className="text-sm leading-6 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
        <FadeIn>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Benefícios
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Controle, continuidade e produtividade no atendimento.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
          <FadeIn>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Como funciona
                </p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Implantação guiada do diagnóstico ao suporte contínuo.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  A Astreon não entrega apenas acesso a uma plataforma. Nós configuramos,
                  orientamos sua equipe e sustentamos a infraestrutura para sua operação funcionar.
                </p>
              </div>

              <div className="grid gap-4">
                {steps.map((step, index) => (
                  <div key={step.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                    <div className="flex gap-4">
                      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-cyan-400/10 text-sm font-bold text-cyan-300">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-white">{step.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-400">{step.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="planos" className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
        <FadeIn>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Planos
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Planos claros para crescer sem surpresa na fatura.
            </h2>
            <p className="mt-4 text-slate-300">
              Todos os planos têm mensalidade fixa e não cobram por mensagem enviada ou recebida.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl border p-7 ${
                  plan.highlight
                    ? "border-cyan-400/50 bg-cyan-400/10 shadow-2xl shadow-cyan-950/30"
                    : "border-white/10 bg-white/[0.03]"
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
                <h3 className="mt-4 text-3xl font-bold text-white">{plan.price}<span className="text-base font-medium text-slate-400">{plan.period}</span></h3>
                <p className="mt-2 text-sm font-semibold text-slate-200">{plan.audience}</p>
                <p className="mt-4 text-sm leading-6 text-slate-400">{plan.description}</p>

                <ul className="mt-6 space-y-3">
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
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold transition ${
                    plan.highlight
                      ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                      : "border border-white/20 text-white hover:border-cyan-400/50 hover:text-cyan-300"
                  }`}
                >
                  Solicitar demonstração
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
          <FadeIn>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Por que a Astreon?
                </p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Não vendemos apenas uma ferramenta. Entregamos uma operação funcionando.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Infraestrutura própria", Building2],
                  ["Segurança da Informação", ShieldCheck],
                  ["Suporte humano próximo", Headphones],
                  ["Processos e automações", Workflow],
                ].map(([title, Icon]) => {
                  const IconComponent = Icon as typeof Building2;
                  return (
                    <div key={String(title)} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                      <IconComponent className="h-6 w-6 text-cyan-300" />
                      <p className="mt-4 font-semibold text-white">{String(title)}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
        <FadeIn>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Dúvidas comuns antes da demonstração.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-white/10 bg-cyan-500/10">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
          <FadeIn>
            <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/90 p-8 text-center shadow-2xl shadow-cyan-950/20 md:p-12">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Quer ver a Central funcionando no cenário da sua empresa?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Solicite uma demonstração e entenda como organizar seu atendimento,
                reduzir perdas e dar mais controle para sua gestão.
              </p>
              <a
                href={whatsappDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-8 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Solicitar demonstração
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
