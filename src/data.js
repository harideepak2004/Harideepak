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
  photo: '/img/profile.jpg',
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
  { n: '9+', label: 'Live projects' },
  { n: '5', label: 'Full-stack platforms' },
  { n: '30+', label: 'Technologies' },
  { n: '2', label: 'LLM providers' },
]

export const experience = [
  {
    when: 'Present',
    current: true,
    org: 'Krypsos',
    role: 'Software Developer · Full Stack & AI',
    points: [
      'Building Super Agent, a multi-agent AI platform: a dozen agents on a Django core and FastAPI agent service, with a React web app, an Agent Builder, a Business Hub with CRM, and human-in-the-loop approvals.',
      'Built a Telegram bot for staff chat and daily nudges, and AI replies to customers on Telegram and WhatsApp that wait for approval before sending.',
      'Built the backend for Aura, a clinic management system (bookings, patients, inventory, Stripe payments in EUR and an AI assistant), and am turning it into a multi-tenant SaaS with Stripe subscriptions.',
      'Integrated Gmail (OAuth), Google Drive, WhatsApp, Telegram, Slack and Stripe, and made LLM tool-calling reliable with grounding checks, retries, output recovery and timeouts.',
      'Built a Digital Marketing Agent with a React dashboard that creates the company\'s daily posts and website explainer videos with AI voice-over for LinkedIn, Instagram and Facebook, with approval before anything is posted.',
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

// icon: one of 'user' | 'mail' | 'shield' | 'lock' | 'calendar' | 'card' | 'spark'
// agent status (optional): e.g. 'In progress' shows a small tag on the agent card
// diagram: one of 'superAgent' | 'aura' | 'marketing'
// screenshot: path under /public (optional). When set, the card shows
//             Screenshot / Architecture tabs.
export const caseStudies = [
  {
    kind: 'AI Platform',
    org: 'Krypsos',
    title: 'Super Agent Platform',
    desc: 'Your AI workforce, orchestrated. A dozen specialised agents handle real business work across email, messaging, documents, finance, CRM, reporting, compliance and multi-step workflows. Staff chat with it on the web or Telegram, and risky actions wait for human approval.',
    highlights: [
      { icon: 'user', title: 'My role', text: 'Full-stack developer across the Django / DRF backend, the FastAPI agent service and the React web app that covers every module of the platform.' },
      { icon: 'spark', title: 'Default Assistant & Agent Builder', text: 'A built-in assistant chats with users, explains every agent, recommends the right one and hires it from chat. Admins can create new agents by describing them, previewing and confirming.' },
      { icon: 'mail', title: 'Real integrations', text: 'Agents work in Gmail (OAuth) and Google Drive and message customers on WhatsApp, Telegram and Slack. Staff get a private Telegram chat with the bot and a daily nudge at a time they choose.' },
      { icon: 'card', title: 'Business Hub & CRM', text: 'Uploaded business data feeds a live dashboard. The CRM tracks deals and follow-ups and logs every customer touch automatically, from agent messages to Gmail inbox and sent mail.' },
      { icon: 'lock', title: 'Approvals & team roles', text: 'Admin, Manager and Member roles with approval policies per agent (for example, Finance needs an Admin). One-off emails, messages and AI replies to customers wait for approval; saved workflows run on their own.' },
      { icon: 'shield', title: 'Grounded, reliable agents', text: 'A grounding check stops an agent from reporting a send or action it never made, plus recovery from malformed tool calls, retries and task timeouts on Anthropic Claude and Groq.' },
    ],
    tags: ['Django', 'DRF', 'FastAPI', 'React', 'Claude', 'Groq', 'OAuth', 'Telegram Bot API'],
    demo: 'https://super-agent-platform.netlify.app/',
    screenshot: '/img/super-agent.jpg',
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
          { name: 'Default Assistant', area: 'Chat · recommends & hires agents' },
        ],
      },
      {
        tier: 'P1',
        name: 'Domain agents',
        agents: [
          { name: 'Email Operations', area: 'Gmail' },
          { name: 'Document Processing', area: 'Google Drive' },
          { name: 'Invoice & Expense', area: 'Finance' },
          { name: 'Communication', area: 'WhatsApp · Telegram · Slack' },
          { name: 'CRM', area: 'Deals · follow-ups · activity' },
          { name: 'Reporting', area: 'Analytics' },
          { name: 'Compliance', area: 'Risk & policy' },
          { name: 'Data Quality (QA)', area: 'Cross-cutting' },
          { name: 'Workflow Automation', area: 'Saved workflows' },
          { name: 'Calendar', area: 'Scheduling' },
        ],
      },
      {
        tier: 'P2',
        name: 'Roadmap',
        agents: [
          { name: 'Browser Agent', area: 'Acts on websites', status: 'In progress' },
        ],
      },
    ],
  },
  {
    kind: 'Healthcare Platform',
    org: 'Krypsos',
    title: 'Aura Clinic Management System',
    desc: 'An operations platform for high-end clinics: appointments, therapists and rooms, patients, inventory, billing, and an AI assistant for staff. Now becoming a multi-tenant SaaS, where many clinics run on one platform with their data kept fully separate.',
    highlights: [
      { icon: 'calendar', title: 'Smart booking', text: 'Timezone-aware scheduling that detects overlaps across therapists, rooms, breaks and staff leave.' },
      { icon: 'card', title: 'Payments & subscriptions', text: 'Stripe PaymentIntents and Checkout Sessions in EUR for clinic billing, plus Stripe subscriptions for the SaaS: a Starter plan, with new clinics starting on a free trial without a card.' },
      { icon: 'lock', title: 'Multi-tenant SaaS', text: 'Each clinic gets its own isolated space on a shared backend, and the Aura Console lets the platform Super Admin manage every clinic.' },
      { icon: 'spark', title: 'AI assistant', text: 'An in-app assistant on Groq with retry logic and guardrails that stop it inventing data.' },
    ],
    tags: ['Django 5', 'DRF', 'PostgreSQL', 'JWT', 'Stripe', 'Multi-tenant SaaS', 'React'],
    demo: 'https://aura-clinical-platform.netlify.app/',
    screenshot: '/img/aura.jpg',
    diagram: 'aura',
    diagramLabel: 'architecture · aura',
  },
  {
    kind: 'AI Marketing Agent',
    org: 'Krypsos',
    title: 'Digital Marketing Agent',
    desc: 'An AI agent that runs the company\'s social media. It plans the week, creates posts and explainer videos, and publishes them on schedule, with a person approving everything before it goes out.',
    highlights: [
      { icon: 'user', title: 'My role', text: 'Built it end to end: the content engine, the React + TypeScript dashboard, scheduling, approvals and publishing.' },
      { icon: 'spark', title: 'Content from anything', text: 'Creates posts from any website link, events, festivals and market trends in the company\'s own style without repeating designs, plus explainer videos with AI voice-over rendered on a separate video PC.' },
      { icon: 'calendar', title: 'Weekly plan & schedule', text: 'A weekly calendar of post and video days. One automatic post a day at a set time, extra posts with Generate now, and a pause switch for holidays and busy weeks.' },
      { icon: 'lock', title: 'Review before publishing', text: 'A content queue with statuses from Needs review to Published, a quality score on every item, and nothing goes live until it is approved.' },
    ],
    tags: ['React', 'TypeScript', 'Tailwind', 'Supabase', 'Claude Haiku', 'Render'],
    demo: 'https://social-media-agent-y7yv.onrender.com/',
    screenshot: '/img/marketing-agent.jpg',
    diagram: 'marketing',
    diagramLabel: 'architecture · marketing-agent',
  },
]

