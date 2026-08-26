import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/site/Section";
import { getEventFolder } from "@/data/events";

export const Route = createFileRoute("/highlights/$slug")({
  loader: ({ params }) => {
    const event = getEventFolder(params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Event not found | Vamint" }, { name: "robots", content: "noindex" }],
      };
    }
    const { event } = loaderData;
    return {
      meta: [
        { title: `${event.name} Highlights | Vamint` },
        { name: "description", content: event.summary },
        { property: "og:title", content: `${event.name} — Highlights | Vamint` },
        { property: "og:description", content: event.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: EventNotFound,
  component: EventHighlights,
});

function EventNotFound() {
  return (
    <Section>
      <h1 className="text-3xl font-bold text-primary">Event not found</h1>
      <p className="mt-3 text-muted-foreground">
        We couldn't find highlights for that event.
      </p>
      <Link to="/achievements" className="mt-6 inline-block text-sm font-semibold text-gold">
        Back to the archive
      </Link>
    </Section>
  );
}

function EventHighlights() {
  const { event } = Route.useLoaderData();

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-card">
        <img
          src={event.image}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-15 blur-md"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-14 md:py-20">
          <p className="eyebrow">{event.meta}</p>
          <h1 className="mt-3 text-3xl font-bold text-primary md:text-5xl">{event.name}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {event.summary}
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 md:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold text-primary">Highlights</h2>
            <ul className="mt-5 space-y-3">
              {event.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {h}
                </li>
              ))}
            </ul>
            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" /> Back to home
            </Link>
          </div>
          <img
            src={event.image}
            alt={`Photo from ${event.name}`}
            loading="lazy"
            width={1024}
            height={768}
            className="w-full rounded-xl border border-border object-cover shadow-card"
          />
        </div>
      </Section>
    </>
  );
}
