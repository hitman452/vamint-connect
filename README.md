# Vamint Hub

## Project Overview

Build a professional, multi-page website for **Vamint**, a technical club at **Genba Sopanrao Moze College of Engineering**. Vamint organizes hackathons, technical workshops (teaching and discussing emerging technologies with the community), and soft-skills development events for its members. The site must showcase the club, handle new member registrations, promote and collect registrations for an upcoming event, display past achievements and archives, introduce the current committee, and let visitors send suggestions or queries.

Tagline: Code. Collaborate. Evolve.

## Design System (Light Mode Only — No Dark Mode Toggle)

- Background (primary): Eggshell — `#F5F2EA`
- Surface / card background: `#FAF8F2`
- Primary text: Charcoal — `#22262B`
- Secondary / muted text: Slate gray — `#5A5F66`
- Primary accent: Deep Navy — `#1C2D4F` (nav highlights, headings, primary buttons)
- Secondary accent: Warm Gold — `#C9A227` (CTAs, hover states, small dividers, highlights)
- Borders / dividers: `#E4DFD1`
- Typography: Inter or Poppins for body text. Space Grotesk for headings and the tagline. Optionally use a monospace font (JetBrains Mono) sparingly for small "eyebrow" labels (e.g., "// UPCOMING EVENT") to nod to the club's technical identity.
- Aesthetic: professional, collegiate-tech. Generous white space, rounded cards (8–12px radius), subtle shadows. No neon colors, no dark theme, no startup-style gradients — it should read as an official college club, not a product landing page.
- Fully responsive across mobile, tablet, and desktop.
- Use the Image uploaded as the club logo.
## Site Structure (Multi-Page)

Persistent top navbar on every page: "Vamint" wordmark on the left, nav links — Home, About, Events, Achievements, Join Us, Contact — and a gold "Join Vamint" button on the right linking to the Join Us page.

