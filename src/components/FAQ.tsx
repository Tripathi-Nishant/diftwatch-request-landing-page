"use client";
import { faq } from "../content";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">Frequently Asked Questions</h2>
      <dl className="space-y-4">
        {faq.map((item, i) => (
          <div key={i} className="border rounded-lg">
            <dt>
              <button
                className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none"
                aria-expanded={openIndex === i}
                onClick={() => toggle(i)}
              >
                <span className="font-medium text-primary">{item.q}</span>
                <span>{openIndex === i ? "−" : "+"}</span>
              </button>
            </dt>
            {openIndex === i && (
              <dd className="px-4 py-2 text-gray-700 bg-gray-50">{item.a}</dd>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
}
