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
  /** Optional Spanish translation of the message. */
  messageEs?: string;
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
  /** Optional public testimonials linked to this specific case study. */
  testimonials?: TestimonialQuote[];
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

export interface UiStrings {
  nav: {
    story: string;
    beyondCode: string;
    beyondCodeMobile: string;
    toolkit: string;
    connect: string;
  };
  hero: {
    exploreCta: string;
    connectCta: string;
  };
  storyCards: {
    live: string;
    readCaseStudy: string;
  };
  caseStudyModal: {
    close: string;
    liveSite: string;
  };
  humanSide: {
    personTitle: string;
    aiWorkflowTitle: string;
    mentorshipTitle: string;
  };
  contact: {
    headline: string;
    intro: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
  };
  footer: {
    tagline: string;
    backToTop: string;
  };
}

export interface PortfolioContent {
  hero: HeroContent;
  chapters: StoryChapter[];
  caseStudies: Record<string, CaseStudy>;
  humanSide: HumanSide;
  toolkit: ToolkitGroup[];
  connect: ConnectInfo;
  ui: UiStrings;
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
    testimonials: [
      {
        from: "Fonz Olvera",
        role: "Serial Entrepreneur, Former CEO at tokenproof",
        message:
          "Williams was an amazing addition to our team. Not only did he exceed our expectations of talent and skills, but he also carries an excellent work ethic and all around great attitude.",
        messageEs:
          "Williams fue una incorporación increíble a nuestro equipo. No solo superó nuestras expectativas de talento y habilidades, sino que además tiene una excelente ética de trabajo y una actitud encomiable.",
      },
    ],
  },
  "tga-automation": {
    id: "tga-automation",
    title: "Token-Gate Automation (TGA)",
    tagline: "Turning bespoke client builds into a self-serve CMS workflow.",
    client: "tokenproof",
    role: "Lead Engineer",
    timeframe: "Jul – Nov 2024",
    challenge:
      "Every new token-gated client page (Forbes, F1, BMW, Yuga Labs) required manual per-client development. Having learned Payload CMS on the MadeByApes Bodega project, I recognized the pattern, proposed automating it with the same tool, and built it myself.",
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
    tagline:
      "Setting Apply's first Payload CMS frontend architecture as the most senior developer on the team.",
    client: "Uniserve (APPLY)",
    role: "Acting Tech Lead / Frontend Architect",
    timeframe: "Aug – Oct 2025",
    challenge:
      "Join as the most senior developer on the team and become the vital source of knowledge for the entire dev group. Establish Apply's first Payload CMS frontend implementation while proactively managing risks and driving quality.",
    architecture:
      "Payload CMS + Next.js frontend with Docker and PostgreSQL. Atomic component design system. Documented the full approach in Notion as a reusable company reference. Proactively identified risks and improvement opportunities before they became issues.",
    impact:
      "Became the tech lead's right hand. Described as having 'clean components, steady velocity, zero drama.' Produced a Notion doc now used as the standard Payload reference at Apply.",
    tech: [
      "React",
      "Payload CMS",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Docker",
      "PostgreSQL",
    ],
    testimonials: [
      {
        from: "Mario Mejia",
        role: "Staff Engineer at Apply",
        message:
          "As the most senior developer on the Uniserve project, Williams was pivotal to our success. His prior experience with the tech stack allowed him to become a vital source of knowledge for the entire team. He demonstrates a high level of seniority by thinking beyond his assigned tickets, identifying potential risks, and spotting opportunities for improvement before they become issues. Williams is a standout performer — his openness to feedback and drive to help the team succeed make him a pleasure to work with.",
        messageEs:
          "Como el desarrollador más senior del proyecto Uniserve, Williams fue fundamental para nuestro éxito. Su experiencia previa con el stack tecnológico le permitió convertirse en una fuente vital de conocimiento para todo el equipo. Demuestra un alto nivel de seniority al pensar más allá de sus tickets asignados, identificando riesgos potenciales y detectando oportunidades de mejora antes de que se conviertan en problemas. Williams es un destacado — su apertura al feedback y su impulso por ayudar al equipo a tener éxito lo hacen un placer con quien trabajar.",
      },
    ],
  },
  "alltech-solo": {
    id: "alltech-solo",
    title: "Alltech — Solo Pre-Launch Delivery",
    tagline:
      "Sole developer and primary client contact during critical pre-launch phase.",
    client: "Alltech (APPLY)",
    role: "Sole Developer & Technical Client Lead",
    timeframe: "~Nov 2025",
    challenge:
      "Return to Alltech for pre-launch readiness as the only engineer on the account — owning not just the code, but direct client stakeholder communication and technical decision-making. The account had a rocky start; trust needed to be rebuilt.",
    architecture:
      "React, Vite, Tailwind CSS, Vercel. Contentful CMS, Algolia search, Storybook component documentation. No other engineers on the account — full ownership of delivery, debugging, and client-facing technical conversations.",
    impact:
      "Turned a challenging account around. Tyler Cobb, Global Digital Marketing Manager at Alltech, gave public feedback: \"Williams' documentation was valuable... he doesn't see this as a goodbye, but a 'see you soon.'\" Became Apply's sole technical point of contact — a 'beacon of clarity' for the client.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Vercel",
      "Contentful",
      "Algolia",
      "Storybook",
    ],
    testimonials: [
      {
        from: "Tyler Cobb",
        role: "Global Digital Marketing Manager at Alltech",
        message:
          "Williams' documentation was valuable... he doesn't see this as a goodbye, but a 'see you soon.'",
        messageEs:
          "La documentación de Williams fue muy valiosa... él no ve esto como un adiós, sino como un «hasta pronto.»",
      },
      {
        from: "Carlos Rosales",
        role: "Staff Engineer at Apply",
        message:
          "Williams es un compañero de equipo increíble y también un gran desarrollador, siempre buscando soluciones a desarrollos y problemas complejos con la mayor disposición, a menudo no quedándose con la solución más fácil, sino contactando al equipo para discutir cuál debería ser la correcta. Ha sido capaz de ponerse al día con una gran velocidad y aportar de una forma increíble a la calidad del trabajo del equipo. Habla de su dominio con confianza, da la cara ante los desafíos y busca salir de su zona de confort. Williams es simplemente una gran persona, tenerlo en el equipo es un alivio, y puedes confiar en que llevará los proyectos con éxito hasta la meta.",
      },
    ],
  },
  "momentum-calculator": {
    id: "momentum-calculator",
    title: "Momentum Loan Calculator",
    tagline:
      "Navigating conflicting stakeholder requirements to ship a customer-facing financial tool.",
    client: "Momentum (APPLY)",
    role: "Frontend Engineer",
    timeframe: "Nov 2025 – May 2026",
    challenge:
      "Requirements from the client changed and conflicted across multiple stakeholders. Resolve the ambiguity directly — through meetings and written communication — rather than escalating or waiting. Additionally, propose and implement AI-assisted workflows for the team.",
    architecture:
      "React + TypeScript customer-facing loan calculator. Feature went through multiple requirement iterations; final version shipped to production. Proposed AI tools and standardized skills for ticket planning and automating repetitive tasks. Built a self code-review practice to save time in PR reviews.",
    impact:
      "Feature is live in production after successfully navigating a complex requirements process over ~6 months. AI workflow proposals adopted by the team for improved efficiency.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    testimonials: [
      {
        from: "Mariana Valdespino",
        role: "Senior Software Engineer at Apply",
        message:
          "Williams es una persona que destaca buenas prácticas a nivel de código, proponiendo e implantando soluciones que no solo son muy legibles sino también escalables y eficientes, resultando en un trabajo de calidad. Conecta bloqueos, impedimentos y riesgos con claridad, y da retroalimentación clara sobre las implementaciones. Destaca su proactividad y por supuesto que no se limita a las tareas que le son asignadas, sino que las busca e implementa con la calidad y buena actitud que le caracterizan. Es un gusto trabajar con Williams porque siempre trae buena energía y transmite confianza por la excelente calidad de sus implementaciones.",
      },
    ],
  },
  "quick-backups": {
    id: "quick-backups",
    title: "Quick Backups — Rapid Adaptation Across Stacks",
    tagline: "Liverpool · White Stuff · Crunchyroll — proof that value starts on day one.",
    client: "Apply (multiple clients)",
    role: "Backup Frontend Engineer",
    timeframe: "~Jun – Aug 2026",
    challenge:
      "Short-term backup stints across three different clients, each requiring fast onboarding on unfamiliar stacks — Contentstack CMS at Liverpool, Vue/Nuxt at White Stuff, and Next.js at Crunchyroll. Prove rapid adaptation and autonomous delivery without supervision.",
    architecture:
      "Liverpool: Contentstack CMS integration. White Stuff: Vue/Nuxt frontend, took ownership of tickets proactively. Crunchyroll: Next.js/React stack, standard fast-ramp pattern.",
    impact:
      "Seamless coverage with no disruption across all three teams. White Stuff feedback: 'Highly autonomous, proactively took tickets, no supervision needed.' Demonstrated that React expertise translates across frameworks and CMS platforms.",
    tech: ["React", "Vue", "Nuxt", "Next.js", "TypeScript", "Contentstack CMS"],
    testimonials: [
      {
        from: "White Stuff Team",
        role: "Client via Apply",
        message:
          "Highly autonomous, proactively took tickets, no supervision needed.",
        messageEs:
          "Altamente autónomo, tomaba tickets proactivamente, no necesitaba supervisión.",
      },
    ],
  },
};

