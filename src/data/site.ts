export const site = {
  name: "Kartik Jangid",
  role: "Product designer who ships",
  location: "Jaipur, Rajasthan",
  email: "support@garga.app",
  headline: [
    "Product Designer working with",
    "early-stage startups to build 0→1 products.",
  ],
  social: {
    x: "https://x.com/bundi_k_laddo",
    linkedin: "https://www.linkedin.com/in/kartik-jangid-197449215/",
    github: "https://github.com/bundikladdo",
  },
} as const;

export const listeningTrack = {
  title: "Everybody Wants to Rule the World",
  artist: "Tears for Fears",
  album: "Songs from the Big Chair",
  cover:
    "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/74/41/43/744143ae-afad-8380-106e-1c1bc48922e4/14UMGIM34762.rgb.jpg/600x600bb.jpg",
  href: "https://music.apple.com/us/song/everybody-wants-to-rule-the-world/1443226353",
  previewSrc:
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/7d/3f/4c/7d3f4c83-c97e-0c47-2fc8-76ed468fed5f/mzaf_6653397336359955374.plus.aac.p.m4a",
  previewLabel: "Preview courtesy of iTunes",
  linkLabel: "Listen on Apple Music",
  unavailableLabel: "Preview unavailable. Listen to the full song on Apple Music.",
} as const;

export const booksRead = [
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    cover: "https://books.google.com/books/content?id=U3f2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  },
  {
    title: "Do It Today",
    author: "Darius Foroux",
    cover: "https://cdn.penguin.co.in/wp-content/uploads/2025/09/9780143452126.jpg",
  },
  {
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    cover: "https://images1.penguinrandomhouse.com/cover/9780140280197",
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    cover: "https://images1.penguinrandomhouse.com/cover/9780307887894",
  },
] as const;

export const aboutSnaps = [
  { src: "/life/desk.jpg", alt: "A sunny desk with a laptop and sketchbooks", caption: "At the desk" },
  { src: "/life/jaipur.jpg", alt: "A street in Jaipur's old city", caption: "Jaipur" },
  { src: "/life/notebook.jpg", alt: "Interface sketches in a notebook", caption: "Early sketches" },
] as const;

export type Brand = {
  name: string;
  href?: string;
  color: string;
};

export const brands = {
  autodeus: { name: "Autodeus Technologies", color: "#26251e" },
  reepl: { name: "Reepl", href: "https://reepl.io", color: "#26251e" },
  garga: { name: "Garga", href: "https://garga.app", color: "#f54e00" },
} as const;

export const autodeusProducts = [
  { name: "Smartify", href: "https://smartify.in", image: "/products/smartify.png" },
  { name: "Reepl", href: "https://reepl.io", image: "/reepl.png" },
  { name: "Inferenc", href: "https://infernec.com", image: "/products/inferenc.png" },
  { name: "Verk", href: "https://verkapp.com", image: "/products/verk.png" },
] as const;

export type Project = {
  slug: string;
  title: string;
  status: "live" | "wip";
  highlight?: string;
  description: string;
  href?: string;
  case?: boolean;
};

export type WorkCard = {
  slug: string;
  line: string;
  about: string;
  year: string;
  image?: string;
  visual?: "dotted-grid";
  case?: boolean;
};

export const selectedWork: WorkCard[] = [
  {
    slug: "reepl",
    line: "Reepl Onboarding: Personalized Product Demo",
    about: "AI First Design & Development",
    year: "2025",
    visual: "dotted-grid",
    case: true,
  },
  {
    slug: "garga",
    line: "Swiss Ephemeris under the chat — not vibes",
    about: "Building, designing and coding",
    year: "2025",
    image: "/backgrounds/pixel-blast.png",
    case: true,
  },
  {
    slug: "toolnest",
    line: "Seven tools. No signup.",
    about: "Building, designing and coding",
    year: "2026",
    image: "/backgrounds/pixel-blast.png",
    case: true,
  },
  {
    slug: "vizzly",
    line: "Every AI change explained",
    about: "Product design research",
    year: "2026",
    image: "/backgrounds/pixel-blast.png",
    case: true,
  },
  {
    slug: "ui-blocks",
    line: "Production screens for React teams",
    about: "Product design research",
    year: "2026",
    image: "/backgrounds/pixel-blast.png",
  },
];

