"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import DesktopNav from "../molecules/header/desktop-nav";
import LanguageSelect from "../molecules/header/language-select";
import ActionIcons from "../molecules/header/action-icons";
import MobileMenu from "../molecules/header/mobile-menu";
import BrandLogo from "@/components/icons/brand-logo";

import { useConsultationDialog } from "@/components/providers/consultation-dialog-provider";
import {
	HeaderMenuProvider,
	useHeaderMenu,
} from "@/components/providers/header-menu-provider";

function HeaderInner() {
	const [isScrolled, setIsScrolled] = useState(false);

	const { open: openConsultDialog } = useConsultationDialog();
	const { isOpen, toggle, close } = useHeaderMenu();

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const openConsult = () => {
		openConsultDialog();
		close();
	};

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-neutral-100/85 backdrop-blur-md border-b border-neutral-200 shadow-sm"
					: "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-14 lg:h-16">
					<BrandLogo
						isScrolled={isScrolled}
						onClickTop={() => {
							window.scrollTo({ top: 0, behavior: "smooth" });
							close();
						}}
					/>

					<DesktopNav isScrolled={isScrolled} />

					<div className="hidden md:flex items-center gap-2">
						<LanguageSelect isScrolled={isScrolled} />
						<ActionIcons isScrolled={isScrolled} />

						<motion.button
							type="button"
							onClick={openConsult}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className={`inline-flex items-center px-3 py-2 text-sm font-semibold rounded-xl transition-colors duration-200 ${
								isScrolled
									? "bg-gray-900 text-white hover:bg-gray-800"
									: "bg-white/15 text-white border border-white/25 backdrop-blur-sm hover:bg-gray-100 hover:text-gray-900 hover:border-gray-200"
							}`}
						>
							Ücretsiz Danışmanlık
						</motion.button>
					</div>

					<button
						type="button"
						onClick={toggle}
						className={`md:hidden p-2 rounded-xl transition-colors duration-200 ${
							isScrolled
								? "hover:bg-gray-200 text-gray-900"
								: "bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-sm"
						}`}
						aria-label="Menu"
					>
						{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</button>
				</div>

				<MobileMenu isScrolled={isScrolled} />
			</div>
		</motion.header>
	);
}

export default function Header() {
	return (
		<HeaderMenuProvider>
			<HeaderInner />
		</HeaderMenuProvider>
	);
}
