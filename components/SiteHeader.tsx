"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  ChevronDown,
  Cloud,
  Headphones,
  Menu,
  MessageCircle,
  Server,
  ShieldCheck,
  X,
} from "lucide-react";

const whatsappLink =
  "https://wa.me/551132302090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Astreon%20Tech%20e%20quero%20solicitar%20uma%20demonstra%C3%A7%C3%A3o.";

const solutions = [
  {
    title: "Central Omnichannel",
    description: "Atendimento com filas, histórico, métricas e múltiplos atendentes.",
    href: "/omnichannel",
    icon: MessageCircle,
  },
  {
    title: "Infraestrutura",
    description: "Redes, servidores, firewall, cloud e ambientes corporativos.",
    href: "/servicos#infraestrutura",
    icon: Server,
  },
  {
    title: "Segurança",
    description: "Proteção de dados, boas práticas, acessos e governança.",
    href: "/servicos#seguranca",
    icon: ShieldCheck,
  },
  {
    title: "Cloud & Serviços",
    description: "Sustentação, suporte, monitoramento e projetos sob demanda.",
    href: "/servicos#cloud",
    icon: Cloud,
  },
];

export default function SiteHeader() {
  const router = useRouter();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
    setSolutionsOpen(false);
  };

  const scrollToHash = (hash: string) => {
    const element = document.getElementById(hash);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleSolutionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const [path, hash] = href.split("#");

    closeMenus();

    if (!hash) {
      router.push(path);
      return;
    }

    if (pathname === path) {
      window.history.pushState(null, "", href);
      setTimeout(() => scrollToHash(hash), 80);
      return;
    }

    sessionStorage.setItem("astreon-scroll-target", hash);
    router.push(path);
  };

  useEffect(() => {
    const target = sessionStorage.getItem("astreon-scroll-target");

    if (target) {
      sessionStorage.removeItem("astreon-scroll-target");
      setTimeout(() => scrollToHash(target), 300);
      return;
    }

    if (window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      setTimeout(() => scrollToHash(hash), 300);
    }
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 md:h-24 md:px-10">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Ir para a página inicial da Astreon Tech"
          onClick={closeMenus}
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

        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
          <Link href="/" className="transition hover:text-cyan-600">
            Início
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 transition hover:text-cyan-600"
              onClick={() => setSolutionsOpen((current) => !current)}
            >
              Soluções
              <ChevronDown className="h-4 w-4" />
            </button>

            {solutionsOpen && (
              <div className="absolute left-1/2 top-full w-[620px] -translate-x-1/2 pt-5">
                <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/15">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {solutions.map((item) => {
                      const Icon = item.icon;

                      return (
                        <a
                          key={item.title}
                          href={item.href}
                          onClick={(event) =>
                            handleSolutionClick(event, item.href)
                          }
                          className="group rounded-2xl border border-slate-100 p-4 transition hover:border-cyan-200 hover:bg-cyan-50"
                        >
                          <div className="flex gap-3">
                            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-slate-900 text-cyan-300 transition group-hover:bg-cyan-500 group-hover:text-white">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-bold text-slate-900">
                                {item.title}
                              </p>
                              <p className="mt-1 text-xs leading-5 text-slate-500">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>

                  <div className="mt-3 rounded-2xl bg-slate-950 p-4 text-white">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-bold">
                          Central de Atendimento Omnichannel
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          Organize WhatsApp, equipe, filas e indicadores em uma central profissional.
                        </p>
                      </div>

                      <Link
                        href="/omnichannel"
                        onClick={closeMenus}
                        className="rounded-xl bg-cyan-400 px-4 py-2 text-xs font-bold text-slate-950 transition hover:bg-cyan-300"
                      >
                        Conhecer
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/servicos" className="transition hover:text-cyan-600">
            Serviços
          </Link>
          <Link href="/sobre" className="transition hover:text-cyan-600">
            Quem Somos
          </Link>
          <Link href="/contato" className="transition hover:text-cyan-600">
            Contato
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-600"
          >
            <Headphones className="h-4 w-4" />
            Solicitar demonstração
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white shadow-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-6">
            <Link
              href="/"
              onClick={closeMenus}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              Início
            </Link>

            <div className="px-4 pb-2 pt-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
              Soluções
            </div>

            <div className="grid gap-2">
              {solutions.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={(event) => handleSolutionClick(event, item.href)}
                    className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-slate-950 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            <Link
              href="/servicos"
              onClick={closeMenus}
              className="mt-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              Serviços
            </Link>
            <Link
              href="/sobre"
              onClick={closeMenus}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              Quem Somos
            </Link>
            <Link
              href="/contato"
              onClick={closeMenus}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              Contato
            </Link>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenus}
              className="mt-4 rounded-2xl bg-cyan-500 px-4 py-3 text-center text-sm font-bold text-white shadow-md shadow-cyan-500/30 hover:bg-cyan-600"
            >
              Solicitar demonstração
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}