"use client";

import FooterIconButton from "@/components/atoms/footer/footer-icon-button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { TelegramIcon } from "@/components/icons/telegram-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { CONTACT } from "@/components/config/contact";
import { SOCIAL } from "@/components/config/footer";

export default function FooterSocials() {
	return (
		<div className="flex items-center gap-2">
			<FooterIconButton
				href={CONTACT.whatsappHref}
				ariaLabel="WhatsApp"
				title="WhatsApp"
			>
				<WhatsAppIcon className="h-5 w-5" />
			</FooterIconButton>

			<FooterIconButton
				href={CONTACT.telegramHref}
				ariaLabel="Telegram"
				title="Telegram"
			>
				<TelegramIcon className="h-5 w-5" />
			</FooterIconButton>

			<FooterIconButton
				href={SOCIAL.instagramHref}
				ariaLabel="Instagram"
				title="Instagram"
			>
				<InstagramIcon className="h-5 w-5" />
			</FooterIconButton>

			<FooterIconButton
				href={SOCIAL.facebookHref}
				ariaLabel="Facebook"
				title="Facebook"
			>
				<FacebookIcon className="h-5 w-5" />
			</FooterIconButton>
		</div>
	);
}
