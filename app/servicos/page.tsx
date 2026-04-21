import Link from "next/link";

export default function Servicos() {
  const whatsappLink =
    "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vi%20os%20servi%C3%A7os%20da%20Astreon%20Tech%20e%20quero%20entender%20como%20podem%20me%20ajudar.";

  const services = [
    {
      title: "Suporte de TI",
      problem:
        "Sua equipe enfrenta lentidão, erros ou paradas frequentes nos sistemas?",
      solution:
        "Atuamos na resolução rápida de problemas, suporte aos usuários e manutenção do ambiente para garantir estabilidade e produtividade no dia a dia.",
    },
    {
      title: "Infraestrutura de TI",
      problem:
        "Sua empresa não tem uma estrutura organizada ou sofre com instabilidade?",
      solution:
        "Implantamos e organizamos redes, servidores e toda a base de TI para garantir desempenho, segurança e continuidade operacional.",
    },
    {
      title: "Segurança da Informação",
      problem:
        "Preocupado com vazamento de dados, ataques ou falhas de segurança?",
      solution:
        "Aplicamos boas práticas, controles e ajustes no ambiente para reduzir riscos e proteger as informações da sua empresa.",
    },
    {
      title: "Redes e Firewall",
      problem:
        "Sua rede é lenta, instável ou não tem controle de acesso adequado?",
      solution:
        "Configuramos e otimizamos redes e firewall para melhorar desempenho, segurança e controle do ambiente.",
    },
    {
      title: "VICIdial e Telefonia",
      problem:
        "Seu call center apresenta falhas, quedas ou baixa performance?",
      solution:
        "Implantamos, ajustamos e mantemos ambientes de discagem para garantir operação estável e eficiente.",
    },
    {
      title: "Consultoria e Projetos",
      problem:
        "Não sabe por onde começar para melhorar a TI da sua empresa?",
      solution:
        "Analisamos o cenário atual e indicamos melhorias práticas para evolução do ambiente com foco em resultado.",
    },
  ];

  return (
    <main className="bg-slate-950 text-white">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">
          Serviços de TI pensados para resolver problemas reais da sua empresa
        </h1>

        <p className="mt-6 text-lg text-slate-300">
          Atuamos diretamente nos pontos críticos da sua operação para melhorar
          desempenho, reduzir falhas e aumentar a segurança do seu ambiente.
        </p>
      </section>

      {/* LISTA DE SERVIÇOS */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h2 className="text-2xl font-semibold text-cyan-400">
                {service.title}
              </h2>

              <p className="mt-4 text-slate-300">
                <strong className="text-white">Problema:</strong>{" "}
                {service.problem}
              </p>

              <p className="mt-3 text-slate-300">
                <strong className="text-white">Solução:</strong>{" "}
                {service.solution}
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Falar sobre este serviço
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold">
            Sua empresa não precisa continuar enfrentando problemas de TI
          </h2>

          <p className="mt-4 text-slate-300">
            Quanto antes você agir, menor o impacto na sua operação. Solicite um
            diagnóstico e entenda exatamente o que pode ser melhorado.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contato"
              className="rounded-2xl bg-cyan-500 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Solicitar diagnóstico
            </Link>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/20 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}