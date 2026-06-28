import FadeIn from "@/components/FadeIn";

const whatsappLink =
  "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20Sobre%20da%20Astreon%20Tech%20e%20quero%20solicitar%20um%20diagn%C3%B3stico.";

export default function AboutFinalCTA() {
  return (
    <section className="bg-cyan-500/10">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
        <FadeIn>
          <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/90 p-8 text-center shadow-2xl shadow-cyan-950/30 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Vamos conversar?
            </p>

            <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-bold sm:text-4xl md:text-5xl">
              Vamos construir a próxima evolução tecnológica da sua empresa?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Fale com a Astreon Tech e descubra como podemos ajudar sua empresa
              com infraestrutura, segurança, suporte e comunicação omnichannel.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-cyan-500 px-8 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Solicitar diagnóstico
              </a>

              <a
                href="/omnichannel"
                className="rounded-2xl border border-white/20 px-8 py-3 text-center font-semibold text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
              >
                Conhecer Central Omnichannel
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
