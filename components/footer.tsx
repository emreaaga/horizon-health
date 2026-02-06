"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

import ProjectIcon from "@/components/icons/project-icon";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { TelegramIcon } from "@/components/icons/telegram-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { FacebookIcon } from "@/components/icons/facebook-icon";

const NAV = [
	{ name: "Hakkımızda", href: "#about" },
	{ name: "Hizmetler", href: "#services" },
	{ name: "Süreç", href: "#process" },
	{ name: "İletişim", href: "#contact" },
] as const;

export default function Footer() {
	const phoneDisplay = "+90 552 665 81 91";
	const phoneHref = "tel:+905526658191";
	const email = "horizontravel34@gmail.com";

	const lat = 41.00818961098416;
	const lng = 28.954140709296226;
	const mapHref = `https://www.google.com/maps?q=${lat},${lng}`;

	const address = "Aksa İş Merkez, Mesihpaşa Cd. No:8, 34130 Fatih, İstanbul";

	const whatsappHref =
		"https://wa.me/000000000000?text=Merhaba!%20Sa%C4%9Fl%C4%B1k%20turizmi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";
	const telegramHref = "https://t.me/your_username";
	const instagramHref = "#"; // TODO
	const facebookHref = "#"; // TODO

	const iconBtnBase =
		"inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/15";

	return (
		<footer className="bg-neutral-950 text-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid gap-10 md:grid-cols-3">
					<div className="md:pr-8">
						<Link href="/" className="inline-flex items-center">
							<ProjectIcon
								className="text-white shrink-0"
								width={52}
								height={52}
							/>
							<span className="-ml-2 translate-y-[2px] text-lg font-semibold tracking-tight">
								orizon Health
							</span>
						</Link>

						<p className="mt-4 text-sm leading-relaxed text-neutral-300 max-w-md">
							Türkiye’de sağlık turizmi için seçili klinikler, şeffaf
							fiyatlandırma ve uçtan uca koordinasyon.
						</p>

						<div className="mt-5 flex items-center gap-2">
							<motion.a
								href={whatsappHref}
								target="_blank"
								rel="noreferrer"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={iconBtnBase}
								aria-label="WhatsApp"
								title="WhatsApp"
							>
								<WhatsAppIcon className="h-5 w-5" />
							</motion.a>

							<motion.a
								href={telegramHref}
								target="_blank"
								rel="noreferrer"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={iconBtnBase}
								aria-label="Telegram"
								title="Telegram"
							>
								<TelegramIcon className="h-5 w-5" />
							</motion.a>

							<motion.a
								href={instagramHref}
								target="_blank"
								rel="noreferrer"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={iconBtnBase}
								aria-label="Instagram"
								title="Instagram"
							>
								<InstagramIcon className="h-5 w-5" />
							</motion.a>

							<motion.a
								href={facebookHref}
								target="_blank"
								rel="noreferrer"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={iconBtnBase}
								aria-label="Facebook"
								title="Facebook"
							>
								<FacebookIcon className="h-5 w-5" />
							</motion.a>
						</div>
					</div>

					{/* Navigation */}
					<div>
						<div className="text-sm font-semibold text-white">Menü</div>
						<ul className="mt-4 space-y-2">
							{NAV.map((l) => (
								<li key={l.href}>
									<a
										href={l.href}
										className="text-sm text-neutral-300 hover:text-white transition"
									>
										{l.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<div className="text-sm font-semibold text-white">İletişim</div>

						<div className="mt-4 space-y-3">
							<a
								href={`mailto:${email}`}
								className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10 transition"
							>
								<Mail className="h-4 w-4 text-neutral-300 mt-0.5" />
								<div className="min-w-0">
									<div className="text-sm text-neutral-200 truncate">
										{email}
									</div>
								</div>
							</a>

							<a
								href={phoneHref}
								className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10 transition"
							>
								<Phone className="h-4 w-4 text-neutral-300 mt-0.5" />
								<div className="min-w-0">
									<div className="text-sm text-neutral-200 tabular-nums">
										{phoneDisplay}
									</div>
								</div>
							</a>

							<a
								href={mapHref}
								target="_blank"
								rel="noreferrer"
								className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10 transition"
							>
								<MapPin className="h-4 w-4 text-neutral-300 mt-0.5" />
								<div className="min-w-0">
									<div className="text-sm text-neutral-200">{address}</div>
								</div>
							</a>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
					<div className="text-xs text-neutral-400">
						© {new Date().getFullYear()} Horizon Health. Tüm hakları saklıdır.
					</div>

					<div className="flex flex-wrap gap-4 text-xs">
						<a
							href="#"
							className="text-neutral-400 hover:text-white transition"
						>
							Gizlilik
						</a>
						<a
							href="#"
							className="text-neutral-400 hover:text-white transition"
						>
							Şartlar
						</a>
					</div>
				</div>
			</div>

			{/* Back to top */}
			<motion.button
				type="button"
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				whileHover={{ scale: 1.08 }}
				whileTap={{ scale: 0.95 }}
				className="fixed bottom-6 right-6 h-11 w-11 rounded-xl border border-white/10 bg-white/5 text-white shadow-lg backdrop-blur-sm
                   hover:bg-white/10 transition flex items-center justify-center z-50"
				aria-label="Back to top"
				title="Back to top"
			>
				<svg
					className="h-5 w-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M5 10l7-7m0 0l7 7m-7-7v18"
					/>
				</svg>
			</motion.button>
		</footer>
	);
}
