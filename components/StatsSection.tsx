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
    value: 50,
    suffix: "+",
    label: "Projetos entregues",
    description: "Implantações, migrações e reestruturações de ambientes de TI",
  },
  {
    value: 500,
    suffix: "+",
    label: "Usuários suportados",
    description: "Em ambientes corporativos de pequeno e médio porte",
  },
  {
    value: 98,
    suffix: "%",
    label: "Taxa de satisfação",
    description: "Baseada em avaliações reais de clientes no Google",
  },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
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

  return (
    <div
      className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/20"
      style={{
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
      }}
    >
      <div className="text-4xl font-bold text-cyan-400 tracking-tight">
        {count}
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
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
          Números baseados em 10 anos de atuação em ambientes corporativos.
        </p>
      </div>
    </section>
  );
}
