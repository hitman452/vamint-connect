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
    title: "Site Craft 2025",
    meta: "48-Hour Hackathon — 2025",
    text: "40+ participants across 25 teams built solutions for local businesses; two teams went on to win the final round of this hackathon.",
  },
  {
    title: "Open Debate competition participation",
    meta: "Workshop Series — 2025",
    text: "A 2-part debate series on Artificial Intelligence fundamentals, and it's affect on society attended by 150+ students.",
  },
  {
    title: "Debate Competition at GSMCoE",
    meta: "Bootcamp — 2025",
    text: "An intensive 5 hours competition on facts, logic, communication, public speaking, and leadership for 20+ members.",
  },
  {
    title: "Technobash 2025",
    meta: "Award — 2025",
    text: "Vamint played an crucial part in conducting the whole event. Organising and managing a team of 40+ students, designing and conducting technical and non technical events for the Computer department.",
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
