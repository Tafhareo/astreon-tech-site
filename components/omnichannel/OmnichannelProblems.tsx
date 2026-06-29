import FadeIn from "@/components/FadeIn";
import { X } from "lucide-react";

const problems = [
  "Cada vendedor atende pelo próprio WhatsApp",
  "Histórico fica perdido no celular do colaborador",
  "Clientes aguardam resposta sem fila organizada",
  "Gestão não sabe volume, tempo médio ou produtividade",
  "Não existe padrão de atendimento entre setores",
  "Troca de colaborador gera perda de relacionamento",
];

export default function OmnichannelProblems() {
  return (
    <section className="border-b border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
        <FadeIn>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              O problema
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              O WhatsApp pessoal não foi feito para uma operação comercial crescer.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
              Quando o atendimento fica espalhado, a empresa perde controle,
              histórico, produtividade e oportunidade de venda.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-red-400/20 bg-red-500/5 p-5"
              >
                <X className="mt-0.5 h-5 w-5 flex-none text-red-300" />
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
