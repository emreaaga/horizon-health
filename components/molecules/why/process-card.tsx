"use client";

import { motion } from "framer-motion";
import type { WhyProcessItem } from "@/components/config/why";

type Props = {
	items: readonly WhyProcessItem[];
};

export default function ProcessCard({ items }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 14 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.45 }}
			className="rounded-2xl bg-white border border-neutral-200 p-8 shadow-sm"
		>
			<h3 className="text-xl font-bold text-neutral-900">
				Süreç Nasıl İşliyor?
			</h3>

			<div className="mt-5 space-y-4">
				{items.map((item) => (
					<div key={item.title} className="flex gap-4">
						<div className="h-10 w-10 rounded-lg bg-neutral-900/5 flex items-center justify-center text-neutral-700 border border-neutral-200">
							<item.icon className="h-5 w-5" />
						</div>
						<div>
							<div className="font-semibold text-neutral-900 text-sm">
								{item.title}
							</div>
							<div className="text-sm text-neutral-600">{item.desc}</div>
						</div>
					</div>
				))}
			</div>
		</motion.div>
	);
}
