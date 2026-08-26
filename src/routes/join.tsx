import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, Card } from "@/components/site/Section";
import { RegistrationForm } from "@/components/site/RegistrationForm";
import { Sparkles, Users, CalendarCheck } from "lucide-react";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join Vamint — Member Registration | GSMCOE" },
      {
        name: "description",
        content:
          "Become a member of Vamint, the technical club at Genba Sopanrao Moze College of Engineering. Register in a minute and get access to hackathons and workshops.",
      },
      { property: "og:title", content: "Join Vamint — Member Registration" },
      {
        property: "og:description",
        content:
          "Register as a Vamint member for hackathons, technical workshops and soft-skills events.",
      },
    ],
  }),
  component: Join,
});

const reasons = [
  {
    icon: Sparkles,
    title: "Practical skills",
    text: "Learn emerging technologies through hands-on workshops and build real projects with peers.",
  },
  {
    icon: Users,
    title: "A real community",
    text: "Work alongside seniors, faculty and industry mentors who are invested in your growth.",
  },
  {
    icon: CalendarCheck,
    title: "Priority access",
    text: "Members get early access to hackathons, bootcamps and limited-seat sessions.",
  },
];

function Join() {
  return (
    <>
      <PageHeader
        eyebrow="// Membership"
        title="Join Vamint"
        intro="Membership is open to every student of Genba Sopanrao Moze College of Engineering — any department, any year."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((r) => (
            <Card key={r.title}>
              <r.icon className="h-7 w-7 text-gold" />
              <h2 className="mt-4 text-lg font-semibold text-primary">{r.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
          <h2 className="text-2xl font-bold text-primary">Member registration</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Fill in your details and our team will follow up by email.
          </p>
          <div className="mt-8">
            <RegistrationForm
              kind="member"
              submitLabel="Submit registration"
              successTitle="Welcome to Vamint!"
              successMessage="Your registration has been received. Our team will follow up by email with your onboarding details and the next event on the calendar."
            />
          </div>
        </div>
      </Section>
    </>
  );
}