export const aiPrinciples = [
  { title: 'Agents & orchestration', text: 'Specialised agents with clear tools, coordinated by an orchestrator that routes tasks and passes results between steps, with a default assistant that picks the right agent for each request.' },
  { title: 'Reliability first', text: 'Retry logic, recovery from malformed tool calls and task timeouts, so an agent fails safely instead of silently.' },
  { title: 'Grounded answers', text: 'The model answers from real application data through tools, with guardrails that stop it inventing appointments, prices or records.' },
  { title: 'Human in the loop', text: 'Agents connect to Gmail, Drive, WhatsApp, Telegram, Slack and Stripe to take real actions, and anything risky waits for a person to approve it first.' },
]

export const skills = [
  { group: 'Backend', items: ['Python', 'Django · DRF', 'FastAPI', 'Node.js', 'REST APIs · JWT', 'Webhooks · background jobs'] },
  { group: 'Frontend & Mobile', items: ['React.js · React Router', 'Vite', 'Flutter', 'Android (voice assistant)', 'JavaScript · TypeScript', 'HTML5 · CSS3 · Tailwind'] },
  { group: 'AI & LLMs', items: ['Multi-agent systems', 'Tool / function calling', 'Anthropic Claude · Groq', 'Tavily web search', 'Voice in / voice out', 'Prompt design & guardrails'] },
  { group: 'Integrations & Deploy', items: ['PostgreSQL · MySQL · Supabase', 'Stripe · OAuth 2.0', 'Gmail · Google Drive APIs', 'Telegram · WhatsApp · Slack', 'Netlify · Render', 'Git · GitHub Actions'] },
]

// Other projects, shown as cards under "More Projects".
// image: path under /public, or null to show a drawn placeholder
export const earlierWork = [
  {
    title: 'Buddy',
    kind: 'AI voice assistant · Android',
    url: null, // private project, no public link
    note: 'Private project · for my own phone',
    image: null,
    mock: 'voice',
    desc: 'A personal voice assistant for my Android phone that talks in English, Tamil and Thanglish. It makes calls, sends messages and files, opens apps, sets reminders and notes, drafts emails and searches the web with cited sources. A hybrid brain handles simple commands on-device and sends complex ones to a cloud LLM.',
    tags: ['Python', 'Groq', 'Tavily', 'Android', 'GitHub Actions'],
  },
  {
    title: 'Dealership Management',
    kind: 'Automotive dealer platform · Demo',
    url: 'https://dealership-management-01.netlify.app/',
    image: '/img/dealership.jpg',
    desc: 'A management platform for a Porsche dealer: leads, customers, test drives, quotations, bookings, inventory, payments, deliveries and service job cards, with a live dashboard of sales and lead sources. Django REST backend in progress.',
    tags: ['React', 'Django REST', 'Netlify'],
  },
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
