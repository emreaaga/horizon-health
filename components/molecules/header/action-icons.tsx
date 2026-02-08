"use client";

import { motion } from "framer-motion";
import { TelegramIcon } from "../../icons/telegram-icon";
import { WhatsAppIcon } from "../../icons/whatsapp-icon";
import {
	HEADER_ICON_BASE,
	headerIconVariant,
} from "../../atoms/header/icon-classes";

type Props = {
	isScrolled: boolean;
};

export default function ActionIcons({ isScrolled }: Props) {
	const style = headerIconVariant(isScrolled);

	return (
		<div className="hidden md:flex items-center gap-2">
			<motion.a
				target="_blank"
				rel="noreferrer"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className={`${HEADER_ICON_BASE} ${style}`}
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
				className={`${HEADER_ICON_BASE} ${style}`}
				aria-label="Telegram"
				title="Telegram"
			>
				<TelegramIcon className="h-5 w-5" />
			</motion.a>
		</div>
	);
}
