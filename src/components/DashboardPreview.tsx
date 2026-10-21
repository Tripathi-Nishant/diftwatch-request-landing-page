// src/components/DashboardPreview.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { galleryScreenshots } from "../content";

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState(galleryScreenshots[0].id);
  const activeItem = galleryScreenshots.find((item) => item.id === activeTab) || galleryScreenshots[0];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primaryTint text-primary border border-primary/20 mb-3">
          <span>Actual Product UI</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary tracking-tight mb-3">
          Explore the DriftWatch dashboard
        </h2>
        <p className="text-lg text-textSecondary leading-relaxed">
          Beta 1 gives you a working environment to analyze data drift, review model signals, and explore decision recommendations.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 border-b border-border pb-3">
        {galleryScreenshots.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                isActive
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white text-textSecondary hover:text-textPrimary hover:bg-gray-100 border border-transparent"
              }`}
            >
              {item.title}
            </button>
          );
        })}
      </div>

      {/* Screen Frame */}
      <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden">
        {/* Mock Window Header */}
        <div className="bg-gray-50 border-b border-border px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
            <span className="text-xs text-textSecondary font-mono ml-2 hidden sm:inline-block">
              DriftWatch Beta 1 · Authenticated Workspace
            </span>
          </div>
          <span className="text-xs font-semibold text-primary bg-primaryTint px-2 py-0.5 rounded">
            Live v0.1.0 Screen
          </span>
        </div>

        {/* Screenshot Image */}
        <div className="relative aspect-[16/9] w-full bg-gray-900 flex items-center justify-center overflow-hidden">
          <Image
            src={activeItem.image}
            alt={activeItem.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Caption */}
        <div className="bg-gray-50/80 border-t border-border px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h4 className="text-sm font-semibold text-textPrimary">
              {activeItem.title}
            </h4>
            <p className="text-xs text-textSecondary mt-0.5">
              {activeItem.caption}
            </p>
          </div>
          <span className="text-[11px] text-textSecondary font-mono bg-white border border-border px-2.5 py-1 rounded shrink-0">
            Real screenshot from DriftWatch v0.1.0
          </span>
        </div>
      </div>
    </div>
  );
}
