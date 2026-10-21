// src/components/Steps.tsx
export default function Steps() {
  const steps = [
    { title: "Install", description: "Add DriftWatch to your project with a single pip install (or npm) command." },
    { title: "Instrument", description: "Wrap your model inference calls with the provided monitor utilities." },
    { title: "Monitor", description: "Dashboard alerts you when drift exceeds thresholds, with impact analysis per feature." },
    { title: "Iterate", description: "Use the insights to retrain or adjust your model before performance drops." },
  ];
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">How Beta Testing Works</h2>
      <ol className="space-y-6">
        {steps.map((s, i) => (
          <li key={i} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full">
              {i + 1}
            </div>
            <div>
              <h3 className="text-xl font-medium text-primary">{s.title}</h3>
              <p className="text-gray-600">{s.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
