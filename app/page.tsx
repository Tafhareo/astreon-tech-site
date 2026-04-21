import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  const whatsappLink =
    "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20Astreon%20Tech%20e%20gostaria%20de%20um%20diagn%C3%B3stico%20inicial.";

  const emailLink = "mailto:contato@astreontech.com.br";

  const services = [
    {
      title: "Suporte de TI",
      description:
        "Atendimento técnico para empresas, com foco em resolução de falhas, suporte a usuários, estações de trabalho e estabilidade operacional.",
    },
    {
      title: "Infraestrutura de TI",
      description:
        "Implantação, organização e manutenção de redes, servidores, conectividade e recursos essenciais para o ambiente corporativo.",
    },
    {
      title: "Segurança da Informação",
      description:
        "Ações para reforçar a proteção do ambiente, reduzir riscos, melhorar controles e aumentar a segurança dos dados e sistemas.",
    },
    {
      title: "Redes e Firewall",
      description:
        "Configuração e suporte em firewall, acessos, segmentação de rede, conectividade e proteção perimetral.",
    },
    {
      title: "VICIdial e Telefonia",
      description:
        "Implantação, otimização e sustentação de ambientes de discagem, telefonia e operação de call center.",
    },
    {
      title: "Consultoria e Projetos",
      description:
        "Planejamento e execução de melhorias em TI com foco em organização, produtividade, continuidade e segurança.",
    },
  ];

  const differentials = [
    "Atendimento consultivo e personalizado",
    "Experiência prática em ambientes corporativos",
    "Foco em estabilidade, segurança e produtividade",
    "Soluções adaptadas à realidade de cada empresa",
  ];

  const audiences = [
    "Clínicas e consultórios",
    "Escritórios e empresas administrativas",
    "Pequenas e médias empresas",
    "Operações com telefonia e call center",
    "Empresas que precisam estruturar ou modernizar a TI",
  ];

  return (
    <main className="bg-slate-950 text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <FadeIn>
            <div className="max-w-4xl">
              <span className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
                Astreon Tech
              </span>

              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Soluções em TI, Infraestrutura e Segurança da Informação para empresas
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                A Astreon Tech ajuda pequenas e médias empresas com suporte técnico,
                redes, segurança, servidores e consultoria especializada para manter
                o ambiente estável, produtivo e protegido.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contato"
                  className="rounded-2xl bg-cyan-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Solicitar diagnóstico
                </Link>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/20 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  Falar no WhatsApp
                </a>

                <a
                  href={emailLink}
                  className="rounded-2xl border border-cyan-400 px-6 py-3 text-center font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
                >
                  Enviar e-mail
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <FadeIn>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Serviços
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Soluções pensadas para a rotina e o crescimento da sua empresa
            </h2>
            <p className="mt-4 text-slate-300">
              Atuamos com foco em suporte, infraestrutura, segurança e projetos
              para reduzir falhas, melhorar a operação e aumentar a confiabilidade
              do ambiente de TI.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <FadeIn>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Diferenciais
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Por que escolher a Astreon Tech?
                </h2>
                <p className="mt-4 text-slate-300">
                  Trabalhamos com abordagem prática e consultiva, entendendo o cenário
                  da empresa para propor soluções viáveis, seguras e alinhadas à rotina
                  operacional.
                </p>
              </div>

              <div className="grid gap-4">
                {differentials.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
                  >
                    <p className="font-medium text-slate-100">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Para quem atendemos
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                TI com foco em resultado, continuidade e segurança
              </h2>
              <p className="mt-4 text-slate-300">
                Atendemos empresas que precisam estruturar melhor a tecnologia,
                corrigir falhas recorrentes, melhorar a segurança e ganhar mais
                estabilidade na operação.
              </p>
            </div>

            <div className="grid gap-4">
              {audiences.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="font-medium text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-white/10 bg-cyan-500/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <FadeIn>
            <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-8 md:p-10">
              <h2 className="text-3xl font-bold md:text-4xl">
                Precisa de apoio em TI, infraestrutura ou segurança?
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-slate-300">
                Solicite um diagnóstico inicial e entenda como a Astreon Tech pode
                ajudar sua empresa a ganhar mais estabilidade, proteção e eficiência.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contato"
                  className="rounded-2xl bg-cyan-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Solicitar diagnóstico
                </Link>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/20 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  Chamar no WhatsApp
                </a>

                <a
                  href={emailLink}
                  className="rounded-2xl border border-cyan-400 px-6 py-3 text-center font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
                >
                  contato@astreontech.com.br
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold">Astreon Tech</p>
              <p className="text-slate-400">
                Soluções em TI, Infraestrutura e Segurança da Informação
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm text-slate-300 md:items-end">
              <a
                href="tel:+551132302090"
                className="transition hover:text-cyan-300"
              >
                +55 11 3230-2090
              </a>
              <a
                href={emailLink}
                className="transition hover:text-cyan-300"
              >
                contato@astreontech.com.br
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}