"use client";

import type { ProcessStep } from "@/components/config/process";
import ProcessStepCard from "./process-step-card";

type Props = {
	steps: readonly ProcessStep[];
};

export default function ProcessStepsGrid({ steps }: Props) {
	return (
		<div className="relative mt-14">
			<div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent" />

			<div className="grid grid-cols-1 md:grid-cols-5 gap-6">
				{steps.map((s, i) => (
					<ProcessStepCard key={s.n} step={s} index={i} />
				))}
			</div>
		</div>
	);
}
