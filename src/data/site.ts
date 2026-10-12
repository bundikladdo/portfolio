export const site = {
  name: "Kartik Jangid",
  role: "Product designer & design engineer",
  description: "Kartik Jangid is a product designer and design engineer in Jaipur, designing and building early-stage products across AI, SaaS, and mobile.",
  resumeHref: "/resume",
  updatedAt: "2026-10-08",
  intro: "I turn early-stage ideas into useful products, from the first flow to the shipped interface.",
  bio: [
    "I’m a product designer at Autodeus Technologies (Smartify), working remotely on Reepl. I own flows, interfaces, and design systems, and work directly in code to carry the design through to release.",
    "Alongside my product work, I built Garga and Toolnest and explored a more transparent way to tailor resumes with FormPilot.",
  ],
  location: "Jaipur, Rajasthan",
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
  garga: { name: "Garga", href: "https://garga.app", color: "#f54e00" },
} as const;

export const autodeusProducts = [
  { name: "Reepl", href: "https://reepl.io", image: "/reepl.png" },
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
  discipline: string;
  status: string;
  image?: string;
  visual?: "dotted-grid";
  artwork?: { src: string; width: number; height: number };
  artworks?: { src: string; width: number; height: number }[];
  case?: boolean;
};

export const selectedWork: WorkCard[] = [
  {
    slug: "reepl-mobile",
    line: "Reepl Mobile · A daily publishing loop",
    about: "Designed and built a native review-and-publish app in 17 days.",
    discipline: "Mobile · Design + engineering",
    status: "Shipped",
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
    line: "Reepl Onboarding · Value before commitment",
    about: "A personalized product demo before the paid-trial decision.",
    discipline: "SaaS · Activation",
    status: "Live",
    year: "2026",
    visual: "dotted-grid",
    case: true,
  },
  {
    slug: "reepl-contacts",
    line: "Reepl Contacts · Relationships with context",
    about: "Turn saved LinkedIn contacts into an actionable relationship workflow.",
    discipline: "SaaS · Product strategy",
    status: "Shipped",
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
    line: "Garga · Calculation before conversation",
    about: "An astrology product with AI narration grounded in calculated charts.",
    discipline: "Independent · Design + engineering",
    status: "Built",
    year: "2025",
    image: "/garga.png",
    case: true,
  },
  {
    slug: "toolnest",
    line: "Toolnest · Seven tools, no signup",
    about: "A focused utility collection that gets straight to the task.",
    discipline: "Independent · Utility design",
    status: "Built",
    year: "2026",
    image: "/toolnest.png",
    case: true,
  },
  {
    slug: "formpilot",
    line: "FormPilot · Every AI edit explained",
    about: "A resume-tailoring workflow built around review, accuracy, and control.",
    discipline: "Independent · AI interaction design",
    status: "Prototype",
    year: "2026",
    case: true,
  },

];

export const featuredWork: WorkCard[] = [
  ...selectedWork.slice(0, 3),
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
    company: "Autodeus Technologies (Smartify)",
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
        "Product design and implementation for Reepl, an AI LinkedIn platform. Work spans onboarding, mobile publishing, and relationship management.",
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
        status: "live",
        description:
          "A native iOS and Android app that turns Andy’s daily draft into a focused approve, edit, and publish loop.",
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
  image?: {
    src: string;
    alt: string;
    caption: string;
    width?: number;
    height?: number;
    variant?: "phone";
  };
  video?: { src: string; poster: string; ariaLabel: string };
};

export type CaseStudy = {
  role: string;
  scope: string;
  evidence: string;
  problem: string;
  shipped: string;
  outcome: string;
  image?: string;
  url?: string;
  story: {
    title: string;
    subtitle: string;
    metadata: { label: string; value: string }[];
    artwork?: { src: string; width: number; height: number };
    artworks?: { src: string; width: number; height: number }[];
    sections: CaseStudySection[];
  };
};

