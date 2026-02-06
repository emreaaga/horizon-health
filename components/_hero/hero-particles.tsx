"use client";

import { motion } from "framer-motion";

export default function HeroParticles() {
	const particles = Array.from({ length: 18 }, (_, i) => ({
		id: i,
		left: (i * 53) % 100,
		top: (i * 37) % 100,
		duration: 3 + i * 0.15,
		delay: i * 0.08,
	}));

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{particles.map((p) => (
				<motion.div
					key={p.id}
					className="absolute w-2 h-2 rounded-full bg-neutral-300/20"
					animate={{
						x: [0, 90, 0],
						y: [0, -90, 0],
						opacity: [0, 1, 0],
					}}
					transition={{
						duration: p.duration,
						repeat: Infinity,
						delay: p.delay,
						ease: "easeInOut",
					}}
					style={{
						left: `${p.left}%`,
						top: `${p.top}%`,
					}}
				/>
			))}
		</div>
	);
}