Persistent footer on every page: Vamint wordmark + tagline, quick links to all six pages, contact email (vamintcommunity@gmail.com), social icons linking to Instagram (https://www.instagram.com/vamintcommunity?igsi=MTdjemJrdjhwdXk5ag==) and LinkedIn (https://www.linkedin.com/company/vamint-community/), and a line crediting "Genba Sopanrao Moze College of Engineering."

### 1. Home Page

- Hero: Vamint wordmark, tagline "Code. Collaborate. Evolve.", a short paragraph introducing Vamint as a technical club at Genba Sopanrao Moze College of Engineering running hackathons, technical workshops, and soft-skills events. Two CTAs: "Become a Member" (→ Join Us) and "See Upcoming Event" (→ Events).
- "What We Do" section: four cards — Hackathons, Technical Workshops, Soft Skills Development, Community & Networking — each with a one-sentence description and an icon.
- "Upcoming Event" teaser card showing the current event's name, date, and a "Register Now" button (→ Events page).
- "Achievements at a Glance" stat strip: "500+ Members Trained," "10+ Hackathons Hosted," "25+ Workshops Conducted."
- Closing CTA band: "Ready to build, learn, and grow with us?" → Join Us button.

### 2. About Page

- Club story/mission: 2–3 paragraphs on Vamint's purpose — building technical skills through hackathons and workshops on emerging tech, and holistic growth through soft-skills events, for students at Genba Sopanrao Moze College of Engineering.
- "What We Do" expanded: detailed descriptions of the four activity pillars (Hackathons, Technical Workshops, Soft-Skills Development, Community Events).
- "Meet the Committee" grid, on this same page. Use this sample content for now (realistic content to edit later, not bracketed placeholders):
  1. **Aarav Kulkarni** — President — "Leads Vamint's overall vision and represents the club to the college administration."
  2. **Meera Joshi** — Vice President — "Oversees event execution and coordinates between all internal teams."
  3. **Sanika Patil** — Secretary — "Manages club records, communications, and meeting coordination."
  4. **Rohan Deshpande** — Treasurer — "Handles budgeting and sponsorships for club events."
  5. **Isha Wagh** — Technical Lead — "Designs the technical curriculum for hackathons and workshops."
  6. **Yash Bhosale** — Event Coordinator — "Plans logistics and execution for all Vamint events."
  Each card: circular photo placeholder, name, role, one-line bio.

### 3. Events Page

- Upcoming event banner using this sample event:
  - Name: **CodeSprint 2026**
  - Type: 24-Hour Hackathon
  - Date: October 18–19, 2026
  - Venue: Genba Sopanrao Moze College of Engineering, Main Auditorium
  - Description: "CodeSprint 2026 is Vamint's flagship 24-hour hackathon where student teams build working prototypes around a live problem statement, mentored by industry professionals and senior club members."
  - Registration deadline: October 10, 2026
- Event registration form directly on this page (see Forms & Backend below), auto-tagged with the event name.
- Below the form, a short note: "More events coming soon — follow us on Instagram and LinkedIn for updates."

### 4. Achievements & Archive Page

- Intro line: "A look back at what Vamint has built together."
- Timeline or card grid with this sample content:
  1. **CodeSprint 2025** — 48-Hour Hackathon — "220+ participants across 40 teams built solutions for local NGOs; three teams went on to represent the college at a state-level hackathon."
  2. **TechTalks: Future of AI** — Workshop Series — "A 3-part workshop series on machine learning fundamentals, attended by 150+ students."
  3. **Soft Skills Bootcamp** — "An intensive two-day bootcamp on communication, public speaking, and leadership for 80+ members."
  4. **Inter-College Hackathon Circuit 2025** — Award — "Vamint's team placed 1st runner-up representing the college."
- Each entry: title, date/year, one-paragraph description, optional photo-gallery placeholder grid.

### 5. Join Us Page

- Short intro on why to join Vamint (skills, community, access to events).
- New member registration form (see Forms & Backend below).
- On submission: on-screen confirmation message, noting the team will follow up by email.

### 6. Contact Page

- Intro line: "Have a suggestion, question, or just want to say hi?"
- Contact/suggestions form (see Forms & Backend below).
- Repeat direct contact info: vamintcommunity@gmail.com, Instagram and LinkedIn links.

## Forms & Backend (Supabase)

Connect Supabase as the backend. Create these tables:

**1. `member_registrations`**
- id (uuid, primary key)
- full_name (text, required)
- phone_number (text, required)
- email (text, required)
- department (text, required)
- year_of_study (text, required — dropdown: First Year / Second Year / Third Year / Final Year)
- created_at (timestamp, default now)

**2. `event_registrations`**
- id (uuid, primary key)
- event_name (text, required — auto-filled with the current event's name)
- full_name (text, required)
- phone_number (text, required)
- email (text, required)
- department (text, required)
- year_of_study (text, required — same dropdown as above)
- created_at (timestamp, default now)

**3. `contact_messages`**
- id (uuid, primary key)
- name (text, required)
- email (text, required)
- message_type (text, required — dropdown: Suggestion / Query / Feedback)
- message (text, required)
- created_at (timestamp, default now)

For all three forms:
- Client-side validation: all fields required, valid email format, phone number numeric with a minimum of 10 digits.
- On successful submission: insert a row into the relevant Supabase table AND send an email notification to vamintcommunity@gmail.com with the submitted details (use a Supabase Edge Function with the Resend API, or an equivalent email-sending integration).
- Show an in-page success confirmation after submission (not just a browser alert).

## Additional Notes

- Light mode only — no dark mode toggle, use the color system above throughout.
- All sample content (committee members, the upcoming event, and the achievements) is realistic content meant to be edited directly in Lovable once real club details are ready — build it as real content, not bracketed placeholders.
- Keep the tone professional and credible — this represents an official college club, not a startup.
- Make navigation between all six pages clear and consistent via the navbar and footer, with CTAs guiding visitors toward Join Us and Events.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/17b891b1-505f-4419-8cd1-4b631b93e020).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
