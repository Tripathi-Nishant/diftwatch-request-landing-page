// src/components/Audience.tsx
import { audience } from "../content";

export default function Audience() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">Who is this for?</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {audience.map((item, i) => (
          <div
            key={i}
            className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition text-center"
          >
            <p className="text-gray-800">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
