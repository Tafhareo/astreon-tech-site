"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    value: 10,
    suffix: "+",
    label: "Anos de experiência",
    description: "Atuando em infraestrutura, segurança e suporte corporativo",
  },
  {
    value: 200,
    suffix: "+",
    label: "Projetos entregues",
    description: "Implantações, migrações e reestruturações de ambientes de TI",
  },
  {
    value: 1500,
    suffix: "+",
    label: "Usuários suportados",
    description: "Em ambientes corporativos de pequeno e médio porte",
  },
  {
    value: 100,
    suffix: "%",
    label: "Satisfação no Google",
    description: "Baseada em avaliações reais 5 estrelas de clientes",
  },
];

/**
 * Animação de contagem com fallback resiliente.
 * - Antes da animação rodar, mostra o valor final (não mais "0")
 * - Quando entra no viewport, reseta para 0 e anima até o valor final
 * - Respeita prefers-reduced-motion
 * - Pausa automaticamente quando aba está em background
 */
function useCountUp(target: number, duration: number, active: boolean) {
  // CORREÇÃO PRINCIPAL: começa com o valor final, não com 0
  // Assim, se JS demorar ou animação falhar, o usuário NUNCA vê "0+"
  const [count, setCount] = useState(target);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!active || hasAnimated.current) return;
    hasAnimated.current = true;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setCount(target);
      return;
    }

    // Reseta para 0 só na hora de animar (curtíssimo, imperceptível)
    setCount(0);

    let rafId: number;
    let startTime: number | null = null;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [active, target, duration]);

  return count;
}

function StatCard({
  stat,
  active,
  index,
}: {
  stat: Stat;
  active: boolean;
  index: number;
}) {
  const count = useCountUp(stat.value, 1800, active);

  // Formatação de número grande com separador de milhar (1.500 em vez de 1500)
  const formattedCount = count.toLocaleString("pt-BR");

  return (
    <div
      className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/20"
      style={{
        opacity: active ? 1 : 1, // Sempre visível desde o SSR
        transform: active ? "translateY(0)" : "translateY(0)",
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
      }}
    >
      <div className="text-4xl font-bold text-cyan-400 tracking-tight tabular-nums">
        {formattedCount}
        {stat.suffix}
      </div>
      <div className="mt-3 text-base font-semibold text-slate-100">
        {stat.label}
      </div>
      <div className="mt-1 text-sm leading-6 text-slate-400">
        {stat.description}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="border-y border-white/10 bg-white/5">
      <div
        ref={ref}
        className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16"
      >
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Números que falam por si
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Experiência real aplicada no dia a dia da sua empresa
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            Mais de uma década atuando em infraestrutura, segurança e suporte
            para empresas que dependem de tecnologia para operar.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} active={active} index={i} />
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Números baseados em mais de 10 anos de atuação em ambientes corporativos.
        </p>
      </div>
    </section>
  );
}