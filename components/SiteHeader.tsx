"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappLink =
    "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Astreon%20Tech%20e%20quero%20solicitar%20um%20diagn%C3%B3stico%20de%20TI.";

  const handleNavigate = () => {
    setMenuOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 md:h-24 md:px-10">
        <Link
          href="/"
          scroll={true}
          className="flex items-center"
          aria-label="Ir para a página inicial da Astreon Tech"
          onClick={handleNavigate}
        >
          <Image
            src="/images/logo-astreon.png"
            alt="Logo da Astreon Tech"
            width={260}
            height={70}
            className="h-10 w-auto sm:h-11 md:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
          <Link href="/" scroll={true} onClick={handleNavigate} className="transition hover:text-cyan-600">
            Início
          </Link>

          <Link href="/servicos" scroll={true} onClick={handleNavigate} className="transition hover:text-cyan-600">
            Serviços
          </Link>

          <Link href="/sobre" scroll={true} onClick={handleNavigate} className="transition hover:text-cyan-600">
            Sobre
          </Link>

          <Link href="/contato" scroll={true} onClick={handleNavigate} className="transition hover:text-cyan-600">
            Contato
          </Link>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-cyan-500 px-5 py-2.5 text-white transition hover:bg-cyan-600"
          >
            Diagnóstico
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white shadow-lg md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-6">
            <Link href="/" scroll={true} onClick={handleNavigate} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">
              Início
            </Link>

            <Link href="/servicos" scroll={true} onClick={handleNavigate} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">
              Serviços
            </Link>

            <Link href="/sobre" scroll={true} onClick={handleNavigate} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">
              Sobre
            </Link>

            <Link href="/contato" scroll={true} onClick={handleNavigate} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">
              Contato
            </Link>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-xl bg-cyan-500 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-cyan-600"
            >
              Solicitar diagnóstico no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}