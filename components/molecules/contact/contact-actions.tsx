"use client";

import { Phone, Mail } from "lucide-react";
import { TelegramIcon } from "@/components/icons/telegram-icon";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import ContactLink from "@/components/atoms/contact/contact-link";

type Props = {
	whatsappHref: string;
	telegramHref: string;
	phoneHref: string;
	phoneDisplay: string;
	email: string;
};

export default function ContactActions({
	whatsappHref,
	telegramHref,
	phoneHref,
	phoneDisplay,
	email,
}: Props) {
	return (
		<div className="flex flex-wrap items-center justify-center gap-2">
			<ContactLink
				href={whatsappHref}
				external
				ariaLabel="WhatsApp"
				title="WhatsApp"
			>
				<WhatsAppIcon className="h-4 w-4" />
				<span>WhatsApp</span>
			</ContactLink>

			<ContactLink
				href={telegramHref}
				external
				ariaLabel="Telegram"
				title="Telegram"
			>
				<TelegramIcon className="h-4 w-4" />
				<span>Telegram</span>
			</ContactLink>

			<ContactLink href={phoneHref} ariaLabel="Telefon" title="Telefon">
				<Phone className="h-4 w-4 text-neutral-600" />
				<span className="tabular-nums">{phoneDisplay}</span>
			</ContactLink>

			<ContactLink href={`mailto:${email}`} ariaLabel="E-posta" title="E-posta">
				<Mail className="h-4 w-4 text-neutral-600" />
				<span className="truncate max-w-[220px] sm:max-w-none">{email}</span>
			</ContactLink>
		</div>
	);
}
