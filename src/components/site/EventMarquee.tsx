import { Link } from "@tanstack/react-router";
import { eventFolders } from "@/data/events";

function EventCard({
  slug,
  name,
  meta,
  image,
}: {
  slug: string;
  name: string;
  meta: string;
  image: string;
}) {
  return (
    <Link
      to="/highlights/$slug"
      params={{ slug }}
      className="group relative flex h-40 w-64 shrink-0 flex-col justify-end overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-card transition-shadow hover:shadow-lift md:h-48 md:w-80"
    >
      <img
        src={image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1024}
        height={768}
        className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-15 blur-md"
      />
      <span className="relative eyebrow">{meta}</span>
      <span className="relative mt-1 font-display text-lg font-bold text-primary md:text-xl">
        {name}
      </span>
      <span className="relative mt-1 text-xs text-muted-foreground group-hover:text-gold">
        View highlights →
      </span>
    </Link>
  );
}

export function EventMarquee() {
  return (
    <section className="border-y border-border bg-card py-12">
      <div className="mx-auto mb-6 max-w-6xl px-5">
        <p className="eyebrow">// Event folders</p>
        <h2 className="mt-2 text-2xl font-bold text-primary md:text-3xl">
          Moments from our events
        </h2>
      </div>
      <div className="marquee group">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 gap-5 pr-5" aria-hidden={copy === 1}>
              {eventFolders.map((e) => (
                <EventCard key={`${copy}-${e.slug}`} {...e} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
