"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 md:h-24 md:px-10">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Ir para a página inicial da Astreon Tech"
          onClick={closeMenu}
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
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-6">
            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-cyan-600"
            >
              Início
            </Link>
            <Link
              href="/servicos"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-cyan-600"
            >
              Serviços
            </Link>
            <Link
              href="/sobre"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-cyan-600"
            >
              Sobre
            </Link>
            <Link
              href="/contato"
              onClick={closeMenu}
              className="mt-2 rounded-xl bg-cyan-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-cyan-600"
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}