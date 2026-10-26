// All portfolio content lives here — edit this file to update the site.
// Section order on the page follows the resume: Summary → Experience → Skills → Projects → Certifications → Education.

export const profile = {
  name: 'Sandeep Pucha',
  role: 'AI Full Stack Developer',
  tagline: 'React · Node.js · Python FastAPI · OpenAI / Claude · RAG',
  location: 'Hyderabad, India',
  email: 'sandeepsai1509@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sandeep-pucha-4a6817224/',
  github: 'https://github.com/Sandeepsai204',
  resume: '/Sandeep_Pucha_AI_Fullstack_Developer.pdf',
  summary:
    'AI Full Stack Developer with 3+ years of experience building scalable, responsive web applications with React, Node.js and Python FastAPI. I build GenAI solutions with OpenAI and Claude — LLM-powered automation, RAG and natural-language data querying — with a focus on keeping LLM costs low. Claude Certified Developer.',
}

export const stats = [
  { value: '3+', label: 'Years building enterprise web apps' },
  { value: '6', label: 'Key projects shipped, 4 AI-powered' },
  { value: '99%', label: 'LLM cost cut per action (AI SOQL Generator)' },
  { value: 'Claude', label: 'Certified Developer · Anthropic' },
]

export const about = [
  'I build scalable enterprise web applications end to end — user-friendly React front-ends, RESTful APIs in Express.js and Python FastAPI, and relational data layers in MySQL with Sequelize and TypeORM. I also work hands-on with SharePoint SPFx, AWS (EC2, S3, Lambda) and Power Automate to integrate enterprise workflows.',
  'Most of my recent work is GenAI: LLM-powered automation, RAG and natural-language data querying with OpenAI and Claude. I care about making these systems cheap to run — caching schemas and relationship graphs so prompts stay small and targeted. I have a good grounding in Data Structures and Algorithms (intermediate level).',
]

export const focus = [
  { title: 'Full stack ownership', text: 'React front-ends, Node.js / FastAPI services and SQL data layers — end to end.' },
  { title: 'GenAI with OpenAI & Claude', text: 'LLM automation, RAG and natural-language querying, built with LLM cost in mind.' },
  { title: 'Enterprise workflows', text: 'Approval and document systems with RBAC, SharePoint SPFx and Power Automate.' },
]

export const experience = [
  {
    company: 'ABSYZ Software Consulting Pvt. Ltd.',
    role: 'AI Full Stack Developer',
    period: 'Sep 2023 — Present',
    location: 'Hyderabad',
    highlights: [
      'Developed and maintained scalable enterprise web applications using React, Node.js, Express.js, SPFx and MySQL.',
      'Designed and implemented workflow-based business applications that automate approvals, document management and employee operations for enterprise clients.',
      'Built dynamic threshold-based approval systems and role-based access control for secure, efficient workflow routing.',
      'Implemented file upload, document processing, retrieval and centralized document management with validation and access control.',
      'Improved performance and scalability with reusable components, pagination, optimized APIs and efficient database operations.',
      'Integrated SharePoint and Power Automate workflows to streamline enterprise approvals, document handling and business processes.',
      'Developed and integrated RESTful APIs with Express.js and Python FastAPI for frontend–backend communication and enterprise services.',
      'Implemented resume parsing, JD matching, recommendation systems, document parsing and conversational query handling in AI-based applications.',
      'Enhanced chatbot response accuracy, backend processing and policy retrieval to improve the conversational experience.',
      'Collaborated with cross-functional teams across requirement gathering, workflow analysis, architecture, development, testing and deployment.',
    ],
  },
]

export const skills = [
  { group: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'Bootstrap', 'Material UI', 'SPFx'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'FastAPI', 'Sequelize', 'TypeORM', 'SharePoint'] },
  { group: 'Programming', items: ['Python', 'JavaScript', 'Google Apps Script', 'DSA (Intermediate)'] },
  { group: 'AI & GenAI', items: ['OpenAI API', 'Claude', 'LLMs', 'RAG', 'Prompt Engineering', 'Pydantic', 'Qdrant (Vector DB)'] },
  { group: 'Data & APIs', items: ['SQL', 'MySQL', 'PostgreSQL', 'REST APIs', 'JSON', 'Salesforce SOQL'] },
  { group: 'Cloud & Tools', items: ['AWS (EC2, S3, Lambda)', 'Power Automate', 'Git', 'GitHub', 'Postman', 'VS Code', 'Cursor', 'Claude Code'] },
]

