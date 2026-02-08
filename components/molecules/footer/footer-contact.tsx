"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT } from "@/components/config/contact";

const mapHref = `https://www.google.com/maps?q=${CONTACT.lat},${CONTACT.lng}`;

export default function FooterContact() {
	return (
		<div>
			<div className="text-sm font-semibold text-white">İletişim</div>

			<div className="mt-4 space-y-3">
				<a
					href={`mailto:${CONTACT.email}`}
					className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10 transition"
				>
					<Mail className="h-4 w-4 text-neutral-300 mt-0.5" />
					<div className="min-w-0">
						<div className="text-sm text-neutral-200 truncate">
							{CONTACT.email}
						</div>
					</div>
				</a>

				<a
					href={CONTACT.phoneHref}
					className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10 transition"
				>
					<Phone className="h-4 w-4 text-neutral-300 mt-0.5" />
					<div className="min-w-0">
						<div className="text-sm text-neutral-200 tabular-nums">
							{CONTACT.phoneDisplay}
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
						<div className="text-sm text-neutral-200">{CONTACT.address}</div>
					</div>
				</a>
			</div>
		</div>
	);
}
