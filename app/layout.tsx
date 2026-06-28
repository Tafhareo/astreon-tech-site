import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import {
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
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
    default:
      "Astreon Tech | Infraestrutura, Segurança e Central Omnichannel",
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
    description:
      "Infraestrutura, segurança e Central Omnichannel para empresas.",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

const footerSolutions = [
  { label: "Central Omnichannel", href: "/omnichannel" },
  { label: "Infraestrutura de TI", href: "/servicos" },
  { label: "Segurança da Informação", href: "/servicos" },
  { label: "Suporte e Sustentação", href: "/servicos" },
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
            <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10">
              <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    <Sparkles className="h-3.5 w-3.5" />
                    Astreon Tech
                  </div>

                  <h3 className="mt-5 max-w-sm text-2xl font-bold leading-tight">
                    Tecnologia que conecta, protege e impulsiona empresas.
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
                    Infraestrutura, segurança da informação, suporte especializado
                    e Central de Atendimento Omnichannel para empresas que precisam
                    de estabilidade, controle e crescimento.
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-400"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Solicitar demonstração
                    </a>

                    <Link
                      href="/omnichannel"
                      className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-300"
                    >
                      Conhecer Omnichannel
                    </Link>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Soluções
                  </h4>
                  <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
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
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Empresa
                  </h4>
                  <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
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
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Contato
                  </h4>

                  <div className="mt-5 space-y-4 text-sm text-slate-300">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-3 transition hover:text-cyan-300"
                    >
                      <MessageCircle className="mt-0.5 h-4 w-4 flex-none text-cyan-400" />
                      <span>(11) 3230-2090</span>
                    </a>

                    <a
                      href={`mailto:${email}`}
                      className="flex gap-3 transition hover:text-cyan-300"
                    >
                      <Mail className="mt-0.5 h-4 w-4 flex-none text-cyan-400" />
                      <span>{email}</span>
                    </a>

                    <div className="flex gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 flex-none text-cyan-400" />
                      <span>Atendimento remoto para empresas no Brasil</span>
                    </div>

                    <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-emerald-300" />
                      <span>
                        Implantação, sustentação e suporte técnico com foco em
                        segurança e continuidade.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
                <p>
                  © {currentYear} Astreon Tech. Todos os direitos reservados.
                </p>

                <div className="flex flex-wrap gap-4">
                  <span>Infraestrutura</span>
                  <span>Segurança</span>
                  <span>Omnichannel</span>
                  <span>Suporte</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
