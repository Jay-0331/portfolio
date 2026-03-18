export const projects: project[] = [
  {
    name: 'CVE-GPT',
    type: 'Fullstack/DevOps',
    tech: ['Go', 'Python', 'Kubernetes', 'AWS', 'Kafka', 'PostgreSQL', 'Flask'],
    github: 'https://github.com/csye7125-su24-team05',
    image: '/Images/cve-gpt.webp',
    description:
      'Engineered a cloud-native CVE processing system on AWS EKS using Go, Kafka, PostgreSQL, and custom Kubernetes Operators. Integrated Hugging Face Transformers, Pinecone Vector DB, and LLaMA3 to deliver context-aware CVE query responses via a Flask API.',
  },
  {
    name: 'Breadit',
    type: 'Fullstack',
    tech: ['Next.js', 'PostgreSQL', 'TypeScript', 'Redis'],
    link: 'https://breadit.jayv.tech/',
    github: 'https://github.com/Jay-0331/Breadit',
    image: '/Images/breadit.png',
    description:
      'High-performance Reddit clone built with Next.js SSR and TypeScript, reducing load times by 50% and increasing user engagement by 30%. Implemented Redis caching for 10x faster page loads and 80% fewer API calls.',
  },
  {
    name: 'Financial Advisor AI',
    type: 'Fullstack',
    tech: ['Python', 'LangChain', 'LangGraph', 'FastAPI', 'Spring Boot', 'React', 'PostgreSQL'],
    image: '/Images/financial-advisor-ai.png',
    description:
      'Architected a multi-agent RAG pipeline using LangChain and LangGraph with intelligent query routing, delivering grounded responses with source citations via a Flask API. Built a Python microservice with FastAPI for LLM orchestration, integrated with a Spring Boot API gateway and a React dashboard.',
  },
  {
    name: 'GO-Redis',
    type: 'Backend',
    tech: ['Go', 'Redis', 'RESP'],
    github: 'https://github.com/Jay-0331/go-redis',
    image: '/Images/go-redis.png',
    description:
      'Built a Redis server from scratch in Go with concurrent client connections, stream operations, leader-follower replication, RDB persistence, and a custom RESP protocol parser with blocking read support.',
  },
  {
    name: 'GO-HTTP',
    type: 'Backend',
    tech: ['Go', 'HTTP'],
    github: 'https://github.com/Jay-0331/go-http',
    image: '/Images/go-http.png',
    description:
      'Developed a multithreaded HTTP server in Go supporting GET, POST, static file serving, gzip compression, chunked transfer encoding, and custom routing — built from scratch with low-level HTTP/1.1 protocol parsing.',
  },
  {
    name: 'World Countries',
    type: 'Frontend',
    tech: ['Next.js', 'TailwindCSS'],
    link: 'https://rest-countries-alpha.vercel.app/',
    github: 'https://github.com/Jay-0331/rest-countries',
    image: '/Images/countries.png',
    description:
      'A web app that displays information about countries using the REST Countries API, a challenge from Frontend Mentor',
  },
  {
    name: 'Space Tourism',
    type: 'Frontend',
    tech: ['ReactJS', 'JavaScript'],
    link: 'https://space-tourism-lac.vercel.app/',
    github: 'https://github.com/Jay-0331/space-tourism',
    image: '/Images/space.png',
    description:
      'A landing page developed for a fictional space tourism company with mobile-first design and animations using GSAP, a challenge from Frontend Mentor',
  },
  {
    name: 'Sunnyside Agency',
    type: 'Frontend',
    tech: ['ReactJS', 'JavaScript'],
    link: 'https://jay-0331.github.io/sunnyside-landing-page/',
    github: 'https://github.com/Jay-0331/sunnyside-landing-page',
    image: '/Images/sunnyside.png',
    description:
      'A landing page developed for a fictional design agency with mobile-first design, a challenge from Frontend Mentor',
  },
]

export type project = {
  name: string
  type: string
  tech: string[]
  link?: string
  github?: string
  image: string
  description: string
}