export const caseStudies: Record<string, CaseStudy> = {
  "reepl-mobile": {
    role: "Sole designer and engineer",
    scope: "Native iOS and Android · 17 days",
    evidence: "Implementation and screen examples are shown below. Adoption and retention results are not yet available.",
    problem:
      "Reepl’s AI ghostwriter, Andy, prepared daily LinkedIn drafts, but reviewing and approving them depended on opening the web app. The opportunity was to make that decision available on a phone.",
    shipped:
      "A native iOS and Android app that made the daily approval loop fast enough to complete from a phone: push notification → read Andy’s draft → approve or edit → publish → keep the streak alive.",
    outcome:
      "Built a native review-and-publish workflow in 17 days, with shared post cards, calendar review, and visible publishing streaks.",
    url: "https://reepl.io",
    story: {
      title: "Reepl Mobile: bringing the daily publishing loop to a phone",
      subtitle:
        "I designed and built a native iOS and Android app in 17 days, centered on reviewing Andy’s draft, editing when needed, and choosing when to publish.",
      metadata: [
        { label: "Role", value: "Sole designer and engineer" },
        { label: "Timeline", value: "14 Sep – 1 Oct 2026" },
        { label: "Stack", value: "Expo, React Native, TypeScript, Claude Code" },
        { label: "Status", value: "Launched" },
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
            "Andy already prepared a daily draft. The remaining job was a human decision: is this something I want to publish? Requiring a desktop session added another step between a prepared post and that decision.",
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
          title: "The insight",
          paragraphs: [
            "I framed mobile around a narrower job than the web app: review an existing draft and decide what to do next. That led to a focused review surface instead of rebuilding the full authoring workspace. Whether this improves approval frequency needs to be measured.",
          ],
        },
        {
          id: "mobile-loop",
          title: "A small loop with a clear finish",
          paragraphs: [
            "The app was designed around one repeatable job: help someone review and publish Andy’s next post in a short mobile session. Every screen supports that sequence or helps the user understand what their consistency is building.",
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
            "Shared type roles instead of scattered literal sizes, keeping screens consistent across platforms.",
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
          title: "Engineering that protected the design",
          paragraphs: [
            "The fastest route was not just shipping screens. I fixed the rough edges that would have made a small app feel unreliable on its most important path.",
          ],
          list: [
            "Fixed Google sign-in failing on the first tap and Home loading as a cascade of spinners.",
            "Fixed pages opening already scrolled under the header and the Android keyboard hiding the Andy chat box.",
            "Ported the web app’s data mapping so photos and organisations show up the same way on both apps.",
          ],
        },
        {
          id: "mobile-ai-workflow",
          title: "AI in the workflow",
          paragraphs: [
            "Claude Code helped with repetitive refactors and first-draft Android ports. I made the design decisions, reviewed the implementation, and checked changes on the simulator. I kept responsibility for navigation, platform behavior, and the final review experience.",
          ],

        },
        {
          id: "mobile-outcome",
          title: "What shipped and what needs measuring",
          paragraphs: [
            "The delivery is a native approval workflow, not a measured retention claim. Screens below show the implemented experience; a longer post-launch observation period is needed to assess behavior.",
            "I would compare approval within 24 hours, posts published per active user, and return rate across equivalent pre- and post-launch cohorts. The analysis should distinguish mobile adoption from changes in the overall user base.",
          ],
          image: {
            src: "/work/reepl-mobile/streak.png",
            alt: "Reepl mobile weekly goal screen showing a 23 day streak and activity heatmap",
            caption: "The streak turns a one-tap approval into a habit users can see accumulating.",
            width: 1206,
            height: 2622,
            variant: "phone",
          },
        },
        {
          id: "mobile-next",
          title: "What I’d do next",
          paragraphs: [
            "Measure success from day one instead of afterwards, and test the approve flow with users before polishing the Android version. The next useful questions are where people pause in the review loop, which notifications earn a return, and when editing is worth the extra tap.",
          ],
        },
      ],
    },
  },
  "reepl-onboarding": {
    role: "Product designer, working alongside engineering",
    scope: "Onboarding and activation · 2 weeks",
    evidence: "Before-and-after walkthroughs show the flow change. A conversion lift is not claimed without a confirmed cohort and measurement window.",
    problem: "People had to choose a paid trial before seeing what Reepl could do. The old onboarding collected their goals but showed everyone the same screens, so they had little context for that decision.",
    shipped: "A goal-based onboarding flow with a personalized demo of Andy and Routines before activation.",
    outcome: "Live. The flow now shows relevant product value before users choose an activation path.",
    url: "https://reepl.io",
    story: {
      title: "Reepl Onboarding: show the value before the commitment",
      subtitle: "Reepl asked users to start a paid trial before they had seen the product work. I redesigned onboarding around each user’s stated goal and added a personalized Andy demo before plan selection.",
      metadata: [
        { label: "Duration", value: "2 weeks" },
        { label: "Role", value: "Product Designer (flow design and product build alongside engineering)" },
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
          title: "Plan selection at the time of the redesign",
          paragraphs: [
            "At the time of this redesign, the activation options stayed the same: 7 days of Premium with a one-time $1 payment, 3 days of Premium with the user’s own AI API key, or the Free plan. These are the project’s historical constraints, not a current pricing offer.",
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
    role: "Product designer",
    scope: "0→1 CRM · Contact organization and integrations",
    evidence: "The interface and workflow are documented here. Follow-up completion and CRM sync success still need outcome measurement.",
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
        "We designed a lightweight CRM for LinkedIn relationship management, connecting content, engagement, conversations, and follow-up.",
      metadata: [
        { label: "Role", value: "Product Designer (0→1 product design)" },
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
            "We designed a centralized people view that made the next useful action visible instead of treating contacts as a static address book. The relationship could be organized in Reepl, then prepared for the team’s existing CRM.",
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
          id: "relationship-decisions",
          title: "Decisions and trade-offs",
          paragraphs: [
            "The scope was a relationship layer within Reepl, with external CRMs remaining the destination for broader sales operations. That kept the design question focused on context and the next action.",
          ],
          list: [
            "Keep lists, notes, status, and follow-up near the contact instead of splitting relationship context across separate tools.",
            "Carry the context of a saved LinkedIn contact into the people view, rather than treating it as a new, blank record.",
            "Connect to Zoho and HubSpot rather than expanding this release into every feature of a traditional CRM.",
          ],
          image: {
            src: "/work/reepl-case-study/contacts-thumbnail.png",
            alt: "Reepl Contacts interface showing the people view and relationship organization",
            caption: "The centralized people view brings contact organization into the existing Reepl workflow.",
            width: 1044,
            height: 615,
          },
        },
        {
          id: "relationship-why-it-matters",
          title: "Why it matters",
          paragraphs: [
            "The CRM connects the different parts of Reepl into one workflow: content → engagement → relationship → conversation → opportunity.",
            "A contact saved during research or outreach can become an organized, contextualized lead and then move into Zoho, HubSpot, or the team’s existing system without the same manual re-entry. Reepl becomes the relationship layer that makes the next action clear.",
          ],
        },
        {
          id: "relationship-evaluation",
          title: "Outcome and next validation",
          paragraphs: [
            "The shipped workflow connects saving, organizing, following up, and handing contacts to an external CRM. That is the delivery outcome; a revenue or lead-conversion effect has not been established here.",
            "Next I would test whether users can find a contact’s last interaction, choose a follow-up, and complete a CRM handoff without losing context. Useful measures would be task completion, follow-up completion, and sync failures.",
          ],
        },
      ],
    },
  },
  garga: {
    role: "Founder, designer, and builder",
    scope: "Independent product · Chart calculation, reports, and chat",
    evidence: "The product interface and calculation-to-narration architecture are shown here. No accuracy benchmark or commercial growth result is claimed.",
    problem: "An AI-generated astrology reading can sound convincing even when its underlying chart is inconsistent. The design challenge was to ground the conversation in a repeatable calculation.",
    shipped: "A product that calculates charts with Swiss Ephemeris and a logic layer before generating AI narration, with paid reports and chat.",
    outcome: "Built a calculation-first product with a clear separation between chart data and AI interpretation.",
    image: "/garga.png",
    url: "https://garga.app",
    story: {
      title: "Garga: calculation before conversation",
      subtitle: "I built an astrology product around a trust problem: a fluent AI answer should not invent the chart it is interpreting.",
      metadata: [
        { label: "Role", value: "Founder, designer, and builder" },
        { label: "Year", value: "2025" },
        { label: "Scope", value: "Chart engine, reports, and chat" },
        { label: "Type", value: "Independent product" },
      ],
      sections: [
        {
          id: "garga-problem", title: "The trust problem",
          paragraphs: ["The core concern was consistency. If the same birth details can produce a different underlying chart each time, a polished conversation hides a basic product failure. I treated the chart calculation and the generated interpretation as separate responsibilities."],
        },
        {
          id: "garga-system", title: "A calculation-first system",
          paragraphs: ["Swiss Ephemeris supplies the astronomical calculations. A logic layer organizes the chart, and AI narration works from that structured information. The model’s role is to explain the result; it is not the source of the planetary positions."],
          list: ["Birth details → calculated chart → structured interpretation → report or conversation.", "Keep repeatable source data separate from generated language.", "Use the same chart context across reports and follow-up questions."],
          image: { src: "/garga.png", alt: "Garga birth-chart interface showing calculated planetary placements", caption: "A calculated birth chart provides a shared reference for reports and conversation.", width: 792, height: 685 },
        },
        {
          id: "garga-tradeoffs", title: "The design trade-off",
          paragraphs: ["A free-form chatbot is easy to start with, but it makes the answer’s source harder to reason about. Grounding narration in calculated chart data adds implementation work while giving the conversation a consistent reference point.", "That boundary also limits the claim: a deterministic chart calculation does not establish the validity of an astrological interpretation. The product should make that distinction understandable."],
        },
        {
          id: "garga-outcome", title: "Delivery and next validation",
          paragraphs: ["The delivered scope includes chart calculations, reports, paid access, and chat. This case study describes that implementation rather than claiming a measured improvement in trust or revenue.", "Next I would evaluate repeated calculations for the same inputs, test time-zone and birth-time edge cases, and ask users whether they can distinguish calculated chart facts from generated interpretation."],
        },
      ],
    },
  },
  toolnest: {
    role: "Designer and builder",
    scope: "Independent product · Seven utilities",
    evidence: "The available product interface is shown below. Task-time, adoption, and privacy outcomes have not been quantified.",
    problem: "A quick utility task can turn into an account-creation flow or a search through advertising. The tool should be easier to use than the workaround.",
    shipped: "A focused collection of seven micro-tools with no signup and local processing where practical.",
    outcome: "Built seven utilities around direct access to the task, without an account requirement.",
    image: "/toolnest.png",
    story: {
      title: "Toolnest: seven tools, straight to the task",
      subtitle: "I designed and built a small utility collection around one constraint: people should be able to do the job without creating an account.",
      metadata: [
        { label: "Role", value: "Designer and builder" },
        { label: "Year", value: "2026" },
        { label: "Scope", value: "Seven micro-tools" },
        { label: "Type", value: "Independent product" },
      ],
      sections: [
        {
          id: "toolnest-problem", title: "A small task deserves a short path",
          paragraphs: ["People open a utility to get a result, not to learn a new product. An account gate or a crowded landing page adds work before the task has even begun. Toolnest’s brief was to keep that path direct."],
        },
        {
          id: "toolnest-scope", title: "Scope as a design decision",
          paragraphs: ["I kept the collection to seven tools instead of turning it into an endless directory. The shared product promise is simple: find the utility, provide the input, and use the result."],
          list: ["No signup before using a tool.", "A focused collection instead of a large catalog to navigate.", "Local processing where practical, without implying every tool runs entirely on-device."],
          image: { src: "/toolnest.png", alt: "Toolnest word and character counter with live results, copy, and clear actions", caption: "The word and character counter shows results next to the input. This screen also includes advertising and an optional Pro offer.", width: 1280, height: 1457 },
        },
        {
          id: "toolnest-tradeoffs", title: "What the simplicity costs",
          paragraphs: ["Removing an account requirement means the experience cannot depend on a signed-in profile. The useful result has to stand on its own in the current session.", "The word counter screen includes ad placements and an optional Pro offer. The next design iteration should keep those secondary to the task and test whether they distract from the result. Local processing is a per-tool choice, not a blanket privacy claim."],
        },
        {
          id: "toolnest-outcome", title: "Delivery and next validation",
          paragraphs: ["The delivered scope is seven tools with direct access and no signup. The artifact demonstrates the interface; it does not establish faster task completion or sustained adoption.", "I would next test first-use task completion, time to a usable result, invalid-input recovery, and keyboard access for each utility."],
        },
      ],
    },
  },
  formpilot: {
    role: "Product designer and builder",
    scope: "Independent prototype · AI-assisted resume tailoring",
    evidence: "This study describes the review workflow. Hiring outcomes and factual-accuracy rates have not been established.",
    problem: "AI resume tailoring can change someone’s meaning or introduce unsupported claims, leaving the applicant to audit a complete rewrite.",
    shipped: "A review workflow that explains proposed changes, keeps the applicant in control, and supports PDF export.",
    outcome: "Built an explain-and-review approach to tailoring rather than treating generated text as a final resume.",
    url: "https://formpilot-web-peach.vercel.app",
    story: {
      title: "FormPilot: every AI edit needs a reason",
      subtitle: "An exploration of resume tailoring that helps an applicant review changes without losing their own experience and voice. Previously called Vizzly.",
      metadata: [
        { label: "Role", value: "Product designer and builder" },
        { label: "Year", value: "2026" },
        { label: "Scope", value: "Review workflow and PDF export" },
        { label: "Type", value: "Independent prototype" },
      ],
      sections: [
        {
          id: "formpilot-problem", title: "The cost of a complete rewrite",
          paragraphs: ["A generated resume may sound polished while overstating a skill or changing the substance of an achievement. If the applicant has to compare every sentence from scratch, automation has moved the work rather than removed it."],
        },
        {
          id: "formpilot-loop", title: "Make the change reviewable",
          paragraphs: ["The design centers on a review loop: propose a change, explain its purpose, let the applicant check it, and export the reviewed resume. The original experience remains the reference for deciding whether an edit belongs."],
          list: ["Start from the applicant’s existing experience.", "Explain why a proposed edit is relevant.", "Give the applicant the final decision on the wording.", "Export a PDF after review."],
        },
        {
          id: "formpilot-tradeoff", title: "Control over one-click completion",
          paragraphs: ["A review step makes the flow longer than a one-click rewrite. That is an intentional trade-off when a mistaken statement can follow someone into an interview.", "The design goal is to avoid fabricated experience. An explanation alone cannot guarantee that, so the applicant’s review remains essential and should be evaluated as part of the product."],
        },
        {
          id: "formpilot-outcome", title: "What this prototype demonstrates",
          paragraphs: ["The prototype explores transparent editing and PDF export. It is not evidence of better hiring outcomes or a guarantee that every generated suggestion is correct.", "Next I would test whether applicants catch unsupported edits, understand the reason for a change, and can export a readable resume without losing important details."],
        },
      ],
    },
  },
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return Object.hasOwn(caseStudies, slug) ? caseStudies[slug] : undefined;
}

export const resumeSkills = [
  { title: "Product design", detail: "Interaction design, information architecture, wireframing, prototyping, usability testing, and design systems." },
  { title: "Design engineering", detail: "React, TypeScript, React Native, Expo, reusable components, and implementation review." },
  { title: "Ways of working", detail: "Figma, FigJam, cross-functional collaboration, and AI-assisted implementation with human review." },
];

export const resume = {
  summary: "My work spans AI-assisted SaaS, native mobile experiences, and design systems.",
  achievements: [
    "Designed goal-based onboarding that demonstrates product value before plan selection.",
    "Designed and built Reepl’s native mobile review-and-publish workflow with React Native and Expo.",
    "Designed relationship-management flows covering saved contacts, context, and follow-up.",
  ],
  education: {
    degree: "Bachelor’s in Computer Science",
    year: "2025",
    school: "University of Engineering & Management, Jaipur",
  },
};
