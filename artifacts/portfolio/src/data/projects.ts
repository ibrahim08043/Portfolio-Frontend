import iptvImg      from "../../../attached_assets/iptv.png";
import realstateImg  from "../../../attached_assets/realstate.png";
import zwaImg        from "../../../attached_assets/zwa.png";
import hrCrmImg      from "../../../attached_assets/hrCrmImg4.png";
import ytVideoTrimmerImg from "../../../attached_assets/youtube.png";
import iimiinImg     from "../../../attached_assets/iimiinImg.png";

export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  period?: string;
  technologies: string[];
  highlights?: string[];
  github: string;
  liveDemo: string;
  featured?: boolean;
  color: "primary" | "secondary" | "accent";
}

export const projects: Project[] = [
  // ── CV Projects (professional / enterprise work) ─────────────────────────
  {
    id: 7,
    title: "TGI Health Dashboard",
    subtitle: "Multi-Role Healthcare Portal",
    period: "Mar 2024 – Aug 2025",
    description:
      "Enterprise multi-role healthcare platform integrating 30+ REST APIs with JWT authentication, achieving zero data inconsistencies through API-first rendering across 19+ pages.",
    highlights: [
      "30+ REST endpoints with JWT auth, pagination & centralized error handling",
      "Unified Recharts + Ant Design system across all dashboard pages",
      "Refactored auth flow cutting login-related support tickets by 35%",
    ],
    technologies: ["Next.js", "TypeScript", "Redux Toolkit", "Recharts", "Ant Design", "JWT Auth", "Node.js"],
    github: "https://github.com/ibrahim08043",
    liveDemo: "https://github.com/ibrahim08043",
    featured: true,
    color: "primary",
  },
  {
    id: 8,
    title: "Red Carpet Journey",
    subtitle: "Luxury Travel Platform",
    period: "Apr 2024 – Jul 2025",
    description:
      "High-scale luxury travel platform built with Next.js 15, featuring real-time features, dark-to-light theme migration with localStorage persistence across 100+ tour listing pages.",
    highlights: [
      "Resolved Next.js 15 build failures affecting 40+ routes",
      "Dark-to-light theme migration across 100+ pages with state persistence",
      "Fixed GSAP scroll-animation conflicts on celebrity/artist pages",
    ],
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "GSAP", "WebSockets"],
    github: "https://github.com/ibrahim08043",
    liveDemo: "https://github.com/ibrahim08043",
    featured: true,
    color: "secondary",
  },
  {
    id: 9,
    title: "TGI Tours Admin Panel",
    subtitle: "CRM & Booking Management",
    period: "Feb 2024 – Aug 2025",
    description:
      "CRM and booking management system where 15+ separate modals were consolidated into a single Drawer component, shrinking codebase by 1,200+ lines (70% reduction).",
    highlights: [
      "Consolidated 15+ modals → single component, saving 1,200+ lines (70%)",
      "Accounting module: Outstanding Balances, Payouts, Refunds & Cancellations",
      "Corrected Redux thunk stale-closure bugs and Axios undefined-parameter handling",
    ],
    technologies: ["React", "TypeScript", "Ant Design", "Redux", "Axios"],
    github: "https://github.com/ibrahim08043",
    liveDemo: "https://github.com/ibrahim08043",
    color: "accent",
  },

  // ── Personal / Freelance Projects ────────────────────────────────────────
  {
    id: 1,
    title: "IPTV Dashboard",
    description:
      "An IPTV admin panel to manage users, billing, live stream status, and analytics with a responsive UI.",
    image: iptvImg,
    technologies: ["React.js", "Vite", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/ibrahim08043",
    liveDemo: "https://frontend.dashcore.eu/",
    featured: true,
    color: "primary",
  },
  {
    id: 5,
    title: "HR CRM",
    description:
      "A CRM system for managing job applicants, employee records, interviews, and HR pipelines with role-based access.",
    image: hrCrmImg,
    technologies: ["React.js", "Vite", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/ibrahim08043",
    liveDemo: "https://transferweb.tech/",
    featured: true,
    color: "secondary",
  },
  {
    id: 2,
    title: "Real Estate Website",
    description:
      "A fully responsive platform to browse, search, and filter properties with agent contact and lead generation features.",
    image: realstateImg,
    technologies: ["React.js", "Vite", "Firebase", "Tailwind CSS"],
    github: "https://github.com/ibrahim08043",
    liveDemo: "https://buyhomeforless.com/",
    color: "accent",
  },
  {
    id: 3,
    title: "ZWA NGA",
    description:
      "An internal dashboard for logistics and delivery management with fleet tracking, dispatch control, and live updates.",
    image: zwaImg,
    technologies: ["React.js", "Vite", "Tailwind CSS", "REST API"],
    github: "https://github.com/ibrahim08043",
    liveDemo: "https://admin.zwa-nga.com",
    color: "primary",
  },
  {
    id: 4,
    title: "YouTube Video Trimmer",
    description:
      "Trim and clip YouTube videos by selecting time ranges. Built for fast editing and content previewing.",
    image: ytVideoTrimmerImg,
    technologies: ["React.js", "Vite", "Tailwind CSS", "YouTube API"],
    github: "https://github.com/ibrahim08043",
    liveDemo: "https://demo-project.com",
    color: "secondary",
  },
  {
    id: 6,
    title: "IIMIIN",
    description:
      "A custom admin panel for managing e-commerce categories, orders, and customers with animated transitions and UI polish.",
    image: iimiinImg,
    technologies: ["React.js", "Vite", "GSAP", "Tailwind CSS"],
    github: "https://github.com/ibrahim08043",
    liveDemo: "https://admin.zwa-nga.com/",
    color: "accent",
  },
];
