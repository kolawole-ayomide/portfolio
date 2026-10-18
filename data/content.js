export const projects = [
  {
    title: "Payyng",
    summary:
      "A fintech product for accounts, payments and transaction workflows, built with the Enegxi Technologies team. I contributed to the REST APIs, the data model and the client-side state, and wrote automated tests around the financial logic.",
    tags: ["Node", "Express", "REST APIs", "Zustand", "Jest"],
    links: [],
  },
  {
    title: "IreVault",
    summary:
      "A platform for selling digital marketing services, built by a full-stack team. I worked across frontend and backend, connecting the interfaces to the REST APIs and writing API tests with Jest and Supertest.",
    tags: ["REST APIs", "Jest", "Supertest"],
    links: [],
  },
  {
    title: "TaskFlow",
    image: "/taskflow.jpeg",
    docs: "https://taskflow-backend-s3k9.onrender.com/api-docs/",
    summary:
      "A Kanban board where teams create boards, move cards between columns and track progress. The backend runs on Render with the database hosted on Aiven.",
    tags: ["Next.js", "Node", "Express", "Prisma", "MySQL", "swagger"],
    links: [{ label: "Source", href: "https://github.com/kolawole-ayomide/taskflow-backend" }],
  },
  {
    title: "Wizpace",
    image: "/wizjob.png",
    live: "https://job-platform-teal.vercel.app",
    summary:
      "A job search and resume platform. Users upload a resume, which is parsed into their profile, then go through an onboarding wizard and discover matching jobs with an AI chat assistant.",
    tags: ["Next.js", "TypeScript", "Express", "MongoDB"],
    links: [{ label: "Source", href: "https://github.com/kolawole-ayomide/job-platform" }],
  },
  {
    title: "Fintech backend",
    image: "/fintech.png",
    docs: "https://fintech-backend-vizv.onrender.com/api/v1/docs/",
    summary:
      "The API for a digital banking, payments and SME platform, written in TypeScript with Prisma on MySQL and deployed on Render.",
    tags: ["Node", "Express", "TypeScript", "Prisma", "MySQL", "swagger"],
    links: [{ label: "Source", href: "https://github.com/kolawole-ayomide/fintech-backend" }],
  },
  {
    title: "E-commerce store",
    image: "/ecommerce.png",
    live: "https://ecommerce-roan-ten-21.vercel.app/",
    summary:
      "A storefront built to match a Figma design exactly, with a Next.js frontend and an Express and MongoDB backend.",
    tags: ["Next.js", "React", "Express", "MongoDB"],
    links: [{ label: "Source", href: "https://github.com/kolawole-ayomide/ECOMMERCE" }],
  },

  {
    title: "Zaira",
    summary:
      "A full-stack food blog with account sign-up and OTP verification, token-based login and image uploads. Built with a Next.js frontend and an Express and MongoDB backend.",
    tags: ["Next.js", "Express", "MongoDB", "JWT"],
    links: [
      { label: "Frontend", href: "https://github.com/kolawole-ayomide/zaira-frontend" },
          { label: "Backend", href: "https://github.com/kolawole-ayomide/zaira-backend" },
    ],
  },
  {
    title: "Virtual Mentoring Portal",
    summary:
      "A mentoring portal built for an EKEDC project in React. It covers login flows, a shared user context and dashboard pages. Data is kept in localStorage because the project is frontend-only for now.",
    tags: ["React", "React Router", "Context API", "localStorage"],
    links: [{ label: "Source", href: "https://github.com/kolawole-ayomide/mentee" }],
  },
];

export const smallerBuilds = [
  {
    title: "Redvera Landing Page",
    summary: "A landing page for a borrowing and lending app, with a hero section and app store buttons.",
    tags: ["HTML", "Tailwind CSS"],
    href: "https://github.com/kolawole-ayomide/redvera-landing-page",
  },
  {
    title: "Mealplanner",
    summary: "A static UI build of a weekly meal planner with ingredient search, a planner board and a shopping list view.",
    tags: ["HTML", "Tailwind CSS"],
    href: "https://github.com/kolawole-ayomide/mealplanner",
  },
  {
    title: "Panto-Furniture Landing Page",
    summary: "A furniture store landing page.",
    tags: ["HTML", "Tailwind CSS"],
    href: "https://github.com/kolawole-ayomide/pantho-furniture-landing-page",
  },
];

export const profile = {
  email: "ayo4real26@gmail.com",
  github: "https://github.com/kolawole-ayomide",
  linkedin: "https://linkedin.com/in/your-handle",
};

export const stack = [
  { group: "Frontend", items: "React, Next.js, Tailwind CSS" },
  { group: "Backend", items: "Node.js, Express, JavaScript TypeScript" },
  { group: "Data", items: "MongoDB, MySQL, Prisma" },
  { group: "Shipping", items: "Render, Aiven, Git" },
];

export const experience = [
  {
    company: "Irevault",
    role: "Full-Stack Engineer",
    location: "Lagos, NG",
    period: "Mar 2026 – Present",
    points: [
      "Built and integrated frontend interfaces with backend REST APIs as part of a full-stack team on a platform for selling digital marketing.",
      "Broke the product requirements document into technical tasks, API endpoints, data models and UI requirements, and aligned with the team on scope.",
      "Wrote API tests with Jest and Supertest.",
    ],
  },
  {
    company: "Century Gateway Limited",
    role: "Full-Stack Engineer (Contract)",
    location: "Lagos, NG",
    period: "Jan 2025 – Dec 2025",
    points: [
      "Built the Exclusive e-commerce storefront: a Node, Express and MongoDB backend with JWT authentication, and a React and Tailwind frontend with search, filters, a cart and checkout.",
      "Wrote API and unit tests, deployed to Vercel, and documented the API and setup so the client could maintain the product.",
    ],
  },
  {
    company: "Enegxi Technologies",
    role: "Full-Stack Engineer",
    location: "Lagos, NG",
    period: "Apr 2023 – Dec 2024",
    points: [
      "Contributed to the backend of Payyng, a fintech product, working with the team on secure services for accounts, payments and transaction workflows.",
      "Applied TDD and automated tests to protect critical financial logic, and managed client state with Zustand.",
    ],
  },
  {
    company: "Dwello",
    role: "Frontend Engineer",
    location: "Canada",
    period: "Aug 2022 – Apr 2024",
    points: [
      "Developed the frontend of an apartment rental website with Next.js and Tailwind CSS, including search and filters for location, price and rooms.",
      "Built the tenant and landlord interfaces, integrated Cloudinary image uploads and optimised pages for fast mobile loading.",
    ],
  },
];