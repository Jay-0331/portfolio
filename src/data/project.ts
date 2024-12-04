export const projects: project[] = [
	{
		name: 'CVE-GPT',
		type: 'Fullstack/DevOps',
		tech: ['Flask', 'Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Helm', 'Go'],
		github: 'https://github.com/csye7125-su24-team05',
		image: '/Images/cve-gpt.webp',
		description:
			'A pipeline scrapes CVE data from GitHub, processes it, and stores it in a database. The processed data trains an Ollama model for chat. The model is deployed as a REST API with Flask and Docker on AWS using Kubernetes and Helm',
	},
	{
		name: 'Redis in Go',
		type: 'Backend',
		tech: ['Go'],
		github: 'https://github.com/Jay-0331/go-redis',
		image: '/Images/redis.webp',
		description:
			'A simple Redis clone developed in Go, with support for GET, SET, DELETE, and EXPIRE commands',
	},
	{
		name: 'Go HTTP Framework',
		type: 'Backend',
		tech: ['Go'],
		github: 'https://github.com/Jay-0331/go-http',
		image: '/Images/httpgo.webp',
		description:
			'A simple HTTP framework developed in Go, with support for routing, middleware, and request/response handling',
	},
	{
		name: 'Breadit',
		type: 'Fullstack',
		tech: ['Next.js', 'PostgreSQL', 'TypeScript'],
		link: 'https://breadit.jayv.tech/',
		github: 'https://github.com/Jay-0331/Breadit',
		image: '/Images/project1.png',
		description:
			'A Reddit clone with a focus on simplicity and ease of use and Features include user authentication with OAuth 2.0, theme, voting on post, community, commenting, and posting',
	},
	{
		name: 'World Countries',
		type: 'Frontend',
		tech: ['Next.js', 'TailwindCSS'],
		link: 'https://rest-countries-alpha.vercel.app/',
		github: 'https://github.com/Jay-0331/rest-countries',
		image: '/Images/project2.png',
		description:
			'A web app that displays information about countries using the REST Countries API, a challenge from Frontend Mentor',
	},
	{
		name: 'Space Tourism',
		type: 'Frontend',
		tech: ['ReactJS', 'JavaScript'],
		link: 'https://space-tourism-lac.vercel.app/',
		github: 'https://github.com/Jay-0331/space-tourism',
		image: '/Images/project3.png',
		description:
			'A landing page developed for a fictional space tourism company with mobile-first design and animations using GSAP, a challenge from Frontend Mentor',
	},
	{
		name: 'Sunnyside Agency',
		type: 'Frontend',
		tech: ['ReactJS', 'JavaScript'],
		link: 'https://jay-0331.github.io/sunnyside-landing-page/',
		github: 'https://github.com/Jay-0331/sunnyside-landing-page',
		image: '/Images/project4.png',
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
