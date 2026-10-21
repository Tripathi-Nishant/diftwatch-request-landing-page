// src/app/page.tsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DashboardPreview from "../components/DashboardPreview";
import FeatureCards from "../components/FeatureCards";
import Steps from "../components/Steps";
import BetaScope from "../components/BetaScope";
import Audience from "../components/Audience";
import RequestContact from "../components/RequestContact";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="bg-background text-textPrimary min-h-screen">
      <Navbar />

      {/* Hero section */}
      <section className="pt-32 pb-16" id="hero">
        <Hero />
      </section>

      {/* Authentic Dashboard Gallery */}
      <section className="py-16 bg-white border-y border-border" id="dashboard-preview">
        <DashboardPreview />
      </section>

      {/* Core Features */}
      <section className="py-20" id="features">
        <FeatureCards />
      </section>

      {/* 4-Step Testing Journey */}
      <section className="py-20 bg-gray-50 border-y border-border" id="how-it-works">
        <Steps />
      </section>

      {/* Beta Scope & Roadmap (Available Now vs Planned) */}
      <section className="py-20" id="beta-scope">
        <BetaScope />
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-gray-50 border-y border-border" id="audience">
        <Audience />
      </section>

      {/* Request Beta Access & Contact */}
      <section className="py-20" id="get-started">
        <RequestContact />
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 border-t border-border" id="faq">
        <FAQ />
      </section>

      <Footer />
    </main>
  );
}
