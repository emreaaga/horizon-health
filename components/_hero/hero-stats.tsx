"use client";

import { motion } from "framer-motion";
import { HERO_STATS } from "./stats";

export default function HeroStats() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.6 }}
			className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
		>
			{HERO_STATS.map((stat) => (
				<motion.div
					key={stat.value}
					whileHover={{ scale: 1.02 }}
					className="text-center"
				>
					<stat.icon className="h-6 w-6 mx-auto mb-2 text-white/80" />
					<div className="text-base font-semibold text-white">{stat.value}</div>
				</motion.div>
			))}
		</motion.div>
	);
}
