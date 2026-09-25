// ─────────────────────────────────────────────────────────────
// All portfolio content lives here.
// To add a project, skill or agent, edit this file only.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Harideepak',
  first: 'Hari',
  last: 'deepak',
  title: 'Full Stack & AI Engineer',
  company: 'Krypsos',
  location: 'Based in India',
  photo: '/portfolio dp.jpeg',
  tagline: 'I build products end to end, from the API to the AI agent.',
  status: 'Currently building multi-agent AI systems',
  email: 'harideepak.s10@gmail.com',
  linkedin: 'https://www.linkedin.com/in/harideepak10',
  github: 'https://github.com/harideepak2004',
  formspree: 'https://formspree.io/f/mqegzlwa',
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const about = [
  "I'm a full-stack developer at Krypsos. I work across the whole product: REST APIs in Django and DRF, FastAPI microservices, React dashboards, Flutter apps, and the AI layer that ties them together.",
  'Most of my recent work is on LLM-powered systems: agents that call tools, read email and documents, and take real actions. What I care about most is making them reliable in production, not just in a demo.',
  'Before Krypsos I designed, built and deployed my own websites, and that habit of shipping stuck.',
]

export const stats = [
  { n: '7', label: 'Live projects' },
  { n: '4', label: 'Full-stack platforms' },
  { n: '15+', label: 'Technologies' },
  { n: '2', label: 'LLM providers' },
]

export const experience = [
  {
    when: 'Present',
    current: true,
    org: 'Krypsos',
    role: 'Software Developer · Full Stack & AI',
    points: [
      'Building a multi-agent AI platform: Django core, a FastAPI agent service, and React web and Flutter clients.',
      'Built the backend for a clinic management system: bookings, patients, inventory, Stripe payments in EUR and an AI assistant.',
      'Integrated Gmail (OAuth), Google Drive and Stripe, and made LLM tool-calling reliable with retries, output recovery and timeouts.',
      'Deploy and run the apps on Netlify (frontends) and Render (APIs and databases).',
    ],
  },
  {
    when: 'Before',
    org: 'Personal Projects',
    role: 'Web Developer',
    points: [
      'Designed, built and deployed websites for an electrical shop, an interior design studio and a watch showcase.',
      'Responsive layouts, scroll animations and live deployments on Netlify.',
    ],
  },
]

// icon: one of 'user' | 'mail' | 'shield' | 'calendar' | 'card' | 'spark'
// diagram: one of 'superAgent' | 'aura'
// screenshot: path under /public (optional). When set, the card shows
//             Screenshot / Architecture tabs.
export const caseStudies = [
  {
    kind: 'AI Platform',
    org: 'Krypsos',
    title: 'Super Agent Platform',
    desc: 'A multi-agent AI platform with 10 agents that handle real work across a business: email, documents, invoices and expenses, messaging, reporting, compliance and multi-step workflows.',
    highlights: [
      { icon: 'user', title: 'My role', text: 'Full-stack developer across the Django backend, the FastAPI agent service and the React web client.' },
      { icon: 'mail', title: 'Agents', text: 'A Base Agent and an Orchestrator at the core, plus 8 domain agents for email, documents, finance, messaging, reporting, compliance, data quality and workflows.' },
      { icon: 'shield', title: 'The hard part', text: 'Reliable tool-calling: recovering malformed model output, passing data between tools, and task timeouts.' },
    ],
    tags: ['Django', 'FastAPI', 'React', 'Flutter', 'Groq', 'Claude', 'OAuth'],
    demo: 'https://super-agent-qwbi.onrender.com/',
    demoNote: 'Hosted on Render: the first load can take up to a minute while the server wakes up.',
    screenshot: null, // add '/img/super-agent.jpg' when ready
    diagram: 'superAgent',
    diagramLabel: 'architecture · super-agent',
    roster: [
      {
        tier: 'P0',
        name: 'Platform core',
        core: true,
        agents: [
          { name: 'Base Agent', area: 'Platform foundation' },
          { name: 'Orchestrator Agent', area: 'Coordination' },
        ],
      },
      {
        tier: 'P1',
        name: 'Domain agents',
        agents: [
          { name: 'Email Operations', area: 'Communication' },
          { name: 'Document Processing', area: 'Operations' },
          { name: 'Invoice & Expense', area: 'Finance' },
          { name: 'Communication', area: 'Messaging' },
          { name: 'Reporting', area: 'Analytics' },
          { name: 'Compliance', area: 'Risk & policy' },
          { name: 'Data Quality (QA)', area: 'Cross-cutting' },
          { name: 'Workflow Automation', area: 'Coordination' },
        ],
      },
    ],
  },
  {
    kind: 'Healthcare Platform',
    org: 'Krypsos',
    title: 'Aura Clinic Management System',
    desc: 'An operations platform for a high-end clinic: appointments, therapists and rooms, patients, inventory, billing, and an AI assistant for staff.',
    highlights: [
      { icon: 'calendar', title: 'Smart booking', text: 'Timezone-aware scheduling that detects overlaps across therapists, rooms, breaks and staff leave.' },
      { icon: 'card', title: 'Payments', text: 'Stripe PaymentIntents and Checkout Sessions in EUR.' },
      { icon: 'spark', title: 'AI assistant', text: 'An in-app assistant on Groq with retry logic and guardrails that stop it inventing data.' },
    ],
    tags: ['Django 5', 'DRF', 'PostgreSQL', 'JWT', 'Stripe', 'React', 'Render'],
    demo: 'https://aura-clinical-platform.netlify.app/',
    screenshot: '/img/aura.jpg',
    diagram: 'aura',
    diagramLabel: 'architecture · aura',
  },
]

