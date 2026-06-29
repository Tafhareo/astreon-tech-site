import FadeIn from "@/components/FadeIn";

const integrations = [
  "WhatsApp",
  "IA",
  "Webhooks",
  "APIs REST",
  "CRM",
  "n8n",
  "Google Workspace",
  "Microsoft 365",
  "Relatórios",
  "Automações",
  "Telefonia",
  "Sistemas internos",
];

export default function OmnichannelIntegrations() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
        <FadeIn>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Integrações
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Preparada para conectar atendimento, automações e processos.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
              A Central Omnichannel Astreon pode evoluir com integrações,
              automações, webhooks e APIs conforme a necessidade da operação.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {integrations.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-4 text-center text-sm font-semibold text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
              >
                {item}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
