// src/components/ProductPreview.tsx
import Image from "next/image";

export default function ProductPreview() {
  return (
    <section id="product-preview" className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-display text-3xl text-textPrimary mb-6 text-center">
          Illustrative preview with sample data
        </h2>
        <div className="bg-white border border-border rounded-2xl shadow-card p-6 max-w-2xl mx-auto">
          {/* Simple mock table of feature status */}
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="font-medium text-textPrimary">Numerical drift</span>
              <span className="bg-primaryTint text-primary text-xs font-medium px-2 py-0.5 rounded-full">
                Detected
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span className="font-medium text-textPrimary">Categorical drift</span>
              <span className="bg-primaryTint text-primary text-xs font-medium px-2 py-0.5 rounded-full">
                Detected
              </span>
            </li>
            <li className="flex justify-center">
              <div className="w-48 h-32 bg-secondaryAccent opacity-30 rounded-md" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
