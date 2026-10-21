// src/app/page.tsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCards from "../components/FeatureCards";
import Steps from "../components/Steps";
import BetaScope from "../components/BetaScope";
import Audience from "../components/Audience";
import RequestContact from "../components/RequestContact";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="bg-background text-primary">
      <Navbar />
      <section className="pt-24" id="hero">
        <Hero />
      </section>
      <section className="py-16" id="features">
        <FeatureCards />
      </section>
      <section className="py-16 bg-gray-50" id="how-it-works">
        <Steps />
      </section>
      <section className="py-16" id="beta-scope">
        <BetaScope />
      </section>
      <section className="py-16 bg-gray-50" id="audience">
        <Audience />
      </section>
      <section className="py-16" id="get-started">
        <RequestContact />
      </section>
      <section className="py-16 bg-gray-50" id="faq">
        <FAQ />
      </section>
      <Footer />
    </main>
  );
}
