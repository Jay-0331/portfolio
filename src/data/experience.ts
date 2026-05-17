export const experienceData: ExperienceType[] = [
  {
    title: 'Software Engineer',
    company: 'Dassault Systèmes',
    date: 'Jan 2026 - May 2026',
    description:
      'Engineered a feature flag platform in TypeScript with MSSQL and Redis, enabling A/B testing, gradual rollouts, and instant rollbacks without redeploys. Drove design and delivery of a multi-agent AI over Elasticsearch crash logs, shortening engineer triage time by 50% through automated root cause reports and feature usage analytics.',
  },
  {
    title: 'Software Engineer',
    company: 'Dassault Systèmes',
    date: 'Jan 2025 - Aug 2025',
    description:
      'Led decomposition of a Python monolith into 5+ TypeScript microservices on Kubernetes, dropping deployment time 80% and lifting throughput to 100K docs/hour. Proposed and architected centralized logging with Fluent Bit and Elasticsearch, achieving full service visibility and a 75% reduction in debugging time. Standardized Docker images on Alpine Linux for all microservices and authored Helm charts for Kubernetes deploys, shrinking image size by 75% and eliminating release-config drift.',
  },
  {
    title: 'Software Engineer',
    company: 'Infosys Limited',
    date: 'Jun 2021 - Jul 2023',
    description:
      "Developed the React front-end for Macy's in-store order app, accelerating checkout workflows by 20% for cashiers across retail locations. Delivered a Jenkins CI/CD pipeline for the Java order backend, automating build and deploy stages to shorten release cycles by 20% and remove manual ops overhead. Authored Bash tooling to rotate logs and renew SSL certificates across the Java order services, cutting manual ops effort by 50% and preventing disk-fill incidents on production nodes. Designed Java REST APIs that aggregated in-store order data for Macy's reporting dashboards, serving 10K+ daily requests from inventory and sales analytics teams.",
  },
]

export type ExperienceType = {
  title: string
  company: string
  date: string
  description: string
}