export type Job = {
  id: string;
  company: string;
  color: string;
  logo?: string;
  period: string;
  origin?: string;
  roles: { title: string; dates?: string }[];
  featured?: Project;
  projects: Project[];
  summary?: string;
};

export const jobs: Job[] = [
  {
    id: "smartify",
    company: "Smartify",
    color: "#26251e",
    period: "Dec 2024 — Present",
    origin: "Ahmedabad",
    roles: [{ title: "Product designer" }],
    featured: {
      slug: "reepl",
      title: "Reepl",
      status: "live",
      highlight: "Claude → drafts, you still hit publish",
      description:
        "Solo designer in a 2-person team. AI LinkedIn SaaS: 24+ routes, 7 languages, 10,000+ users.",
      href: "https://reepl.io",
      case: true,
    },
    projects: [
      {
        slug: "reepl-mcp",
        title: "MCP connectors",
        status: "live",
        description:
          "Draft in Claude or ChatGPT. It lands in Reepl. Less tab-switching, not autopilot.",
      },
    ],
  },
  {
    id: "roomsvital",
    company: "RoomsVital",
    color: "#5a5852",
    period: "Feb 2024 — July 2024",
    origin: "Jalandhar",
    roles: [{ title: "UI/UX design intern" }],
    projects: [],
    summary:
      "IoT app for LEDs, locks, and switches. Wireframes, prototypes, control panels. Atomic design system, tested with hardware engineers.",
  },
  {
    id: "tutedude",
    company: "Tutedude",
    color: "#8a8680",
    period: "Oct 2023 — Feb 2024",
    origin: "Gurugram",
    roles: [{ title: "UX design intern" }],
    projects: [],
    summary:
      "Heuristic evals on ed-tech. Reworked navigation and IA. Mentored juniors on Figma and prototyping.",
  },
];

type CaseStudySection = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
  metrics?: { value: string; label: string }[];
  image?: { src: string; alt: string; caption: string };
  video?: { src: string; poster: string; ariaLabel: string };
};

type CaseStudy = {
  problem: string;
  shipped: string;
  outcome: string;
  image?: string;
  url?: string;
  story?: {
    title: string;
    subtitle: string;
    metadata: { label: string; value: string }[];
    sections: CaseStudySection[];
  };
};

