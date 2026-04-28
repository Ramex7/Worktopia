export type CandidatePost = {
  id: string;
  time: string;
  content: string;
  likes: string;
  comments: string;
};

export type CandidateExperience = {
  company: string;
  role: string;
  period: string;
  summary: string;
};

export type CandidateEducation = {
  school: string;
  program: string;
  period: string;
};

export type CandidateCertificate = {
  name: string;
  issuer: string;
  year: string;
};

export type Candidate = {
  id: string;
  name: string;
  field: string;
  yearsOfExperience: number;
  location: string;
  bio: string;
  about: string;
  filters: string[];
  experience: CandidateExperience[];
  education: CandidateEducation[];
  certificates: CandidateCertificate[];
  posts: CandidatePost[];
};

export const candidates: Candidate[] = [
  {
    id: "aisha-kimani",
    name: "Aisha Kimani",
    field: "Product Design",
    yearsOfExperience: 6,
    location: "Nairobi, Kenya",
    bio: "Designs hiring tools that make complex workflows feel calm and clear.",
    about:
      "Aisha is a product designer focused on talent products, onboarding systems, and internal workflow tools. She enjoys translating dense product requirements into interfaces that feel confident and easy to use.",
    filters: ["Design", "Remote Ready"],
    experience: [
      {
        company: "Worktopia",
        role: "Senior Product Designer",
        period: "2023 - Present",
        summary: "Leading design for recruiter workflows, employer dashboards, and job posting tools.",
      },
      {
        company: "AfriTalent",
        role: "Product Designer",
        period: "2020 - 2023",
        summary: "Worked on candidate journeys, search refinement, and profile completion flows.",
      },
    ],
    education: [
      {
        school: "University of Nairobi",
        program: "B.A. Design",
        period: "2014 - 2018",
      },
    ],
    certificates: [
      {
        name: "Google UX Design Certificate",
        issuer: "Google",
        year: "2021",
      },
      {
        name: "Design Leadership Workshop",
        issuer: "Interaction Design Foundation",
        year: "2024",
      },
    ],
    posts: [
      {
        id: "post-1",
        time: "2d",
        content:
          "Good hiring products earn trust through small details: clear feedback, stable layouts, and language that feels human.",
        likes: "81",
        comments: "11",
      },
      {
        id: "post-2",
        time: "1w",
        content:
          "Currently exploring better ways to show candidate fit without flattening people into scores.",
        likes: "54",
        comments: "7",
      },
    ],
  },
  {
    id: "daniel-otieno",
    name: "Daniel Otieno",
    field: "Frontend Engineering",
    yearsOfExperience: 5,
    location: "Kampala, Uganda",
    bio: "Builds polished interfaces for dashboards, talent products, and web apps.",
    about:
      "Daniel specializes in React-based product development with an eye for clean interaction design and maintainable UI systems. He likes shipping work that feels fast, sturdy, and easy to extend.",
    filters: ["Engineering", "Remote Ready"],
    experience: [
      {
        company: "Worktopia",
        role: "Frontend Engineer",
        period: "2022 - Present",
        summary: "Building the recruiter feed, candidate search flows, and employer analytics UI.",
      },
      {
        company: "Stack Foundry",
        role: "Software Engineer",
        period: "2019 - 2022",
        summary: "Developed internal business tools and customer-facing admin platforms.",
      },
    ],
    education: [
      {
        school: "Makerere University",
        program: "BSc Software Engineering",
        period: "2015 - 2019",
      },
    ],
    certificates: [
      {
        name: "Meta Front-End Developer Certificate",
        issuer: "Meta",
        year: "2022",
      },
    ],
    posts: [
      {
        id: "post-3",
        time: "5h",
        content:
          "A dashboard starts feeling premium when the small states are handled well: loading, empty, error, and recovery.",
        likes: "63",
        comments: "9",
      },
      {
        id: "post-4",
        time: "4d",
        content:
          "I still think typography does half the product design work when the information is dense.",
        likes: "97",
        comments: "13",
      },
    ],
  },
  {
    id: "maya-njeri",
    name: "Maya Njeri",
    field: "Talent Acquisition",
    yearsOfExperience: 8,
    location: "Mombasa, Kenya",
    bio: "Connects high-growth teams with strong operators, designers, and engineers.",
    about:
      "Maya has spent the last several years building hiring pipelines for scaling startups across East Africa. Her focus is structured interviewing, employer branding, and candidate experience.",
    filters: ["Recruiting", "On-site"],
    experience: [
      {
        company: "BrightPath Labs",
        role: "Talent Partner",
        period: "2021 - Present",
        summary: "Owns hiring strategy for operations, product, and GTM roles.",
      },
      {
        company: "Coastal Ventures",
        role: "Recruitment Specialist",
        period: "2017 - 2021",
        summary: "Supported growth hiring and employer partnerships across multiple business units.",
      },
    ],
    education: [
      {
        school: "Kenyatta University",
        program: "BCom Human Resource Management",
        period: "2012 - 2016",
      },
    ],
    certificates: [
      {
        name: "Talent Sourcing Certification",
        issuer: "LinkedIn Learning",
        year: "2023",
      },
      {
        name: "People Analytics Essentials",
        issuer: "Coursera",
        year: "2024",
      },
    ],
    posts: [
      {
        id: "post-5",
        time: "1d",
        content:
          "The best candidate experiences feel organized, honest, and responsive long before the offer stage.",
        likes: "118",
        comments: "16",
      },
    ],
  },
  {
    id: "leo-mensah",
    name: "Leo Mensah",
    field: "Data Analysis",
    yearsOfExperience: 4,
    location: "Accra, Ghana",
    bio: "Turns recruiting and product data into practical decisions for growth teams.",
    about:
      "Leo works across analytics, reporting, and dashboard design for hiring and operations teams. He cares about making data useful for real decisions rather than just decorative reporting.",
    filters: ["Data", "Hybrid"],
    experience: [
      {
        company: "Northstar Metrics",
        role: "Data Analyst",
        period: "2022 - Present",
        summary: "Tracks funnel performance, hiring velocity, and recruiter productivity insights.",
      },
      {
        company: "Delta Systems",
        role: "Junior Analyst",
        period: "2020 - 2022",
        summary: "Built recurring reports and internal KPI dashboards for leadership teams.",
      },
    ],
    education: [
      {
        school: "University of Ghana",
        program: "BSc Statistics",
        period: "2016 - 2020",
      },
    ],
    certificates: [
      {
        name: "Google Data Analytics Certificate",
        issuer: "Google",
        year: "2022",
      },
    ],
    posts: [
      {
        id: "post-6",
        time: "3d",
        content:
          "A metric is only useful when the team knows what decision it should help them make next.",
        likes: "45",
        comments: "6",
      },
    ],
  },
];

export const candidateFilters = ["All", "Design", "Engineering", "Recruiting", "Data"];
