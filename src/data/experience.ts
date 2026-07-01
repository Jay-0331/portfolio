export const experienceData: ExperienceType[] = [
  {
    title: 'Software Engineer',
    company: 'Dassault Systèmes',
    date: 'Jan 2025 - May 2026',
    description: [
      'Reduced engineer triage time 50% by building a sequential multi-agent AI pipeline in LangGraph with an Elasticsearch MCP server to auto-generate root cause reports',
      'Enabled A/B testing and instant rollbacks via a feature flag platform in TypeScript with MSSQL and Redis, eliminating redeploy cycles',
      'Slashed deployment time 96% by building a deployment orchestrator in ASP.NET Core with automated rollbacks and a Next.js dashboard',
      'Boosted throughput to 4M+ Elasticsearch docs/hr from SolidWorks session/crash logs by decomposing a Python monolith into a 5+ service ETL pipeline in TypeScript on Kubernetes',
      'Trimmed debugging time 75% with OpenTelemetry traces and Elasticsearch for full-stack observability',
      'Cut project setup time 97% with a reusable starter template with CI/CD, testing, and a CLI tool',
      'Shrunk container images 75% and cut startup time 80% by standardizing Alpine Linux and authoring Helm charts, eliminating config drift',
      'Eliminated 70% of duplicated code across microservices by publishing an internal NPM package centralizing shared utilities with CI/CD',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Infosys Limited',
    date: 'Jun 2021 - Jul 2023',
    description: [
      'Led migration of on-prem services to cloud-native GCP, containerizing with Docker and cutting infra provisioning from days to minutes via Terraform',
      "Accelerated cashier checkout speed by 20% by developing the React frontend for Macy's in-store order management app across retail locations",
      'Shortened release cycles 20% delivering a Jenkins CI/CD pipeline for the Java order backend',
      'Saved 50% of manual ops effort by authoring Bash tooling to automate log rotation and SSL cert renewal, preventing disk-fill incidents',
      "Served 10K+ daily requests from analytics teams by designing Java REST APIs aggregating in-store order data for Macy's reporting dashboards",
    ],
  },
]

export type ExperienceType = {
  title: string
  company: string
  date: string
  description: string[]
}
