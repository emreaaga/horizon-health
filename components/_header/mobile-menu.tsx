"use client";

import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS } from "./nav";
import LanguageSelect from "./language-select";

import { TelegramIcon } from "../icons/telegram-icon";
import { WhatsAppIcon } from "../icons/whatsapp-icon";

type Props = {
	isOpen: boolean;
	isScrolled: boolean;
	onClose: () => void;
	onNavClick: (href: string) => void;
	onPrimaryCTA: () => void;
};

export default function MobileMenu({
	isOpen,
	isScrolled,
	onClose,
	onNavClick,
	onPrimaryCTA,
}: Props) {
	const panel = isScrolled
		? "bg-white"
		: "bg-white/10 backdrop-blur-md border border-white/20";

	const link = isScrolled
		? "text-gray-700 hover:text-medical-600 hover:bg-gray-50"
		: "text-white hover:text-yellow-300 hover:bg-white/10";

	const iconBtn = isScrolled
		? "bg-gray-100 text-gray-900 hover:bg-gray-200"
		: "bg-white/20 text-white border border-white/30 backdrop-blur-sm hover:bg-white hover:text-medical-600";

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: "auto" }}
					exit={{ opacity: 0, height: 0 }}
					className={`md:hidden rounded-lg shadow-lg mt-2 overflow-hidden transition-colors duration-300 ${panel}`}
				>
					<div className="py-3">
						<div className="px-4 pb-3 flex items-center justify-between gap-3">
							<LanguageSelect isScrolled={isScrolled} />

							<div className="flex items-center gap-2">
								<a
									target="_blank"
									rel="noreferrer"
									onClick={onClose}
									className={`inline-flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${iconBtn}`}
									aria-label="WhatsApp"
									title="WhatsApp"
								>
									<WhatsAppIcon className="h-5 w-5" />
								</a>

								<a
									target="_blank"
									rel="noreferrer"
									onClick={onClose}
									className={`inline-flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${iconBtn}`}
									aria-label="Telegram"
									title="Telegram"
								>
									<TelegramIcon className="h-5 w-5" />
								</a>
							</div>
						</div>

						{NAV_ITEMS.map((item) => (
							<a
								key={item.name}
								href={item.href}
								onClick={(e) => {
									e.preventDefault();
									onClose();
									onNavClick(item.href);
								}}
								className={`block px-4 py-2 transition-colors duration-300 ${link}`}
							>
								{item.name}
							</a>
						))}

						<div className="px-4 pt-3">
							<button
								type="button"
								onClick={() => {
									onClose();
									onPrimaryCTA();
								}}
								className={`w-full text-center px-6 py-2 font-semibold rounded-xl transition-all duration-300 ${
									isScrolled
										? "bg-medical-600 text-white hover:bg-medical-700"
										: "bg-yellow-300 text-gray-900 hover:bg-yellow-200"
								}`}
							>
								Ücretsiz Danışmanlık
							</button>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
