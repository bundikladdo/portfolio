export const site = {
  name: "Kartik Jangid",
  role: "Product designer who ships",
  location: "Jaipur, Rajasthan",
  url: "https://kartikjangid.vercel.app",
  description:
    "Product designer at Autodeus Technologies. Redesigned Reepl from a LinkedIn extension into a multi-platform social media product, now past ₹1 lakh MRR. Based in Jaipur, open to remote work and relocation.",
  email: "jangidkartik002@gmail.com",
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
  title: "Impostor Syndrome",
  artist: "Sidney Gish",
  album: "No Dogs Allowed",
  cover:
    "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/03/63/cb/0363cb2b-2f67-3873-3bcd-fe87e231c3f6/840093858702.png/600x600bb.jpg",
  href: "https://music.apple.com/us/song/impostor-syndrome/1889259869",
  serviceLabel: "Listen on Apple Music",
  previewSrc:
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/af/db/da/afdbda08-6ea7-2e59-5f46-d5abb7a554ba/mzaf_12844515800055753595.plus.aac.p.m4a",
  unavailableLabel: "Preview unavailable. Please try again.",
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
} as const;

/** The site has a Design view (default) and a Code view for design-engineering roles. */
export type View = "design" | "code";

/** Copy that reads differently in the Design and Code views. */
export type ViewText = string | Record<View, string>;

// Products without an image file show their first letter instead.
export const autodeusProducts: { name: string; href: string; image?: string }[] = [
  { name: "Reepl", href: "https://reepl.io", image: "/reepl.png" },
  { name: "Smartify", href: "https://smartify.in" },
  { name: "Verk", href: "https://verkapp.com" },
];

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
  about: ViewText;
  year: string;
  image?: string;
  visual?: "dotted-grid";
  artwork?: { src: string; width: number; height: number };
  artworks?: { src: string; width: number; height: number }[];
  case?: boolean;
};

export const selectedWork: WorkCard[] = [
  {
    slug: "reepl-platform",
    line: "Reepl: From LinkedIn extension to multi-platform product",
    about: "Product redesign · 0 → ₹1 lakh+ MRR",
    year: "2025–26",
    visual: "dotted-grid",
    artwork: { src: "/work/reepl-platform/composer-app.webp", width: 2000, height: 1133 },
    case: true,
  },
  {
    slug: "reepl-mobile",
    line: "Reepl Mobile: Designing the daily review loop",
    about: {
      design: "Mobile product design · iOS and Android",
      code: "Designed and implemented in 17 days · Expo, React Native",
    },
    year: "2026",
    visual: "dotted-grid",
    artwork: {
      src: "/work/reepl-mobile/home.png",
      width: 1206,
      height: 2622,
    },
    artworks: [
      { src: "/work/reepl-mobile/writing-style.png", width: 1206, height: 2622 },
      { src: "/work/reepl-mobile/home.png", width: 1206, height: 2622 },
      { src: "/work/reepl-mobile/calendar-review.png", width: 1206, height: 2622 },
    ],
    case: true,
  },
  {
    slug: "reepl-onboarding",
    line: "Reepl Onboarding: Goal-based setup before the paywall",
    about: "SaaS onboarding · Product design",
    year: "2026",
    visual: "dotted-grid",
    case: true,
  },
  {
    slug: "reepl-contacts",
    line: "Reepl Contacts: CRM from the Ground Up",
    about: "CRM design · Product strategy",
    year: "2026",
    visual: "dotted-grid",
    artwork: {
      src: "/work/reepl-case-study/contacts-thumbnail.png",
      width: 1044,
      height: 615,
    },
    case: true,
  },
  {
    slug: "garga",
    line: "Garga: an AI astrology app that gives the same answer twice",
    about: {
      design: "Side project · Product design",
      code: "Side project · Product design & AI-assisted building",
    },
    year: "2025",
    image: "/backgrounds/pixel-blast.png",
    case: true,
  },
];

