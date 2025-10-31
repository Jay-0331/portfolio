export const experienceData: ExperienceType[] = [
  {
    title: 'Software Engineer (Intern)',
    company: 'Dassault Systèmes',
    date: 'Jan 2025 - Aug 2025',
    description:
      'Decomposed legacy Python monolithic application into 5+ TypeScript based microservices, enabling independent scaling and reducing deployment time from 20 minutes to 4 minutes. Architected centralized logging system from ground up using Fluent Bit and Elasticsearch, achieving 100% log visibility across all microservices and reducing debugging time by 75%. Optimized Docker infrastructure by migrating from Ubuntu to Alpine Linux, achieving 75% reduction in container sizes and significantly improving deployment efficiency. Developed NPM package with automated CI/CD pipeline, centralizing common service utilities and reducing code duplication by 70% across microservices.',
  },
  {
    title: 'Software Engineer',
    company: "Infosys Limited [B2B, Macy's]",
    date: 'Jun 2021 - Jul 2023',
    description:
      'Architected and deployed a user-friendly interface using React.js/JavaScript for internal team, resulting in a 5% increase in productivity metrics. Collaborated with cross-functional teams to gather feedback and iterate on the interface design, resulting in a 85% satisfaction rate among internal users. Utilized automation tools to streamline and optimize the Jenkins pipeline for a Java/Springboot application, reducing deployment time by 20% and increasing overall efficiency. Developed automated Bash scripts to update certificates in Java/Springboot systems, reducing manual effort by 50% and ensuring system security compliance. Researched and optimized Java application configurations, resulting in a 15% decrease in system downtime and a 10% increase in application performance metrics.',
  },
]

export type ExperienceType = {
  title: string
  company: string
  date: string
  description: string
}
