"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
	href: string;
	ariaLabel: string;
	title: string;
	children: ReactNode;
};

export default function FooterIconButton({
	href,
	ariaLabel,
	title,
	children,
}: Props) {
	const base =
		"inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/15";

	return (
		<motion.a
			href={href}
			target="_blank"
			rel="noreferrer"
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			className={base}
			aria-label={ariaLabel}
			title={title}
		>
			{children}
		</motion.a>
	);
}
