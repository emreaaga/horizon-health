"use client";

import { motion } from "framer-motion";
import ServiceCard from "./service-card";
import type { ServiceItem } from "@/components/config/services";

type Props = {
	items: readonly ServiceItem[];
};

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.06, delayChildren: 0.05 },
	},
};

const item = {
	hidden: { opacity: 0, y: 12, scale: 0.98 },
	show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
};

export default function ServicesGrid({ items }: Props) {
	return (
		<motion.div
			variants={container}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
		>
			{items.map((s) => (
				<ServiceCard key={s.title} item={s} variants={item} />
			))}
		</motion.div>
	);
}
