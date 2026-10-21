"use client";
import { useState } from "react";

function BetaForm() {
  const [form, setForm] = useState({ name: "", email: "", organization: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setStatus("Please fill in required fields.");
      return;
    }
    try {
      const res = await fetch("/api/beta-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("✅ Request submitted! We'll get back soon.");
      else setStatus("❌ Something went wrong.");
    } catch (err) {
      setStatus("❌ Network error.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        className="w-full px-4 py-2 border rounded"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email address"
        required
        className="w-full px-4 py-2 border rounded"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="organization"
        placeholder="Organization (optional)"
        className="w-full px-4 py-2 border rounded"
        value={form.organization}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90 transition"
      >
        Request Beta Access
      </button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </form>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("All fields are required.");
      return;
    }
    try {
      const res = await fetch("/api/contact-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("✅ Message sent!");
      else setStatus("❌ Failed to send.");
    } catch (err) {
      setStatus("❌ Network error.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        className="w-full px-4 py-2 border rounded"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email address"
        required
        className="w-full px-4 py-2 border rounded"
        value={form.email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Your message"
        required
        className="w-full px-4 py-2 border rounded h-32"
        value={form.message}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90 transition"
      >
        Send Message
      </button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </form>
  );
}

export default function RequestContact() {
  const [tab, setTab] = useState<'beta' | 'contact'>('beta');
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="flex justify-center mb-6 space-x-4">
        <button
          className={`px-4 py-2 rounded ${tab === 'beta' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          onClick={() => setTab('beta')}
        >
          Request Beta
        </button>
        <button
          className={`px-4 py-2 rounded ${tab === 'contact' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          onClick={() => setTab('contact')}
        >
          Contact Team
        </button>
      </div>
      {tab === 'beta' ? <BetaForm /> : <ContactForm />}
    </div>
  );
}
