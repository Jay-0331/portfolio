export const experienceData: ExperienceType[] = [
  {
    title: 'Software Engineering Intern',
    company: 'Dassault Systèmes',
    date: 'Jan 2025 - Aug 2025',
    description:
      'Decomposed legacy Python monolithic application into 5+ TypeScript microservices, enabling independent scaling, reducing deployment time by 80%, and increasing throughput to 100K documents/hour. Proposed and architected centralized logging system using Fluent Bit and Elasticsearch, achieving 100% log visibility across all microservices and reducing debugging time by 75%. Optimized Docker infrastructure by migrating from Ubuntu to Alpine Linux, achieving 75% reduction in container sizes and improving deployment efficiency. Developed NPM package with automated CI/CD pipeline, centralizing common service utilities and reducing code duplication by 70% across microservices.',
  },
  {
    title: 'Software Engineer',
    company: 'Infosys Limited',
    date: 'Jun 2021 - Jul 2023',
    description:
      "Developed the React.js/JavaScript front-end for Macy's in-store order application used by cashiers across retail locations, improving checkout workflow efficiency by 5% with an 85% user satisfaction rate. Delivered the Jenkins CI/CD pipeline for the order system's Java/Spring Boot backend, automating build and deploy stages to cut release cycles by 20%. Authored Bash tooling to rotate logs, archive transaction data, and renew SSL certificates across the Java/Spring Boot order services, reducing manual effort by 50%. Designed internal Java/Spring Boot REST APIs that aggregated in-store order data for Macy's reporting dashboards, handling 10K+ daily requests from regional inventory and sales analytics teams.",
  },
]

export type ExperienceType = {
  title: string
  company: string
  date: string
  description: string
}