// ─── Case Study Records (Spanish overrides merged over the shared records) ───

const esCaseStudyOverrides: Record<string, Partial<CaseStudy>> = {
  "apefest-lisbon": {
    title: "ApeFest Lisboa 2024 — Venta de Entradas",
    tagline:
      "Plataforma de ticketing de alto tráfico: re-skin, pruebas de carga y soporte en el lanzamiento en vivo.",
    role: "Ingeniero Frontend Único",
    challenge:
      "Asumir en solitario el re-skin completo de la página de ticketing de ApeFest Lisboa y luego someterla a pruebas de estrés para que sobreviva al pico en el momento del drop — sin margen para downtime durante un evento internacional en vivo.",
    architecture:
      "React + Vite + Tailwind, desplegado en Vercel. Escribí scripts de pruebas de carga para simular sesiones concurrentes antes del lanzamiento. Brindé monitoreo técnico y soporte en tiempo real el día del lanzamiento.",
    impact:
      "El drop de entradas salió en vivo sin incidentes para más de 3,000 asistentes. Las pruebas de carga dieron al equipo confianza antes de un momento irreversible de alto riesgo.",
  },
  "apefest-merch": {
    title: "Venta Exclusiva de Merch ApeFest 2024",
    tagline: "Plataforma de merch token-gated con pagos Stripe y fila de entrada.",
    role: "Desarrollador Único",
    challenge:
      "Construir una venta exclusiva de merch restringida a poseedores verificados de entradas de ApeFest, con sistema de fila y expiración de sesión para prevenir abusos bajo condiciones reales de evento.",
    architecture:
      "React + Tailwind siguiendo un diseño en Figma. Stripe para el procesamiento de pagos. Widget de autenticación de tokenproof para verificar la propiedad on-chain de las entradas. Integración con API interna de inventario.",
    impact:
      "Lanzado de punta a punta como único desarrollador, manejando autenticación, lógica de fila, pagos e inventario en un solo proyecto.",
  },
  bodega: {
    tagline:
      "Plataforma full-stack de contenido para el programa de licencias MadeByApes de Yuga Labs.",
    role: "Desarrollador Full-Stack Único",
    challenge:
      "Construir una plataforma lista para producción desde cero — base de datos de licencias, CMS, búsqueda rápida, automatización de correos y almacenamiento de medios — como único ingeniero en la cuenta.",
    architecture:
      "Backend Next.js + Payload CMS con PostgreSQL. Meilisearch para búsquedas de licencias casi instantáneas. Mailgun para correos transaccionales. AWS S3 para medios. Optimizado para móvil y escritorio.",
    impact:
      "Los equipos de contenido pasaron de no tener capacidad de autoservicio a actualizaciones totalmente gestionadas por CMS. La búsqueda de licencias es casi instantánea vía Meilisearch.",
  },
  "tga-automation": {
    title: "Automatización Token-Gate (TGA)",
    tagline:
      "Convirtiendo builds personalizadas por cliente en un flujo de trabajo CMS de autoservicio.",
    role: "Ingeniero Lead",
    challenge:
      "Cada nueva página token-gated de cliente (Forbes, F1, BMW, Yuga Labs) requería desarrollo manual por cliente. Tras aprender Payload CMS en el proyecto MadeByApes Bodega, reconocí el patrón, propuse automatizarlo con la misma herramienta y lo construí yo mismo.",
    architecture:
      "Interfaz de administración de Payload CMS que permite a perfiles no técnicos generar y personalizar páginas token-gated. El frontend Next.js renderiza el resultado dinámicamente.",
    impact:
      "Reduje la configuración por cliente de builds manuales de varios días a un flujo impulsado por CMS. Escaló para manejar campañas simultáneas de clientes sin ingeniería adicional.",
  },
  "uniserve-architecture": {
    title: "Arquitectura Front-End de Uniserve",
    tagline:
      "Estableciendo la primera arquitectura frontend con Payload CMS de Apply como el desarrollador más senior del equipo.",
    role: "Tech Lead Interino / Arquitecto Frontend",
    challenge:
      "Incorporarme como el desarrollador más senior del equipo y convertirme en la fuente vital de conocimiento para todo el grupo de desarrollo. Establecer la primera implementación frontend con Payload CMS de Apply mientras gestionaba riesgos proactivamente e impulsaba la calidad.",
    architecture:
      "Frontend Payload CMS + Next.js con Docker y PostgreSQL. Sistema de diseño de componentes atómicos. Documenté todo el enfoque en Notion como referencia reutilizable de la empresa. Identifiqué proactivamente riesgos y oportunidades de mejora antes de que se convirtieran en problemas.",
    impact:
      "Me convertí en la mano derecha del tech lead. Descrito como alguien con «componentes limpios, velocidad constante, cero drama». Produje un documento en Notion que ahora se usa como referencia estándar de Payload en Apply.",
  },
  "alltech-solo": {
    title: "Alltech — Entrega Pre-Lanzamiento en Solitario",
    tagline:
      "Desarrollador único y contacto principal del cliente durante la fase crítica de pre-lanzamiento.",
    role: "Desarrollador Único & Líder Técnico ante el Cliente",
    challenge:
      "Regresar a Alltech para la preparación del pre-lanzamiento como único ingeniero en la cuenta — siendo dueño no solo del código, sino de la comunicación directa con los stakeholders del cliente y de las decisiones técnicas. La cuenta tuvo un inicio difícil; había que reconstruir la confianza.",
    architecture:
      "React, Vite, Tailwind CSS, Vercel. Contentful CMS, búsqueda con Algolia, documentación de componentes con Storybook. Sin otros ingenieros en la cuenta — propiedad total de la entrega, la depuración y las conversaciones técnicas con el cliente.",
    impact:
      "Di la vuelta a una cuenta complicada. Tyler Cobb, Global Digital Marketing Manager de Alltech, dio feedback público: \"La documentación de Williams fue muy valiosa... él no ve esto como un adiós, sino como un «hasta pronto».\" Me convertí en el único punto de contacto técnico de Apply — un «faro de claridad» para el cliente.",
  },
  "momentum-calculator": {
    title: "Calculadora de Préstamos Momentum",
    tagline:
      "Navegando requisitos contradictorios entre stakeholders para lanzar una herramienta financiera orientada al cliente.",
    role: "Ingeniero Frontend",
    challenge:
      "Los requisitos del cliente cambiaron y entraron en conflicto entre múltiples stakeholders. Resolví la ambigüedad directamente — mediante reuniones y comunicación escrita — en lugar de escalar o esperar. Adicionalmente, propuse e implementé flujos de trabajo asistidos por IA para el equipo.",
    architecture:
      "Calculadora de préstamos orientada al cliente en React + TypeScript. La funcionalidad pasó por múltiples iteraciones de requisitos; la versión final llegó a producción. Propuse herramientas de IA y estandaricé prácticas para la planificación de tickets y la automatización de tareas repetitivas. Construí una práctica de auto-revisión de código para ahorrar tiempo en las revisiones de PR.",
    impact:
      "La funcionalidad está en producción tras navegar con éxito un proceso de requisitos complejo durante ~6 meses. Las propuestas de flujos de IA fueron adoptadas por el equipo para mejorar la eficiencia.",
  },
  "quick-backups": {
    title: "Backups Rápidos — Adaptación Ágil entre Stacks",
    tagline:
      "Liverpool · White Stuff · Crunchyroll — prueba de que el valor empieza desde el día uno.",
    client: "Apply (múltiples clientes)",
    role: "Ingeniero Frontend de Respaldo",
    challenge:
      "Asignaciones cortas de respaldo en tres clientes distintos, cada una exigiendo un onboarding rápido en stacks desconocidos — Contentstack CMS en Liverpool, Vue/Nuxt en White Stuff y Next.js en Crunchyroll. Demostrar adaptación rápida y entrega autónoma sin supervisión.",
    architecture:
      "Liverpool: integración con Contentstack CMS. White Stuff: frontend Vue/Nuxt, tomé propiedad de tickets de forma proactiva. Crunchyroll: stack Next.js/React, patrón estándar de ramp-up rápido.",
    impact:
      "Cobertura fluida sin interrupciones en los tres equipos. Feedback de White Stuff: «Altamente autónomo, tomaba tickets proactivamente, sin necesidad de supervisión». Demostré que la experiencia en React se traduce entre frameworks y plataformas CMS.",
  },
};

