// src/components/Hero.tsx
import { headline, supportingCopy, statusBadge } from "../content";

export default function Hero() {
  return (
    <div className="max-w-4xl mx-auto text-center px-4">
      {/* Visible status badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primaryTint text-primary border border-primary/20 mb-6">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>{statusBadge}</span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-600 to-primary">
        {headline}
      </h1>

      <p className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto mb-10 leading-relaxed">
        {supportingCopy}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#get-started"
          className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-white font-medium px-8 py-3.5 rounded-lg shadow-md hover:bg-primary/90 hover:shadow-lg transition-all"
        >
          Request Beta Access
        </a>
        <a
          href="#dashboard-preview"
          className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-textPrimary font-medium px-6 py-3.5 rounded-lg border border-border hover:bg-gray-50 transition"
        >
          Explore Dashboard
        </a>
      </div>
    </div>
  );
}
