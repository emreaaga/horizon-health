"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Props = {
	onPrimaryCTA: () => void;
};

export default function HeroActions({ onPrimaryCTA }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.45 }}
			className="flex flex-col sm:flex-row gap-3 justify-center items-center"
		>
			<motion.button
				type="button"
				whileHover={{ scale: 1.03 }}
				whileTap={{ scale: 0.97 }}
				onClick={onPrimaryCTA}
				className="group inline-flex h-10 items-center gap-2 rounded-xl bg-white text-gray-900 px-4 text-sm font-semibold hover:bg-gray-100 transition-colors"
			>
				Ücretsiz Danışmanlık Al
				<ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
			</motion.button>
		</motion.div>
	);
}
