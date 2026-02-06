"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import DesktopNav from "./_header/desktop-nav";
import LanguageSelect from "./_header/language-select";
import ActionIcons from "./_header/action-icons";
import MobileMenu from "./_header/mobile-menu";
import BrandLogo from "./icons/brand-logo";
import ConsultationDialog from "./dialogs/consultation";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isConsultOpen, setIsConsultOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToId = (id: string) => {
		const el = document.querySelector(id);
		if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	const openConsult = () => {
		setIsConsultOpen(true);
		setIsMenuOpen(false);
	};

	return (
		<>
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
							onClickTop={(e) => {
								e.preventDefault();
								window.scrollTo({ top: 0, behavior: "smooth" });
								setIsMenuOpen(false);
							}}
						/>

						<DesktopNav isScrolled={isScrolled} onNavClick={scrollToId} />

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
							onClick={() => setIsMenuOpen((s) => !s)}
							className={`md:hidden p-2 rounded-xl transition-colors duration-200 ${
								isScrolled
									? "hover:bg-gray-200 text-gray-900"
									: "bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-sm"
							}`}
							aria-label="Menu"
						>
							{isMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>

					<MobileMenu
						isOpen={isMenuOpen}
						isScrolled={isScrolled}
						onClose={() => setIsMenuOpen(false)}
						onNavClick={scrollToId}
						onPrimaryCTA={openConsult}
					/>
				</div>
			</motion.header>

			<ConsultationDialog
				open={isConsultOpen}
				onClose={() => setIsConsultOpen(false)}
			/>
		</>
	);
}
