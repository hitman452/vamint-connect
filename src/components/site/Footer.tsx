import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/vamint-logo.png.asset.json";

const INSTAGRAM = "https://www.instagram.com/vamintcommunity?igsi=MTdjemJrdjhwdXk5ag==";
const LINKEDIN = "https://www.linkedin.com/company/vamint-community/";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/achievements", label: "Achievements" },
  { to: "/join", label: "Join Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logo.url} alt="Vamint club logo" className="h-10 w-10 object-contain" />
            <span className="font-display text-xl font-bold text-primary">Vamint</span>
          </div>
          <p className="mt-3 font-display text-sm tracking-wide text-muted-foreground">
            Code. Collaborate. Evolve.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-primary">Quick links</h4>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-muted-foreground transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-primary">Get in touch</h4>
          <a
            href="mailto:vamintcommunity@gmail.com"
            className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
          >
            <Mail className="h-4 w-4" /> vamintcommunity@gmail.com
          </a>
          <div className="mt-4 flex gap-3">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              aria-label="Vamint on Instagram"
              className="rounded-lg border border-border p-2 text-primary transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="Vamint on LinkedIn"
              className="rounded-lg border border-border p-2 text-primary transition-colors hover:border-gold hover:text-gold"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground">
          Vamint — a technical club of Genba Sopanrao Moze College of Engineering.
        </p>
      </div>
    </footer>
  );
}
