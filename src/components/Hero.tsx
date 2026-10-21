// src/components/Hero.tsx
import { tagline } from "../content";

export default function Hero() {
  return (
    <div className="max-w-4xl mx-auto text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
        {tagline}
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        DriftWatch is an open‑source library that helps you surface data and model drift early, so you can act before predictions degrade.
      </p>
      <a
        href="#get-started"
        className="inline-block bg-primary text-white font-medium px-8 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition"
      >
        Request Beta Access
      </a>
    </div>
  );
}
