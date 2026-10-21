// src/components/FeatureCards.tsx
import { betaScope } from "../content";

export default function FeatureCards() {
  const features = [
    "Detect numerical drift",
    "Detect categorical drift",
    "Feature‑level impact analysis",
    "Simple plug‑and‑play API",
  ];
  return (
    <div className="max-w-5xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feat, i) => (
        <div
          key={i}
          className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
        >
          <h3 className="text-xl font-medium mb-2 text-primary">{feat}</h3>
          <p className="text-gray-600 text-sm">{betaScope.available[0]}</p>
        </div>
      ))}
    </div>
  );
}
