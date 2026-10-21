// src/components/DashboardPreview.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { galleryScreenshots } from "../content";

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState(galleryScreenshots[0].id);
  const activeItem =
    galleryScreenshots.find((item) => item.id === activeTab) || galleryScreenshots[0];

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primaryTint text-primary border border-primary/20 mb-3 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Verified DriftWatch Beta 1 Interface</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary tracking-tight mb-3">
          Explore the DriftWatch dashboard
        </h2>
        <p className="text-base sm:text-lg text-textSecondary leading-relaxed">
          Beta 1 gives you a working environment to analyze data drift, review model signals, and explore decision recommendations.
        </p>
      </div>

      {/* Interactive Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 bg-gray-50/80 p-2 rounded-xl border border-border max-w-4xl mx-auto">
        {galleryScreenshots.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 flex items-center gap-1.5 ${
                isActive
                  ? "bg-primary text-white shadow-sm font-semibold"
                  : "bg-white text-textSecondary hover:text-textPrimary hover:bg-gray-100/70 border border-border/60"
              }`}
            >
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Polished Laptop/Browser Frame */}
      <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden transition-all">
        {/* Browser Top Navigation Bar */}
        <div className="bg-[#f0eff5] border-b border-border/80 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#f87171] inline-block border border-red-500/20"></span>
            <span className="w-3 h-3 rounded-full bg-[#fbbf24] inline-block border border-yellow-500/20"></span>
            <span className="w-3 h-3 rounded-full bg-[#34d399] inline-block border border-green-500/20"></span>
            <div className="ml-3 px-3 py-1 bg-white rounded-md text-xs font-mono text-gray-600 border border-border/50 hidden sm:flex items-center gap-1.5">
              <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>app.driftwatch.local/{activeItem.id}</span>
            </div>
          </div>
          <span className="text-[11px] font-semibold text-primary bg-primaryTint px-2.5 py-0.5 rounded-full border border-primary/20">
            {activeItem.category}
          </span>
        </div>

        {/* Crisp High-Res Image Container */}
        <div className="relative aspect-[16/9] w-full bg-[#f6f7fb] flex items-center justify-center overflow-hidden">
          <Image
            key={activeItem.id}
            src={activeItem.image}
            alt={activeItem.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Detailed Caption Footer */}
        <div className="bg-white border-t border-border px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-semibold text-textPrimary">
                {activeItem.title}
              </h4>
              <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                Live in v0.1.0
              </span>
            </div>
            <p className="text-xs text-textSecondary mt-0.5 leading-relaxed">
              {activeItem.caption}
            </p>
          </div>
          <span className="text-[11px] text-textSecondary font-mono bg-gray-50 border border-border px-3 py-1.5 rounded-md shrink-0 self-start sm:self-auto">
            Authentic product screenshot
          </span>
        </div>
      </div>
    </div>
  );
}
