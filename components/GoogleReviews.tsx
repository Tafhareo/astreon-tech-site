import { Star } from "lucide-react";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
}

async function getGoogleReviews(): Promise<Review[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.warn("Google Places API key ou Place ID não configurado.");
    return [];
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&language=pt-BR&key=${apiKey}`,
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();
    const reviews: Review[] = data?.result?.reviews ?? [];
    return reviews.filter((r) => r.rating >= 4).slice(0, 6);
  } catch (err) {
    console.error("Erro ao buscar avaliações do Google:", err);
    return [];
  }
}

export default async function GoogleReviews() {
  const reviews = await getGoogleReviews();

  if (reviews.length === 0) return null;

  const doubled = [...reviews, ...reviews];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-white/5">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Prova social
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
            O que dizem sobre nosso trabalho
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            Avaliações reais do Google — atualizadas automaticamente sempre que
            um novo cliente avalia a Astreon Tech.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex w-max gap-6 testimonial-scroll">
            {doubled.map((item, index) => (
              <div
                key={`${item.author_name}-${index}`}
                className="flex min-h-[260px] w-[300px] flex-shrink-0 flex-col rounded-3xl border border-white/10 bg-slate-900/70 p-6 sm:w-[360px]"
              >
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-300 text-yellow-300"
                    />
                  ))}
                </div>

                <p className="mt-4 flex-1 whitespace-normal text-sm leading-7 text-slate-300">
                  &ldquo;{item.text}&rdquo;
                </p>

                <p className="mt-5 text-sm font-semibold text-cyan-300">
                  — {item.author_name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-scroll {
          animation: testimonial-scroll 35s linear infinite;
        }
        .testimonial-scroll:hover {
          animation-play-state: paused;
        }
        @keyframes testimonial-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
