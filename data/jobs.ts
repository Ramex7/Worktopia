export type JobResponsibility = {
  title: string;
  detail: string;
};

export type JobRequirement = {
  title: string;
  detail: string;
};

export type JobBenefit = {
  title: string;
  detail: string;
};

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  workMode: "Remote" | "Hybrid" | "On-site";
  employmentType: "Full-time" | "Part-time" | "Internship";
  level: "Junior" | "Mid" | "Senior" | "Intern";
  field: string;
  yearsRequired: number;
  summary: string;
  overview: string;
  salary: string;
  posted: string;
  filters: string[];
  responsibilities: JobResponsibility[];
  requirements: JobRequirement[];
  benefits: JobBenefit[];
};

export const jobs: Job[] = [
  {
    id: "senior-product-designer",
    title: "Senior Product Designer",
    company: "Worktopia",
    location: "Nairobi, Kenya",
    workMode: "Hybrid",
    employmentType: "Full-time",
    level: "Senior",
    field: "Design",
    yearsRequired: 5,
    summary:
      "Lead the design of hiring workflows, employer dashboards, and candidate-facing product moments.",
    overview:
      "This placeholder role focuses on someone who can shape end-to-end product experiences for talent teams. You would work closely with product, engineering, and recruiting partners to improve how employers discover and evaluate candidates.",
    salary: "KES 280,000 - 360,000 / month",
    posted: "2 days ago",
    filters: ["All", "Design", "Hybrid", "Full-time"],
    responsibilities: [
      {
        title: "Own key flows",
        detail: "Drive UX for search, candidate review, messaging, and job posting experiences.",
      },
      {
        title: "Collaborate closely",
        detail: "Work with engineers and PMs to translate hiring needs into shippable interfaces.",
      },
      {
        title: "Raise quality",
        detail: "Improve interaction patterns, visual consistency, and product clarity across surfaces.",
      },
    ],
    requirements: [
      {
        title: "Experience",
        detail: "5+ years designing digital products, ideally in SaaS, hiring, or workflow-heavy tools.",
      },
      {
        title: "Level",
        detail: "Senior level with confidence leading projects and shaping product direction.",
      },
      {
        title: "Toolkit",
        detail: "Strong product thinking, interaction design, prototyping, and collaboration habits.",
      },
    ],
    benefits: [
      {
        title: "Flexible schedule",
        detail: "Hybrid work setup with two in-office collaboration days each week.",
      },
      {
        title: "Learning support",
        detail: "Annual budget for courses, workshops, and conferences.",
      },
    ],
  },
  {
    id: "frontend-engineer",
    title: "Frontend Engineer",
    company: "Northstar Labs",
    location: "Kampala, Uganda",
    workMode: "Remote",
    employmentType: "Full-time",
    level: "Mid",
    field: "Engineering",
    yearsRequired: 4,
    summary:
      "Build polished recruiter and employer interfaces for a growing hiring platform.",
    overview:
      "This placeholder job is for an engineer who enjoys turning complex product requirements into reliable, thoughtfully designed interfaces. The role touches dashboards, workflows, and internal product systems.",
    salary: "USD 2,500 - 3,400 / month",
    posted: "5 hours ago",
    filters: ["All", "Engineering", "Remote", "Full-time"],
    responsibilities: [
      {
        title: "Ship product features",
        detail: "Implement feed, search, profile, and job-management experiences in React Native and web.",
      },
      {
        title: "Partner across functions",
        detail: "Work closely with product and design to refine flows before and during implementation.",
      },
      {
        title: "Maintain quality",
        detail: "Improve performance, state handling, and UI consistency across the app.",
      },
    ],
    requirements: [
      {
        title: "Experience",
        detail: "4+ years building production frontend applications with modern JavaScript frameworks.",
      },
      {
        title: "Level",
        detail: "Mid-level engineer who can own scoped features with limited oversight.",
      },
      {
        title: "Strengths",
        detail: "Solid UI implementation, debugging, API integration, and product collaboration skills.",
      },
    ],
    benefits: [
      {
        title: "Remote first",
        detail: "Distributed team with flexible working hours across time zones.",
      },
      {
        title: "Equipment support",
        detail: "Home office stipend and device refresh budget.",
      },
    ],
  },
  {
    id: "talent-acquisition-intern",
    title: "Talent Acquisition Intern",
    company: "BrightPath Labs",
    location: "Mombasa, Kenya",
    workMode: "On-site",
    employmentType: "Internship",
    level: "Intern",
    field: "Recruiting",
    yearsRequired: 0,
    summary:
      "Support candidate sourcing, interview coordination, and recruiting operations for a fast-moving team.",
    overview:
      "This placeholder internship is designed for someone starting out in recruiting who wants hands-on exposure to sourcing, candidate communication, and employer brand work.",
    salary: "KES 35,000 / month stipend",
    posted: "1 day ago",
    filters: ["All", "Recruiting", "On-site", "Internship"],
    responsibilities: [
      {
        title: "Coordinate interviews",
        detail: "Help schedule conversations, manage calendars, and follow up with candidates.",
      },
      {
        title: "Assist sourcing",
        detail: "Build candidate lists and support outreach for priority roles.",
      },
      {
        title: "Keep records tidy",
        detail: "Maintain organized notes and hiring status updates in internal tools.",
      },
    ],
    requirements: [
      {
        title: "Experience",
        detail: "No prior experience required, but internships or campus leadership are a plus.",
      },
      {
        title: "Level",
        detail: "Internship role suited for early-career candidates or recent graduates.",
      },
      {
        title: "Strengths",
        detail: "Strong communication, organization, curiosity, and reliability.",
      },
    ],
    benefits: [
      {
        title: "Mentorship",
        detail: "Structured support from recruiters and hiring managers.",
      },
      {
        title: "Career exposure",
        detail: "Opportunity to learn the full recruiting funnel inside a growing company.",
      },
    ],
  },
  {
    id: "data-analyst-part-time",
    title: "Data Analyst",
    company: "Delta Metrics",
    location: "Accra, Ghana",
    workMode: "Hybrid",
    employmentType: "Part-time",
    level: "Junior",
    field: "Data",
    yearsRequired: 2,
    summary:
      "Turn hiring and product data into useful dashboards and recurring insight reports.",
    overview:
      "This placeholder role is for someone early in their analytics career who can clean data, build reports, and translate findings into practical recommendations for business teams.",
    salary: "USD 1,100 - 1,500 / month",
    posted: "3 days ago",
    filters: ["All", "Data", "Hybrid", "Part-time"],
    responsibilities: [
      {
        title: "Build reports",
        detail: "Prepare recurring dashboards for hiring performance, sourcing, and conversion trends.",
      },
      {
        title: "Support decisions",
        detail: "Summarize findings for recruiting and product stakeholders in a clear, useful way.",
      },
      {
        title: "Maintain data quality",
        detail: "Check for inconsistencies and improve trust in key metrics.",
      },
    ],
    requirements: [
      {
        title: "Experience",
        detail: "2+ years in analytics, reporting, operations, or a closely related role.",
      },
      {
        title: "Level",
        detail: "Junior-level analyst comfortable handling recurring analysis with guidance.",
      },
      {
        title: "Strengths",
        detail: "Spreadsheet fluency, dashboard thinking, and clear written communication.",
      },
    ],
    benefits: [
      {
        title: "Flexible arrangement",
        detail: "Part-time schedule with hybrid collaboration for planning days.",
      },
      {
        title: "Project variety",
        detail: "Work across recruiting, ops, and product analytics requests.",
      },
    ],
  },
];

export const jobFilters = [
  "All",
  "Design",
  "Engineering",
  "Recruiting",
  "Data",
  "Remote",
  "Hybrid",
  "On-site",
];
