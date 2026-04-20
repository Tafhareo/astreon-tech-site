import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Astreon Tech | Suporte de TI, Cibersegurança e Infraestrutura",
  description:
    "A Astreon Tech oferece suporte de TI, consultoria em infraestrutura, redes, firewall, servidores e segurança da informação para empresas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} min-h-screen bg-white text-slate-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
            <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo-astreon.png"
                  alt="Astreon Tech"
                  width={260}
                  height={70}
                  className="h-12 w-auto md:h-14"
                  priority
                />
              </Link>

              <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
                <Link href="/" className="transition hover:text-cyan-600">
                  Início
                </Link>
                <Link href="/servicos" className="transition hover:text-cyan-600">
                  Serviços
                </Link>
                <Link href="/sobre" className="transition hover:text-cyan-600">
                  Sobre
                </Link>
                <Link
                  href="/contato"
                  className="rounded-xl bg-cyan-500 px-5 py-2.5 text-white transition hover:bg-cyan-600"
                >
                  Contato
                </Link>
              </nav>

              <Link
                href="/contato"
                className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-600 md:hidden"
              >
                Contato
              </Link>
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <a
            href="https://wa.me/551132302090"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            title="Falar no WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-green-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-7 w-7 fill-current"
              aria-hidden="true"
            >
              <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.12-.41-2.13-1.31-.79-.71-1.32-1.58-1.48-1.85-.16-.27-.02-.42.12-.56.13-.13.27-.32.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.48-.84-2.02-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.91 2.91 4.62 4.08.64.27 1.14.43 1.53.55.64.2 1.22.17 1.68.1.51-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32Z" />
              <path d="M16.03 3.2c-6.97 0-12.63 5.64-12.63 12.58 0 2.22.58 4.39 1.68 6.31L3.2 28.8l6.93-1.82a12.7 12.7 0 0 0 5.9 1.5h.01c6.96 0 12.62-5.64 12.62-12.58 0-3.36-1.31-6.51-3.69-8.88A12.55 12.55 0 0 0 16.03 3.2Zm0 22.96h-.01a10.56 10.56 0 0 1-5.38-1.47l-.39-.23-4.11 1.08 1.1-4-.25-.41a10.45 10.45 0 0 1-1.61-5.56c0-5.78 4.73-10.48 10.55-10.48 2.82 0 5.46 1.09 7.45 3.07a10.4 10.4 0 0 1 3.1 7.41c0 5.78-4.74 10.49-10.55 10.49Z" />
            </svg>
          </a>

          <footer className="border-t border-white/10 bg-[#020617] text-white">
            <div className="mx-auto max-w-7xl px-6 py-14">
              <div className="grid gap-10 md:grid-cols-3">
                <div>
                  <h3 className="text-lg font-semibold">Astreon Tech</h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
                    Soluções em suporte de TI, infraestrutura, segurança da
                    informação e serviços corporativos com foco em estabilidade,
                    proteção e eficiência operacional.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Contato
                  </h4>
                  <div className="mt-4 space-y-3 text-sm text-slate-300">
                    <p>WhatsApp: (11) 3230-2090</p>
                    <p>E-mail: contato@astreontech.com.br</p>
                    <p>Atendimento remoto e presencial sob consulta</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Navegação
                  </h4>
                  <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
                    <Link href="/" className="transition hover:text-cyan-400">
                      Início
                    </Link>
                    <Link href="/servicos" className="transition hover:text-cyan-400">
                      Serviços
                    </Link>
                    <Link href="/sobre" className="transition hover:text-cyan-400">
                      Sobre
                    </Link>
                    <Link href="/contato" className="transition hover:text-cyan-400">
                      Contato
                    </Link>
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