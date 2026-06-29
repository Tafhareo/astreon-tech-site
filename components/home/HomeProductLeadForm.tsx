"use client";

import { FormEvent, useState } from "react";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const whatsappNumber = "551132302090";

export default function HomeProductLeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    whatsapp: "",
    agents: "",
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
      "Olá, vim pelo site da Astreon Tech e quero solicitar uma demonstração da Central Omnichannel.",
      "",
      `Nome: ${formData.name || "Não informado"}`,
      `Empresa: ${formData.company || "Não informado"}`,
      `WhatsApp: ${formData.whatsapp || "Não informado"}`,
      `Quantidade de atendentes: ${formData.agents || "Não informado"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-6 md:px-10 md:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Demonstração
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Veja como sua empresa pode organizar o atendimento pelo WhatsApp.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-300">
            Preencha os dados principais e envie uma solicitação pelo WhatsApp.
            O primeiro contato ajuda a identificar o melhor plano, o setup
            necessário e o caminho de implantação.
          </p>

          <div className="mt-6 grid gap-3 text-sm text-slate-300">
            {[
              "Análise inicial sem compromisso",
              "Indicação de plano: Essencial, Profissional ou Enterprise",
              "Setup e mensalidade explicados de forma clara",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/90 p-6 shadow-2xl shadow-cyan-950/30"
          >
            <div className="grid gap-4 md:grid-cols-2">
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
                  Atendentes
                </span>
                <select
                  value={formData.agents}
                  onChange={(event) => updateField("agents", event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
                >
                  <option value="">Selecione</option>
                  <option value="Até 5 atendentes">Até 5 atendentes</option>
                  <option value="6 a 15 atendentes">6 a 15 atendentes</option>
                  <option value="Mais de 15 atendentes">
                    Mais de 15 atendentes
                  </option>
                </select>
              </label>
            </div>

            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-400"
            >
              Solicitar demonstração pelo WhatsApp
              <ArrowRight className="h-4 w-4" />
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-slate-500">
              O formulário monta uma mensagem e abre uma conversa pelo WhatsApp.
            </p>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
