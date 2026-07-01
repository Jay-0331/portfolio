export const experienceData: ExperienceType[] = [
  {
    title: 'Software Engineer',
    company: 'Dassault Systèmes',
    date: 'Jan 2025 - May 2026',
    description:
      "Reduced engineer triage time 50% by building a multi-agent AI over Elasticsearch logs for root cause analysis. Enabled A/B testing and instant rollbacks via a feature flag platform in TypeScript with MSSQL and Redis, eliminating redeploy cycles. Slashed deployments from 30 mins to under 1 min by building a deployment orchestrator in ASP.NET Core with automated rollbacks and a Next.js dashboard. Cut deploy time 80% and throughput to 100K docs/hr by decomposing a Python monolith into 5+ TypeScript microservices on Kubernetes. Trimmed debugging time 75% with OpenTelemetry traces and Elasticsearch for full-stack observability. Lowered project setup from 1 day to 15 mins with a reusable starter template with CI/CD, testing, and a CLI tool. Shrunk container images 75% by standardizing Alpine Linux and authoring Helm charts, eliminating config drift. Eliminated 70% of duplicated code across microservices by publishing an internal NPM package centralizing shared utilities with CI/CD.",
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
