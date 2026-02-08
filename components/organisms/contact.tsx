"use client";

import OfficeCard from "@/components/molecules/contact/office-card";
import { CONTACT, getMapSrc } from "@/components/config/contact";

export default function Contact() {
	const mapSrc = getMapSrc(CONTACT.lat, CONTACT.lng);

	return (
		<section id="contact" className="py-10 lg:py-12 bg-neutral-50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-5xl mx-auto">
					<div className="max-w-xl">
						<h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
							İletişim
						</h2>
					</div>

					<OfficeCard
						address={CONTACT.address}
						mapSrc={mapSrc}
						whatsappHref={CONTACT.whatsappHref}
						telegramHref={CONTACT.telegramHref}
						phoneHref={CONTACT.phoneHref}
						phoneDisplay={CONTACT.phoneDisplay}
						email={CONTACT.email}
					/>
				</div>
			</div>
		</section>
	);
}