export const aiPrinciples = [
  { title: 'Agents & orchestration', text: 'Specialised agents with clear tools, coordinated by an orchestrator that routes tasks and passes results between steps.' },
  { title: 'Reliability first', text: 'Retry logic, recovery from malformed tool calls and task timeouts, so an agent fails safely instead of silently.' },
  { title: 'Grounded answers', text: 'The model answers from real application data through tools, with guardrails that stop it inventing appointments, prices or records.' },
  { title: 'Real integrations', text: 'Gmail and Google Drive over OAuth, Stripe payments, and REST APIs, so agents can take real actions rather than only chat.' },
]

export const skills = [
  { group: 'Backend', items: ['Python', 'Django · DRF', 'FastAPI', 'Node.js', 'REST APIs · JWT'] },
  { group: 'Frontend & Mobile', items: ['React.js', 'Flutter', 'JavaScript (ES6+)', 'HTML5 · CSS3 · Tailwind', 'Responsive design'] },
  { group: 'AI & LLMs', items: ['Multi-agent systems', 'Tool / function calling', 'Anthropic Claude', 'Groq', 'Prompt design & guardrails'] },
  { group: 'Data & Deploy', items: ['PostgreSQL · MySQL', 'Stripe · OAuth', 'Netlify', 'Render', 'Git · GitHub Actions'] },
]

// Other projects, shown as cards under "More Projects".
// image: path under /public, or null to show a drawn placeholder
export const earlierWork = [
  {
    title: 'Smart Parking',
    kind: 'Parking management app',
    url: 'https://smart-parking-platform.netlify.app/',
    image: '/img/smart-parking.jpg',
    desc: 'QR-based parking: drivers scan a code to find and book a free slot, and staff check them out and send the bill in one tap, with a live floor map of free and taken slots.',
    tags: ['React 19', 'Vite', 'React Router', 'Django REST', 'Render'],
  },
  {
    title: 'Pets Cafe',
    kind: 'Cafe ordering & bookings',
    url: 'https://pet-cafe.netlify.app/',
    image: '/img/pets-cafe.jpg',
    desc: 'A cafe for pet lovers in Tuticorin: order from the table or for takeaway, book an hour with the dogs, cats, hamsters and love birds, with customer accounts and feedback.',
    tags: ['React 19', 'Vite', 'React Router', 'Django REST', 'Render'],
  },
  {
    title: 'Sri Electricals',
    kind: 'Business website',
    url: 'https://sri-electricals.netlify.app/',
    image: '/img/electricals.jpg',
    desc: 'A website for an electricals, hardware and plumbing shop in Thoothukudi: products, brands, industries served, reviews, quote requests, directions and WhatsApp chat.',
    tags: ['React', 'CSS3', 'Netlify'],
  },
  {
    title: 'Interiors',
    kind: 'Interior design',
    url: 'https://interiors1.netlify.app/',
    image: '/img/interiors.jpg',
    desc: 'An interior design studio site with room galleries, décor showcases and service highlights in a clean, responsive layout.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'Watches',
    kind: 'Luxury showcase',
    url: 'https://watches10.netlify.app/',
    image: '/img/watches.jpg',
    desc: 'A premium watch showcase with sections on craftsmanship and design, smooth scroll animations and a luxury feel.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
  },
]
