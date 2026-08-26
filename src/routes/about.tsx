import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, SectionTitle, Card } from "@/components/site/Section";
import { UserRound } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vamint — Mission & Committee | GSMCOE" },
      {
        name: "description",
        content:
          "Learn about Vamint's mission, our four activity pillars, and meet the committee leading the technical club at Genba Sopanrao Moze College of Engineering.",
      },
      { property: "og:title", content: "About Vamint — Mission & Committee" },
      {
        property: "og:description",
        content:
          "Vamint's story, activity pillars and the committee behind the club at Genba Sopanrao Moze College of Engineering.",
      },
    ],
  }),
  component: About,
});

const pillars = [
  {
    title: "Hackathons",
    text: "Our hackathons put students in small teams with a live problem statement, a fixed clock, and mentors on call. Participants move from idea to working prototype, learn to divide work, manage version control, and defend their build in front of a judging panel — the closest thing on campus to shipping under real constraints.",
  },
  {
    title: "Technical Workshops",
    text: "We run hands-on workshops on emerging technologies — from web and mobile development to machine learning, cloud and open source tooling. Sessions are taught by senior members, faculty and industry guests, and always end with something the attendee has actually built or configured themselves.",
  },
  {
    title: "Soft-Skills Development",
    text: "Technical ability alone rarely gets a student hired. Our soft-skills track covers communication, resume and interview preparation, public speaking, teamwork and leadership, delivered through bootcamps, mock interviews and peer feedback circles.",
  },
  {
    title: "Community Events",
    text: "Beyond structured programming, Vamint keeps an open community running: study groups, project showcases, alumni interactions and informal meetups where juniors can learn directly from seniors who have already walked the path.",
  },
];

const committee = [
  {
    name: "Aarav Kulkarni",
    role: "President",
    bio: "Leads Vamint's overall vision and represents the club to the college administration.",
  },
  {
    name: "Meera Joshi",
    role: "Vice President",
    bio: "Oversees event execution and coordinates between all internal teams.",
  },
  {
    name: "Sanika Patil",
    role: "Secretary",
    bio: "Manages club records, communications, and meeting coordination.",
  },
  {
    name: "Rohan Deshpande",
    role: "Treasurer",
    bio: "Handles budgeting and sponsorships for club events.",
  },
  {
    name: "Isha Wagh",
    role: "Technical Lead",
    bio: "Designs the technical curriculum for hackathons and workshops.",
  },
  {
    name: "Yash Bhosale",
    role: "Event Coordinator",
    bio: "Plans logistics and execution for all Vamint events.",
  },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="// About the club"
        title="Building technical depth and confident people"
        intro="Vamint is the student-run technical club of Genba Sopanrao Moze College of Engineering."
      />

      <Section>
        <SectionTitle eyebrow="// Our story" title="Why Vamint exists" />
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Vamint began with a simple observation: students at our college were curious and
            capable, but had few structured opportunities to apply what they were learning. Vamint
            was formed to close that gap — a club where a first-year student can attend their first
            workshop and, within a few semesters, be mentoring a hackathon team of their own.
          </p>
          <p>
            Our mission is twofold. First, technical depth: through hackathons and workshops on
            emerging technologies, members build real projects, work with real tooling, and learn by
            doing rather than by watching. Second, holistic growth: through soft-skills events we
            help members present their work clearly, collaborate well, and step into leadership
            roles with confidence.
          </p>
          <p>
            Everything Vamint runs is open to every student of Genba Sopanrao Moze College of
            Engineering, regardless of department or year. The only prerequisite is a willingness to
            show up, build, and share what you learn with the people around you.
          </p>
        </div>
      </Section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <SectionTitle eyebrow="// What we do" title="Our four activity pillars" />
          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-border bg-background p-6 shadow-card"
              >
                <h3 className="text-lg font-semibold text-primary">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <SectionTitle eyebrow="// The team" title="Meet the committee" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {committee.map((m) => (
            <Card key={m.name} className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-border bg-secondary">
                <UserRound className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">{m.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold">
                {m.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
