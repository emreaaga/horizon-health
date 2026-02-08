"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import OfficeMap from "./office-map";
import ContactActions from "./contact-actions";

type Props = {
	address: string;
	mapSrc: string;

	whatsappHref: string;
	telegramHref: string;
	phoneHref: string;
	phoneDisplay: string;
	email: string;
};

export default function OfficeCard({
	address,
	mapSrc,
	whatsappHref,
	telegramHref,
	phoneHref,
	phoneDisplay,
	email,
}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.35 }}
			className="mt-5 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
		>
			<div className="px-4 py-3 border-b border-neutral-200 flex items-center justify-between">
				<div className="text-sm font-medium text-neutral-900">Ofisimiz</div>
				<div className="flex items-center gap-2 text-xs text-neutral-500">
					<MapPin className="h-4 w-4" />
					<span className="truncate max-w-[180px] sm:max-w-none">
						{address}
					</span>
				</div>
			</div>

			<OfficeMap src={mapSrc} />

			<div className="px-4 py-3 border-t border-neutral-200">
				<ContactActions
					whatsappHref={whatsappHref}
					telegramHref={telegramHref}
					phoneHref={phoneHref}
					phoneDisplay={phoneDisplay}
					email={email}
				/>
			</div>
		</motion.div>
	);
}
