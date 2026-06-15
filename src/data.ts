import { Project, Service, ExperienceItem, Testimonial, SkillCategory } from './types';

export const projectsData: Project[] = [
  {
    id: 'ai-lead-generation',
    title: 'AI Lead Generation System',
    category: 'AI Workflows',
    description: 'An autonomous multi-agent pipeline that scraps high-intent leads, enrichment data, categorizes potential clients, and drafts ultra-personalized sequences.',
    tech: ['Python', 'n8n', 'Zapier', 'OpenAI API', 'Airtable'],
    results: [
      '340% increase in cold email reply rates',
      'Saved 25+ hours weekly in manual sourcing',
      'Generated $45k in qualified pipeline within 30 days'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/Priyanshu-31-2005/2302031800071'
  },
  {
    id: 'automated-content-engine',
    title: 'Automated Content Engine',
    category: 'AI Systems',
    description: 'An AI-powered content creation, optimization, and syndication suite that listens to podcast feeds and automatically posts structured articles and micro-content to social channels.',
    tech: ['Next.js', 'Node.js', 'Gemini Pro', 'Make.com', 'Buffer API'],
    results: [
      'Published 40+ high-quality social posts daily',
      'Increased organic reach by 180%',
      'Eliminated manual copy editor team costs entirely'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/Priyanshu-31-2005/2302031800071'
  },
  {
    id: 'customer-support-agent',
    title: 'Customer Support AI Agent',
    category: 'AI Chatbots',
    description: 'An enterprise-grade retrieval-augmented generation (RAG) assistant connected to internal databases and Notion workspaces to solve 80% of level 1 customer inquiries.',
    tech: ['React', 'Python', 'FastAPI', 'LangChain', 'Pinecone', 'OpenAI'],
    results: [
      '82% of support tickets resolved autonomously',
      'Average response time reduced to 1.4 seconds',
      '94% customer satisfaction rating'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/Priyanshu-31-2005/2302031800071'
  },
  {
    id: 'inventory-dashboard',
    title: 'Inventory Management Dashboard',
    category: 'Full-Stack SaaS',
    description: 'A responsive full-stack platform integrated with active supplier APIs to provide real-time stock notifications, demand forecast reports, and auto-purchase orders.',
    tech: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'PostgreSQL'],
    results: [
      'Reduced stockouts by 45%',
      'Automated reorders of 1,200 unique SKUs',
      'Real-time CSV/Excel report generation under 100ms'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/Priyanshu-31-2005/2302031800071'
  }
];

export const servicesData: Service[] = [
  {
    id: 'service-ai-solutions',
    title: 'AI Automation Solutions',
    description: 'Automate repetitive business tasks using production-ready AI workflows. I design and integrate intelligent pipelines that replace hours of manual clicks.',
    details: ['n8n & Make custom workflow creation', 'Airtable database architecture & scripting', 'API orchestration of stateful tasks', 'Automated email & CRM data pipeline designs'],
    iconName: 'Cpu'
  },
  {
    id: 'service-custom-software',
    title: 'Custom Software Development',
    description: 'Build tailored web applications and robust digital tools. Designed with clean modular code, optimized for lightning-fast load times and beautiful design alignment.',
    details: ['React & Next.js custom full-stack solutions', 'Tailwind CSS custom high-end interfaces', 'Node.js/Express robust backend controllers', 'Database setup and custom data normalization'],
    iconName: 'Code'
  },
  {
    id: 'service-chatbots',
    title: 'AI Chatbots & Agents',
    description: 'Create highly intelligent assistants for customer support and business operations, complete with contextual memory and RAG semantic databases.',
    details: ['Retrieval Augmented Generation (RAG) models', 'Custom OpenAI or Gemini assistant integration', 'Interactive Slack/Discord/WhatsApp agent feeds', 'Complex logic handling with deterministic fallbacks'],
    iconName: 'MessageSquareText'
  },
  {
    id: 'service-process-opt',
    title: 'Business Process Optimization',
    description: 'Improve business efficiency through automated systems and comprehensive audits. I systematically map your manual workflow gaps and build custom bridges.',
    details: ['Comprehensive business operations auditing', 'CRM & ERP integration & data cleanup', 'Legacy tool migration to modern SaaS structures', 'Internal training and thorough documentation handovers'],
    iconName: 'TrendingUp'
  },
  {
    id: 'service-saas',
    title: 'SaaS Product Development',
    description: 'Build scalable software products from initial idea to live production launch. From wireframing to database scaling, handling full UX and technical architecture.',
    details: ['Product scoping and high-fidelity mockups', 'Multi-tenant database schema configurations', 'Stripe payment gateways & billing cycle systems', 'Cloud container deployment setup (Cloud Run, Vercel)'],
    iconName: 'Layers'
  }
];

export const skillsData: SkillCategory[] = [
  {
    id: 'skill-ai',
    name: 'AI Automation',
    skills: [
      { name: 'Make.com', level: 'Midden', icon: 'zap' },
      { name: 'Zapier', level: 'Basic', icon: 'zap' },
      { name: 'n8n', level: 'Midden', icon: 'network' },
      { name: 'OpenAI APIs', level: 'Midden', icon: 'brain-circuit' },
      { name: 'AI Agents', level: 'Midden', icon: 'bot' }
    ]
  },
  {
    id: 'skill-dev',
    name: 'Development',
    skills: [
      { name: 'Python', level: 'Expert', icon: 'terminal' },
      { name: 'C++', level: 'Advanced', icon: 'code' },
      { name: 'Databases (PostgreSQL/SQL)', level: 'Advanced', icon: 'database' }
    ]
  },
  {
    id: 'skill-web',
    name: 'Web Technologies',
    skills: [
      { name: 'React', level: 'Midden', icon: 'atom' },
      { name: 'Next.js', level: 'Midden', icon: 'nextjs' },
      { name: 'Tailwind CSS', level: 'Basic', icon: 'palette' },
      { name: 'Node.js', level: 'Midden', icon: 'server' }
    ]
  },
  {
    id: 'skill-biz',
    name: 'Business Tools',
    skills: [
      { name: 'Notion', level: 'Basic', icon: 'file-text' },
      { name: 'Git & GitHub', level: 'Midden', icon: 'git-branch' }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-5',
    role: 'Bachelor of Technology in Computer Science',
    company: 'Silver Oak University',
    duration: '2023 - 2027',
    type: 'education',
    description: 'Focused on algorithms, computational problem-solving, database engineering, and modular object-oriented programming in C++ and Python. Graduated with honors.',
    tags: ['Computer Science', 'Foundational Mathematics', 'Software Architecture']
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'VP of Operations',
    company: 'Stellar Logistics Inc.',
    review: 'Priyanshu delivered an AI workflow that felt like magic. Before, we paid a support clerk 20 hours a week to map incoming supplier PDFs into our shipping CRM. Priyanshu built an AI automation in n8n that reads the PDF, normalizes the tracking codes, parses the orders, and updates our team instant-alert chat. Faultless precision.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    role: 'Technical Founder',
    company: 'EchoMedia SaaS',
    review: 'Working with Priyanshu on our dashboard was a stellar experience. He possesses both clean, crisp frontend design sensibilities and deep database knowledge. His React code is completely modular and built with precise attention to negative space. Strongly recommended for high-tier SaaS building.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Managing Director',
    company: 'Apex Property Group',
    review: 'Priyansh us AI lead generation engine completely changed our business development cycle. We are seeing a 3x uptick in qualified bookings, cold calling is down to zero, and the automation handles all initial follow-ups. A master engineer of workflows.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  }
];

export const statsData = [
  { value: 6, suffix: '+', label: 'Projects Completed' },
  { value: 300, suffix: '+', label: 'Hours Saved' },
  { value: 2, suffix: '+', label: 'Automation Systems Built' },
  { value: 85, suffix: '%', label: 'Client Satisfaction' }
];
