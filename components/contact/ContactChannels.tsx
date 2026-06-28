import FadeIn from "@/components/FadeIn";
import { Clock3, Mail, MessageCircle, MonitorCheck } from "lucide-react";

const whatsappLink =
  "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Astreon%20Tech%20e%20quero%20um%20diagn%C3%B3stico%20de%20tecnologia.";

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    title: "(11) 3230-2090",
    description: "Canal recomendado para retorno rápido.",
    href: whatsappLink,
    highlight: "Recomendado",
  },
  {
    icon: Mail,
    label: "E-mail",
    title: "contato@astreontech.com.br",
    description: "Envie detalhes do cenário e retornaremos em horário comercial.",
    href: "mailto:contato@astreontech.com.br",
    highlight: "Comercial",
  },
  {
    icon: Clock3,
    label: "Horário",
    title: "Segunda a Sexta",
    description: "Atendimento em horário comercial, com possibilidade de agenda para projetos.",
    href: "/contato",
    highlight: "Atendimento",
  },
  {
    icon: MonitorCheck,
    label: "Formato",
    title: "Remoto para todo o Brasil",
    description: "Projetos, diagnóstico, implantação e suporte com acompanhamento técnico.",
    href: "/servicos",
    highlight: "Operação",
  },
];

export default function ContactChannels() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
      <FadeIn>
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Canais de atendimento
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Escolha a melhor forma de falar com a Astreon Tech.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            Seja para diagnosticar um problema, conhecer a Central Omnichannel
            ou iniciar um projeto, vamos entender seu cenário e indicar o melhor
            caminho.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => {
            const Icon = channel.icon;

            return (
              <a
                key={channel.title}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  {channel.highlight}
                </p>

                <h3 className="mt-3 text-lg font-bold text-white">
                  {channel.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {channel.description}
                </p>

                <p className="mt-5 text-sm font-semibold text-cyan-300">
                  {channel.label} →
                </p>
              </a>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
}
