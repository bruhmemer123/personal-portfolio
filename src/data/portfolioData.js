/**
 * Portfolio Data Configuration
 * Centralized data source populated from Affan Niyazi's resume and GitHub profile.
 */

export const personalInfo = {
  name: "Affan Niyazi",
  handle: "bruhmemer123",
  title: "Full-Stack Developer & Data Science Student",
  roles: [
    "Full-Stack Web Developer",
    "React 19 & Node.js Specialist",
    "Real-Time WebSockets & Socket.io Builder",
    "Python & Algorithm Enthusiast"
  ],
  status: "Available for internships & collaborations",
  location: "Mumbai, India",
  bio: "B.Tech Computer Science (Data Science) student at DJSCE Mumbai. Full-stack developer passionate about building high-performance web applications, real-time multiplayer systems, and algorithmic automation tools.",
  email: "afydking@gmail.com",
  github: "https://github.com/bruhmemer123",
  linkedin: "https://www.linkedin.com/in/affan-niyazi-963483383/",
  resumeUrl: "/resume.pdf",
};

export const systemSpecs = {
  os: "Arch Linux",
  shell: "zsh / bash",
  editor: "VS Code / Vim",
  uptime: "99.98%",
  terminal: "kitty",
  theme: "Cyber Charcoal / Terminal Emerald",
  currentFocus: "Distributed Systems, Upstash Redis, WebSockets, Three.js",
};

export const skillsData = [
  {
    category: "Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: 90, tag: "automation" },
      { name: "JavaScript (ES6+)", level: 92, tag: "core" },
      { name: "C / C++", level: 82, tag: "systems" },
      { name: "HTML5 & CSS3", level: 95, tag: "markup" },
      { name: "Jinja", level: 80, tag: "templating" },
      { name: "SQL", level: 78, tag: "database" },
    ]
  },
  {
    category: "Frontend",
    icon: "Layout",
    skills: [
      { name: "React 19", level: 92, tag: "ui-lib" },
      { name: "Tailwind CSS", level: 95, tag: "styling" },
      { name: "DaisyUI", level: 88, tag: "components" },
      { name: "React Router v7", level: 85, tag: "routing" },
      { name: "HTML5 Canvas", level: 85, tag: "graphics" },
      { name: "Three.js", level: 75, tag: "3d" },
    ]
  },
  {
    category: "Backend & Databases",
    icon: "Server",
    skills: [
      { name: "Node.js & Express.js", level: 90, tag: "runtime" },
      { name: "FastAPI", level: 85, tag: "python-api" },
      { name: "Socket.io", level: 88, tag: "websockets" },
      { name: "Upstash Redis", level: 82, tag: "rate-limiting" },
      { name: "MongoDB & Mongoose", level: 85, tag: "nosql" },
      { name: "RESTful APIs", level: 92, tag: "architecture" },
    ]
  },
  {
    category: "Tools & Methodologies",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 92, tag: "vcs" },
      { name: "Linux / CLI", level: 85, tag: "sysadmin" },
      { name: "yt-dlp", level: 88, tag: "media-stream" },
      { name: "Selenium WebDriver", level: 88, tag: "automation" },
      { name: "Render & Cloud Deploy", level: 85, tag: "devops" },
      { name: "Codeforces (950)", level: 80, tag: "cp" },
    ]
  }
];

