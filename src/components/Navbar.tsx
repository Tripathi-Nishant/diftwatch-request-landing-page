// src/components/Navbar.tsx
import Link from "next/link";
import { statusBadge } from "../content";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 text-2xl font-bold text-primary tracking-tight">
          <span>DriftWatch</span>
          <span className="text-xs font-semibold font-mono bg-primaryTint text-primary px-2 py-0.5 rounded-full border border-primary/20">
            {statusBadge}
          </span>
        </Link>
        <div className="space-x-6 hidden md:flex items-center text-sm font-medium text-textSecondary">
          <Link href="#dashboard-preview" className="hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link href="#features" className="hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="hover:text-primary transition-colors">
            How it works
          </Link>
          <Link href="#beta-scope" className="hover:text-primary transition-colors">
            Beta Scope
          </Link>
          <Link
            href="#get-started"
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition shadow-sm"
          >
            Request Access
          </Link>
        </div>
      </div>
    </nav>
  );
}
