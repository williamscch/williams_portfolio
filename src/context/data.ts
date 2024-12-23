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
    title: string;
    description: string;
    languages: string[];
    live: string;
    source: string;
    image: string;
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
      whatsapp: string;
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
      title: "Online Shop",
      description:
        "Full Stack project made for an online shop, features like live render list of products products, filter for products by category, price and name, shopping cart to add products for registered users and place orders. Manager can also log in as an admin, with access to special functions like adding categories and products, as well as deleting and updating them, and managing users and customers.",
      languages: ["Node", "Express js", "React", "PostgreSQL"],
      live: "/",
      source: "https://github.com/williamscch/myshop",
      image:
        "https://raw.githubusercontent.com/williamscch/myshop-client/dev/app-ss.png",
    },
    {
      title: "Rental Cars",
      description:
        "This a Full-stack project made for a renting cars business. As user you can watch the cars available, check its specifications, select and reserve it, as well as cancel those reservations. Using the admin role you can manage the availability of cars, add new ones, edit and delete them. Built with React, Rails and Postgres stack.",
      languages: ["Ruby on Rails", "React", "Capybara", "PostgreSQL"],
      live: "https://rental-cars-williamscch.netlify.app/",
      source: "https://github.com/williamscch/front_rental_cars",
      image:
        "https://raw.githubusercontent.com/williamscch/front_rental_cars/dev/app-ss.png",
    },
    {
      title: "Recipe App",
      description:
        "Ruby on Rails monolithic web application that keeps track of your cooking recipes, ingredients, and inventory. You can signup and login to use the app. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list of those ingredients you do not have in your inventory",
      languages: ["Ruby on Rails", "Rspec", "Devise", "Capybara", "PostgreSQL"],
      live: "/",
      source: "https://github.com/williamscch/recipes_rails_app",
      image: "",
    },
    {
      title: "My Spend Manager",
      description:
        "Mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.",
      languages: ["Ruby on Rails", "Rspec", "Capybara", "PostgreSQL"],
      live: "/",
      source: "https://github.com/williamscch/budget_rails_app",
      image:
        "https://github.com/williamscch/budget_rails_app/blob/dev/screenshots/ss8.png?raw=true",
    },
    {
      title: "Williams Blog",
      description: "",
      languages: ["Ruby on Rails", "Rspec", "Capybara", "PostgreSQL"],
      live: "/",
      source: "https://github.com/williamscch/blog_rails_app",
      image: "",
    },
    {
      title: "Forex Information App",
      description:
        "Informative web application focused on currencies trading, covers some of the major currency pairs traded worldwide, such as EUR/USD, USD/JPY and GBP/USD.",
      languages: ["React", "Redux", "Javascript", "Jest"],
      live: "https://forexapp-williamscch.netlify.app/",
      source: "https://github.com/williamscch/forex-app",
      image:
        "https://raw.githubusercontent.com/williamscch/forex-app/dev/screenshot-fx-app.png",
    },
    {
      title: "Space Travelers Hub",
      description:
        "Web App that shows real live data from the Space X API, useful information about rockets and missions as well counts with the functionality to join missions, reserve rockets, and those items reserved appears in your profile. Built with React and Redux toolkit",
      languages: ["React", "Redux toolkit", "Javascript", "Jest"],
      live: "https://spacetravelers-williamscch.netlify.app/",
      source: "https://github.com/williamscch/space-travelers",
      image:
        "https://raw.githubusercontent.com/williamscch/space-travelers/dev/src/components/images/screenshot-spaceX.png",
    },
    {
      title: "TV Shows",
      description:
        "Web application based on an external API which contains information about popular TV shows. This app let you like the shows that you like the most and comment what you think about them making it so interactive and uses an involvement API to save this interaction information.",
      languages: ["Javascript", "ES6", "API utilization", "Jest"],
      live: "https://williamscch.github.io/tv-shows/dist/",
      source: "https://github.com/williamscch/tv-shows",
      image:
        "https://raw.githubusercontent.com/williamscch/tv-shows/development/app-ss.png",
    },
    {
      title: "Leader-board",
      description:
        "LeaderBoard web app that displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service",
      languages: ["JavaScript", "Webpack", "API integration", "CSS"],
      live: "https://leaderboard-williamscch.netlify.app/",
      source: "https://github.com/williamscch/leaderboard",
      image:
        "https://raw.githubusercontent.com/williamscch/leaderboard/dev/mkleaderboardss.png",
    },
    {
      title: "Math Magicians",
      description: "Calculator Web App build with React Components.",
      languages: ["JavaScript", "React", "CSS"],
      live: "https://calculator-williamscch.netlify.app/",
      source: "https://github.com/williamscch/math-magicians",
      image:
        "https://raw.githubusercontent.com/williamscch/math-magicians/development/app-ss.png",
    },
    {
      title: "To-Do List",
      description:
        "A web app which help you to save your daily tasks, mark them as completed and edit and delete them. Built with JavaScript",
      languages: ["Javascript", "CSS", "HTML"],
      live: "https://williamscch.github.io/to-do-list/dist/",
      source: "https://github.com/williamscch/to-do-list",
      image:
        "https://raw.githubusercontent.com/williamscch/to-do-list/master/app-ss.png",
    },
    {
      title: "Pizza Restaurant",
      description:
        "A fully responsive page for a pizza restaurant, which contains the most important sections to be useful, and also uses JavaScript to be a fully dynamic page.",
      languages: ["Javascript", "CSS", "HTML"],
      live: "https://williamscch.github.io/pizza-restaurant-page/",
      source: "https://github.com/williamscch/pizza-restaurant-page",
      image:
        "https://raw.githubusercontent.com/williamscch/pizza-restaurant-page/master/assets/img/ss.png",
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
      whatsapp: "https://wa.me/+584127711031",
      repositories: "https://github.com/williamscch?tab=repositories",
      microverse: "https://www.microverse.org/?grsf=s3swmk",
      recommendations:
        "https://www.linkedin.com/in/williamscolmenaresch/details/recommendations/?detailScreenTabIndex=0",
      resume:
        "https://drive.google.com/file/d/1OwSQfR8eCHOZ1hfjh8h_CoXwRPIxTlEc/view?usp=sharing",
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
