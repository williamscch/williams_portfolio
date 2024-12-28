import { ForwardRefExoticComponent, ReactNode } from "react";
import {
  CloudDownload,
  Code2,
  GlobeLock,
  Layers2,
  MonitorCog,
  MonitorSmartphone,
} from "lucide-react";
import IconUpwork from "@/assets/IconUpwork";
import IconLinkedin from "@/assets/IconLinkedin";
import IconGithub from "@/assets/IconGithub";

export interface PortfolioState {
  skills: { name: string; logo: string }[];
  services: {
    id: string;
    name: string;
    bullets: string[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: ForwardRefExoticComponent<any>;
  }[];
  about: {
    start: string;
    end: string;
    cta: string;
  };
  projects: {
    name: string;
    description: string;
    skills: string[];
    live?: string;
    source?: string;
    media?: string[];
  }[];
  connect: {
    accounts: {
      icon: () => ReactNode;
      name: string;
      url: string;
    }[];
    email: string;
    links: {
      email: string;
      repositories: string;
      resume: string;
      microverse: string;
      recommendations: string;
    };
  };
  testimonials: {
    id: string;
    from: string;
    message: string;
    role: string;
  }[];
}

export const state: PortfolioState = {
  skills: [
    {
      name: "React.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML/CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "Tailwind",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "GraphQl",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "GCP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    },
    {
      name: "Firebase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
    },
    {
      name: "Vercel",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    },
    {
      name: "Netlify",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
    },
    {
      name: "VS Code",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Github",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Ubuntu",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg",
    },
    {
      name: "Jira",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    },
    {
      name: "Notion",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg",
    },
    {
      name: "Swagger",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
    },
    {
      name: "Redux",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Playwright",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg",
    },
    {
      name: "Jest",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    },
    {
      name: "Rspec",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original.svg",
    },
    {
      name: "Insomnia",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/insomnia/insomnia-original.svg",
    },
    {
      name: "Postman",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
    {
      name: "Ruby",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    },
    {
      name: "Rails",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg",
    },
  ],
  services: [
    {
      id: "service-001",
      name: "Front-End Development",
      bullets: [
        "Design and development of modern, functional user interfaces using React.js, Next.js, TypeScript, and Tailwind CSS.",
        "Implementation of pixel-perfect designs based on tools like Figma.",
        "Performance optimization and accessibility improvements for exceptional user experiences.",
      ],
      icon: MonitorCog,
    },
    {
      id: "service-002",
      name: "Full-Stack Web Development",
      bullets: [
        "Creation of complete web applications using stacks like MERN (MongoDB, Express.js, React, Node.js).",
        "Development of scalable and secure systems with seamless API and database integrations, including PostgreSQL and MongoDB.",
      ],
      icon: Code2,
    },
    {
      id: "service-003",
      name: "API Integration and Development",
      bullets: [
        "Design and integration of efficient REST APIs.",
        "Implementation of secure authentication using JSON Web Tokens JWT).",
        "Proficient with tools like GraphQL and Fetch API for advanced data handling.",
      ],
      icon: CloudDownload,
    },
    {
      id: "service-004",
      name: "Web3 and Blockchain Solutions",
      bullets: [
        "Development of onboarding flows for blockchain networks like Ethereum, Solana, and more.",
        "Integration of digital wallets using SDKs such as MetaMask and Ethers.js.",
        "Knowledge on token-gated applications for exclusive services.",
      ],
      icon: GlobeLock,
    },
    {
      id: "service-005",
      name: "Performance Optimization",
      bullets: [
        "Optimization of applications to ensure stability and scalability.",
        "Conducting load testing and fine-tuning to handle high traffic volumes.",
        "Enhancing web application performance using advanced development techniques.",
      ],
      icon: Layers2,
    },
    {
      id: "service-006",
      name: "Responsive Web Design",
      bullets: [
        "Development of mobile-optimized websites with a Mobile-First approach.",
        "Delivering consistent user experiences across various screen sizes while ensuring functionality and visual appeal.",
      ],
      icon: MonitorSmartphone,
    },
  ],

  about: {
    start:
      "Hello! I’m Williams Colmenares, a dedicated and passionate Front-End Software Engineer with a strong background in Full-Stack Development. Based in San Cristóbal, Venezuela, I have spent the last several years turning complex ideas into intuitive and engaging digital experiences. My mission is simple: to create software that not only works seamlessly but also delivers meaningful value to users. I bring over three years of professional experience in the software industry, where I’ve built and optimized scalable web applications using modern frameworks and tools like React.js, Next.js, Node.js, and TypeScript. My career has been defined by my ability to solve problems creatively, adapt to ever-evolving technologies, and consistently deliver high-quality work. As a Frontend Engineer, I’ve had the privilege of collaborating with innovative companies like tokenproof, where I played a pivotal role in enhancing their self-service customer portal, and Crazy Imagine Software, where I contributed to the development of robust, full-stack solutions for diverse clients. These experiences have not only sharpened my technical expertise but also reinforced my commitment to excellence and attention to detail.",
    end: "What sets me apart is my ability to seamlessly blend technical expertise with strong communication and collaboration skills. Working with international teams has taught me the importance of adaptability, clear communication, and the value of diverse perspectives. Whether I’m mentoring junior developers, implementing pixel-perfect designs, or troubleshooting complex issues, I approach every challenge with enthusiasm and a mindset geared towards solutions. I’m a firm believer in the power of continuous learning and growth. Over the years, I’ve dedicated myself to mastering technologies, refining my coding practices, and exploring innovative solutions to deliver the best possible results. My journey has also included a rich educational background through programs like Microverse, where I gained hands-on experience in algorithms, data structures, and full-stack development while collaborating with developers from around the world. When I’m not immersed in coding, you’ll likely find me exploring the latest advancements in web technologies, contributing to community-driven projects, or planning my next software challenge. For me, every project is an opportunity to push boundaries, solve problems, and leave a positive impact.",
    cta: "I invite you to explore my work and see how my skills and experiences come together to create exceptional software solutions. Let’s connect and build something extraordinary!",
  },

  projects: [
    {
      name: "Made by Apes Bodega Web for Yuga Labs",
      description:
        "Assigned as the sole developer for this project, I built a web platform from scratch using Next.js and Payload CMS for the Yuga Labs team. This site displays active MBA licenses and provides interested users with resources like FAQs, Blog posts, and Handbooks. The platform includes an admin interface for content management and integrates Meilisearch for quick access to licensing information. User profile email actions are managed through Mailgun, with media storage on AWS S3 and optimized for both mobile and desktop. Live site: madeby.boredapeyachtclub.com (VPN may be needed in some regions)",
      skills: [
        "Payload CMS",
        "Next.js",
        "React",
        "Typescript",
        "PostgreSQL",
        "Amazon S3",
      ],
      live: "https://madeby.boredapeyachtclub.com/",
      media: [
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/bodega/home-features.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/bodega/bodega-2.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/bodega/bodega-details.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/bodega/bodega-details-2.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/bodega/blog-features.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/bodega/blog-2.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/bodega/cms-home.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/bodega/cms-blog.png",
      ],
    },
    {
      name: "Tokenproof Tools",
      description:
        "Tools played a crucial role in Tokenproof, managing, and operating the services offered. My responsibilities included creating and managing events, defining entry policies, handling online authentication, and overseeing the user experience within the app. I worked directly with Tokenproof’s API to implement new features, conduct maintenance, resolve bugs, and provide ongoing support to ensure smooth operation. I led a comprehensive UX and UI improvement for the Tools app, utilizing Tailwind and ShadCN to give the platform a fresh look while enhancing its existing functionalities.",
      skills: [
        "React",
        "Typescript",
        "Library Management",
        "Tailwind",
        "Shadcn",
        "Services Management",
      ],
      media: [
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/tools/home.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/tools/dark-home.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/tools/event-details.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/tools/tools.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/tools/notification-details.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/tools/calendar.png",
      ],
    },
    {
      name: "Multi-Network Onboarding Web Flow for Tokenproof App",
      description:
        "Developed a flexible onboarding flow for tokenproof, supporting multiple blockchain networks (Ethereum, Solana, Flow, Sui, Bitcoin, Crypto.com) across mobile and desktop. Integrated diverse wallet providers tailored to each network, using SDKs like Dynamic, Moopay-SDK, Mysthen, Ethers, and Magic SDK. Implemented secure authentication with JWTs and nonces. Overcame challenges in cross-platform UX and SDKs integrations, delivering a smooth, secure onboarding experience for users accessing tokenproof services for token-gated events and experiences. It is composed of several react/vite projects.",
      skills: ["SDK", "React", "Security Token", "Ethers.js", "MetaMask"],
      live: "https://tokenproof.xyz/connect/v2",
      media: [
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/onboardings/desktop-network.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/onboardings/desktop-init.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/onboardings/desktop-dynamic-select.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/onboardings/desktop-sign.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/onboardings/init.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/onboardings/email.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/onboardings/wallets.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/onboardings/connect.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/onboardings/sign.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/onboardings/success.png",
      ],
    },
    {
      name: "V2 Tokenproof Event Pages",
      description:
        "Developed a flexible onboarding flow for tokenproof, supporting multiple blockchain networks (Ethereum, Solana, Flow, Sui, Bitcoin, Crypto.com) across mobile and desktop. Integrated diverse wallet providers tailored to each network, using SDKs like Dynamic, Moopay-SDK, Mysthen, Ethers, and Magic SDK. Implemented secure authentication with JWTs and nonces. Overcame challenges in cross-platform UX and SDKs integrations, delivering a smooth, secure onboarding experience for users accessing tokenproof services for token-gated events and experiences. It is composed of several react/vite projects.",
      skills: [
        "React",
        "Figma",
        "Typescript",
        "Stripe",
        "Web3",
        "API integration",
      ],
      media: [
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/events/home.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/events/cta.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/events/connect.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/events/social.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/events/tickets.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/events/payment.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/events/success.png",
      ],
    },
    {
      name: "Development and Automation of Token-Gate Solutions (TGA)",
      description:
        "Led the development of Token-Gate Anything (TGA) in Tokenproof, a solution for creating exclusive token-based experiences. Initially, I manually developed and managed projects for clients like Forbes, Yuga Labs, F1, and BMW, configuring protected content (forms, iframes). Later, I suggested and developed an automated tool using Payload CMS and Next.js, enabling administrators to easily generate and customize dynamic TGAs, reducing time, and enhancing scalability and system flexibility.",
      skills: [
        "Next.js",
        "React",
        "Typescript",
        "Payload CMS",
        "Project Management",
        "Project Development",
        "Automation",
      ],
      media: [
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/tga/bmw-gate.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/tga/oa.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/tga/bmw-typeform-load.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/tga/bmw-typeform.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/tga/bmw-typeform-2.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/tga/bmw-typeform-3.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/tga/forbes-gate.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/tga/forbes-iframe.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/tga/forbes-calendly.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/tga/hangover-gate.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/tga/hangover-form.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/tga/hangover-form-2.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/tga/cms-login.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/tga/cms-home.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/tga/cms-form.png",
      ],
      live: "https://forbesweb3inspire.tokenproof.xyz/",
    },
    {
      name: "ApeFest 2024 Exclusive Merch Sale – Authentication & Payments",
      description:
        "As the sole developer on this project, I created a platform for the exclusive sale of merchandise based on the ticketing page available only to ApeFest 2024 ticket holders. Built with React and Tailwind, the project followed a provided Figma design and utilized Stripe to handle payments. Key features included a queue for entry, session expiration for purchases, and an online authentication widget from Tokenproof to verify ApeFest ticket ownership and make use of an internal API to handle inventory.",
      skills: ["React", "Typescript", "Tailwind", "Figma", "Stripe"],
      media: [
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/merchsite/gate.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/merchsite/merch.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/merchsite/merchsize.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/merchsite/email.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/merchsite/payment.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/merchsite/success.png",
      ],
    },
    {
      name: "ApeFest 2024 Ticket Sale – Re-skin, Load Testing & Launch Support",
      description:
        "As the sole person responsible at Tokenproof for the re-skin and adjustments on the ApeFest 2024 ticket sale page in Lisbon, I completed the redesign using React and Tailwind to align the website with the new Figma design and updated user flow. I developed and implemented load-testing scripts to ensure the site's stability and capacity to handle high traffic on the launch day, where I also provided real-time technical support.",
      skills: ["React", "Typescript", "Scripting", "Load Testing", "Figma"],
      live: "https://apefest.tokenproof.xyz/",
      media: [
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/apefest/gate.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/apefest/tickets.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/apefest/email.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/apefest/payment.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/apefest/success.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/apefest/whitelist.png",
        "https://raw.githubusercontent.com/williamscch/williams_portfolio/main/src/assets/projects-ss/apefest/soldout.png",
      ],
    },
    {
      name: "Rental Cars",
      description:
        "This a Full-stack project made for a renting cars business. As user you can watch the cars available, check its specifications, select and reserve it, as well as cancel those reservations. Using the admin role you can manage the availability of cars, add new ones, edit and delete them. Built with React, Rails and Postgres stack.",
      skills: ["Ruby on Rails", "React", "Capybara", "PostgreSQL"],
      live: "https://rental-cars-williamscch.netlify.app/",
      source: "https://github.com/williamscch/front_rental_cars",
      media: [
        "https://raw.githubusercontent.com/williamscch/front_rental_cars/dev/app-ss.png",
      ],
    },
    {
      name: "TV Shows Explorer",
      description:
        "Web application based on an external API which contains information about popular TV shows. This app let you like the shows that you like the most and comment what you think about them making it so interactive and uses an involvement API to save this interaction information.",
      skills: ["Javascript", "ES6", "API integration", "Jest"],
      live: "https://williamscch.github.io/tv-shows/dist/",
      source: "https://github.com/williamscch/tv-shows",
      media: [
        "https://raw.githubusercontent.com/williamscch/tv-shows/development/app-ss.png",
      ],
    },
    {
      name: "Today's To-Do Tasks Tool",
      description:
        "A web app which help you to save your daily tasks, mark them as completed and edit and delete them. Built vanilla JavaScript",
      skills: ["Javascript", "CSS", "HTML", "Local Storage"],
      live: "https://williamscch.github.io/to-do-list/dist/",
      source: "https://github.com/williamscch/to-do-list",
      media: [
        "https://raw.githubusercontent.com/williamscch/to-do-list/master/app-ss.png",
      ],
    },
  ],

  connect: {
    accounts: [
      {
        icon: IconLinkedin,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/williamscolmenaresch",
      },
      {
        icon: IconGithub,
        name: "Github",
        url: "https://github.com/williamscch",
      },
      {
        icon: IconUpwork,
        name: "Upwork",
        url: "https://www.upwork.com/freelancers/~0136f944648d8cc21e?mp_source=share",
      },
    ],
    email: "williamscolmenaresch@gmail.com",
    links: {
      email:
        "mailto:williamscolmenaresch@gmail.com?subject=Hello%20Williams&body=I%20would%20like%20to%20connect%20with%20you.",
      repositories: "https://github.com/williamscch?tab=repositories",
      microverse: "https://www.microverse.org/?grsf=s3swmk",
      recommendations:
        "https://www.linkedin.com/in/williamscolmenaresch/details/recommendations/?detailScreenTabIndex=0",
      resume:
        "https://docs.google.com/document/d/100M7OyXCnLGtPcNVfu-YGa2jH5O3AG09_NlbYNN2c-0/edit?usp=sharing",
    },
  },

  testimonials: [
    {
      id: "testimonial-001",
      from: "Fonz Olvera",
      role: "Serial Entrepreneur, Former CEO at Tokenproof",
      message:
        "Williams was an amazing addition to our team. Not only did he exceed our expectations of talent and skills, but he also carries an excellent work ethic and all around great attitude. Cannot wait to work with Williams again.",
    },
    {
      id: "testimonial-002",
      from: "Jesus Cocaño",
      role: "Software Engineer, Devops Engineer",
      message:
        "Exceptional frontend developer with a remarkable ability to learn quickly and adapt to new challenges. Their positive attitude and teamwork skills make every project smoother and more enjoyable. I highly recommend them to any team looking for both talent and great collaboration!",
    },
    {
      id: "testimonial-003",
      from: "Luis Lara",
      role: "Computer Systems Engineer",
      message:
        "Williams is a technology enthusiast. He always willing to learn new things. He works very well in a team, and adheres to the recommendations and procedures within an organization. He is an excellent professional, with great talent and potential, who works hard to achieve his goals. He is a very good worker: punctual, with initiative, intelligent, orderly and detail-oriented. We wish you much success in all the new work stages to come.",
    },
    {
      id: "testimonial-004",
      from: "Diego Yon",
      role: "Full stack developer",
      message:
        "It is my pleasure to recommend Williams. I have had the opportunity to work with him a couple of times now and I can say that he is a great teammate to have, very knowledgeable, and easy to work with. He not only gets the job done, but he also goes above and beyond in every project.",
    },
    {
      id: "testimonial-005",
      from: "Alzubair Alqaraghuli",
      role: "Full stack developer",
      message:
        "Williams is a fantastic developer, and his detail-oriented approach made him a pleasure to work with. We pair-programmed extensively together while enrolled at microverse, and in that time his work ethic blew me away. Williams views writing clean, accessible code as a calling, and he's great at identifying areas where we can improve UI. He's also super friendly; by the time our project was done, I felt like we'd known each other for years. I can't recommend him enough!",
    },
    {
      id: "testimonial-006",
      from: "Muhyideen Elias",
      role: "DevOps Engineer",
      message:
        "Williams is a great person and deeply creative I will say because he has a great eye for details. I worked with him for several weeks during microverse training. I am always inspired by his decision to be a full-stack developer because of his previous background. And he has this tenacity for seeing things through and having very good interpersonal relationship skills.",
    },
    {
      id: "testimonial-007",
      from: "Vitor Guedes Madeira",
      role: "Full stack developer",
      message:
        "I've met Williams during a coding bootcamp and it was always a pleasure to be partnered with him. Making friends and working with different people is a natural skill for him, so it makes the whole environment better for everyone to work together, especially when it comes to team projects, since he also has such a great coding organization. He codes in a way that other programmers won't struggle to work on his projects.",
    },
  ],
};
