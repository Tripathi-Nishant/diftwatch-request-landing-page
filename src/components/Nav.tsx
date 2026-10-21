// src/components/Nav.tsx
import Link from "next/link";
import { useState } from "react";

const sections = [
  { id: "how-it-works", label: "How it works" },
  { id: "beta-scope", label: "Beta scope" },
  { id: "who", label: "Who it's for" },
  { id: "request", label: "Request access" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-background border-b border-border backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link href="#" className="text-2xl font-display text-primary">
          DriftWatch <span className="ml-2 text-sm font-sans font-medium bg-primaryTint text-primary rounded-full px-2 py-0.5">Beta 1</span>
        </Link>
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          {sections.map((s) => (
            <Link key={s.id} href={`#${s.id}`} className="text-textSecondary hover:text-textPrimary transition-colors">
              {s.label}
            </Link>
          ))}
          <a href="#request" className="ml-4 inline-block bg-primary text-white rounded-full px-4 py-2 hover:bg-primary/90 transition">
            Request Beta Access
          </a>
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden text-textSecondary focus-visible:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background pb-4">
          <ul className="flex flex-col space-y-2 px-4 pt-2">
            {sections.map((s) => (
              <li key={s.id}>
                <Link href={`#${s.id}`} className="block py-2 text-textSecondary hover:text-textPrimary" onClick={() => setMobileOpen(false)}>
                  {s.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="#request" className="block w-full text-center bg-primary text-white rounded-full px-4 py-2 hover:bg-primary/90" onClick={() => setMobileOpen(false)}>
                Request Beta Access
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
