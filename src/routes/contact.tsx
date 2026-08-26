import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { PageHeader, Section } from "@/components/site/Section";
import { ContactForm } from "@/components/site/ContactForm";

const INSTAGRAM = "https://www.instagram.com/vamintcommunity?igsi=MTdjemJrdjhwdXk5ag==";
const LINKEDIN = "https://www.linkedin.com/company/vamint-community/";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vamint — Suggestions & Queries | GSMCOE" },
      {
        name: "description",
        content:
          "Send a suggestion, query or feedback to Vamint, the technical club at Genba Sopanrao Moze College of Engineering, or reach us at vamintcommunity@gmail.com.",
      },
      { property: "og:title", content: "Contact Vamint" },
      {
        property: "og:description",
        content: "Have a suggestion, question, or just want to say hi? Reach the Vamint team.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="// Contact"
        title="Get in touch"
        intro="Have a suggestion, question, or just want to say hi?"
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
            <ContactForm />
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="text-lg font-semibold text-primary">Direct contact</h2>
            <a
              href="mailto:vamintcommunity@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              <Mail className="h-4 w-4" /> vamintcommunity@gmail.com
            </a>
            <div className="mt-6 space-y-3">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                <Instagram className="h-4 w-4" /> @vamintcommunity
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                <Linkedin className="h-4 w-4" /> Vamint Community
              </a>
            </div>
            <p className="mt-6 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
              Genba Sopanrao Moze College of Engineering, Balewadi, Pune.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
