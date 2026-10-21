// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white bg-opacity-80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="#" className="text-2xl font-semibold text-primary">
          DriftWatch
        </Link>
        <div className="space-x-6 hidden md:block">
          <Link href="#features" className="hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="hover:text-primary transition-colors">
            How it works
          </Link>
          <Link href="#beta-scope" className="hover:text-primary transition-colors">
            Beta Scope
          </Link>
          <Link href="#get-started" className="hover:text-primary transition-colors">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
