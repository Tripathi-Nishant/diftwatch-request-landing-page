// src/components/FeatureCards.tsx
export default function FeatureCards() {
  const capabilities = [
    {
      title: "Data & Concept Drift",
      description: "Detect numerical and categorical shifts across tabular features using statistical divergence scoring (PSI, KS, Chi-Square).",
      tag: "Statistical Engine",
    },
    {
      title: "Data Quality Findings",
      description: "Surface null explosions, outlier spikes, schema mismatches, and distribution anomalies automatically.",
      tag: "Quality Guard",
    },
    {
      title: "Model Performance Tracking",
      description: "Compare predictions and ground truth labels to track accuracy, precision, recall, F1, and residual diagnostics.",
      tag: "Model Metrics",
    },
    {
      title: "Transparent Decision Layer",
      description: "Produce clear ACT, MONITOR, or IGNORE recommendations backed by auditable decision rule traces and confidence metrics.",
      tag: "Decision Layer",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-textPrimary tracking-tight mb-3">
          Core Monitoring Capabilities
        </h2>
        <p className="text-textSecondary">
          DriftWatch delivers statistical rigor and actionable decision guidance directly out of the box in Beta 1.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((feat, i) => (
          <div
            key={i}
            className="p-6 bg-white border border-border rounded-xl shadow-sm hover:border-primary/40 hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-semibold text-primary bg-primaryTint px-2 py-0.5 rounded-md uppercase tracking-wider inline-block mb-3">
                {feat.tag}
              </span>
              <h3 className="text-lg font-semibold mb-2 text-textPrimary">{feat.title}</h3>
              <p className="text-textSecondary text-sm leading-relaxed">{feat.description}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 text-xs font-medium text-emerald-600 flex items-center gap-1.5">
              <span>●</span> Implemented in v0.1.0
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