export const projects = [
  {
    title: 'AI Profile Matching System',
    subtitle: 'AI-ranked profiles for hiring and client staffing',
    client: 'IT Services',
    role: 'AI Full Stack Developer',
    description:
      'Web app that matches resumes against requirements using AI-powered ranking and generates accurate match scores, with AI-driven mock interviews and interview-question generation to assess readiness. It supports two workflows:',
    points: [
      'Hiring: Internal HR screens and ranks external candidates against job descriptions.',
      'Client projects: Sales teams and PMs find the best-fit internal employees for client requirements and prepare them for client interviews.',
    ],
    tech: ['React', 'FastAPI', 'LLMs', 'BM25', 'Google Drive API', 'PostgreSQL'],
    featured: true,
  },
  {
    title: 'AI SOQL Generator',
    subtitle: 'Natural language → SOQL, inside Salesforce',
    client: 'IT Services (Salesforce)',
    role: 'AI Full Stack Developer',
    metric: '99%',
    metricLabel: 'lower LLM cost per action',
    description:
      'AI tool embedded in the Salesforce UI that lets users query org data in plain English — fetching matching records directly or just generating the SOQL query.',
    points: [
      'Admin pipeline connects a Sandbox, discovers every object and builds a cached schema, Pydantic models and a parent–child relationship graph.',
      'Cached schema keeps prompts small and targeted, cutting LLM cost from $0.10 to $0.0002–$0.0008 per action.',
    ],
    tech: ['React', 'Salesforce', 'Python', 'FastAPI', 'OpenAI', 'Pydantic'],
    featured: true,
  },
  {
    title: 'Crack-It',
    subtitle: 'AI recruiting platform',
    client: 'IT Services',
    role: 'AI Full Stack Developer',
    description:
      'Secure resume-screening and shortlisting app for Project Managers and Sales teams. Compares stored resumes against a JD, generates match percentages and suggests candidates to shortlist — streamlining staffing and reducing manual effort.',
    points: [
      'Round 1: generates resume-specific interview questions as soon as a resume is uploaded.',
      'Round 2: generates real-time follow-up questions from the candidate’s answers, shown live to the interviewer.',
    ],
    tech: ['React', 'GenAI', 'RAG', 'OpenAI', 'FastAPI'],
    featured: true,
  },
  {
    title: 'Indent Approval Process',
    subtitle: 'Cross-departmental approval workflows',
    client: 'Hardware Manufacturing & Services',
    role: 'Full Stack Developer',
    description:
      'Enterprise app that automates cross-departmental approval workflows with real-time approval tracking, centralized document management and role-based access control — digitizing manual approvals, reducing turnaround time and improving transparency.',
    tech: ['React', 'SPFx', 'SharePoint', 'Power Automate'],
  },
  {
    title: 'Design AI Automation',
    subtitle: 'Design-team emails → assigned, tracked work',
    client: 'IT Services (Internal Design Team)',
    role: 'Developer',
    metric: '5 min',
    metricLabel: 'inbox-to-ticket, no manual triage',
    description:
      'Polls the design inbox every 5 minutes and, for each request, creates a Trello ticket, posts to Google Chat and logs it in Google Sheets.',
    points: [
      'OpenAI reads each request and assigns it to the UI/UX designer with the right skills.',
      'Balances workload by each designer’s current ticket count when several share the skill.',
    ],
    tech: ['Google Apps Script', 'OpenAI API', 'Gmail', 'Trello', 'Google Chat', 'Google Sheets'],
    featured: true,
  },
  {
    title: 'E-Files Management System',
    subtitle: 'Secure employee document management',
    client: 'Automobiles & Manufacturing',
    role: 'Frontend Developer',
    description:
      'Centralized system for employee documents — secure upload, storage, retrieval, viewing, download and deletion — with real-time notifications and user-friendly interfaces that reduce manual effort.',
    tech: ['React', 'SPFx', 'SharePoint', 'Power Automate'],
  },
]

export const certifications = [
  {
    name: 'Claude Certified Developer',
    issuer: 'Anthropic',
    url: 'https://www.credly.com/earner/earned/badge/a9d606ff-a2c8-476d-aa43-c21233f83ba4',
  },
]

export const education = [
  {
    degree: 'B.Tech, Electrical & Electronics Engineering',
    school: 'Bharat Institute of Engineering and Technology, Ibrahimpatnam',
    period: '2022',
    score: '7.5 CGPA',
  },
  {
    degree: 'Diploma, Electrical & Electronics Engineering',
    school: 'Anurag College of Engineering, Ghatkesar',
    period: '2016 — 2019',
    score: '91.33%',
  },
  {
    degree: 'SSC',
    school: 'Mother Meera High School, Moula-Ali',
    period: '2015 — 2016',
    score: '9.2 CGPA',
  },
]
