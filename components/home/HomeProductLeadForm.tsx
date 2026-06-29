"use client";

import { FormEvent, useState } from "react";
import FadeIn from "@/components/FadeIn";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  MessageCircle,
  UsersRound,
} from "lucide-react";

const whatsappNumber = "551132302090";

const benefits = [
  {
    icon: MessageCircle,
    title: "WhatsApp centralizado",
    text: "Atenda clientes em um número corporativo com histórico e organização.",
  },
  {
    icon: UsersRound,
    title: "Múltiplos atendentes",
    text: "Distribua conversas por equipe, setor, fila ou responsável.",
  },
  {
    icon: Bot,
    title: "IA e automações",
    text: "Acelere respostas, triagens e encaminhamentos com fluxos inteligentes.",
  },
  {
    icon: BarChart3,
    title: "Indicadores em tempo real",
    text: "Acompanhe volume, tempo médio, atendimentos e produtividade.",
  },
];

export default function HomeProductLeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    whatsapp: "",
    email: "",
    agents: "",
    challenge: "",
  });

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Olá, vim pelo site da Astreon Tech e quero conhecer a Central Omnichannel.",
      "",
      `Nome: ${formData.name || "Não informado"}`,
      `Empresa: ${formData.company || "Não informado"}`,
      `WhatsApp: ${formData.whatsapp || "Não informado"}`,
      `E-mail: ${formData.email || "Não informado"}`,
      `Quantidade de atendentes: ${formData.agents || "Não informado"}`,
      `Principal desafio: ${formData.challenge || "Não informado"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Produto Astreon Tech
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
            Central Omnichannel Astreon para vender, atender e acompanhar melhor.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Uma plataforma para organizar WhatsApp, equipe, filas, histórico,
            automações, IA e indicadores em uma central profissional, com setup
            e sustentação da Astreon Tech.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-4 font-semibold text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
              Setup separado
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
              Mensalidade fixa
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
              Enterprise sob consulta
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/90 p-6 shadow-2xl shadow-cyan-950/30">
            <div className="mb-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Solicitar demonstração
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Receba uma análise inicial pelo WhatsApp.
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Preencha os campos e envie as informações direto para a Astreon
                Tech. Depois podemos integrar isso à própria central.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Nome
                  </span>
                  <input
                    value={formData.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                    placeholder="Seu nome"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Empresa
                  </span>
                  <input
                    value={formData.company}
                    onChange={(event) =>
                      updateField("company", event.target.value)
                    }
                    className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                    placeholder="Nome da empresa"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    WhatsApp
                  </span>
                  <input
                    value={formData.whatsapp}
                    onChange={(event) =>
                      updateField("whatsapp", event.target.value)
                    }
                    className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                    placeholder="(00) 00000-0000"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    E-mail
                  </span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                    placeholder="nome@empresa.com.br"
                  />
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Quantidade de atendentes
                </span>
                <select
                  value={formData.agents}
                  onChange={(event) => updateField("agents", event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="Até 5 atendentes">Até 5 atendentes</option>
                  <option value="6 a 15 atendentes">6 a 15 atendentes</option>
                  <option value="Mais de 15 atendentes">
                    Mais de 15 atendentes
                  </option>
                </select>
              </label>

              <label className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Principal desafio
                </span>
                <textarea
                  value={formData.challenge}
                  onChange={(event) =>
                    updateField("challenge", event.target.value)
                  }
                  className="min-h-28 w-full resize-none rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                  placeholder="Ex: muitos atendimentos pelo WhatsApp, falta de histórico, equipe sem controle, demora nas respostas..."
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-400"
              >
                Enviar pelo WhatsApp
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-400">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-300" />
                <p>
                  O formulário não grava dados no site neste momento. Ele monta
                  uma mensagem e abre uma conversa pelo WhatsApp.
                </p>
              </div>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
