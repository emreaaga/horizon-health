"use client";

import { motion } from "framer-motion";
import { NAV_ITEMS } from "./nav";

type Props = {
	isScrolled: boolean;
	onNavClick: (href: string) => void;
};

export default function DesktopNav({ isScrolled, onNavClick }: Props) {
	const linkBase = "font-medium transition-colors duration-200";
	const linkStyle = isScrolled
		? "text-gray-700 hover:text-gray-900"
		: "text-white/90 hover:text-white";

	return (
		<nav className="hidden lg:flex items-center gap-6">
			{NAV_ITEMS.map((item) => (
				<motion.a
					key={item.name}
					href={item.href}
					onClick={(e) => {
						e.preventDefault();
						onNavClick(item.href);
					}}
					whileHover={{ scale: 1.02 }}
					className={`${linkBase} ${linkStyle}`}
				>
					{item.name}
				</motion.a>
			))}
		</nav>
	);
}
