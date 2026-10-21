// src/components/BetaScope.tsx
import { betaScope } from "../content";

export default function BetaScope() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">Beta Scope</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h3 className="text-2xl font-semibold mb-3 text-primary">Available now</h3>
          <ul className="list-disc list-inside space-y-2">
            {betaScope.available.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="text-2xl font-semibold mb-3 text-primary">Planned for future</h3>
          <ul className="list-disc list-inside space-y-2">
            {betaScope.planned.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
