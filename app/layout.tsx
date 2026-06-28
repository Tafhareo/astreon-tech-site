import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://www.astreontech.com.br";

const whatsappLink =
  "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Astreon%20Tech%20e%20quero%20solicitar%20uma%20demonstra%C3%A7%C3%A3o.";

const email = "contato@astreontech.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Astreon Tech | Infraestrutura, Segurança e Central Omnichannel",
    template: "%s | Astreon Tech",
  },
  description:
    "Astreon Tech entrega soluções de infraestrutura, segurança da informação, suporte especializado e Central de Atendimento Omnichannel para empresas.",
  keywords: [
    "Astreon Tech",
    "central de atendimento omnichannel",
    "atendimento whatsapp empresas",
    "infraestrutura de TI",
    "segurança da informação",
    "suporte de TI",
    "firewall",
    "cloud",
    "consultoria de TI",
  ],
  openGraph: {
    title: "Astreon Tech | Soluções de Tecnologia para Empresas",
    description:
      "Infraestrutura, segurança, suporte e Central de Atendimento Omnichannel para empresas que precisam crescer com tecnologia confiável.",
    url: siteUrl,
    siteName: "Astreon Tech",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Astreon Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Astreon Tech | Soluções de Tecnologia",
    description: "Infraestrutura, segurança e Central Omnichannel para empresas.",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

const footerSolutions = [
  { label: "Central Omnichannel", href: "/omnichannel" },
  { label: "Infraestrutura", href: "/servicos#infraestrutura" },
  { label: "Segurança", href: "/servicos#seguranca" },
  { label: "Suporte", href: "/servicos#suporte" },
];

const footerCompany = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Quem Somos", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} min-h-screen bg-white text-slate-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <ScrollToTop />

          <main className="flex-1">{children}</main>

          <WhatsAppButton />

          <footer className="border-t border-white/10 bg-[#020617] text-white">
            <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 md:px-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <h3 className="text-xl font-bold">Astreon Tech</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Infraestrutura, segurança da informação e Central Omnichannel
                    para empresas que precisam de estabilidade, controle e
                    crescimento.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-400"
                  >
                    Solicitar demonstração
                  </a>

                  <Link
                    href="/omnichannel"
                    className="rounded-xl border border-white/15 px-5 py-2.5 text-sm font-bold text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-300"
                  >
                    Central Omnichannel
                  </Link>
                </div>
              </div>

              <div className="mt-8 grid gap-6 border-t border-white/10 pt-6 md:grid-cols-3">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Soluções
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-300">
                    {footerSolutions.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="transition hover:text-cyan-300"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Empresa
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-300">
                    {footerCompany.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="transition hover:text-cyan-300"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Contato
                  </h4>
                  <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-cyan-300"
                    >
                      WhatsApp: (11) 3230-2090
                    </a>
                    <a
                      href={`mailto:${email}`}
                      className="transition hover:text-cyan-300"
                    >
                      E-mail: {email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-5 text-center text-xs text-slate-500">
                © {currentYear} Astreon Tech. Todos os direitos reservados.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
