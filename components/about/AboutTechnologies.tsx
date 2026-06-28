import FadeIn from "@/components/FadeIn";

const technologies = [
  "Microsoft",
  "Linux",
  "Ubuntu",
  "Docker",
  "Cloudflare",
  "Nginx",
  "PostgreSQL",
  "Redis",
  "Hyper-V",
  "Fortinet",
  "AWS",
  "OpenAI",
  "N8N",
  "WhatsApp",
  "Telefonia IP",
  "Segurança",
];

export default function AboutTechnologies() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
        <FadeIn>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Tecnologias e áreas de atuação
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Uma base técnica preparada para ambientes modernos.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
              A Astreon Tech combina tecnologias consolidadas com boas práticas
              para entregar ambientes mais seguros, integrados e escaláveis.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-4 text-center text-sm font-semibold text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
              >
                {tech}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
