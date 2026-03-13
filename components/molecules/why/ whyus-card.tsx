"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

type Props = {
  items: readonly string[];
};

export default function WhyUsCard({ items }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="relative flex flex-col justify-between rounded-3xl bg-white p-8 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.05)] ring-1 ring-neutral-200/50"
    >
      <div>
        <h3 className="text-2xl font-extrabold tracking-tight text-neutral-900">
          Neden Biz?
        </h3>
        <p className="mt-2 text-sm text-neutral-500">
          Farkımızı yaratan temel prensiplerimiz.
        </p>

        <ul className="mt-8 space-y-3">
          {items.map((t) => (
            <li
              key={t}
              className="group flex items-start gap-3 rounded-2xl border border-transparent p-3 transition-colors hover:border-neutral-100 hover:bg-neutral-50/50"
            >
              <div className="mt-0.5 flex shrink-0 items-center justify-center rounded-full bg-emerald-100/80 p-1">
                <Check
                  className="h-3.5 w-3.5 text-emerald-600"
                  strokeWidth={3}
                />
              </div>
              <span className="text-sm font-medium leading-relaxed text-neutral-700">
                {t}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 rounded-2xl bg-gray-50/50 border border-gray-100 p-5 text-center transition-all hover:bg-gray-50">
        <p className="text-sm font-medium leading-relaxed text-gray-900">
          <span className="text-gray-700 font-bold">Biz aracı değiliz.</span>{" "}
          Süreci yöneten ve sorumluluk alan tarafız.
        </p>
      </div>
    </motion.div>
  );
}
