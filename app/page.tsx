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

  const quickPoints = [
    "Atendimento a pequenas e médias empresas",
    "Suporte remoto e orientação inicial",
    "Infraestrutura, segurança e continuidade",
  ];

  return (
    <main className="bg-slate-950 text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-24">
          <FadeIn>
            <div className="max-w-5xl">
              <span className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:text-sm">
                Astreon Tech
              </span>

              <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl xl:text-6xl">
                TI, infraestrutura e segurança para pequenas e médias empresas
                que precisam de estabilidade e suporte confiável
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 md:text-xl">
                A Astreon Tech ajuda empresas a reduzir falhas, organizar o
                ambiente de TI e reforçar a segurança da operação com uma
                atuação prática, consultiva e voltada para resultado.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contato"
                  className="rounded-2xl bg-cyan-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 sm:text-base"
                >
                  Solicitar diagnóstico
                </Link>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
                >
                  Falar no WhatsApp
                </a>

                <a
                  href={emailLink}
                  className="rounded-2xl border border-cyan-400 px-6 py-3 text-center text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10 sm:text-base"
                >
                  Enviar e-mail
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 md:px-10">
          <FadeIn>
            <div className="grid gap-4 md:grid-cols-3">
              {quickPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 text-sm font-medium text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
        <FadeIn>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Serviços
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
              Soluções pensadas para a rotina e o crescimento da sua empresa
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
              Atuamos com foco em suporte, infraestrutura, segurança e projetos
              para reduzir falhas, melhorar a operação e aumentar a
              confiabilidade do ambiente de TI.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-300">
                  {service.description}
                </p>
                <a
                  href={`https://wa.me/551132302090?text=${encodeURIComponent(
                    `Olá, vi no site o serviço de ${service.title} e quero entender como vocês podem me ajudar.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  Falar sobre este serviço
                </a>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
          <FadeIn>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Diferenciais
                </p>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
                  Por que escolher a Astreon Tech?
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
                  Trabalhamos com uma abordagem prática e consultiva, entendendo
                  o cenário da empresa para propor soluções viáveis, seguras e
                  alinhadas à rotina operacional.
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

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Para quem atendemos
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
                TI com foco em resultado, continuidade e segurança
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
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
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
          <FadeIn>
            <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-6 sm:p-8 md:p-10">
              <h2 className="max-w-3xl text-2xl font-bold sm:text-3xl md:text-4xl">
                Precisa de apoio em TI, infraestrutura ou segurança?
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                Solicite um diagnóstico inicial e entenda como a Astreon Tech
                pode ajudar sua empresa a ganhar mais estabilidade, proteção e
                eficiência.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contato"
                  className="rounded-2xl bg-cyan-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 sm:text-base"
                >
                  Solicitar diagnóstico
                </Link>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
                >
                  Chamar no WhatsApp
                </a>

                <a
                  href={emailLink}
                  className="rounded-2xl border border-cyan-400 px-6 py-3 text-center text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10 sm:text-base"
                >
                  contato@astreontech.com.br
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold">Astreon Tech</p>
              <p className="text-sm text-slate-400 sm:text-base">
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
                className="break-all transition hover:text-cyan-300 sm:break-normal"
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