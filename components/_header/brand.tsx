"use client";

import { motion } from "framer-motion";
import { Stethoscope } from "lucide-react";

type Props = {
	isScrolled: boolean;
	onClickTop: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default function Brand({ isScrolled, onClickTop }: Props) {
	return (
		<motion.a
			href="#top"
			onClick={onClickTop}
			whileHover={{ scale: 1.02 }}
			className="flex items-center space-x-2"
		>
			<div
				className={`p-2 rounded-lg transition-colors duration-300 ${
					isScrolled
						? "bg-neutral-800"
						: "bg-white/20 backdrop-blur-sm border border-white/30"
				}`}
			>
				<Stethoscope className="h-5 w-5 text-white" />
			</div>

			<span
				className={`text-base sm:text-lg lg:text-xl font-semibold tracking-tight transition-colors duration-300 ${
					isScrolled ? "text-neutral-900" : "text-white"
				}`}
			>
				Horizon Health
			</span>
		</motion.a>
	);
}
