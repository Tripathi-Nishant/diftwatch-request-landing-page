// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
      <p>© {new Date().getFullYear()} DriftWatch. Open‑source project. <a href="https://github.com/Tripathi-Nishant/DRIFT-WATCH" className="underline hover:text-primary">GitHub</a></p>
    </footer>
  );
}
