// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: 'Sandeep Pucha',
  role: 'Full Stack Developer',
  tagline: 'React · Node.js · Python FastAPI · GenAI / RAG',
  location: 'Hyderabad, India',
  email: 'sandeeppucha648@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sandeep-pucha-4a6817224/',
  github: 'https://github.com/Sandeepsai204',
  resume: '/Sandeep_Pucha_Resume.pdf',
  summary:
    'Full Stack Developer with 3 years of experience building enterprise web applications and AI-powered tools. I own both frontend and backend — React and Node.js on one side, Python FastAPI and RAG pipelines on the other — and I ship workflow-automation platforms and GenAI features that measurably cut manual effort for enterprise clients.',
}

export const stats = [
  { value: '3+', label: 'Years building production apps' },
  { value: '20+', label: 'Enterprise releases shipped' },
  { value: '500+', label: 'Active users across 5 departments' },
  { value: '80%', label: 'Faster resume screening with RAG' },
]

export const about = [
  "I'm a full stack developer at ABSYZ Software Consulting, where I build the systems that enterprises run their approvals, documents and hiring on. Most of my work lives at the boundary between people and process: taking a workflow that used to take a day of emails and turning it into something that takes two hours.",
  'Lately I have been focused on GenAI — building retrieval-augmented (RAG) pipelines in Python FastAPI that match resumes to job descriptions and power an HR policy chatbot. I enjoy the full loop: designing the API, wiring the data layer, and making the React UI feel fast.',
]

export const experience = [
  {
    company: 'ABSYZ Software Consulting Pvt. Ltd.',
    role: 'Full Stack Developer',
    period: 'Sep 2023 — Present',
    location: 'Hyderabad',
    highlights: [
      'Built and maintained enterprise web apps with React, Node.js, Express, SPFx, MySQL and PostgreSQL, serving 500+ active users across 5 departments.',
      'Designed workflow-based approval systems that cut average approval turnaround from 1 day to 2 hours (75% reduction).',
      'Built threshold-based approval routing and role-based access control (RBAC), reducing misrouted approvals by 85% and improving audit compliance.',
      'Built a GenAI / RAG resume-parsing and JD-matching engine, making candidate shortlisting 80% faster with 70–80% matching accuracy.',
      'Improved an HR chatbot’s policy-retrieval pipeline, cutting query resolution time by 35% and manual HR tickets by 75%.',
      'Integrated SharePoint and Power Automate workflows, eliminating 15 hours of manual work per week.',
      'Cut average page load time by 30% through reusable components, pagination and optimized API / database queries.',
      'Built REST APIs with Express.js and Python FastAPI powering 3+ enterprise services; partnered with product, design and QA across 20+ releases.',
    ],
  },
]

export const projects = [
  {
    title: 'Profile Enhance',
    subtitle: 'AI Resume Screening & Shortlisting Platform',
    client: 'IT Services',
    role: 'Full Stack Developer',
    metric: '80%',
    metricLabel: 'less manual screening',
    description:
      'Resume-to-JD matching platform with dynamic match dashboards, filterable candidate lists and real-time match-percentage visualizations. The React UI renders AI-generated candidate suggestions live from a Python FastAPI + RAG backend.',
    tech: ['React', 'Hooks / Context', 'Axios', 'GenAI', 'RAG', 'FastAPI', 'PostgreSQL'],
    featured: true,
  },
  {
    title: 'HR Chatbot',
    subtitle: 'RAG-powered HR policy assistant',
    client: 'IT Services',
    role: 'Backend Developer',
    metric: '2s',
    metricLabel: 'avg. response time',
    description:
      'Built the RAG retrieval pipeline in Python FastAPI behind an HR policy chatbot, and contributed to the React chat UI — message threading, typing indicators and streaming response rendering. Cut manual HR support requests by 75%.',
    tech: ['React', 'GenAI', 'RAG', 'FastAPI', 'PostgreSQL'],
    featured: true,
  },
  {
    title: 'Crack It',
    subtitle: 'End-to-end recruitment platform',
    client: 'IT Services',
    role: 'Full Stack Developer',
    metric: '40%',
    metricLabel: 'faster time-to-hire',
    description:
      'Recruitment platform covering shortlisting, interview scheduling and feedback, with reusable form components, client-side validation and pipeline-stage views. Node.js / Express APIs keep 20+ recruiters and interviewers in sync in real time.',
    tech: ['React', 'Node.js', 'Express', 'MySQL'],
  },
  {
    title: 'Indent Approval Process',
    subtitle: 'Cross-departmental approval workflows',
    client: 'Hardware Manufacturing',
    role: 'Full Stack Developer',
    metric: '75%',
    metricLabel: 'faster approvals',
    description:
      'SPFx-based approval app with real-time status tracking, role-based conditional rendering and centralized document views. One set of reusable components drives 15+ distinct approval workflows without duplicated logic.',
    tech: ['React', 'SPFx', 'SharePoint', 'Power Automate'],
  },
  {
    title: 'E-Files Management System',
    subtitle: 'Secure enterprise document management',
    client: 'Automobiles & Manufacturing',
    role: 'Frontend Developer',
    metric: '60%',
    metricLabel: 'less manual doc handling',
    description:
      'Complete React front-end inside SPFx for secure document upload, preview, retrieval and deletion, with real-time notifications and role-based UI. Optimized re-renders for large file lists serving 600+ employees.',
    tech: ['React', 'SPFx', 'SharePoint', 'Power Automate'],
  },
]

export const skills = [
  { group: 'Frontend', items: ['React', 'Redux', 'JavaScript', 'HTML5', 'CSS3', 'Material UI', 'Bootstrap', 'SPFx'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'REST APIs', 'Sequelize', 'TypeORM'] },
  { group: 'AI / GenAI', items: ['RAG pipelines', 'Resume / JD matching', 'Conversational chatbots'] },
  { group: 'Data', items: ['MySQL', 'PostgreSQL', 'SQL querying', 'Data transformation'] },
  { group: 'Cloud & Platforms', items: ['AWS (EC2, S3, Lambda)', 'SharePoint', 'Power Automate'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Axios'] },
]

export const education = [
  {
    degree: 'B.Tech, Electrical & Electronics Engineering',
    school: 'Bharat Institute of Engineering and Technology',
    period: '2022',
    score: '7.5 CGPA',
  },
  {
    degree: 'Diploma, Electrical & Electronics Engineering',
    school: 'Anurag College of Engineering',
    period: '2016 — 2019',
    score: '91.33%',
  },
]
