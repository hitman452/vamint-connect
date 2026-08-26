import { createFileRoute } from "@tanstack/react-router";
import { ImageIcon } from "lucide-react";
import { PageHeader, Section } from "@/components/site/Section";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements & Archive | Vamint, GSMCOE" },
      {
        name: "description",
        content:
          "Past hackathons, workshop series, bootcamps and awards from Vamint, the technical club of Genba Sopanrao Moze College of Engineering.",
      },
      { property: "og:title", content: "Achievements & Archive — Vamint" },
      {
        property: "og:description",
        content: "A look back at the hackathons, workshops and awards Vamint has built together.",
      },
    ],
  }),
  component: Achievements,
});

const entries = [
  {
    title: "CodeSprint 2025",
    meta: "48-Hour Hackathon — 2025",
    text: "220+ participants across 40 teams built solutions for local NGOs; three teams went on to represent the college at a state-level hackathon.",
  },
  {
    title: "TechTalks: Future of AI",
    meta: "Workshop Series — 2025",
    text: "A 3-part workshop series on machine learning fundamentals, attended by 150+ students.",
  },
  {
    title: "Soft Skills Bootcamp",
    meta: "Bootcamp — 2025",
    text: "An intensive two-day bootcamp on communication, public speaking, and leadership for 80+ members.",
  },
  {
    title: "Inter-College Hackathon Circuit 2025",
    meta: "Award — 2025",
    text: "Vamint's team placed 1st runner-up representing the college.",
  },
];

function Achievements() {
  return (
    <>
      <PageHeader
        eyebrow="// Archive"
        title="Achievements & Archive"
        intro="A look back at what Vamint has built together."
      />

      <Section>
        <ol className="relative space-y-8 border-l border-border pl-6 md:pl-10">
          {entries.map((e) => (
            <li key={e.title} className="relative">
              <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-gold bg-background md:-left-[47px]" />
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <p className="eyebrow">{e.meta}</p>
                <h2 className="mt-2 text-xl font-bold text-primary">{e.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-border bg-secondary/60"
                      aria-hidden="true"
                    >
                      <ImageIcon className="h-5 w-5 text-muted-foreground/60" />
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted-foreground">Photo gallery coming soon.</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
