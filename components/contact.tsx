"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { TelegramIcon } from "./icons/telegram-icon";
import { WhatsAppIcon } from "./icons/whatsapp-icon";

export default function Contact() {
	const phoneDisplay = "+90 552 665 81 91";
	const phoneHref = "tel:+905526658191";
	const email = "horizontravel34@gmail.com";

	const whatsappHref =
		"https://wa.me/000000000000?text=Merhaba!%20Sa%C4%9Fl%C4%B1k%20turizmi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";
	const telegramHref = "https://t.me/your_username";

	// ВАРИАНТ 1 (проще): по адресу (ниже объясню откуда взять)
	const address = "Istanbul, Türkiye";
	const lat = 41.00818961098416;
	const lng = 28.954140709296226;

	const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;

	return (
		<section id="contact" className="py-10 lg:py-12 bg-neutral-50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-5xl mx-auto">
					<div className="max-w-xl">
						<h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
							İletişim
						</h2>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ duration: 0.35 }}
						className="mt-5 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
					>
						<div className="px-4 py-3 border-b border-neutral-200 flex items-center justify-between">
							<div className="text-sm font-medium text-neutral-900">
								Ofisimiz
							</div>
							<div className="flex items-center gap-2 text-xs text-neutral-500">
								<MapPin className="h-4 w-4" />
								<span className="truncate max-w-[180px] sm:max-w-none">
									{address}
								</span>
							</div>
						</div>

						<iframe
							title="Office location"
							src={mapSrc}
							className="h-[240px] sm:h-[280px] w-full border-0"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>

						<div className="px-4 py-3 border-t border-neutral-200">
							<div className="flex flex-wrap items-center justify-center gap-2">
								<a
									href={whatsappHref}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-100 transition"
									aria-label="WhatsApp"
									title="WhatsApp"
								>
									<WhatsAppIcon className="h-4 w-4" />
									<span>WhatsApp</span>
								</a>

								<a
									href={telegramHref}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-100 transition"
									aria-label="Telegram"
									title="Telegram"
								>
									<TelegramIcon className="h-4 w-4" />
									<span>Telegram</span>
								</a>

								<a
									href={phoneHref}
									className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-100 transition"
									aria-label="Telefon"
									title="Telefon"
								>
									<Phone className="h-4 w-4 text-neutral-600" />
									<span className="tabular-nums">{phoneDisplay}</span>
								</a>

								<a
									href={`mailto:${email}`}
									className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-100 transition"
									aria-label="E-posta"
									title="E-posta"
								>
									<Mail className="h-4 w-4 text-neutral-600" />
									<span className="truncate max-w-[220px] sm:max-w-none">
										{email}
									</span>
								</a>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
