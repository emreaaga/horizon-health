"use client";

import type { ProcessStep } from "@/components/config/process";
import { motion } from "framer-motion";

type Props = {
  step: ProcessStep;
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProcessStepCard({ step }: Props) {
  return (
    <motion.div
      variants={item}
      className="group relative flex flex-row items-start gap-5 md:flex-col md:items-center md:gap-6"
    >
      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-neutral-200 bg-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-gray-500 group-hover:shadow-indigo-100">
        <span className="text-lg font-bold text-neutral-400 transition-colors duration-300 group-hover:text-gray-600">
          {step.n}
        </span>
      </div>

      <div className="flex-1 pt-1.5 md:pt-0 md:text-center">
        <h4 className="text-base font-extrabold leading-tight text-neutral-900">
          {step.t}
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-neutral-500">
          {step.d}
        </p>
      </div>
    </motion.div>
  );
}
