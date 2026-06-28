import FadeIn from "@/components/FadeIn";
import {
  Bot,
  FileCheck2,
  Headphones,
  Layers3,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const differentials = [
  {
    icon: ShieldCheck,
    title: "Segurança desde o início",
    text: "Projetos pensados com boas práticas de acesso, proteção, continuidade e redução de riscos.",
  },
  {
    icon: FileCheck2,
    title: "Documentação e organização",
    text: "Ambientes documentados para facilitar manutenção, auditoria e evolução futura.",
  },
  {
    icon: Layers3,
    title: "Infraestrutura corporativa",
    text: "Redes, servidores, cloud, firewall e sustentação para empresas que precisam de estabilidade.",
  },
  {
    icon: Workflow,
    title: "Projetos personalizados",
    text: "Cada solução é ajustada ao cenário real da empresa, sem pacotes genéricos ou improvisos.",
  },
  {
    icon: Bot,
    title: "Automação e Omnichannel",
    text: "Soluções modernas para atendimento, WhatsApp, filas, histórico, dashboards e automações.",
  },
  {
    icon: Headphones,
    title: "Suporte próximo",
    text: "Atendimento humano, consultivo e orientado à continuidade da operação.",
  },
];

export default function AboutDifferentials() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
        <FadeIn>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Diferenciais
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              O que torna a Astreon Tech diferente.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
              Nosso trabalho combina visão técnica, segurança da informação,
              implantação estruturada e acompanhamento contínuo.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {differentials.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30"
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
      </div>
    </section>
  );
}
