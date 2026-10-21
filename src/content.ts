// src/content.ts
export const headline = "Detect drift. Understand impact. Decide what comes next.";
export const supportingCopy =
  "DriftWatch is an intelligent ML monitoring and response platform designed to help teams detect data shifts, inspect model signals, and turn monitoring findings into actionable decisions.";
export const statusBadge = "v0.1.0 · Early Beta";

export const betaScope = {
  available: {
    title: "Available now — DriftWatch Beta 1",
    description:
      "Explore the functional DriftWatch dashboard, upload reference and current datasets, run drift analyses, review data-quality and model-performance metrics, inspect decision outputs, and access historical reports and retraining recommendations.",
    capabilities: [
      "Working web dashboard with authenticated workspaces",
      "Upload reference and current datasets (CSV or JSON)",
      "Run drift analysis with statistical divergence scoring",
      "Feature-level drift metrics (numeric, categorical & multi-modal)",
      "Data quality checks and missingness findings",
      "Model performance metrics (Accuracy, Precision, Recall, F1, ROC-AUC)",
      "Transparent decision-layer outputs (ACT / MONITOR / IGNORE)",
      "Historical monitoring runs, trend tracking & downloadable reports",
      "Human-in-the-loop retraining recommendations & audit log",
    ],
  },
  planned: {
    title: "Under development",
    description:
      "Advanced visualizations, configurable alert management, deeper historical analytics, and enhanced production-grade notification workflows.",
    features: [
      "Richer and more interactive visualizations",
      "Configurable alert management & threshold routing",
      "Deeper historical analytics across models & segments",
      "Production-grade notification workflows (Slack, PagerDuty, Webhooks)",
    ],
  },
};

export const testingSteps = [
  {
    step: "01",
    title: "Request access",
    description: "Submit the beta access form with your details to join the tester cohort.",
  },
  {
    step: "02",
    title: "Get onboarded",
    description: "Receive instructions and access credentials after your request is reviewed.",
  },
  {
    step: "03",
    title: "Run an analysis",
    description: "Log in to the dashboard, upload reference and current datasets, and execute drift analysis.",
  },
  {
    step: "04",
    title: "Review and share feedback",
    description: "Explore the available results, inspect decision rules, and help shape future releases.",
  },
];

export const galleryScreenshots = [
  {
    id: "overview",
    title: "Dashboard overview",
    caption: "Live workspace health, severity status, decision output, and historical monitoring trends.",
    image: "/images/dashboard-overview.png",
    alt: "DriftWatch Beta 1 dashboard overview with workspace health, status cards, and recent monitoring runs",
  },
  {
    id: "report",
    title: "Drift and data-quality findings",
    caption: "Full report view detailing drift rates, feature divergence charts, and transparent decision rule traces.",
    image: "/images/dashboard-report.png",
    alt: "DriftWatch Full Report with feature drift overview and decision rule trace",
  },
  {
    id: "features",
    title: "Feature-level metrics",
    caption: "Granular feature diagnostics showing statistical drift score, contributing factors, missingness, and drift status.",
    image: "/images/dashboard-features.png",
    alt: "Feature-level metrics table in DriftWatch Beta 1",
  },
  {
    id: "quality-perf",
    title: "Data quality & model performance",
    caption: "Data-quality findings, percentile outlier warnings, and classification performance diagnostics.",
    image: "/images/dashboard-quality-perf.png",
    alt: "Data quality findings and model performance scores in DriftWatch Beta 1",
  },
];

export const audience = [
  "ML engineers monitoring models in production pipelines",
  "Data scientists tracking distribution drift and data quality",
  "Start-ups and lean teams prototyping AI products",
  "Researchers studying model reliability and dataset shifts",
];

export const faq = [
  {
    q: "Is DriftWatch production-ready?",
    a: "No — this is v0.1.0 · Early Beta. A functional dashboard and statistical engine are available to explore, but advanced alert pipelines and interactive analytics are under active development.",
  },
  {
    q: "What does DriftWatch Beta 1 include right now?",
    a: "Beta 1 includes a working dashboard where you can log in, upload reference and current datasets, run drift analysis, review data-quality and model-performance metrics, inspect decision-layer recommendations, and access historical run reports.",
  },
  {
    q: "How does the decision layer work?",
    a: "Unlike tools that only output raw statistics, DriftWatch combines drift metrics, quality findings, and sample guards to generate transparent ACT, MONITOR, or IGNORE recommendations with complete rule traces.",
  },
  {
    q: "How do I get access to Beta 1?",
    a: "Submit the request access form below. Once reviewed, you will receive onboarding instructions and access details.",
  },
];
