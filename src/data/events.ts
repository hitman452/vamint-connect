import codesprint from "@/assets/event-codesprint.jpg";
import techtalks from "@/assets/event-techtalks.jpg";
import softskills from "@/assets/event-softskills.jpg";
import orientation from "@/assets/event-orientation.jpg";

export type EventFolder = {
  slug: string;
  name: string;
  meta: string;
  image: string;
  summary: string;
  highlights: string[];
};

export const eventFolders: EventFolder[] = [
  {
    slug: "codesprint-2025",
    name: "CodeSprint 2025",
    meta: "48-Hour Hackathon — 2025",
    image: codesprint,
    summary:
      "220+ participants across 40 teams built solutions for local NGOs; three teams went on to represent the college at a state-level hackathon.",
    highlights: [
      "40 teams shipped working prototypes in 48 hours",
      "Problem statements sourced from local NGOs",
      "Industry mentors reviewed every team twice",
      "Top three teams advanced to a state-level hackathon",
    ],
  },
  {
    slug: "techtalks-future-of-ai",
    name: "TechTalks: Future of AI",
    meta: "Workshop Series — 2025",
    image: techtalks,
    summary:
      "A 3-part workshop series on machine learning fundamentals, attended by 150+ students.",
    highlights: [
      "Sessions on ML fundamentals, model training and deployment",
      "150+ students attended across the series",
      "Hands-on notebooks shared with every participant",
    ],
  },
  {
    slug: "soft-skills-bootcamp",
    name: "Soft Skills Bootcamp",
    meta: "Bootcamp — 2025",
    image: softskills,
    summary:
      "An intensive two-day bootcamp on communication, public speaking and leadership for 80+ members.",
    highlights: [
      "Two days of communication and leadership drills",
      "Every participant delivered a live talk",
      "Peer feedback rounds moderated by senior members",
    ],
  },
  {
    slug: "orientation-2026",
    name: "Orientation 2026",
    meta: "Club Orientation — 2026",
    image: orientation,
    summary:
      "A welcoming event for our new members, introducing the club's teams, plans and upcoming events for the year.",
    highlights: [
      "Introduction to the club's four pillars",
      "Meet the committee and project teams",
      "Roadmap of workshops and hackathons for the year",
    ],
  },
];

export function getEventFolder(slug: string) {
  return eventFolders.find((e) => e.slug === slug);
}
