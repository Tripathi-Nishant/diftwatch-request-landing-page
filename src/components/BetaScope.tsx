// src/components/BetaScope.tsx
import { betaScope } from "../content";

export default function BetaScope() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-textPrimary tracking-tight mb-3">
          Beta Scope & Roadmap
        </h2>
        <p className="text-textSecondary">
          Clear distinction between the functional DriftWatch Beta 1 dashboard available today and advanced capabilities under development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Available now — DriftWatch Beta 1 */}
        <div className="bg-white border-2 border-emerald-500/40 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[11px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
            Available Now
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <h3 className="text-xl font-bold text-textPrimary">
                {betaScope.available.title}
              </h3>
            </div>
            <p className="text-sm text-textSecondary mb-6 leading-relaxed">
              {betaScope.available.description}
            </p>

            <div className="border-t border-gray-100 pt-5">
              <span className="text-xs font-semibold text-textSecondary uppercase tracking-wider block mb-3">
                Verified Capabilities:
              </span>
              <ul className="space-y-2.5">
                {betaScope.available.capabilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-textPrimary">
                    <svg
                      className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-100">
            <span className="inline-flex items-center text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
              ✓ Ready for user testing & feedback
            </span>
          </div>
        </div>

        {/* Under development */}
        <div className="bg-white border border-border rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between relative">
          <div className="absolute top-0 right-0 bg-gray-100 text-textSecondary text-[11px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
            Planned
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <h3 className="text-xl font-bold text-textPrimary">
                {betaScope.planned.title}
              </h3>
            </div>
            <p className="text-sm text-textSecondary mb-6 leading-relaxed">
              {betaScope.planned.description}
            </p>

            <div className="border-t border-gray-100 pt-5">
              <span className="text-xs font-semibold text-textSecondary uppercase tracking-wider block mb-3">
                Advanced Features in Progress:
              </span>
              <ul className="space-y-3">
                {betaScope.planned.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-textSecondary">
                    <svg
                      className="w-4 h-4 text-amber-500 mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-100">
            <span className="inline-flex items-center text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md">
              Targeted for subsequent beta updates
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
