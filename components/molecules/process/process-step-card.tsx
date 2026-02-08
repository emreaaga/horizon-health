"use client";

import { motion } from "framer-motion";
import type { ProcessStep } from "@/components/config/process";

type Props = {
	step: ProcessStep;
	index: number;
};

export default function ProcessStepCard({ step, index }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.45, delay: index * 0.05 }}
			className="group relative bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm hover:shadow-md transition"
		>
			<div className="flex items-center justify-between">
				<div className="text-neutral-700 font-extrabold text-sm tracking-wide">
					{step.n}
				</div>
				<div className="h-2 w-2 rounded-full bg-neutral-400 group-hover:bg-neutral-700 transition" />
			</div>

			<div className="mt-3 font-bold text-neutral-900 text-base">{step.t}</div>

			<div className="mt-1 text-sm text-neutral-600 leading-relaxed">
				{step.d}
			</div>

			<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-neutral-900/10 transition" />
		</motion.div>
	);
}
