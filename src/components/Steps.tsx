// src/components/Steps.tsx
import { testingSteps } from "../content";

export default function Steps() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-textPrimary tracking-tight mb-3">
          How Beta Testing Works
        </h2>
        <p className="text-textSecondary">
          A straightforward four-step process from access request to running drift analyses on your models.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testingSteps.map((s, i) => (
          <div
            key={i}
            className="bg-white border border-border rounded-xl p-6 shadow-sm hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-primary bg-primaryTint px-2.5 py-1 rounded-md">
                  Step {s.step}
                </span>
                <span className="text-xl font-bold text-gray-300 font-mono">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-textPrimary mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-textSecondary leading-relaxed">
                {s.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs text-textSecondary font-medium">
              {i === 0 && "Takes ~1 minute"}
              {i === 1 && "Personalized invite"}
              {i === 2 && "Interactive dashboard"}
              {i === 3 && "Direct developer access"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
