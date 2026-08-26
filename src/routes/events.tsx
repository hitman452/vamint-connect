import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import { PageHeader, Section, SectionTitle, Card } from "@/components/site/Section";
import { RegistrationForm } from "@/components/site/RegistrationForm";

const EVENT_NAME = "CodeSprint 2026";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — CodeSprint 2026 Hackathon | Vamint" },
      {
        name: "description",
        content:
          "Register for CodeSprint 2026, Vamint's flagship 24-hour hackathon at Genba Sopanrao Moze College of Engineering, held October 18–19, 2026.",
      },
      { property: "og:title", content: "CodeSprint 2026 — Vamint's 24-Hour Hackathon" },
      {
        property: "og:description",
        content:
          "Student teams build working prototypes in 24 hours, mentored by industry professionals. Registrations close October 10, 2026.",
      },
    ],
  }),
  component: Events,
});

function Events() {
  return (
    <>
      <PageHeader
        eyebrow="// Upcoming event"
        title="CodeSprint 2026"
        intro="Vamint's flagship 24-hour hackathon returns. Register your details below to take part."
      />

      <Section>
        <Card>
          <p className="text-sm font-semibold text-gold">24-Hour Hackathon</p>
          <h2 className="mt-2 text-2xl font-bold text-primary md:text-3xl">CodeSprint 2026</h2>
          <div className="mt-5 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-gold" /> October 18–19, 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" /> Main Auditorium, GSMCOE
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" /> Registrations close October 10, 2026
            </span>
          </div>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            CodeSprint 2026 is Vamint's flagship 24-hour hackathon where student teams build working
            prototypes around a live problem statement, mentored by industry professionals and
            senior club members.
          </p>
        </Card>
      </Section>

      <Section className="pt-0">
        <SectionTitle eyebrow="// Registration" title="Register for CodeSprint 2026" />
        <div className="rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
          <RegistrationForm
            kind="event"
            eventName={EVENT_NAME}
            submitLabel="Register for CodeSprint 2026"
            successTitle="You're registered for CodeSprint 2026"
            successMessage="Thanks for signing up. Our team will email you the problem statement, schedule and check-in details before the event."
          />
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          More events coming soon — follow us on Instagram and LinkedIn for updates.
        </p>
      </Section>
    </>
  );
}
