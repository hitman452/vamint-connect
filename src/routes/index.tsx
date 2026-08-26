import { createFileRoute, Link } from "@tanstack/react-router";
import { Code2, GraduationCap, Mic, Users, CalendarDays, MapPin } from "lucide-react";
import { Section, SectionTitle, Card } from "@/components/site/Section";
import logo from "@/assets/vamint-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vamint — Code. Collaborate. Evolve." },
      {
        name: "description",
        content:
          "Vamint is the technical club at Genba Sopanrao Moze College of Engineering, hosting hackathons, technical workshops and soft-skills events for students.",
      },
      { property: "og:title", content: "Vamint — Code. Collaborate. Evolve." },
      {
        property: "og:description",
        content:
          "Hackathons, technical workshops and soft-skills events at Genba Sopanrao Moze College of Engineering.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: Code2,
    title: "Hackathons",
    text: "Team-based build sprints where students ship working prototypes against real problem statements.",
  },
  {
    icon: GraduationCap,
    title: "Technical Workshops",
    text: "Hands-on sessions on emerging technologies, taught and discussed openly with the community.",
  },
  {
    icon: Mic,
    title: "Soft Skills Development",
    text: "Communication, public speaking and leadership sessions that round out technical talent.",
  },
  {
    icon: Users,
    title: "Community & Networking",
    text: "A peer network of students, seniors and industry mentors who learn and build together.",
  },
];

const stats = [
  { value: "50+", label: "Participants Connected" },
  { value: "4+", label: "Events Hosted" },
  { value: "5+", label: "Workshops Conducted" },
];

function Home() {
  return (
    <>
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.3fr_1fr] md:py-24">
          <div>
            <p className="eyebrow">// Technical Club — GSMCOE</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-primary md:text-6xl">
              Vamint
            </h1>
            <p className="mt-3 font-display text-xl text-gold md:text-2xl">
              Code. Collaborate. Evolve.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Vamint is the technical club at Genba Sopanrao Moze College of Engineering. We run
              hackathons, technical workshops on emerging technologies, soft-skills development
              events, and much more — helping students turn classroom learning into practical,
              industry-ready ability.
              <br />
              We make you understand that learning and growing can be fun and enjoyable!
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/join"
                className="rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-card transition-opacity hover:opacity-90"
              >
                Become a Member
              </Link>
              <Link
                to="/events"
                className="rounded-lg border border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                See Upcoming Event
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={logo.url}
              alt="Vamint club logo — a lightbulb with a brain inside"
              className="w-56 max-w-full object-contain md:w-72"
            />
          </div>
        </div>
      </section>

      <Section>
        <SectionTitle eyebrow="// What we do" title="Four pillars of the club" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <Card key={p.title}>
              <p.icon className="h-7 w-7 text-gold" />
              <h3 className="mt-4 text-lg font-semibold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionTitle eyebrow="// Upcoming event" title="Save the date" />
        <Card className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-display text-2xl font-bold text-primary">Orientation 2026</h3>
            <p className="mt-1 text-sm font-medium text-gold">A welcoming event for our new members</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" /> September 3, 2026
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Seminar Hall, E building, GSMCOE, Balewadi
              </span>
            </div>
          </div>
          <Link
            to="/events"
            className="shrink-0 rounded-lg bg-gold px-5 py-3 text-center text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
          >
            What's happening?
          </Link>
        </Card>
      </Section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-bold text-primary">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Section>
        <div className="rounded-2xl border border-border bg-primary px-6 py-12 text-center md:px-12">
          <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">
            Ready to build, learn, and grow with us?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/80">
            Membership is open to all students of Genba Sopanrao Moze College of Engineering.
          </p>
          <Link
            to="/join"
            className="mt-7 inline-block rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
          >
            Join Vamint
          </Link>
        </div>
      </Section>
    </>
  );
}
