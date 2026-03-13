"use client";

import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS } from "@/components/config/nav";
import LanguageSelect from "./language-select";
import { TelegramIcon } from "@/components/icons/telegram-icon";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

import { useHeaderMenu } from "@/components/providers/header-menu-provider";
import { useConsultationDialog } from "@/components/providers/consultation-dialog-provider";
import { CONTACT } from "@/components/config/contact";
import { scrollToHash } from "@/lib/scrolls";

type Props = {
	isScrolled: boolean;
};

export default function MobileMenu({ isScrolled }: Props) {
	const { isOpen, close } = useHeaderMenu();
	const { open: openConsult } = useConsultationDialog();

	const panel = isScrolled
		? "bg-white border border-gray-200"
		: "bg-white/10 backdrop-blur-md border border-white/20";

	const link = isScrolled
		? "text-gray-800 hover:bg-gray-50 hover:text-black"
		: "text-white/90 hover:bg-white/10 hover:text-white";

	const iconBtn = isScrolled
		? "bg-gray-100 text-gray-900 hover:bg-gray-200"
		: "bg-white/15 text-white border border-white/25 hover:bg-white/25";

	const cta = isScrolled
		? "bg-black text-white hover:bg-gray-900"
		: "bg-white text-black hover:bg-gray-100";

	const divider = isScrolled ? "border-gray-200" : "border-white/15";

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, height: 0, overflow: "hidden" }}
					animate={{ opacity: 1, height: "auto", overflow: "visible" }}
					exit={{ opacity: 0, height: 0, overflow: "hidden" }}
					className={`md:hidden rounded-xl shadow-lg mt-2 transition-colors duration-300 ${panel}`}
				>
					<div className="py-3">
						<div className="px-4 pb-3 flex items-center justify-between gap-3">
							<LanguageSelect isScrolled={isScrolled} />

							<div className="flex items-center gap-2">
								<a
									href={CONTACT.whatsappHref}
									target="_blank"
									rel="noreferrer"
									onClick={() => close()}
									className={`inline-flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${iconBtn}`}
									aria-label="WhatsApp"
									title="WhatsApp"
								>
									<WhatsAppIcon className="h-5 w-5" />
								</a>

								<a
									href={CONTACT.telegramHref}
									target="_blank"
									rel="noreferrer"
									onClick={() => close()}
									className={`inline-flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${iconBtn}`}
									aria-label="Telegram"
									title="Telegram"
								>
									<TelegramIcon className="h-5 w-5" />
								</a>
							</div>
						</div>

						<div className={`mx-4 mb-2 border-t ${divider}`} />

						{NAV_ITEMS.map((item) => (
							<a
								key={item.name}
								href={item.href}
								onClick={(e) => {
									e.preventDefault();

									close();

									// ВАЖНО: скроллим в следующий кадр после close()
									requestAnimationFrame(() => {
										if (item.href.startsWith("#")) {
											scrollToHash(item.href, {
												offset: 80, // под fixed header (подстрой если надо)
												retries: 80, // на случай dynamic секций
											});
										} else {
											window.location.href = item.href;
										}
									});
								}}
								className={`block px-4 py-2.5 text-[15px] transition-colors duration-200 ${link}`}
							>
								{item.name}
							</a>
						))}

						<div className={`mx-4 mt-2 border-t ${divider}`} />

						<div className="px-4 pt-3">
							<button
								type="button"
								onClick={() => {
									close();
									requestAnimationFrame(() => openConsult());
								}}
								className={`w-full text-center px-6 py-2.5 font-semibold rounded-xl transition-colors duration-200 ${cta}`}
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
