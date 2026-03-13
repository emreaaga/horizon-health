"use client";

import type { WhyProcessItem } from "@/components/config/why";
import { motion } from "framer-motion";

type Props = {
  items: readonly WhyProcessItem[];
};

export default function ProcessCard({ items }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="relative flex flex-col rounded-3xl bg-white p-8 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.05)] ring-1 ring-neutral-200/50"
    >
      <h3 className="text-2xl font-extrabold tracking-tight text-neutral-900">
        Süreç Nasıl İşliyor?
      </h3>
      <p className="mt-2 text-sm text-neutral-500">
        Adım adım tedavi yolculuğunuz.
      </p>

      <div className="relative mt-8 space-y-8">
        {/* Вертикальная линия, соединяющая шаги */}
        <div className="absolute bottom-2 left-[1.125rem] top-2 w-px bg-neutral-100" />

        {items.map((item, index) => (
          <div key={item.title} className="relative flex gap-5">
            {/* Иконка / Номер шага */}
            <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm ring-4 ring-white">
              <item.icon
                className="h-4 w-4 text-neutral-700"
                strokeWidth={2.5}
              />
            </div>

            <div className="pt-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  Adım {index + 1}
                </span>
              </div>
              <h4 className="mt-1 font-bold leading-none text-neutral-900">
                {item.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
