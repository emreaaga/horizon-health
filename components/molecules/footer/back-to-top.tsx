"use client";

import { motion } from "framer-motion";

export default function BackToTop() {
	return (
		<motion.button
			type="button"
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			whileHover={{ scale: 1.08 }}
			whileTap={{ scale: 0.95 }}
			className="fixed bottom-6 right-6 h-11 w-11 rounded-xl border border-white/10 bg-white/5 text-white shadow-lg backdrop-blur-sm
                 hover:bg-white/10 transition flex items-center justify-center z-50"
			aria-label="Back to top"
			title="Back to top"
		>
			<svg
				className="h-5 w-5"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M5 10l7-7m0 0l7 7m-7-7v18"
				/>
			</svg>
		</motion.button>
	);
}