const caseStudiesEs: Record<string, CaseStudy> = Object.fromEntries(
  Object.entries(caseStudies).map(([id, cs]) => [
    id,
    { ...cs, ...esCaseStudyOverrides[id] },
  ])
);

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
          "My first professional year was agency-speed: client after client at Crazy Imagine Software, working across the MERN stack (MongoDB, Express, React, Node.js) and various other technologies. Then a placement at tokenproof that turned into a full-time chapter.\n\ntokenproof ran high-stakes, time-boxed experiences for some of the biggest names in Web3 — and nothing tested that more than ApeFest. Their internal tools dashboard ran on a decoupled architecture: Express handling the backend services and React on the frontend. I also contributed to the ApeFest ticket sale page each year — doing re-skins for each new edition, running load and stress testing with automated scripts to prepare for the massive influx of buyers, and managing sessions and purchase orders via Firebase during live events.\n\nThree cities. Three events. Each one a live production drop with a fixed date, real attendees, and zero tolerance for downtime.\n\n**Hong Kong (2023):** My first event-scale deployment — Firebase-backed order and session tracking for 2,000+ attendees across three live days.\n\n**Lisbon (2024):** Sole ownership of the ticket sale re-skin. I wrote and ran load-testing scripts to stress-test the platform before the drop, then provided real-time technical support during the live launch for 3,000+ attendees.\n\n**Las Vegas (2025):** After Yuga Labs acquired tokenproof's tech in December 2024, I prepared the ticket sale page for the new edition and ran load testing to harden the infrastructure. My contract ended after that — but Yuga Labs specifically re-engaged me through former tokenproof colleagues who had stayed on. The client called me back.\n\n**MadeByApes Bodega** was my first CMS experience. I learned Payload CMS on the job, built the entire platform with it, and later proposed it as the solution for TGA — turning a one-time learning curve into a reusable company tool.",
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
        subtitle: "Alltech · Uniserve · Momentum · Quick Backups",
        timeframe: "2025 – 2026",
        narrative:
          "Apply is a Canada-based software consultancy. I joined in January 2025 as a mid-level engineer (L3). By June 2026, I'd been promoted to Senior — thanks to the depth of ownership I took across every project.\n\n**Alltech (Feb–Jul 2025):** Started as backup coverage. Earned my Contentful certification and learned Algolia and Storybook on the job. Performed so well in my first project that they kept calling me back. In my second stint (~Nov 2025), I replaced the tech lead mid-project and became Apply's sole technical point of contact — making decisions, running client calls, and debugging production issues. The client's Global Digital Marketing Manager, Tyler Cobb, gave incredible public feedback. He specifically mentioned how valuable my documentation was and said he doesn't see this as a goodbye, but a \"see you soon\" — he hopes to work with me and this team on future opportunities. This was fantastic confirmation of the measurable impact I had, directly strengthening the client relationship.\n\n**Uniserve (Aug–Oct 2025):** As the most senior developer on the team, I was the vital source of knowledge for the entire dev team. Payload CMS expertise, Docker, PostgreSQL, Next.js — I became the tech lead's right hand, proactively identifying risks and spotting improvement opportunities before they became issues. \"Clean components, steady velocity, zero drama.\"\n\n**Momentum (Nov 2025 – May 2026):** A loan calculator with conflicting stakeholder requirements. I resolved ambiguity directly through meetings and written communication, proposed AI tools and standardized workflows for the team to plan tickets and automate repetitive work, and built a self code-review practice that saved time in PR reviews.\n\n**Quick Backups — Liverpool, White Stuff, Crunchyroll (~1 month each):** Short stints that show rapid adaptation. At White Stuff (Vue/Nuxt), the feedback was: \"highly autonomous, proactively took tickets, no supervision needed.\" These aren't filler — they're proof I can deliver value from day one, anywhere.",
        quote: {
          from: "Luis Lara",
          role: "Computer Systems Engineer",
          message:
            "Williams is a technology enthusiast. He is always willing to learn new things. He works very well in a team, and adheres to the recommendations and procedures within an organization. He is an excellent professional, with great talent and potential, who works hard to achieve his goals. Punctual, with initiative, intelligent, orderly, and detail-oriented.",
        },
        caseStudyIds: [
          "uniserve-architecture",
          "alltech-solo",
          "momentum-calculator",
          "quick-backups",
        ],
      },
    ],

    caseStudies,

    humanSide: {
      headline: "Beyond the terminal",
      person:
        "Venezuelan, living in Colombia. I work fully remote across global distributed teams — US, UK, Europe — and hold a C1 Advanced English certification (EF SET). When I'm not coding, you'll find me doing CrossFit (or trying to), watching thought-provoking movies, or catching any sport — football is my favorite. I love being outdoors and staying active.",
      aiWorkflow:
        "Apply actively pushes AI adoption across engineering. I use Claude daily — in my personal projects I also experiment with OpenCode, Antigravity, Superpowers, and GStack. At work we follow the bmad method. I'm not listing every two-hour cert; what matters is I stay current with AI-assisted engineering practices and use them as a force multiplier for quality and speed.",
      mentorship:
        "I currently mentor two engineers at Apply through monthly 1:1 coaching sessions. Earlier I coached peers during the Microverse program. Beyond formal mentorship, I'm a knowledge sharer — I document reusable approaches, share AI workflow practices with the team, and build self code-review habits that lift the whole team's quality.",
      certifications: [
        "Braze Certified Developer (Jul 2025)",
        "Contentful Certified Professional (Feb 2025)",
        "EF SET English Certificate C1 Advanced (Jun 2024)",
      ],
    },

    toolkit: [
      {
        groupName: "Core Engineering",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Express",
          "Vue",
          "Svelte",
          "Tailwind CSS",
        ],
      },
      {
        groupName: "CMS & Content Platforms",
        items: ["Payload", "Contentful", "Contentstack", "Algolia", "Constructor"],
      },
      {
        groupName: "Backend, Data & Cloud",
        items: ["PostgreSQL", "MongoDB", "Firebase", "GCP", "Python", "Ruby on Rails"],
      },
      {
        groupName: "AI & Automation",
        items: ["Claude Code", "OpenCode", "Antigravity", "n8n", "MCPs"],
      },
      {
        groupName: "Testing, DevOps & Tooling",
        items: ["Playwright", "Jest", "Git & GitHub", "Jira", "Web3 / Ethers.js"],
      },
    ],

    connect: {
      email: "williamscolmenaresch@gmail.com",
      emailHref:
        "mailto:williamscolmenaresch@gmail.com?subject=Hello%20Williams&body=I%20would%20like%20to%20connect%20with%20you.",
      location: "Colombia — available globally (remote)",
      availability:
        "Full-time at Apply. Open to senior engineering roles & consulting. Response within 24 h.",
      social: socialAccounts,
    },

    ui: {
      nav: {
        story: "Story",
        beyondCode: "Beyond Code",
        beyondCodeMobile: "Beyond Code",
        toolkit: "Toolkit",
        connect: "Connect",
      },
      hero: {
        exploreCta: "Explore the Journey",
        connectCta: "Get in Touch",
      },
      storyCards: {
        live: "Live",
        readCaseStudy: "Read Case Study",
      },
      caseStudyModal: {
        close: "Close",
        liveSite: "Live Site",
      },
      humanSide: {
        personTitle: "The Person Behind the Code",
        aiWorkflowTitle: "AI-Augmented Workflow",
        mentorshipTitle: "Mentorship & Coaching",
      },
      contact: {
        headline: "Let's Connect",
        intro:
          "Always open to a conversation about engineering, consulting, or interesting problems.",
        namePlaceholder: "Your name",
        emailPlaceholder: "Email address",
        messagePlaceholder: "Type your message here",
        sendButton: "Send Message",
      },
      footer: {
        tagline: "Built with care.",
        backToTop: "Back to top",
      },
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
          "Mi primer año profesional fue a ritmo de agencia: cliente tras cliente en Crazy Imagine Software, trabajando con el stack MERN (MongoDB, Express, React, Node.js) y varias otras tecnologías. Luego una asignación en tokenproof que se convirtió en un capítulo completo.\n\ntokenproof gestionaba experiencias de alto riesgo y plazos fijos para algunos de los nombres más grandes de Web3 — y nada lo puso a prueba más que ApeFest. Sus herramientas internas corrían en una arquitectura desacoplada: Express en el backend y React en el frontend. También contribuí a la página de venta de entradas de ApeFest cada año — haciendo re-skins para cada nueva edición, ejecutando pruebas de carga y estrés con scripts automatizados para prepararnos para la masiva afluencia de compradores, y manejando sesiones y órdenes de compra vía Firebase durante eventos en vivo.\n\nTres ciudades. Tres eventos. Cada uno un despliegue en producción en vivo con fecha fija, asistentes reales y cero tolerancia al downtime.\n\n**Hong Kong (2023):** Mi primer despliegue a escala de evento — seguimiento de pedidos y sesiones con Firebase para más de 2,000 asistentes durante tres días en vivo.\n\n**Lisboa (2024):** Responsabilidad total del re-skin de la página de venta de entradas. Escribí y ejecuté scripts de pruebas de carga para estresar la plataforma antes del lanzamiento, y brindé soporte técnico en tiempo real durante el drop en vivo para más de 3,000 asistentes.\n\n**Las Vegas (2025):** Después de que Yuga Labs adquiriera la tecnología de tokenproof en diciembre de 2024, preparé la página de venta de entradas para la nueva edición y ejecuté pruebas de carga para blindar la infraestructura. Mi contrato terminó después de eso — pero Yuga Labs me contactó específicamente a través de ex-compañeros de tokenproof que se habían quedado. El cliente me llamó de vuelta.\n\n**MadeByApes Bodega** fue mi primera experiencia con un CMS. Aprendí Payload CMS sobre la marcha, construí toda la plataforma con él, y luego lo propuse como solución para TGA — convirtiendo una curva de aprendizaje puntual en una herramienta reutilizable para la empresa.",
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
        subtitle: "Alltech · Uniserve · Momentum · Backups Rápidos",
        timeframe: "2025 – 2026",
        narrative:
          "Apply es una consultora de software con sede en Canadá. Me uní en enero de 2025 como ingeniero de nivel medio (L3). Para junio de 2026, había sido promovido a Senior — gracias a la profundidad de responsabilidad que asumí en cada proyecto.\n\n**Alltech (Feb–Jul 2025):** Empecé como cobertura de respaldo. Obtuve mi certificación de Contentful y aprendí Algolia y Storybook en el trabajo. Rendí tan bien en mi primer proyecto que siguieron llamándome. En mi segunda stint (~Nov 2025), reemplacé al tech lead a mitad del proyecto y me convertí en el único punto de contacto técnico de Apply — tomando decisiones, dirigiendo llamadas con el cliente y depurando problemas en producción. El Global Digital Marketing Manager del cliente, Tyler Cobb, dio un feedback público increíble. Mencionó específicamente lo valiosa que fue mi documentación y dijo que no ve esto como un adiós, sino como un \"hasta pronto\" — espera trabajar conmigo y con este equipo en futuras oportunidades. Esta fue una confirmación fantástica del impacto medible que tuve, fortaleciendo directamente la relación con el cliente.\n\n**Uniserve (Ago–Oct 2025):** Como el desarrollador más senior del equipo, fui la fuente vital de conocimiento para todo el equipo de desarrollo. Experiencia en Payload CMS, Docker, PostgreSQL, Next.js — me convertí en la mano derecha del tech lead, identificando proactivamente riesgos y detectando oportunidades de mejora antes de que se convirtieran en problemas. «Componentes limpios, velocidad constante, cero drama.»\n\n**Momentum (Nov 2025 – May 2026):** Una calculadora de préstamos con requisitos contradictorios de múltiples stakeholders. Resolví la ambigüedad directamente a través de reuniones y comunicación escrita, propuse herramientas de IA y flujos estandarizados para que el equipo planificara tickets y automatizara tareas repetitivas, y construí una práctica de auto-revisión de código que ahorró tiempo en las revisiones de PR.\n\n**Backups Rápidos — Liverpool, White Stuff, Crunchyroll (~1 mes cada uno):** Estancias cortas que demuestran adaptación rápida. En White Stuff (Vue/Nuxt), el feedback fue: «altamente autónomo, tomaba tickets proactivamente, no necesitaba supervisión.» Estos no son relleno — son prueba de que puedo entregar valor desde el primer día, en cualquier lugar.",
        quote: {
          from: "Luis Lara",
          role: "Ingeniero en Sistemas Computacionales",
          message:
            "Williams es un entusiasta de la tecnología. Siempre está dispuesto a aprender cosas nuevas. Trabaja muy bien en equipo y se adhiere a las recomendaciones y procedimientos de una organización. Es un excelente profesional, con gran talento y potencial, que trabaja duro para alcanzar sus metas. Puntual, con iniciativa, inteligente, ordenado y orientado al detalle.",
        },
        caseStudyIds: [
          "uniserve-architecture",
          "alltech-solo",
          "momentum-calculator",
          "quick-backups",
        ],
      },
    ],

    caseStudies: caseStudiesEs,

    humanSide: {
      headline: "Más allá del terminal",
      person:
        "Venezolano, viviendo en Colombia. Trabajo completamente en remoto con equipos distribuidos globalmente — EE.UU., Reino Unido, Europa — y cuento con certificación de inglés C1 Advanced (EF SET). Cuando no estoy programando, me encontrarás haciendo CrossFit (o intentándolo), viendo películas que te dejan pensando, o viendo cualquier deporte — el fútbol es mi favorito. Me encanta estar al aire libre y mantenerme activo.",
      aiWorkflow:
        "Apply impulsa activamente la adopción de IA en ingeniería. Uso Claude a diario — en proyectos personales también experimento con OpenCode, Antigravity, Superpowers y GStack. En el trabajo seguimos el bmad method. No listo cada certificación de dos horas; lo que importa es que me mantengo al corriente con las prácticas de ingeniería asistida por IA y las uso como multiplicador de calidad y velocidad.",
      mentorship:
        "Actualmente mentorizo a dos ingenieros en Apply mediante sesiones de coaching 1:1 mensuales. Anteriormente apoyé a compañeros del programa Microverse. Más allá del mentorship formal, soy un compartidor de conocimiento — documento enfoques reutilizables, comparto prácticas de flujos de IA con el equipo y construyo hábitos de auto-revisión de código que elevan la calidad de todo el equipo.",
      certifications: [
        "Braze Certified Developer (Jul 2025)",
        "Contentful Certified Professional (Feb 2025)",
        "EF SET English Certificate C1 Advanced (Jun 2024)",
      ],
    },

    toolkit: [
      {
        groupName: "Ingeniería Core",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Express",
          "Vue",
          "Svelte",
          "Tailwind CSS",
        ],
      },
      {
        groupName: "CMS & Plataformas de Contenido",
        items: ["Payload", "Contentful", "Contentstack", "Algolia", "Constructor"],
      },
      {
        groupName: "Backend, Datos & Cloud",
        items: ["PostgreSQL", "MongoDB", "Firebase", "GCP", "Python", "Ruby on Rails"],
      },
      {
        groupName: "IA & Automatización",
        items: ["Claude Code", "OpenCode", "Antigravity", "n8n", "MCPs"],
      },
      {
        groupName: "Testing, DevOps & Herramientas",
        items: ["Playwright", "Jest", "Git & GitHub", "Jira", "Web3 / Ethers.js"],
      },
    ],

    connect: {
      email: "williamscolmenaresch@gmail.com",
      emailHref:
        "mailto:williamscolmenaresch@gmail.com?subject=Hola%20Williams&body=Me%20gustar%C3%ADa%20conectar%20contigo.",
      location: "Colombia — disponible globalmente (remoto)",
      availability:
        "Tiempo completo en Apply. Abierto a roles de ingeniería senior y consultoría. Respuesta en 24 h.",
      social: socialAccounts,
    },

    ui: {
      nav: {
        story: "Historia",
        beyondCode: "Más allá del código",
        beyondCodeMobile: "Más allá",
        toolkit: "Stack",
        connect: "Contacto",
      },
      hero: {
        exploreCta: "Explora el recorrido",
        connectCta: "Hablemos",
      },
      storyCards: {
        live: "En vivo",
        readCaseStudy: "Leer caso de estudio",
      },
      caseStudyModal: {
        close: "Cerrar",
        liveSite: "Sitio en vivo",
      },
      humanSide: {
        personTitle: "La persona detrás del código",
        aiWorkflowTitle: "Flujo de trabajo con IA",
        mentorshipTitle: "Mentoría y coaching",
      },
      contact: {
        headline: "Conectemos",
        intro:
          "Siempre abierto a conversar sobre ingeniería, consultoría o problemas interesantes.",
        namePlaceholder: "Tu nombre",
        emailPlaceholder: "Correo electrónico",
        messagePlaceholder: "Escribe tu mensaje aquí",
        sendButton: "Enviar mensaje",
      },
      footer: {
        tagline: "Construido con cuidado.",
        backToTop: "Volver arriba",
      },
    },
  },
};




