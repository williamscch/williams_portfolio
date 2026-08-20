import { FC } from "react";
import IconUpwork from "@/assets/IconUpwork";
import IconLinkedin from "@/assets/IconLinkedin";
import IconGithub from "@/assets/IconGithub";

// ─── Language ─────────────────────────────────────────────────────────────────

export type Language = "en" | "es";

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface TestimonialQuote {
  from: string;
  role: string;
  message: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  tagline?: string;
  client?: string;
  role?: string;
  timeframe?: string;
  challenge?: string;
  architecture?: string;
  impact?: string;
  tech?: string[];
  /** Optional single public hero image (strictly one, no internal admin dumps). */
  image?: string;
  /** Optional live production URL. */
  live?: string;
}

export interface StoryChapter {
  id: string;
  chapterNumber: string;
  title: string;
  subtitle?: string;
  timeframe?: string;
  narrative: string;
  quote?: TestimonialQuote;
  caseStudyIds: string[];
}

export interface HeroContent {
  greeting: string;
  headline: string;
  subheadline: string;
  philosophies: string[];
}

export interface HumanSide {
  headline: string;
  person: string;
  aiWorkflow: string;
  mentorship: string;
  certifications: string[];
}

export interface ToolkitGroup {
  groupName: string;
  items: string[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SocialIcon = FC<any>;

export interface ConnectInfo {
  email: string;
  emailHref: string;
  location: string;
  availability: string;
  social: { name: string; url: string; icon: SocialIcon }[];
}

export interface PortfolioContent {
  hero: HeroContent;
  chapters: StoryChapter[];
  caseStudies: Record<string, CaseStudy>;
  humanSide: HumanSide;
  toolkit: ToolkitGroup[];
  connect: ConnectInfo;
}

// ─── Case Study Records (shared, not locale-duplicated) ───────────────────────

const caseStudies: Record<string, CaseStudy> = {
  "apefest-lisbon": {
    id: "apefest-lisbon",
    title: "ApeFest Lisbon 2024 — Ticket Sale",
    tagline: "High-traffic ticketing platform: re-skin, load testing & live launch support.",
    client: "Yuga Labs / tokenproof",
    role: "Sole Frontend Engineer",
    timeframe: "2024",
    challenge:
      "Own the entire re-skin of the ApeFest Lisbon ticketing page solo, then stress-test it to survive the spike at drop time — with no room for downtime during a live international event.",
    architecture:
      "React + Vite + Tailwind, deployed on Vercel. Authored custom load-testing scripts to simulate concurrent sessions pre-launch. Provided real-time technical monitoring and support on launch day.",
    impact:
      "Ticket drop went live without incident for 3,000+ attendees. Load tests gave the team confidence before a high-stakes, irreversible moment.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel", "Load Testing"],
    live: "https://apefest.tokenproof.xyz/",
  },
  "apefest-merch": {
    id: "apefest-merch",
    title: "ApeFest 2024 Exclusive Merch Sale",
    tagline: "Token-gated merch platform with Stripe payments & entry queue.",
    client: "Yuga Labs / tokenproof",
    role: "Sole Developer",
    timeframe: "2024",
    challenge:
      "Build an exclusive merch sale restricted to verified ApeFest ticket holders, with a queue system and session expiration to prevent abuse under real event conditions.",
    architecture:
      "React + Tailwind following a Figma design. Stripe for payment processing. tokenproof authentication widget to verify on-chain ticket ownership. Internal inventory API integration.",
    impact:
      "Shipped end-to-end as the only developer, handling auth, queue logic, payment, and inventory in a single project.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Stripe", "Figma"],
  },
  "bodega": {
    id: "bodega",
    title: "MadeByApes Bodega Web",
    tagline: "Full-stack content platform for Yuga Labs' MadeByApes licensing program.",
    client: "Yuga Labs",
    role: "Sole Full-Stack Developer",
    timeframe: "2023",
    challenge:
      "Build a production-grade platform from scratch — licensing database, CMS, fast search, email automation, and media storage — as the only engineer on the account.",
    architecture:
      "Next.js + Payload CMS backend with PostgreSQL. Meilisearch for fast license lookups. Mailgun for transactional emails. AWS S3 for media. Mobile and desktop optimized.",
    impact:
      "Content teams went from no self-serve capability to full CMS-driven updates. License lookup is near-instant via Meilisearch.",
    tech: ["Next.js", "Payload CMS", "TypeScript", "PostgreSQL", "AWS S3", "Meilisearch", "Mailgun"],
    live: "https://madeby.boredapeyachtclub.com/",
  },
  "tga-automation": {
    id: "tga-automation",
    title: "Token-Gate Automation (TGA)",
    tagline: "Turning bespoke client builds into a self-serve CMS workflow.",
    client: "tokenproof",
    role: "Lead Engineer",
    timeframe: "Jul – Nov 2024",
    challenge:
      "Every new token-gated client page (Forbes, F1, BMW, Yuga Labs) required manual per-client development. Identify a pattern, propose an automated solution, and build it.",
    architecture:
      "Payload CMS admin interface letting non-engineers generate and customize token-gated access pages. Next.js front-end renders the output dynamically.",
    impact:
      "Reduced per-client setup from manual multi-day builds to a CMS-driven workflow. Scaled to handle simultaneous client campaigns without additional engineering.",
    tech: ["Next.js", "Payload CMS", "React", "TypeScript"],
    live: "https://forbesweb3inspire.tokenproof.xyz/",
  },
  "uniserve-architecture": {
    id: "uniserve-architecture",
    title: "Uniserve Front-End Architecture",
    tagline: "Setting Apply's first Payload CMS frontend architecture when the tech lead stepped away.",
    client: "Uniserve (via Apply)",
    role: "Acting Tech Lead / Frontend Architect",
    timeframe: "Aug – Oct 2025",
    challenge:
      "The assigned tech lead had to step away mid-project. Step into an ambiguous ownership gap, establish a coherent front-end architecture, and keep the team moving.",
    architecture:
      "Defined Apply's first Payload CMS frontend implementation using an atomic component design system. Documented the full approach in Notion as a reusable company reference. Coordinated the rest of the dev team until the tech lead returned.",
    impact:
      "Project continued without disruption. Produced a Notion doc now used as the standard Payload reference at Apply.",
    tech: ["React", "Payload CMS", "TypeScript", "Tailwind CSS", "Notion"],
  },
  "alltech-solo": {
    id: "alltech-solo",
    title: "Alltech — Solo Pre-Launch Delivery",
    tagline: "Sole developer and primary client contact during critical pre-launch phase.",
    client: "Alltech (via Apply)",
    role: "Sole Developer & Technical Client Lead",
    timeframe: "~Nov 2025",
    challenge:
      "Return to Alltech for pre-launch readiness as the only engineer on the account — owning not just the code, but direct client stakeholder communication and technical decision-making.",
    architecture:
      "React, Vite, Tailwind CSS, Vercel. No other engineers on the account — full ownership of delivery, debugging, and client-facing technical conversations.",
    impact:
      "Received specific positive client feedback. Became Apply's sole technical point of contact during this period — without being assigned the title, purely by filling the gap.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
  },
  "momentum-calculator": {
    id: "momentum-calculator",
    title: "Momentum Loan Calculator",
    tagline: "Navigating conflicting stakeholder requirements to ship a customer-facing financial tool.",
    client: "Momentum (via Apply)",
    role: "Frontend Engineer",
    timeframe: "Nov 2025 – May 2026",
    challenge:
      "Requirements from the client changed and conflicted across multiple stakeholders. Resolve the ambiguity directly — through meetings and written communication — rather than escalating or waiting.",
    architecture:
      "React + TypeScript customer-facing loan calculator. Feature went through multiple requirement iterations; final version shipped to production.",
    impact:
      "Feature is live in production after successfully navigating a complex requirements process over ~6 months.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
};

// ─── Social Accounts (shared) ─────────────────────────────────────────────────

const socialAccounts = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/williamscolmenaresch",
    icon: IconLinkedin as SocialIcon,
  },
  {
    name: "GitHub",
    url: "https://github.com/williamscch",
    icon: IconGithub as SocialIcon,
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~0136f944648d8cc21e",
    icon: IconUpwork as SocialIcon,
  },
];

