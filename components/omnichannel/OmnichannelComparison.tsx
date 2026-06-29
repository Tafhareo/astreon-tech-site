import FadeIn from "@/components/FadeIn";
import { Check, X } from "lucide-react";

const rows = [
  ["WhatsApps espalhados", "Central única para a empresa"],
  ["Histórico perdido", "Histórico completo e centralizado"],
  ["Sem fila organizada", "Filas por setor e prioridade"],
  ["Gestão sem indicadores", "Dashboard e visão gerencial"],
  ["Respostas sem padrão", "Respostas rápidas e automações"],
  ["Dependência do colaborador", "Atendimento pertencente à empresa"],
];

export default function OmnichannelComparison() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
      <FadeIn>
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Antes e depois
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            O atendimento deixa de ser improvisado e vira processo.
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <div className="grid grid-cols-2 border-b border-white/10 bg-slate-900/80">
            <div className="p-5 text-sm font-bold text-red-200">Antes</div>
            <div className="p-5 text-sm font-bold text-emerald-200">
              Com a Astreon
            </div>
          </div>

          {rows.map(([before, after]) => (
            <div
              key={before}
              className="grid grid-cols-2 border-b border-white/10 last:border-b-0"
            >
              <div className="flex gap-3 p-5 text-sm text-slate-300">
                <X className="mt-0.5 h-4 w-4 flex-none text-red-300" />
                {before}
              </div>
              <div className="flex gap-3 p-5 text-sm text-slate-300">
                <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-300" />
                {after}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
