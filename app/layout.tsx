import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://www.astreontech.com.br";

const whatsappLink =
  "https://wa.me/551132302090?text=Olá,%20vim%20pelo%20site%20da%20Astreon%20Tech%20e%20quero%20um%20diagnóstico%20de%20TI.";

const email = "contato@astreontech.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Astreon Tech | Suporte de TI, Infraestrutura e Segurança para Empresas",
    template: "%s | Astreon Tech",
  },

  description:
    "Suporte de TI, infraestrutura, redes, firewall e segurança da informação para empresas que precisam de estabilidade e desempenho.",

  openGraph: {
    title: "Astreon Tech | Suporte de TI e Segurança para Empresas",
    description:
      "Reduza falhas, melhore sua infraestrutura e aumente a estabilidade da sua empresa com a Astreon Tech.",
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
    title: "Astreon Tech | Soluções em TI",
    description: "Infraestrutura, suporte e segurança para empresas.",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} min-h-screen bg-white text-slate-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <ScrollToTop />

          <main className="flex-1">{children}</main>

          {/* BOTÃO WHATSAPP COM BALÃO DE CHAT */}
          <WhatsAppButton />

          {/* FOOTER */}
          <footer className="border-t border-white/10 bg-[#020617] text-white">
            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 md:px-10 md:py-14">
              <div className="grid gap-10 md:grid-cols-3">

                <div>
                  <h3 className="text-lg font-semibold">Astreon Tech</h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
                    Suporte de TI, infraestrutura e segurança da informação para empresas que precisam de estabilidade e performance.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Contato
                  </h4>
                  <div className="mt-4 space-y-3 text-sm text-slate-300">
                    <p>
                      WhatsApp:{" "}
                      <a href={whatsappLink} target="_blank" className="hover:text-cyan-400">
                        (11) 3230-2090
                      </a>
                    </p>
                    <p>
                      E-mail:{" "}
                      <a href={`mailto:${email}`} className="hover:text-cyan-400">
                        {email}
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Navegação
                  </h4>
                  <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
                    <Link href="/">Início</Link>
                    <Link href="/servicos">Serviços</Link>
                    <Link href="/sobre">Sobre</Link>
                    <Link href="/contato">Contato</Link>
                  </div>
                </div>

              </div>

              <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
                © {new Date().getFullYear()} Astreon Tech. Todos os direitos reservados.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}