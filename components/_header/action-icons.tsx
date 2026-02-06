"use client";

import { motion } from "framer-motion";
import { TelegramIcon } from "../icons/telegram-icon";
import { WhatsAppIcon } from "../icons/whatsapp-icon";

type Props = {
	isScrolled: boolean;
};

export default function ActionIcons({ isScrolled }: Props) {
	const base =
		"inline-flex items-center justify-center w-8 h-8 rounded-xl transition-colors duration-200";

	const style = isScrolled
		? "bg-gray-100 text-gray-900 hover:bg-gray-200 hover:text-gray-900"
		: "bg-white/15 text-white border border-white/25 backdrop-blur-sm hover:bg-gray-100 hover:text-gray-900 hover:border-gray-200";

	return (
		<div className="hidden md:flex items-center gap-2">
			<motion.a
				target="_blank"
				rel="noreferrer"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className={`${base} ${style}`}
				aria-label="WhatsApp"
				title="WhatsApp"
			>
				<WhatsAppIcon className="h-5 w-5" />
			</motion.a>

			<motion.a
				target="_blank"
				rel="noreferrer"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className={`${base} ${style}`}
				aria-label="Telegram"
				title="Telegram"
			>
				<TelegramIcon className="h-5 w-5" />
			</motion.a>
		</div>
	);
}