export const featuredWork: WorkCard[] = [
  selectedWork[0], // Lead with the platform redesign and its revenue result.
  selectedWork[2], // Then the live onboarding case study.
  selectedWork[1], // Then native interactions and AI-assisted implementation.
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
    company: "Autodeus Technologies",
    color: "#26251e",
    period: "Dec 2024 — Present",
    origin: "Ahmedabad",
    roles: [{ title: "Product designer" }],
    featured: {
      slug: "reepl-onboarding",
      title: "Reepl",
      status: "live",
      highlight: "Claude → drafts, you still hit publish",
      description:
        "Product design for Reepl, an AI LinkedIn SaaS: onboarding, contact management, a Figma design system, and the iOS and Android app.",
      href: "https://reepl.io",
      case: true,
    },
    projects: [
      {
        slug: "reepl-platform",
        title: "Reepl platform",
        status: "live",
        description:
          "Redesigned Reepl from a LinkedIn commenting extension into a multi-platform social media product.",
      },
      {
        slug: "reepl-mcp",
        title: "MCP connectors",
        status: "live",
        description:
          "Draft in Claude or ChatGPT. It lands in Reepl. Less tab-switching, not autopilot.",
      },
      {
        slug: "reepl-contacts",
        title: "Reepl Contacts",
        status: "live",
        description:
          "A CRM built around the contacts people already save from Reepl’s browser extension.",
      },
      {
        slug: "reepl-mobile",
        title: "Reepl Mobile",
        status: "wip",
        description:
          "A native iOS and Android app built around reviewing and publishing Andy’s daily draft. Not yet in production.",
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

// Work outside a job that still has a detail page.
export const sideProjects: Project[] = [
  {
    slug: "garga",
    title: "Garga",
    status: "live",
    description: "An astrology side project where chart calculations come before AI narration.",
    href: "https://garga.app",
    case: true,
  },
];

type CaseStudySection = {
  id: string;
  /** Show this section in one view only; omit to show it in both. */
  view?: View;
  title: string;
  paragraphs: string[];
  list?: string[];
  metrics?: { value: string; label: string }[];
  image?: {
    src: string;
    alt: string;
    caption: string;
    width?: number;
    height?: number;
    variant?: "phone";
  };
  video?: { src: string; poster: string; ariaLabel: string };
  videoPlaceholder?: { title: string; body: string; label: string };
};

type CaseStudy = {
  problem: string;
  shipped: ViewText;
  outcome: string;
  image?: string;
  url?: string;
  story?: {
    title: string;
    subtitle: ViewText;
    metadata: { label: string; value: string; view?: View }[];
    artwork?: { src: string; width: number; height: number };
    artworks?: { src: string; width: number; height: number }[];
    sections: CaseStudySection[];
  };
};

export const caseStudies: Record<string, CaseStudy> = {
  "reepl-mobile": {
    problem:
      "Reviewing Andy’s daily LinkedIn drafts depended on the web app. The mobile app brings review, feedback, and publishing into a focused flow on a phone.",
    shipped:
      "Built a native iOS and Android app around this flow: push notification → read Andy’s draft → approve or edit → publish → see the streak. The app is not yet in production.",
    outcome:
      "Built, not yet in production. Adoption, publishing frequency, and retention have not been measured.",
    url: "https://reepl.io",
    story: {
      title: "Reepl Mobile: the daily publishing loop",
      subtitle: {
        design:
          "I designed Reepl’s native iOS and Android app around one daily job: review Andy’s draft, give feedback, and publish. The app is built but not yet in production, so this case study covers the design decisions; impact is still to be measured.",
        code:
          "I designed Reepl’s native iOS and Android app and implemented it with AI assistance in 17 days. The app is built but not yet in production; this case study covers the design and implementation, with impact still to be measured.",
      },
      metadata: [
        { label: "Role", value: "Product designer", view: "design" },
        { label: "Role", value: "Product designer · AI-assisted implementation", view: "code" },
        { label: "Timeline", value: "14 Sep – 1 Oct 2026" },
        { label: "Platforms", value: "iOS and Android", view: "design" },
        { label: "Stack", value: "Expo, React Native, TypeScript, Claude Code", view: "code" },
        { label: "Status", value: "Built · Not yet in production" },
      ],
      artwork: {
        src: "/work/reepl-mobile/home.png",
        width: 1206,
        height: 2622,
      },
      artworks: [
        { src: "/work/reepl-mobile/writing-style.png", width: 1206, height: 2622 },
        { src: "/work/reepl-mobile/home.png", width: 1206, height: 2622 },
        { src: "/work/reepl-mobile/calendar-review.png", width: 1206, height: 2622 },
      ],
      sections: [
        {
          id: "mobile-context",
          title: "The brief",
          paragraphs: [
            "A simple request entered the roadmap: launch a small app fast. The happy path was already clear — Daily Andy writes a post → sends a push notification → the user opens it, reviews it, gives feedback, publishes it, and keeps their streak alive.",
            "The challenge was to make that loop feel native, useful, and quick enough to become a daily habit without rebuilding the entire web app on a smaller screen.",
          ],
        },
        {
          id: "mobile-problem",
          title: "The problem",
          paragraphs: [
            "Andy already writes the daily LinkedIn draft. I focused the mobile app on the next step: reviewing it, giving feedback, and choosing when to publish without opening a laptop. Whether this improves approval speed or consistency needs to be tested after launch.",
          ],
          image: {
            src: "/work/reepl-mobile/home.png",
            alt: "Reepl mobile home screen showing a post ready for review and the user's streak",
            caption: "The home screen makes the next approval and the habit it protects visible together.",
            width: 1206,
            height: 2622,
            variant: "phone",
          },
        },
        {
          id: "mobile-insight",
          title: "The design hypothesis",
          paragraphs: [
            "I treated mobile as a review surface first, keeping the draft, feedback, and publishing actions together instead of recreating every web feature. The hypothesis is that a focused review flow will make the daily task easier to complete; it has not yet been validated in production.",
          ],
        },
        {
          id: "mobile-loop",
          title: "A small loop with a clear finish",
          paragraphs: [
            "The app was designed around one repeatable job: review and publish Andy’s next post. Every screen supports that sequence or makes the user’s publishing activity visible. Completion time remains a measurement for testing and launch.",
          ],
          list: [
            "Push notification brings the review moment to the user.",
            "A single post card keeps the draft, feedback, and primary action together.",
            "Approve and edit support the two common decisions without opening a separate workflow.",
            "Publishing closes the loop and keeps the streak visible as a reason to return.",
          ],
          image: {
            src: "/work/reepl-mobile/calendar-review.png",
            alt: "Reepl calendar screen with a scheduled post review sheet and Edit and Publish Now actions",
            caption: "Scheduled posts keep review and publishing close to the calendar context.",
            width: 1206,
            height: 2622,
            variant: "phone",
          },
        },
        {
          id: "mobile-decisions",
          title: "Key decisions",
          paragraphs: [],
          list: [
            "Native first, in Reepl’s colours: system headers, sheets, and menus, with HugeIcons on both platforms.",
            "One post card everywhere: Home, Calendar, and Content show posts the same way.",
            "Platform-honest: native long-press menus on iOS, and Reepl’s own design-system overlays on Android.",
            "Shared type and spacing tokens keep the native screens consistent.",
            "One-tap approve: times are picked from a menu instead of a date picker.",
          ],
          image: {
            src: "/work/reepl-mobile/writing-style.png",
            alt: "Reepl mobile writing style screen showing the user's learned tone and writing rules",
            caption: "The mobile app carries the product’s existing personalization into focused, native screens.",
            width: 1206,
            height: 2622,
            variant: "phone",
          },
        },
        {
          id: "mobile-engineering",
          view: "code",
          title: "Implementation details that protected the design",
          paragraphs: [
            "During AI-assisted implementation, I reviewed the core flow and worked through issues that affected sign-in, loading, and review. These details mattered because users need a reliable path from opening the app to publishing.",
          ],
          list: [
            "Fixed Google sign-in failing on the first tap and Home loading as a cascade of spinners during development.",
            "Fixed pages opening already scrolled under the header and the Android keyboard hiding the Andy chat box.",
            "Ported the web app’s data mapping so photos and organisations show up the same way on both apps.",
          ],
        },
        {
          id: "mobile-ai-workflow",
          view: "code",
          title: "AI in the workflow",
          paragraphs: [
            "I used Claude Code for the implementation, including refactors and the Android port. I made the product and interaction decisions, reviewed the output, and checked changes on the simulator. I haven’t measured how much time this saved.",
          ],
        },
        {
          id: "mobile-outcome",
          title: "Current state",
          paragraphs: [
            "The app is built but has not gone into production. The screens show the built app with sample streak data, so there are no user results to report yet.",
          ],
          image: {
            src: "/work/reepl-mobile/streak.png",
            alt: "Reepl mobile weekly goal screen showing sample streak data and an activity heatmap",
            caption: "The built streak interface uses sample data; it does not represent measured user results.",
            width: 1206,
            height: 2622,
            variant: "phone",
          },
        },
        {
          id: "mobile-next",
          title: "What I’d do next",
          paragraphs: [
            "Before production, test the approve flow with users and check where they pause, when they need to edit, and whether the publishing actions are clear. After launch, measure review completion time, approval rate, publishing frequency, and return usage before making impact claims.",
          ],
        },
      ],
    },
  },
  "reepl-onboarding": {
    problem: "People had to choose a paid trial before seeing what Reepl could do. The old onboarding collected their goals but showed everyone the same screens, so they had little context for that decision.",
    shipped: "A goal-based onboarding flow with a personalized demo of Andy and Routines before activation.",
    outcome: "Live. The flow now shows relevant product value before users choose an activation path.",
    url: "https://reepl.io",
    story: {
      title: "Reepl Onboarding: Goal-based setup before the paywall",
      subtitle: "Reepl asked users to start a paid trial before they had seen the product work. I redesigned onboarding around each user’s stated goal and added a personalized Andy demo before plan selection.",
      metadata: [
        { label: "Duration", value: "2 weeks" },
        { label: "Role", value: "Product designer · User flows, prototypes, and implementation review with engineering" },
        { label: "Users", value: "Every new Reepl signup" },
        { label: "Status", value: "Live" },
      ],
      sections: [
        {
          id: "onboarding-context",
          title: "What is Reepl?",
          paragraphs: [
            "Reepl is an AI platform for growing on LinkedIn through content, engagement, and conversations. Three parts of the product shaped the onboarding experience:",
          ],
          list: [
            "Andy is Reepl’s AI agent. It drafts and schedules posts and creates images and carousels in the user’s style.",
            "Routines are recurring automations where Andy prepares drafts on a schedule and the user reviews and approves them.",
            "Signals is a feed that surfaces content ideas for users who do not know what to post.",
            "For this case study, activation means starting Premium through either the $1 trial or the bring-your-own-key trial. Choosing Free does not count.",
          ],
        },
        {
          id: "onboarding-problem",
          title: "The problem",
          paragraphs: [
            "Onboarding asked what users wanted to achieve on LinkedIn, but the answer changed nothing. Everyone saw the same screens and reached the same plan-selection step.",
            "Users were being asked to choose between $1 for 7 days of Premium, their own AI API key for 3 days of Premium, or the Free plan before seeing Andy, Routines, or anything else that made Reepl different. The decision rested on a promise, not an experience.",
          ],
          video: {
            src: "/work/reepl-case-study/old-onboarding.mp4",
            poster: "/work/reepl-case-study/old-onboarding-poster.jpg",
            ariaLabel: "Earlier Reepl onboarding flow",
          },
        },
        {
          id: "onboarding-constraint",
          title: "Constraint",
          paragraphs: [
            "The trial model could not change. AI features have real usage costs, and fully free trials can be abused through repeat signups. The design question became: how do we make users understand Reepl’s value before asking them to start a trial?",
          ],
        },
        {
          id: "goal-based-routing",
          title: "Goal-based routing",
          paragraphs: [
            "Each answer now sets the path and the features shown next. The route is tied to a concrete product experience, so the question earns its place in onboarding.",
          ],
          list: [
            "Grow my network → browser extension and fast, relevant comments.",
            "No content ideas → Signals for a clearer starting point.",
            "Post consistently → Andy and Routines for drafting, scheduling, and review.",
          ],
        },
        {
          id: "less-input-more-setup",
          title: "Less input, more setup",
          paragraphs: [
            "I kept the questions short and used the answers to preconfigure the workspace. Onboarding sets Reepl up for the user instead of only collecting information that disappears into the next screen.",
          ],
        },
        {
          id: "andy-routines-demo",
          title: "Personalized demo before plan selection",
          paragraphs: [
            "Before plan selection, users see Andy working on the goal they just chose: drafting and scheduling content, creating visuals, and preparing drafts through Routines for approval.",
            "Showing the product before the commitment gives the plan choice a concrete reference point. The new flow is: Goal → Workspace setup → Relevant features → Andy + Routines demo → Plan choice.",
          ],
          video: {
            src: "/work/reepl-case-study/onboarding-flow.mp4",
            poster: "/work/reepl-case-study/demo-poster.jpg",
            ariaLabel: "Personalized demo of Reepl's Andy writing assistant and Routines",
          },
        },
        {
          id: "decisions-and-tradeoffs",
          title: "Decisions and trade-offs",
          paragraphs: [
            "The redesign focused on making the existing decision easier to understand while keeping the flow short enough to finish.",
          ],
          list: [
            "A personalized product demo over a generic walkthrough: users see the part of Reepl that matches their stated goal.",
            "A focused set of goal paths: each path needs a clear next experience, so the flow does not branch for intents the product cannot demonstrate well.",
            "Short questions over a long setup form: the answers configure the workspace, while unnecessary input was cut to protect completion.",
            "A clear Free path alongside Premium: the demo should explain the product without overpromising what every plan includes.",
          ],
        },
        {
          id: "activation-options",
          title: "Plan selection",
          paragraphs: [
            "The activation options stayed the same. Users can start Premium for 7 days with a one-time $1 payment, use their own AI API key for 3 days of Premium, or continue on the Free plan.",
          ],
        },
        {
          id: "onboarding-results",
          title: "Results",
          paragraphs: [
            "The updated onboarding is live. It gives new signups a relevant product experience before they choose how to start, while keeping the pricing and trial model intact.",
            "The metrics to validate are signup-to-activation, drop-off before plan selection, median time to first Andy draft, 7-day retained activation, and trial-to-paid conversion. I’m leaving the numeric comparison out until the sample, dates, and measurement method are confirmed.",
          ],
        },
        {
          id: "onboarding-learnings",
          title: "What I learned / what’s next",
          paragraphs: [
            "When pricing cannot change, reducing uncertainty matters as much as reducing friction. Showing the product at the moment a user is deciding gives the commitment more context.",
            "Next I would test demo length, goal paths with weaker activation, and whether returning users should be able to skip the demo while still seeing the relevant product context.",
          ],
        },
      ],
    },
  },
  "reepl-contacts": {
    problem:
      "Reepl users were building larger LinkedIn networks, but LinkedIn made it difficult to remember who mattered, what happened in previous conversations, and who needed a follow-up. That led to lost leads, forgotten conversations, and no clear way to prioritize relationships.",
    shipped:
      "A lightweight relationship-management layer inside Reepl: save contacts from the extension, organize the relationship, and sync the right records into systems such as Zoho and HubSpot.",
    outcome:
      "A connected path from content and engagement to relationship, conversation, and opportunity, with Reepl acting as the working layer between LinkedIn and the team’s CRM.",
    url: "https://reepl.io",
    story: {
      title: "Turning LinkedIn connections into actionable relationships",
      subtitle:
        "I designed a lightweight CRM for LinkedIn relationship management, connecting content, engagement, conversations, and follow-up.",
      metadata: [
        { label: "Role", value: "Product designer (0→1 product design)" },
        { label: "Users", value: "People building and managing lead lists" },
        { label: "Scope", value: "CRM, contact organization, and integrations" },
        { label: "Status", value: "Shipped" },
      ],
      artwork: {
        src: "/work/reepl-case-study/contacts-thumbnail.png",
        width: 1044,
        height: 615,
      },
      sections: [
        {
          id: "relationship-context",
          title: "Context",
          paragraphs: [
            "Reepl helps users grow on LinkedIn through content, engagement, and conversations. As users interacted with more people, the product created more relationship context than LinkedIn could help them manage.",
          ],
        },
        {
          id: "relationship-problem",
          title: "Problem",
          paragraphs: [
            "LinkedIn made it easy to connect with people, but difficult to remember who mattered, what happened in previous conversations, and who needed a follow-up.",
            "That created lost leads, forgotten conversations, and no clear way to prioritize relationships. A contact saved from the extension was not automatically a usable lead; people still had to preserve the context and decide what to do next.",
          ],
        },
        {
          id: "relationship-insight",
          title: "Insight",
          paragraphs: [
            "The issue wasn’t a lack of connections. It was relationship management. Users needed a way to turn a large LinkedIn network into something structured and actionable, without losing the context that made each relationship useful.",
          ],
        },
        {
          id: "relationship-question",
          title: "Design question",
          paragraphs: [
            "How might we help users organize and act on their LinkedIn relationships without turning Reepl into a complex traditional CRM?",
          ],
        },
        {
          id: "relationship-solution",
          title: "Solution",
          paragraphs: [
            "I designed a centralized people view that made the next useful action visible instead of treating contacts as a static address book. The relationship could be organized in Reepl, then prepared for the team’s existing CRM.",
          ],
          list: [
            "Centralized people and contact view",
            "Lists and segments for organizing relationships",
            "ICP and relevance indicators",
            "Notes and conversation context",
            "Relationship or pipeline status",
            "Follow-up actions",
            "Last interaction and next action",
          ],
        },
        {
          id: "relationship-why-it-matters",
          title: "Why it matters",
          paragraphs: [
            "The CRM connects the different parts of Reepl into one workflow: content → engagement → relationship → conversation → opportunity.",
            "A contact saved during research or outreach can become an organized, contextualized lead and then move into Zoho, HubSpot, or the team’s existing system without the same manual re-entry. Reepl becomes the relationship layer that makes the next action clear.",
          ],
        },
      ],
    },
  },
  "reepl-platform": {
    problem:
      "Reepl was a Chrome extension for writing LinkedIn comments with AI. Reviews called it hard to navigate and slow, and a commenting tool had little room to grow.",
    shipped:
      "A redesigned product for planning, writing, publishing and replying on LinkedIn, X and Reddit, across web, extension, phone, desktop and AI connectors.",
    outcome:
      "Live. Reepl has grown from zero to more than ₹1 lakh in monthly recurring revenue.",
    url: "https://reepl.io",
    story: {
      title: "Reepl: From a LinkedIn commenting tool to a multi-platform product",
      subtitle:
        "Reepl started as a Chrome extension that wrote LinkedIn comments. I redesigned it into a product for planning, writing, publishing and replying across LinkedIn, X and Reddit. It has grown from zero to more than ₹1 lakh in monthly recurring revenue, and I now run its product and marketing alongside design.",
      metadata: [
        { label: "Role", value: "Product designer · Product and marketing" },
        { label: "Team", value: "One designer, one developer" },
        { label: "Timeline", value: "2025 – present" },
        { label: "Status", value: "Live" },
      ],
      artwork: { src: "/work/reepl-platform/composer-app.webp", width: 2000, height: 1133 },
      sections: [
        {
          id: "platform-start",
          title: "Where Reepl started",
          paragraphs: [
            "Reepl launched as a commenting tool: fast AI replies on LinkedIn, and nothing else. Chrome Web Store reviews said it was hard to find things and slow to use. There was no design system, no clear hierarchy and no onboarding.",
          ],
        },
        {
          id: "platform-bet",
          title: "The bet",
          paragraphs: [
            "LinkedIn was turning into a content platform, and only a small share of its members post regularly. Anyone who could post consistently had a real advantage, but consistency was exactly where professionals failed.",
            "Staying a commenting tool meant staying small. We rebuilt Reepl around the four reasons people stopped posting.",
          ],
        },
        {
          id: "platform-problems",
          title: "Four problems, four answers",
          paragraphs: [],
          list: [
            "“I don’t know what to post.” Signals surfaces what is trending in the user’s field from Reddit, YouTube and LinkedIn. The Idea Feed prepares post ideas from their goals and past posts, so ideas are waiting when they open Reepl.",
            "“AI sounds like a robot.” Voice profiles learn from the user’s own posts, so drafts match their tone and vocabulary. Agencies get one profile per client.",
            "“I’m never at my desk.” Andy, Reepl’s AI agent, drafts in the background and sends posts to the user’s phone for approval. Connectors let people work from Claude or ChatGPT.",
            "“I don’t know if it’s working.” Insights shows reach, engagement and what formats work, and users can simply ask Andy what is working for them.",
          ],
          image: {
            src: "/work/reepl-platform/signals.png",
            alt: "Reepl Signals feed showing trending topics from Reddit, Google Trends and RSS, with the new navigation on the left",
            caption: "Signals: post ideas from Reddit, Google Trends and RSS, inside the new navigation.",
            width: 1024,
            height: 768,
          },
        },
        {
          id: "platform-ia",
          title: "Restructuring the product",
          paragraphs: [
            "Features sat four or five clicks deep with no easy way back. I rebuilt navigation around a workspace model people already know from Slack and Notion: Dashboard, Content Hub, Analytics, Library, Contacts and Settings.",
          ],
          list: [
            "The dashboard shows recently viewed items, so the trip people made most often became one click.",
            "Analytics moved out of Settings to the top level, because the people who pay check their growth daily.",
            "Writing, the calendar and ideas live together in the Content Hub, because people think of writing and scheduling as one job.",
            "Settings split into three levels: personal, workspace and billing, and AI (models, voice profiles and connectors).",
            "A command palette and search give frequent users a faster way around.",
          ],
        },
        {
          id: "platform-composer",
          title: "The hardest decision: the composer",
          paragraphs: [
            "The composer, where people write, get AI help and schedule, was the most argued-over screen. The founder wanted every feature visible at all times, because more visible felt more valuable.",
            "I argued the opposite: a screen that tries to do everything communicates nothing. I pushed for three panels with one job each: posts on the left, the editor with a LinkedIn-style preview in the centre, and the AI sidebar on the right, present but not competing.",
            "We disagreed genuinely, and the final layout is a middle ground that is better than either starting position. The same thing happened with Stories, a feature that turns real experiences into posts. The founder wanted a pop-up; I prototyped both versions, and the sidebar version shipped.",
          ],
          image: {
            src: "/work/reepl-platform/composer-thumbnail.png",
            alt: "Reepl composer: posts list on the left, editor with a LinkedIn-style preview in the centre, AI sidebar on the right",
            caption: "The composer: posts, editor with preview, and the AI sidebar, each with one job.",
            width: 1110,
            height: 780,
          },
        },
        {
          id: "platform-ai",
          title: "One assistant, two modes",
          paragraphs: [
            "People needed quick help sometimes and hands-off help at other times, so the AI sidebar has two clearly separated modes.",
          ],
          list: [
            "Chat mode handles one-off requests, such as building a month’s calendar from a Google Doc, using sources like Notion, Google Docs and Airtable.",
            "Agent mode is for people who travel: connect sources, set a posting rhythm, pick a voice profile and choose where approvals go. Andy drafts batches and the user approves them from their phone.",
            "A mode switch sits at the top, the connected sources and account are always visible, and permissions are opt-in and explained.",
          ],
          image: {
            src: "/work/reepl-platform/writing-styles.png",
            alt: "Andy's draft in the sidebar with the writing style menu open, listing voice profiles",
            caption: "Choosing a writing style: each voice profile is one click away while drafting.",
            width: 1024,
            height: 768,
          },
        },
        {
          id: "platform-context",
          title: "Andy knows you, not just the prompt",
          paragraphs: [
            "Generic AI writing sounds generic because it knows nothing about the person. Most assistants start every chat from zero, so people spend their first messages explaining who they are, what they sell and what they are looking at. I designed Andy around context instead, so it starts every draft already knowing the user.",
          ],
          list: [
            "How you write: writing styles trained on the user’s own posts, so drafts match their tone, structure and vocabulary.",
            "How you think and what you sell: a context profile covering the company, ideal customer, content pillars and goals, so posts point at buyers, not likes.",
            "What you have shipped and said: integrations with GitHub, Notion, Google Docs, call-note tools like Fathom and Fireflies, Medium, Substack and YouTube feed real work and real customer questions into ideas and drafts.",
            "Where you are: a small chip above the input shows what Andy can see, such as “Viewing: Calendar” or “From Composer” with the post being edited, so “make this shorter” just works. One click removes it.",
            "Where you work: the same Andy runs inside Claude and ChatGPT through connectors, and the conversation follows the user from page to page instead of resetting.",
          ],
        },
        {
          id: "platform-extension",
          title: "Redesigning the extension",
          paragraphs: [
            "Users said generated comments felt robotic. The new comment tool has two paths. Quick mode offers comment types such as Appreciate, Agree and Celebrate, a length setting and one-click insert. Personalised mode lets people type or speak their own view, and the AI combines it with the post.",
            "When someone has already started typing, the button offers to improve their text instead of replacing it.",
          ],
        },
        {
          id: "platform-system",
          title: "A design system both of us could build from",
          paragraphs: [
            "With one designer and one developer there was no room for handoff mistakes. I built a design system whose tokens map directly to Tailwind, and the extension and web app now share it, so they finally feel like one product.",
            "I designed in Figma and implemented with Claude Code, so design decisions and shipping decisions became the same decision.",
          ],
        },
        {
          id: "platform-now",
          title: "Where Reepl is now",
          paragraphs: [
            "Reepl now covers LinkedIn, X and Reddit, and runs on the web, as a Chrome and Edge extension, on Android, on Mac and Windows, and inside Claude and ChatGPT. It has grown from zero to more than ₹1 lakh in monthly recurring revenue, and I run product and marketing alongside design.",
            "The revenue figure covers the whole product; I don’t attribute it to any single design change.",
          ],
          image: {
            src: "/work/reepl-platform/mcp.png",
            alt: "Claude creating a Reepl draft next to Reepl's connector settings page",
            caption: "Reepl inside Claude: drafts made in a chat land in Reepl.",
            width: 1024,
            height: 768,
          },
          metrics: [
            { value: "₹1L+", label: "Monthly recurring revenue, from zero" },
            { value: "3", label: "Platforms: LinkedIn, X and Reddit" },
            { value: "2", label: "People on the product team" },
          ],
        },
        {
          id: "platform-didnt-work",
          title: "What didn’t work",
          paragraphs: [
            "The referral programme, which offered a lifetime plan for invites, never took off. We asked too early, before people had their own first win. I would trigger it after a user’s first post performs well, when they have a real reason to tell someone.",
          ],
        },
      ],
    },
  },
  garga: {
    problem:
      "Most AI astrology apps hallucinate. Ask twice, get two lives. People who care about the tradition deserve the chart to be real.",
    shipped: {
      design:
        "Reports and chat where every AI answer comes from the user’s calculated birth chart, so asking twice gets the same answer. Paid.",
      code:
        "Swiss Ephemeris + a logic engine, then AI narration attached to the math. Reports and chat, paid.",
    },
    outcome:
      "A side project, live on garga.app. I’m a designer who respects the source — not a pandit.",
    image: "/garga.png",
    url: "https://garga.app",
  },
};
