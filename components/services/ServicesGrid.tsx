import FadeIn from "@/components/FadeIn";
import {
  Cloud,
  Headphones,
  MessageCircle,
  PhoneCall,
  Server,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    id: "infraestrutura",
    icon: Server,
    eyebrow: "Infraestrutura",
    title: "Infraestrutura Corporativa",
    description:
      "Ambientes de TI organizados, seguros e preparados para suportar o crescimento da empresa.",
    items: ["Redes", "Servidores", "Firewall", "Virtualização", "Cloud", "Backup"],
  },
  {
    id: "seguranca",
    icon: ShieldCheck,
    eyebrow: "Segurança",
    title: "Segurança da Informação",
    description:
      "Controles e boas práticas para reduzir riscos, proteger dados e melhorar a governança do ambiente.",
    items: ["Hardening", "VPN", "MFA", "LGPD", "Acessos", "Monitoramento"],
  },
  {
    id: "omnichannel",
    icon: MessageCircle,
    eyebrow: "Atendimento",
    title: "Central Omnichannel",
    description:
      "Centralize conversas, filas, histórico e indicadores para profissionalizar o atendimento ao cliente.",
    items: ["WhatsApp", "Filas", "Histórico", "Dashboard", "Automações", "IA"],
  },
  {
    id: "telefonia",
    icon: PhoneCall,
    eyebrow: "Comunicação",
    title: "Telefonia e Call Center",
    description:
      "Soluções para operações que dependem de telefonia, discagem, atendimento e controle de chamadas.",
    items: ["VoIP", "VICIdial", "Call Center", "Troncos", "Gravações", "Relatórios"],
  },
  {
    id: "cloud",
    icon: Cloud,
    eyebrow: "Cloud",
    title: "Cloud e Servidores",
    description:
      "Projetos de cloud, publicação de aplicações, proxy reverso, SSL, DNS e ambientes Linux/Windows.",
    items: ["Docker", "Nginx", "Cloudflare", "Linux", "Windows", "SSL"],
  },
  {
    id: "suporte",
    icon: Headphones,
    eyebrow: "Suporte",
    title: "Suporte e Consultoria",
    description:
      "Atendimento técnico, sustentação, documentação e apoio contínuo para sua operação evoluir.",
    items: ["Sustentação", "Projetos", "Documentação", "SLA", "Usuários", "Consultoria"],
  },
];

export default function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
      <FadeIn>
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Nossas soluções
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Um portfólio completo para sustentar sua operação.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            Cada solução foi organizada para resolver problemas reais de
            empresas que precisam de estabilidade, segurança, atendimento e
            crescimento.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-32 rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  {service.eyebrow}
                </p>

                <h3 className="mt-3 text-xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
}
