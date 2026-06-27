import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Central de Atendimento Omnichannel",
  description:
    "Centralize conversas, distribua atendimentos por fila, automatize respostas e tenha controle total do relacionamento com o cliente.",
  alternates: {
    canonical: "/omnichannel",
  },
};

const whatsappLink =
  "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Astreon%20Tech%20e%20quero%20solicitar%20uma%20demonstra%C3%A7%C3%A3o%20da%20Central%20Omnichannel.";

const benefits = [
  "Atendimento centralizado em um único painel",
  "Múltiplos atendentes no mesmo número",
  "Filas por setor: comercial, suporte, cobrança e financeiro",
  "Histórico completo das conversas",
  "Automações e respostas rápidas",
  "Visão gerencial com métricas de atendimento",
  "Infraestrutura dedicada e suporte especializado",
];

const features = [
  "Múltiplos atendentes",
  "Distribuição por fila",
  "Histórico centralizado",
  "Automações",
  "Painel de métricas",
  "Integração com número existente",
  "Infraestrutura dedicada",
];

const steps = [
  "Diagnóstico da operação",
  "Configuração da central",
  "Integração com WhatsApp",
  "Treinamento da equipe",
  "Acompanhamento contínuo",
];

const audiences = [
  "Times comerciais",
  "Suporte ao cliente",
  "Cobrança e financeiro",
  "Clínicas e escolas",
  "Call centers e operações de atendimento",
];

export default function OmnichannelPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 md:px-10 md:py-24 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
              Central de Atendimento Omnichannel Astreon
            </span>

            <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Pare de perder cliente no WhatsApp pessoal do vendedor.
            </h1>

            <p className="mt-6 text-base leading-7 text-slate-300 sm:text-lg">
              Centralize conversas, distribua atendimentos por fila, automatize
              respostas e tenha controle total do relacionamento com o cliente.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-cyan-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Solicitar demonstração
              </a>

              <a
                href="#planos"
                className="rounded-2xl border border-white/20 px-6 py-3 text-center font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-300"
              >
                Ver planos
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
              <div className="rounded-2xl bg-slate-900 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Painel de atendimento
                    </p>
                    <p className="text-xs text-slate-400">WhatsApp centralizado</p>
                  </div>
                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-300">
                    Online
                  </span>
                </div>

                {["Comercial", "Suporte", "Financeiro"].map((item) => (
                  <div
                    key={item}
                    className="mb-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-sm font-semibold text-cyan-300">{item}</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Conversas organizadas por fila e atendente responsável.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                O problema
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
                Quando o atendimento fica espalhado, sua empresa perde controle.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
                Muitas empresas atendem clientes por WhatsApp pessoal, aparelhos
                compartilhados ou processos improvisados. Isso gera perda de
                histórico, falta de fila, retrabalho, demora nas respostas e
                pouca visibilidade gerencial.
              </p>
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
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
              Atendimento mais organizado, rápido e profissional.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 h-2 w-2 rounded-full bg-cyan-400" />
                <p className="text-sm leading-6 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
          <FadeIn>
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Recursos principais
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
                Tudo que sua equipe precisa para atender melhor.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-sm font-medium text-slate-200"
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
              Como funciona
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
              Da implantação ao acompanhamento contínuo.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <span className="text-sm font-bold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-sm font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
          <FadeIn>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Para quem é indicado
                </p>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
                  Ideal para empresas que vivem de conversa com cliente.
                </h2>
              </div>

              <div className="grid gap-4">
                {audiences.map((item) => (
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

      <section id="planos" className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
        <FadeIn>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Planos
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
              Custo fixo e previsível para sua operação.
            </h2>
            <p className="mt-4 text-slate-300">
              Sem cobrança por mensagem enviada ou recebida.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                name: "Essencial",
                price: "R$ 347/mês",
                desc: "Para empresas que querem organizar o atendimento inicial.",
              },
              {
                name: "Profissional",
                price: "R$ 597/mês",
                desc: "Para equipes com múltiplos setores, filas e maior volume.",
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className="rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-8"
              >
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="mt-4 text-4xl font-bold text-cyan-300">
                  {plan.price}
                </p>
                <p className="mt-4 text-slate-300">{plan.desc}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li>✓ Atendimento centralizado</li>
                  <li>✓ Filas e setores</li>
                  <li>✓ Histórico de conversas</li>
                  <li>✓ Suporte Astreon Tech</li>
                  <li>✓ Sem cobrança por mensagem</li>
                </ul>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block w-full rounded-2xl bg-cyan-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Solicitar demonstração
                </a>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-white/10 bg-cyan-500/10">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
          <FadeIn>
            <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-8 text-center md:p-10">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                Quer ver como isso funcionaria na sua empresa?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                Solicite uma demonstração e veja como organizar o atendimento via
                WhatsApp da sua equipe com uma solução implantada e sustentada
                pela Astreon Tech.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-2xl bg-cyan-500 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Solicitar demonstração
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}