export const caseStudies: Record<string, CaseStudy> = {
  reepl: {
    problem: "People had to choose a paid trial before seeing what Reepl could do. The old onboarding collected their goals but showed everyone the same screens, so they had little context for that decision.",
    shipped: "A goal-based onboarding flow with a personalized demo of Andy and Routines before activation.",
    outcome: "Live. Activation options stayed the same; the flow now shows relevant value before users choose.",
    url: "https://reepl.io",
    story: {
      title: "Reepl Onboarding: Personalized Product Demo",
      subtitle: "We made signup respond to each person’s goal and show Andy and Routines before activation.",
      metadata: [
        { label: "Duration", value: "2 weeks" },
        { label: "Role", value: "Product Designer (built alongside engineering, not just spec'd)" },
        { label: "Users", value: "Every new Reepl signup" },
        { label: "Status", value: "Live" },
      ],
      sections: [
        {
          id: "old-flow",
          title: "Challenge",
          paragraphs: [
            "People were asked to pay $1 for a 7-day Premium trial before they had seen Reepl’s value. Why $1 for a trial instead of a credit-card flow? You’ll learn more in the next section. The old onboarding collected their goals, but everyone saw the same screens and reached activation without experiencing Andy or seeing how it could help with their goal.",
            "That created uncertainty and perceived risk: users had to pay based on a promise. At the activation decision, that could make the commitment feel premature and lead to hesitation. The challenge was to build confidence by showing relevant product value first.",
            "It’s like paying for a movie before seeing the trailer: the ticket is cheap, but you still want a reason to go.",
          ],
          video: {
            src: "/work/reepl-case-study/old-onboarding.mp4",
            poster: "/work/reepl-case-study/old-onboarding-poster.jpg",
            ariaLabel: "Earlier Reepl onboarding flow",
          },
        },
        {
          id: "activation-context",
          title: "Context",
          paragraphs: [
            "The activation options were designed to cover real business needs: AI features cost money to run, and people could create multiple accounts to reuse a trial. The choices helped attract high-intent users and limit trial abuse, so changing the pricing model wasn’t the answer. We needed to make the product’s value clearer before users chose.",
          ],
        },
        {
          id: "follow-the-goal",
          title: "Approach",
          paragraphs: [
            "Now, a person’s goal determines what they see next. Someone who wants to grow their network sees the browser extension for quick AI comments. Someone who needs ideas sees Signals.",
            "We asked a few focused questions to understand each person’s goals and pain points. To keep setup light, we minimized typing and autofilled what we could. Their answers also configured much of the workspace, so people were already well on their way to getting started.",
            "Then we used those answers to show how Reepl could help with their specific goal, followed by a personalized demo of Andy and Routines. Only after seeing that value did people choose how to start their trial—or continue on the Free plan.",
          ],
        },
        {
          id: "andy-routines-demo",
          title: "Personalized Demo",
          paragraphs: [
            "Before activation, users see a demo personalized to their goal. Andy is Reepl’s AI writing assistant: it can draft and schedule posts, and create images and carousels in the user’s style. Routines prepare daily drafts for users to approve.",
            "The demo lets people see these features before choosing how to start.",
          ],
          video: {
            src: "/work/reepl-case-study/onboarding-flow.mp4",
            poster: "/work/reepl-case-study/demo-poster.jpg",
            ariaLabel: "Personalized demo of Reepl's Andy writing assistant and Routines",
          },
        },
        {
          id: "same-activation-options",
          title: "Activation",
          paragraphs: [
            "These were the existing choices. The redesign changed the experience before this step, not the pricing or trial terms:",
          ],
          list: [
            "Try Premium for 7 days with a one-time $1 payment.",
            "Add your own AI API key for AI features and try Premium for 3 days.",
            "Continue on the Free plan.",
          ],
        },
        {
          id: "results",
          title: "Results",
          paragraphs: [
            "The updated onboarding is live. The goal-based flow and personalized demo give new signups a clearer view of Reepl before they choose how to start.",
          ],
        },
        {
          id: "impact",
          title: "Impact",
          paragraphs: [],
          metrics: [
            { value: "+18%", label: "Signup-to-activation rate" },
            { value: "−22%", label: "Drop-off before plan choice" },
            { value: "2m 40s", label: "Time to first Andy draft" },
            { value: "42%", label: "7-day retained activation" },
          ],
        },
      ],
    },
  },
  garga: {
    problem:
      "Most AI astrology apps hallucinate. Ask twice, get two lives. People who care about the tradition deserve the chart to be real.",
    shipped:
      "Swiss Ephemeris + a logic engine, then AI narration attached to the math. Reports and chat, paid.",
    outcome:
      "Live on garga.app. I am a designer who respects the source — not a pandit.",
    image: "/garga.png",
    url: "https://garga.app",
  },
  toolnest: {
    problem: "Utility sites are ad farms or SaaS landings.",
    shipped: "A small, opinionated set of micro-tools. Local where possible.",
    outcome: "Seven tools. No signup. That’s it.",
    image: "/toolnest.png",
  },
  vizzly: {
    problem: "Resume tailoring with AI usually rewrites you into a stranger.",
    shipped: "A review loop: every change explained, nothing fabricated, export a PDF.",
    outcome: "Public as FormPilot. Open source.",
    url: "https://formpilot-web-peach.vercel.app",
  },
};
