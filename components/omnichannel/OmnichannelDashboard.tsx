import FadeIn from "@/components/FadeIn";
import { BarChart3, MessageCircle } from "lucide-react";

export default function OmnichannelDashboard() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Dashboard
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Controle da operação em uma visão simples e gerencial.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            Acompanhe conversas, filas, tempo médio, atendimentos finalizados e
            produtividade. A gestão deixa de depender de achismo e passa a ter
            dados para agir.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/80 p-5 shadow-2xl shadow-black/30">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Painel de atendimento
                  </p>
                  <p className="text-xs text-slate-400">
                    Métricas ilustrativas da operação
                  </p>
                </div>
                <BarChart3 className="h-5 w-5 text-cyan-300" />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["72%", "resolvidos no primeiro contato"],
                  ["28", "conversas em andamento"],
                  ["3", "filas ativas"],
                  ["96%", "satisfação estimada"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="text-2xl font-bold text-cyan-300">{value}</p>
                    <p className="mt-1 text-xs text-slate-400">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                {["Cliente aguardando", "Em atendimento", "Finalizado"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <p className="text-sm font-semibold text-slate-200">
                        {item}
                      </p>
                      <MessageCircle className="h-5 w-5 text-cyan-300" />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
