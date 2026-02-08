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
			transition={{ duration: 0.45, delay: 0.05 }}
			className="rounded-2xl bg-white border border-neutral-200 p-8 shadow-sm"
		>
			<h3 className="text-xl font-bold text-neutral-900">Neden Biz?</h3>

			<ul className="mt-5 space-y-3">
				{items.map((t) => (
					<li key={t} className="flex items-center gap-3 text-neutral-700">
						<Check className="h-5 w-5 text-neutral-700" />
						<span>{t}</span>
					</li>
				))}
			</ul>

			<div className="mt-6 text-sm text-neutral-500">
				Biz aracı değiliz. Süreci yöneten ve sorumluluk alan tarafız.
			</div>
		</motion.div>
	);
}