export const projectsData = [
  {
    id: "wordle-solver",
    title: "Automated Wordle Solver",
    tagline: "Information Theory bot solving NYT Wordle using Shannon Entropy",
    description: "Engineered an autonomous bot solving NYT Wordle using Shannon Entropy to maximize expected information gain per turn. Evaluates candidates across 243 feedback patterns to prune search space. Automates browser gameplay with Selenium WebDriver.",
    category: "Developer Tools",
    tech: ["Python", "Selenium WebDriver", "Mathematics", "Shannon Entropy", "DOM Parsing"],
    github: "https://github.com/bruhmemer123/wordle-solver",
    demo: null,
    featured: true,
    branch: "main",
    stars: 5,
  },
  {
    id: "skribbl-clone",
    title: "Real-Time Multiplayer Drawing Game",
    tagline: "Skribbl.io clone with real-time canvas stroke synchronization",
    description: "Built a multiplayer drawing and guessing platform utilizing Socket.io for low-latency canvas stroke synchronization. Architected a server-authoritative engine managing player lobbies, drawer rotation, turn timers, and automated live chat word verification.",
    category: "Full-Stack",
    tech: ["React", "Node.js", "Express.js", "Socket.io", "HTML5 Canvas", "Render"],
    github: "https://github.com/bruhmemer123/skribbl",
    demo: "https://skribbl-knkf.onrender.com",
    featured: true,
    branch: "main",
    stars: 12,
  },
  {
    id: "mern-notes-app",
    title: "MERN Stack Notes Application",
    tagline: "Full-stack note platform with Upstash Redis distributed rate limiting",
    description: "Developed a full-stack note management application using React 19, Vite, Express, Tailwind CSS, and DaisyUI. Integrated Upstash Redis middleware to enforce distributed API rate limiting on backend endpoints, preventing API abuse.",
    category: "Full-Stack",
    tech: ["React 19", "Vite", "Node.js", "Express", "MongoDB", "Mongoose", "Upstash Redis", "Tailwind CSS"],
    github: "https://github.com/bruhmemer123/MERN-notes-app",
    demo: "https://mern-notes-app-smsi.onrender.com",
    featured: true,
    branch: "main",
    stars: 8,
  },
  {
    id: "express-djsce",
    title: "DJS eXpress — Media & Publication Portal",
    tagline: "Official student publication & media showcase platform of DJSCE",
    description: "Collaborated with a cross-functional team of technical associates to design, develop, and deploy the official DJS eXpress organization website. Built accessible frontend components and integrated client-side routing.",
    category: "Frontend",
    tech: ["JavaScript", "React", "Tailwind CSS", "Git Workflow", "Component Library"],
    github: "https://github.com/djscexpresstech-official/eXpress-official-website",
    demo: "https://www.djscexpress.com/",
    featured: false,
    branch: "main",
    stars: 6,
  },
  {
    id: "rubiks-cube-sim",
    title: "Interactive 3D Rubik's Cube Simulator",
    tagline: "Interactive 3D puzzle with real-time face rotations and scramble notation",
    description: "Interactive Rubik's Cube simulation implementing 3D transformations, layer slice rotation logic, scramble algorithm generator, and keyboard-driven solve moves.",
    category: "Developer Tools",
    tech: ["JavaScript", "HTML5 Canvas", "Three.js / 3D Math", "CSS3"],
    github: "https://github.com/bruhmemer123/rubiks_cube",
    demo: "https://rubiks-cube-gh04.onrender.com/",
    featured: false,
    branch: "master",
    stars: 4,
  },
  {
    id: "spotify-music-player",
    title: "Spotify Web Music Player",
    tagline: "Music streaming app with FastAPI backend and audio playback UI",
    description: "Built a dynamic web audio streaming platform featuring a FastAPI backend integrated with yt-dlp and a React frontend styled with Tailwind CSS for real-time media search and playback.",
    category: "Full-Stack",
    tech: ["React", "FastAPI", "Python", "yt-dlp", "Tailwind CSS"],
    github: "https://github.com/bruhmemer123",
    demo: null,
    featured: true,
    branch: "main",
    stars: 9,
  },
];

export const timelineData = [
  {
    type: "experience",
    commitHash: "d7a42f1",
    branch: "lead/djs-express",
    date: "2025 — Present",
    role: "Technical Associate",
    organization: "DJS eXpress (Publication & Media Society of DJSCE)",
    description: "Collaborated with a cross-functional team to design, develop, and deploy the official DJS eXpress organization website. Built responsive frontend components, integrated client-side routing, and maintained production-ready Git branch workflows.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Git", "Code Reviews"]
  },
  {
    type: "experience",
    commitHash: "a3c91e7",
    branch: "lead/djs-s4ds",
    date: "2025 — Present",
    role: "Technical Associate",
    organization: "DJS S4DS (Society for Data Science of DJSCE)",
    description: "Contributing as a technical member to the Society for Data Science at DJSCE. Involved in organizing data science initiatives, workshops, and building internal tooling to support the society's technical outreach.",
    tech: ["Python", "Data Science", "Machine Learning", "Git", "Research"]
  },
  {
    type: "experience",
    commitHash: "f2b84d3",
    branch: "lead/djs-compute",
    date: "2025 — Present",
    role: "Web Development Associate",
    organization: "DJS Compute (Computer Society of DJSCE)",
    description: "Serving as a Web Development Associate at DJS Compute, contributing to the development and maintenance of web platforms and systems for the college's computer engineering society.",
    tech: ["React", "Node.js", "HTML5", "CSS3", "Tailwind CSS", "Git"]
  },
  {
    type: "education",
    commitHash: "e8b109c",
    branch: "academics/btech-ds",
    date: "2025 — 2029",
    role: "B.Tech in Computer Science & Engineering (Data Science)",
    organization: "Dwarkadas J. Sanghvi College of Engineering (DJSCE), Mumbai",
    description: "Core areas: Data Science foundations, Data Structures, Object-Oriented Programming, and algorithmic problem solving.",
    tech: ["Data Science", "Python", "Data Structures", "C++", "Algorithms"]
  },
  {
    type: "education",
    commitHash: "92fc31b",
    branch: "competitive/codeforces",
    date: "Active",
    role: "Competitive Programming (Rating: 950)",
    organization: "Codeforces (@afydking)",
    description: "Regular participant in algorithmic contests focusing on dynamic programming, prefix sums, difference arrays, greedy heuristics, and time-complexity optimization.",
    tech: ["Algorithms", "C++", "Competitive Programming", "Problem Solving"]
  }
];