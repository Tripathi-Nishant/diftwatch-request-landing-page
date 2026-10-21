// src/content.ts
export const tagline = "Detect drift. Understand impact. Make better decisions.";

export const betaScope = {
  available: [
    "Numerical and categorical drift detection with feature‑level results",
    "Simple Python/TS API that plugs into existing pipelines",
    "Realtime alerts via email (Resend) – beta"
  ],
  planned: [
    "Drift impact quantification on downstream business metrics",
    "Model versioning and automatic rollback",
    "Dashboard UI with historic drift trends"
  ]
};

export const audience = [
  "ML engineers building production pipelines",
  "Start‑ups prototyping AI products",
  "Researchers studying model reliability",
  "Students learning MLOps"
];

export const faq = [
  {
    q: "Is DriftWatch production‑ready?",
    a: "No – this is an early beta (v1). We encourage you to try it and provide feedback."
  },
  {
    q: "Which models does it support?",
    a: "Any model that produces predictions as numeric or categorical outputs – you provide the reference and live data."
  },
  {
    q: "How is drift measured?",
    a: "We compute statistical distance metrics (KS, chi‑square) per feature and aggregate them into a drift score."
  },
  {
    q: "Can I self‑host?",
    a: "Yes – the library is open‑source and can be installed in any environment. The dashboard runs as a lightweight FastAPI/Next.js app."
  }
];
