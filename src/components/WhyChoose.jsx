import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Personalized Learning",
    desc: "Tailored plans based on your goals and progress.",
  },
  {
    title: "Expert Mentorship",
    desc: "Mentors from top institutes with proven track records.",
  },
  {
    title: "Career Roadmap",
    desc: "Clear milestones and practice materials for your target exam.",
  },
];

export default function WhyChoose() {
  return (
    <section className="my-12 container mx-auto px-6">
      <h2
        className="text-3xl font-semibold mb-6 text-center "
        style={{ color: "var(--brand)" }}
      >
        Why Choose Us
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            className="card p-6"
          >
            <h3
              className="font-semibold text-lg"
              style={{ color: "var(--text)" }}
            >
              {it.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              {it.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
