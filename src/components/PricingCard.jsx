import React, { useState } from "react";

const plans = [
  {
    id: 1,
    name: "Free Plan",
    price: "₹0",
    front: ["Basic Papers", "Limited Access", "Community Support"],
    back: ["Inclusive: PDFs", "Mentor forum"],
  },
  {
    id: 2,
    name: "Premium Plan",
    price: "₹499",
    front: ["Full Access", "1-on-1 Mentorship", "All PDFs"],
    back: ["Inclusive: Mock Tests", "Exclusive Mentor"],
  },
  {
    id: 3,
    name: "Elite Plan",
    price: "₹999",
    front: ["All Premium Features", "Dedicated Mentor", "Priority Support"],
    back: ["Inclusive: Live Sessions", "Career Roadmap"],
  },
];

export default function PricingSection() {
  const [flipped, setFlipped] = useState(null);

  return (
    <section className="my-16 container mx-auto px-6">
      <h2
        className="text-3xl font-semibold text-center mb-10 text-center"
        style={{ color: "var(--brand)" }}
      >
        Our Plans
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {plans.map((p, i) => {
          const isFlipped = flipped === i;
          return (
            <div
              key={p.id}
              className={`flip-card ${isFlipped ? "flipped" : ""}`}
              onClick={() => setFlipped(isFlipped ? null : i)}
              role="button"
              tabIndex={0}
              aria-pressed={isFlipped}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  setFlipped(isFlipped ? null : i);
              }}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front card flex flex-col justify-center items-center p-6">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <div className="text-2xl text-blue-600 mt-2">{p.price}</div>
                  <ul className="mt-4 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    {p.front.map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                  <div className="mt-6 text-sm text-slate-400">
                    Tap for details
                  </div>
                </div>

                <div
                  className="flip-card-back flex flex-col justify-center items-center"
                  style={{
                    background:
                      "linear-gradient(135deg,var(--brand),var(--brand-deep))",
                  }}
                >
                  <h4 className="font-semibold text-white mb-2">
                    {p.name} — Details
                  </h4>
                  <ul className="text-white/90 text-sm mb-4">
                    {p.back.map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                  <button
                    className="px-4 py-2 bg-white text-blue-700 rounded-md font-semibold"
                    onClick={(e) => {
                      e.stopPropagation();
                      alert("Payment flow will be integrated later");
                    }}
                  >
                    Buy Now
                  </button>
                  <button
                    className="mt-3 text-white/80 underline"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFlipped(null);
                    }}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
