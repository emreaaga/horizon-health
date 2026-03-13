"use client";

import type { ProcessStep } from "@/components/config/process";
import { motion } from "framer-motion";
import ProcessStepCard from "./process-step-card";

type Props = {
  steps: readonly ProcessStep[];
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function ProcessStepsGrid({ steps }: Props) {
  return (
    <div className="relative mt-16 md:mt-24">
      <div className="absolute left-[10%] right-[10%] top-6 hidden h-[2px] bg-neutral-100 md:block" />

      <div className="absolute bottom-6 left-[1.4rem] top-6 w-[2px] bg-neutral-100 md:hidden" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-4"
      >
        {steps.map((s, i) => (
          <ProcessStepCard key={s.n} step={s} />
        ))}
      </motion.div>
    </div>
  );
}
