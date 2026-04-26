import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import ScrollToTop from "@/components/ScrollToTop";
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
    title:
      "Astreon Tech | Suporte de TI e Segurança para Empresas",
    description:
      "Reduza falhas, melhore sua infraestrutura e aumente a estabilidade da sua empresa com a Astreon Tech.",
    url: siteUrl,
    siteName: "Astreon Tech",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png", // você pode criar depois
        width: 1200,
        height: 630,
        alt: "Astreon Tech",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Astreon Tech | Soluções em TI",
    description:
      "Infraestrutura, suporte e segurança para empresas.",
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

          {/* BOTÃO WHATSAPP MELHORADO */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-600"
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-30"></span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-8 w-8 fill-current"
            >
              <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.12-.41-2.13-1.31-.79-.71-1.32-1.58-1.48-1.85-.16-.27-.02-.42.12-.56.13-.13.27-.32.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.48-.84-2.02-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.91 2.91 4.62 4.08.64.27 1.14.43 1.53.55.64.2 1.22.17 1.68.1.51-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32Z" />
              <path d="M16.03 3.2c-6.97 0-12.63 5.64-12.63 12.58 0 2.22.58 4.39 1.68 6.31L3.2 28.8l6.93-1.82a12.7 12.7 0 0 0 5.9 1.5h.01c6.96 0 12.62-5.64 12.62-12.58 0-3.36-1.31-6.51-3.69-8.88A12.55 12.55 0 0 0 16.03 3.2Z" />
            </svg>
          </a>

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
                © 2026 Astreon Tech. Todos os direitos reservados.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}