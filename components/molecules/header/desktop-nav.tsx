"use client";

import { motion } from "framer-motion";
import { NAV_ITEMS } from "@/components/config/nav";

type Props = {
	isScrolled: boolean;
};

export default function DesktopNav({ isScrolled }: Props) {
	const linkBase = "font-medium transition-colors duration-200";
	const linkStyle = isScrolled
		? "text-gray-700 hover:text-gray-900"
		: "text-white/90 hover:text-white";

	const handleNavClick = (href: string) => {
		if (href.startsWith("#")) {
			const el = document.querySelector(href);
			if (el) {
				el.scrollIntoView({ behavior: "smooth", block: "start" });
				return;
			}
			window.location.hash = href;
			return;
		}

		window.location.href = href;
	};

	return (
		<nav className="hidden lg:flex items-center gap-6">
			{NAV_ITEMS.map((item) => (
				<motion.a
					key={item.name}
					href={item.href}
					onClick={(e) => {
						e.preventDefault();
						handleNavClick(item.href);
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
