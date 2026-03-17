export type Project = {
  name: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  stack: string[];
  links: Array<{ label: string; href: string }>;
};

export const featuredProjects: Project[] = [
  {
    name: "Braille Calculator Initiative",
    category: "Assistive Technology",
    year: "2026",
    description:
      "An accessibility-focused calculator project designed to help visually impaired students perform two-digit multiplication more efficiently.",
    longDescription:
      "Working with a program supported by the Chinese Academy of Sciences, I helped design and refine a Braille-based calculator for students at the Beijing School for the Blind. The work combined interface simplification, software transmission improvements, testing with real users, and a broader lesson about how educational technology should support actual learning rather than only technical convenience.",
    stack: ["Accessibility Design", "Prototyping", "Software Testing", "User Feedback"],
    links: [
      { label: "Project Summary", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    name: "Credit Risk Modeling Research",
    category: "Machine Learning Research",
    year: "2025",
    description:
      "A research project on machine learning models for credit risk prediction, developed through advanced study in algorithms and data.",
    longDescription:
      "Through the Algorithm for Big Data program, I studied topics such as data transmission, reconstruction, logistic regression, CNNs, and transformers. I then applied those methods to credit risk prediction, comparing model behavior and performance. The project strengthened both my technical interest in machine learning and my habit of evaluating models through practical outcomes rather than abstraction alone.",
    stack: ["Python", "Machine Learning", "Data Analysis", "Research Writing"],
    links: [
      { label: "Research Overview", href: "/projects" },
      { label: "Get In Touch", href: "/contact" },
    ],
  },
  {
    name: "Science, Arts, and Philosophy Club",
    category: "Community Initiative",
    year: "2025",
    description:
      "A student-led club exploring technology, social computing, aesthetics, and ethics through interdisciplinary discussion.",
    longDescription:
      "I founded this club to create space for conversations that connected computer science with philosophy, design, and social responsibility. We held seminars for audiences of more than 100 people and discussed topics such as AI ethics, inequality, and how technological progress affects ordinary communities. It reflects the way I like to approach technical work: not only by building systems, but by questioning who they serve.",
    stack: ["Leadership", "Public Speaking", "AI Ethics", "Community Building"],
    links: [
      { label: "Club Overview", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    name: "Chemistry Thinks Big",
    category: "Education & Outreach",
    year: "2024",
    description:
      "A hands-on chemistry teaching initiative developed during volunteer instruction in Xichuan.",
    longDescription:
      "While teaching in Xichuan, I adapted chemistry lessons to work with limited equipment by treating everyday environments as laboratories. Students explored pH testing, filtration, catalysts, and material behavior using household and local materials. We documented the work in a project book called 'Chemistry Thinks Big,' which captured the broader lesson that creativity and resilience can expand what education looks like.",
    stack: ["Teaching", "Curriculum Design", "Volunteer Work", "Scientific Communication"],
    links: [
      { label: "Details", href: "/projects" },
      { label: "Discuss", href: "/contact" },
    ],
  },
];

export const skills = [
  "TypeScript",
  "Python",
  "C++",
  "SQL",
  "Machine Learning",
  "Data Analysis",
  "Jupyter Notebook",
  "Azure SQL",
  "Research Writing",
  "Accessibility Design",
  "Public Speaking",
  "Photography",
  "Graphic Design",
  "Leadership",
];

export const coursework = [
  "Algorithms",
  "Statistics and Data Science",
  "Machine Learning",
  "Artificial Intelligence",
  "Economics of AI",
  "Data Transmission and Reconstruction",
  "Credit Risk Modeling",
  "Computer Science",
  "Applied Economics",
];

export const contactLinks = [
  {
    label: "Personal Email",
    value: "john.lyu.bj@hotmail.com",
    href: "mailto:john.lyu.bj@hotmail.com",
  },
  {
    label: "Berkeley Email",
    value: "jingxuan.lyu@berkeley.edu",
    href: "mailto:jingxuan.lyu@berkeley.edu",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jingxuan-lyu-390372381",
    href: "https://www.linkedin.com/in/jingxuan-lyu-390372381",
  },
  {
    label: "GitHub",
    value: "github.com/john092985",
    href: "https://github.com/john092985",
  },
  {
    label: "Resume Request",
    value: "Available upon request",
    href: "mailto:jingxuan.lyu@berkeley.edu?subject=Resume%20Request",
  },
];

export const profileHighlights = [
  {
    title: "Technical Direction",
    body: "Interested in computer science, data science, and machine learning, especially when technical work connects to clear human impact.",
  },
  {
    title: "Research and Data Experience",
    body: "Experience spans machine learning research, credit risk modeling, and data analysis through academic programs and internship work.",
  },
  {
    title: "Interdisciplinary Perspective",
    body: "I often connect technology with design, ethics, education, and the arts, which shapes how I think about both products and systems.",
  },
];

export const values = [
  {
    title: "Usefulness",
    body: "I care most about whether technical work genuinely helps people, especially in education, accessibility, and practical decision-making.",
  },
  {
    title: "Rigor",
    body: "Whether in competitions, research, or coursework, I value disciplined learning, careful analysis, and solutions that hold up under scrutiny.",
  },
  {
    title: "Creativity",
    body: "Art, photography, and design influence how I approach technical work: I value clarity, visual judgment, and original thinking.",
  },
];

export const education = [
  {
    title: "University of California, Berkeley",
    subtitle: "B.A. in Computer Science and Data Science",
    period: "Expected Graduation 2029",
    body: "Studying computer science and data science with interests in machine learning, software engineering, data-driven problem solving, and thoughtful product execution.",
  },
  {
    title: "Haidian Kaiwen Academy",
    subtitle: "High School Diploma",
    period: "Graduated 2025",
    body: "Built a strong interdisciplinary foundation across computer science, mathematics, economics, research, art, and student leadership through coursework, competitions, and community initiatives.",
  },
];

export const experience = [
  {
    title: "Junior Data Analyst Intern",
    subtitle: "London Stock Exchange Group China Office",
    period: "2024",
    body: "Processed customer data with Python on Azure SQL systems and explored the use of AI-assisted debugging in data platform workflows.",
  },
  {
    title: "Researcher, Algorithm for Big Data",
    subtitle: "Program led by Professor David Woodruff",
    period: "2024",
    body: "Studied machine learning foundations including logistic regression, CNNs, and transformers, and applied them to credit risk prediction and performance analysis.",
  },
  {
    title: "Volunteer and Project Contributor",
    subtitle: "Beijing School for the Blind / Chinese Academy of Sciences support program",
    period: "2024",
    body: "Helped design and refine a calculator for visually impaired students, tested it in real educational settings, and continued supporting math access through long-term volunteering.",
  },
];

export const leadership = [
  {
    title: "Founder, Science, Arts, and Philosophy Club",
    subtitle: "Student-led interdisciplinary club",
    period: "2023 to 2024",
    body: "Organized seminars and discussions on technology, aesthetics, and social impact for audiences of more than 100 participants.",
  },
  {
    title: "Leader, USACO Computing Club",
    subtitle: "Competition preparation and algorithm discussion",
    period: "2023 to 2024",
    body: "Led discussions on algorithms used in programming contests, reviewed competition problems, and supported peers in improving problem-solving efficiency.",
  },
  {
    title: "Photography, Art, and Visual Design",
    subtitle: "Creative work across exhibitions and competitions",
    period: "Ongoing",
    body: "Developed long-term interests in photography, painting, and design, including award-winning STEAM photography and visual work for presentations and student initiatives.",
  },
];