// ─── Content by Locale ────────────────────────────────────────────────────────

export const contentByLocale: Record<Language, PortfolioContent> = {
  // ── English ────────────────────────────────────────────────────────────────
  en: {
    hero: {
      greeting: "Hey, I'm Williams",
      headline: "Senior Software Engineer — I build software that holds up when it matters.",
      subheadline:
        "LATAM-based, globally collaborative. I turn ambiguous requirements into rock-solid products, integrate AI workflows to accelerate craftsmanship, and leave systems better than I found them.",
      philosophies: [
        "Ship under pressure without cutting corners",
        "Communicate clearly across timezones and cultures",
        "Leave every codebase better than you found it",
      ],
    },

    chapters: [
      {
        id: "chap-01",
        chapterNumber: "01 / 03",
        title: "The Fast Lane & The ApeFest Trilogy",
        subtitle: "Hong Kong · Lisbon · Las Vegas",
        timeframe: "2023 – 2025",
        narrative:
          "My first professional year was agency-speed: client after client at Crazy Imagine Software, then a placement at tokenproof that turned into a full-time chapter. tokenproof ran high-stakes, time-boxed experiences for some of the biggest names in Web3 — and nothing tested that more than ApeFest.\n\nThree cities. Three events. Each one a live production drop with a fixed date, real attendees, and zero tolerance for downtime.\n\n**Hong Kong (2023):** My first event-scale deployment — Firebase-backed order and session tracking for 2,000+ attendees across three live days.\n\n**Lisbon (2024):** Sole ownership of the ticket sale re-skin. I wrote and ran load-testing scripts to stress-test the platform before the drop, then provided real-time technical support during the live launch for 3,000+ attendees.\n\n**Las Vegas (2025):** After Yuga Labs acquired tokenproof's tech in December 2024, I wasn't carried over in the transition — but they specifically re-engaged me for ApeFest Las Vegas. The client called me back.",
        quote: {
          from: "Fonz Olvera",
          role: "Serial Entrepreneur, Former CEO at tokenproof",
          message:
            "Williams was an amazing addition to our team. Not only did he exceed our expectations of talent and skills, but he also carries an excellent work ethic and all around great attitude. Cannot wait to work with Williams again.",
        },
        caseStudyIds: ["apefest-lisbon", "apefest-merch"],
      },
      {
        id: "chap-02",
        chapterNumber: "02 / 03",
        title: "Building Platforms & Eliminating Repetition",
        subtitle: "MadeByApes Bodega · TGA Automation",
        timeframe: "2023 – 2024",
        narrative:
          "At the same time as the ApeFest trilogy, I was building infrastructure that had to outlast individual events.\n\n**MadeByApes Bodega** was the biggest solo full-stack project of my tokenproof years: a Next.js + Payload CMS platform for Yuga Labs' MadeByApes licensing program. License lookups, blog, handbooks, content management, AWS S3 media storage, Mailgun email — built and shipped alone.\n\n**TGA (Token-Gate Anything)** started as manual per-client work for Forbes, F1, BMW, and Yuga Labs — building custom token-gated access pages, one at a time. I recognized the pattern, proposed automating it, and built the CMS-driven tool myself. The same engineering that took days per client became a self-serve admin workflow.",
        quote: {
          from: "Jesus Cocaño",
          role: "Software Engineer & DevOps Engineer",
          message:
            "Exceptional frontend developer with a remarkable ability to learn quickly and adapt to new challenges. Their positive attitude and teamwork skills make every project smoother and more enjoyable. I highly recommend them to any team looking for both talent and great collaboration!",
        },
        caseStudyIds: ["bodega", "tga-automation"],
      },
      {
        id: "chap-03",
        chapterNumber: "03 / 03",
        title: "Stepping into Leadership & Enterprise at Apply",
        subtitle: "Uniserve · Alltech Solo · Momentum",
        timeframe: "2025 – 2026",
        narrative:
          "Apply is a UK-based software consultancy. I joined in January 2025 as a Senior Software Engineer. What I didn't expect was how quickly \"backup coverage\" became real ownership.\n\n**Uniserve (Aug–Oct 2025):** The tech lead had to step away mid-project. I stepped in, set Apply's first Payload CMS frontend architecture, ran the dev team, and documented the whole approach in Notion as a reusable reference.\n\n**Alltech — Solo Pre-Launch (Nov 2025):** I was brought back to Alltech specifically for pre-launch readiness — as the only developer on the account. I became Apply's sole technical point of contact: making decisions, running client calls, debugging production issues. No title assigned, just a gap that needed filling.\n\n**Momentum (Nov 2025 – May 2026):** A loan calculator with conflicting requirements from multiple stakeholders. I resolved the ambiguity directly — through meetings and written communication — and shipped it to production.",
        quote: {
          from: "Luis Lara",
          role: "Computer Systems Engineer",
          message:
            "Williams is a technology enthusiast. He is always willing to learn new things. He works very well in a team, and adheres to the recommendations and procedures within an organization. He is an excellent professional, with great talent and potential, who works hard to achieve his goals. Punctual, with initiative, intelligent, orderly, and detail-oriented.",
        },
        caseStudyIds: ["uniserve-architecture", "alltech-solo", "momentum-calculator"],
      },
    ],

    caseStudies,

    humanSide: {
      headline: "Beyond the terminal",
      person:
        "I'm based in Cúcuta, Colombia, with roots in San Cristóbal, Venezuela. I work fully remote across global distributed teams — US, UK, Europe — and hold a C1 Advanced English certification (EF SET, 63/100).",
      aiWorkflow:
        "I hold four Anthropic certifications (Claude 101, Claude Code 101, Claude Code in Action, AI Capabilities & Limitations — all 2026) plus Apply's internal AI Foundations training. I use AI tools daily — not as a shortcut, but as a force multiplier for engineering quality and delivery speed.",
      mentorship:
        "I currently mentor two engineers at Apply through monthly 1:1 coaching sessions. Earlier I mentored a junior developer at tokenproof (code reviews, architecture guidance, motivation support) and informally coached Microverse cohort peers. Mentoring shows up consistently across every chapter of my career.",
      certifications: [
        "Claude Code in Action — Anthropic (May 2026)",
        "Claude Code 101 — Anthropic (May 2026)",
        "AI Capabilities and Limitations — Anthropic (May 2026)",
        "Claude 101 — Anthropic (Apr 2026)",
        "AI Foundations at Apply — Tier 1 (May 2026)",
        "Braze Certified Developer (Jul 2025)",
        "Contentful Certified Professional (Feb 2025)",
        "EF SET English Certificate C1 Advanced (Jun 2024)",
      ],
    },

    toolkit: [
      {
        groupName: "Core Engineering & Frontend Mastery",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "PostgreSQL",
          "Payload CMS",
          "Web3 / Ethers.js",
        ],
      },
      {
        groupName: "AI & Modern Engineering",
        items: [
          "Anthropic Claude Code",
          "Prompt Engineering",
          "AI-Assisted Workflows",
          "Contentful",
          "Braze",
        ],
      },
      {
        groupName: "Cloud, Testing & Systems",
        items: ["AWS S3", "Firebase", "Vercel", "Playwright", "Jest", "Git & GitHub"],
      },
    ],

    connect: {
      email: "williamscolmenaresch@gmail.com",
      emailHref:
        "mailto:williamscolmenaresch@gmail.com?subject=Hello%20Williams&body=I%20would%20like%20to%20connect%20with%20you.",
      location: "Cúcuta, Colombia — available globally (remote)",
      availability: "Open to senior engineering roles & consulting. Response within 24 h.",
      social: socialAccounts,
    },
  },

  // ── Spanish ────────────────────────────────────────────────────────────────
  es: {
    hero: {
      greeting: "¡Hola! Soy Williams",
      headline:
        "Ingeniero Senior de Software — construyo software que resiste cuando más importa.",
      subheadline:
        "Basado en LATAM, colaboro con equipos globales. Transformo requisitos ambiguos en productos sólidos, integro flujos de trabajo con IA y dejo los sistemas mejor de como los encontré.",
      philosophies: [
        "Entregar bajo presión sin sacrificar calidad",
        "Comunicar con claridad a través de zonas horarias y culturas",
        "Dejar cada base de código mejor de como la encontraste",
      ],
    },

    chapters: [
      {
        id: "chap-01",
        chapterNumber: "01 / 03",
        title: "El Carril Rápido & La Trilogía ApeFest",
        subtitle: "Hong Kong · Lisboa · Las Vegas",
        timeframe: "2023 – 2025",
        narrative:
          "Mi primer año profesional fue a ritmo de agencia: cliente tras cliente en Crazy Imagine Software, seguido de una asignación en tokenproof que se convirtió en un capítulo completo. tokenproof gestionaba experiencias de alto riesgo y plazos fijos para algunos de los nombres más grandes de Web3 — y nada lo puso a prueba más que ApeFest.\n\nTres ciudades. Tres eventos. Cada uno un despliegue en producción en vivo con fecha fija, asistentes reales y cero tolerancia al downtime.\n\n**Hong Kong (2023):** Mi primer despliegue a escala de evento — seguimiento de pedidos y sesiones con Firebase para más de 2,000 asistentes durante tres días en vivo.\n\n**Lisboa (2024):** Responsabilidad total del re-skin de la página de venta de entradas. Escribí y ejecuté scripts de pruebas de carga para estresar la plataforma antes del lanzamiento, y brindé soporte técnico en tiempo real durante el drop en vivo para más de 3,000 asistentes.\n\n**Las Vegas (2025):** Después de que Yuga Labs adquiriera la tecnología de tokenproof en diciembre de 2024, no fui transferido en la transición — pero me contactaron específicamente para ApeFest Las Vegas. El cliente me llamó de vuelta.",
        quote: {
          from: "Fonz Olvera",
          role: "Emprendedor Serial, Ex-CEO de tokenproof",
          message:
            "Williams fue una incorporación increíble a nuestro equipo. No solo superó nuestras expectativas de talento y habilidades, sino que también demuestra una excelente ética de trabajo y una actitud genial. No puedo esperar para volver a trabajar con Williams.",
        },
        caseStudyIds: ["apefest-lisbon", "apefest-merch"],
      },
      {
        id: "chap-02",
        chapterNumber: "02 / 03",
        title: "Construyendo Plataformas & Eliminando Repetición",
        subtitle: "MadeByApes Bodega · Automatización TGA",
        timeframe: "2023 – 2024",
        narrative:
          "Al mismo tiempo que la trilogía ApeFest, construía infraestructura que debía sobrevivir a eventos individuales.\n\n**MadeByApes Bodega** fue el mayor proyecto full-stack en solitario de mis años en tokenproof: una plataforma Next.js + Payload CMS para el programa de licencias MadeByApes de Yuga Labs. Búsqueda de licencias, blog, manuales, gestión de contenido, almacenamiento de medios en AWS S3, correos con Mailgun — construido y lanzado solo.\n\n**TGA (Token-Gate Anything)** comenzó como trabajo manual por cliente para Forbes, F1, BMW y Yuga Labs. Reconocí el patrón, propuse automatizarlo y construí yo mismo la herramienta basada en CMS. Lo que antes tardaba días por cliente se convirtió en un flujo de trabajo de autoservicio.",
        quote: {
          from: "Jesus Cocaño",
          role: "Ingeniero de Software & DevOps",
          message:
            "Desarrollador frontend excepcional con una notable capacidad para aprender rápidamente y adaptarse a nuevos desafíos. Su actitud positiva y habilidades de trabajo en equipo hacen que cada proyecto sea más fluido y agradable. ¡Lo recomiendo ampliamente a cualquier equipo que busque talento y gran colaboración!",
        },
        caseStudyIds: ["bodega", "tga-automation"],
      },
      {
        id: "chap-03",
        chapterNumber: "03 / 03",
        title: "Liderazgo & Empresa en Apply",
        subtitle: "Uniserve · Alltech Solo · Momentum",
        timeframe: "2025 – 2026",
        narrative:
          "Apply es una consultora de software del Reino Unido. Me uní en enero de 2025 como Ingeniero Senior de Software. Lo que no esperaba era la rapidez con que la «cobertura de respaldo» se convirtió en responsabilidad real.\n\n**Uniserve (Ago–Oct 2025):** El tech lead tuvo que ausentarse a mitad del proyecto. Intervine, establecí la primera arquitectura de frontend con Payload CMS en Apply, lideré al equipo de desarrollo y documenté todo el enfoque en Notion como referencia reutilizable.\n\n**Alltech — Preentrega en Solitario (Nov 2025):** Me volvieron a llamar a Alltech específicamente para la preparación pre-lanzamiento, como el único desarrollador en la cuenta. Me convertí en el único punto de contacto técnico de Apply: tomando decisiones, gestionando llamadas con el cliente y depurando problemas en producción.\n\n**Momentum (Nov 2025 – May 2026):** Una calculadora de préstamos con requisitos contradictorios de múltiples stakeholders. Resolví la ambigüedad directamente — a través de reuniones y comunicación escrita — y lo lancé a producción.",
        quote: {
          from: "Luis Lara",
          role: "Ingeniero en Sistemas Computacionales",
          message:
            "Williams es un entusiasta de la tecnología. Siempre está dispuesto a aprender cosas nuevas. Trabaja muy bien en equipo y se adhiere a las recomendaciones y procedimientos de una organización. Es un excelente profesional, con gran talento y potencial, que trabaja duro para alcanzar sus metas. Puntual, con iniciativa, inteligente, ordenado y orientado al detalle.",
        },
        caseStudyIds: ["uniserve-architecture", "alltech-solo", "momentum-calculator"],
      },
    ],

    caseStudies,

    humanSide: {
      headline: "Más allá del terminal",
      person:
        "Vivo en Cúcuta, Colombia, con raíces en San Cristóbal, Venezuela. Trabajo completamente en remoto con equipos distribuidos globalmente — EE.UU., Reino Unido, Europa — y cuento con certificación de inglés C1 Advanced (EF SET, 63/100).",
      aiWorkflow:
        "Poseo cuatro certificaciones de Anthropic (Claude 101, Claude Code 101, Claude Code in Action, AI Capabilities & Limitations — todas de 2026) además del entrenamiento interno AI Foundations de Apply. Uso herramientas de IA diariamente — no como atajo, sino como multiplicador de calidad y velocidad de entrega.",
      mentorship:
        "Actualmente mentorizo a dos ingenieros en Apply mediante sesiones de coaching 1:1 mensuales. Anteriormente mentoricé a un desarrollador junior en tokenproof y apoyé informalmente a compañeros del bootcamp Microverse.",
      certifications: [
        "Claude Code in Action — Anthropic (May 2026)",
        "Claude Code 101 — Anthropic (May 2026)",
        "AI Capabilities and Limitations — Anthropic (May 2026)",
        "Claude 101 — Anthropic (Apr 2026)",
        "AI Foundations en Apply — Nivel 1 (May 2026)",
        "Braze Certified Developer (Jul 2025)",
        "Contentful Certified Professional (Feb 2025)",
        "EF SET English Certificate C1 Advanced (Jun 2024)",
      ],
    },

    toolkit: [
      {
        groupName: "Ingeniería Core & Frontend",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "PostgreSQL",
          "Payload CMS",
          "Web3 / Ethers.js",
        ],
      },
      {
        groupName: "IA & Ingeniería Moderna",
        items: [
          "Anthropic Claude Code",
          "Ingeniería de Prompts",
          "Flujos con IA",
          "Contentful",
          "Braze",
        ],
      },
      {
        groupName: "Cloud, Testing & Sistemas",
        items: ["AWS S3", "Firebase", "Vercel", "Playwright", "Jest", "Git & GitHub"],
      },
    ],

    connect: {
      email: "williamscolmenaresch@gmail.com",
      emailHref:
        "mailto:williamscolmenaresch@gmail.com?subject=Hola%20Williams&body=Me%20gustar%C3%ADa%20conectar%20contigo.",
      location: "Cúcuta, Colombia — disponible globalmente (remoto)",
      availability: "Abierto a roles de ingeniería senior y consultoría. Respuesta en 24 h.",
      social: socialAccounts,
    },
  },
};

// ─── Legacy Compatibility Shim (remove when Task 9 deletes old components) ───
/**
 * @deprecated Kept only so legacy components (About, Me, Services, etc.)
 * continue to compile until Task 9 replaces them.
 */
export interface PortfolioState {
  skills: { name: string; logo: string }[];
  services: {
    id: string;
    name: string;
    bullets: string[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: FC<any>;
  }[];
  about: { start: string; end: string; cta: string };
  projects: {
    name: string;
    description: string;
    skills: string[];
    live?: string;
    source?: string;
    media?: string[];
  }[];
  connect: {
    accounts: { icon: FC; name: string; url: string }[];
    email: string;
    links: {
      email: string;
      repositories: string;
      resume: string;
      microverse: string;
      recommendations: string;
    };
  };
  testimonials: { id: string; from: string; message: string; role: string }[];
}

/** @deprecated See PortfolioState above. */
export const state: PortfolioState = {
  skills: [],
  services: [],
  about: { start: "", end: "", cta: "" },
  projects: [],
  connect: {
    accounts: [],
    email: "",
    links: { email: "", repositories: "", resume: "", microverse: "", recommendations: "" },
  },
  testimonials: [],
};


