"use client";

import FooterLink from "@/components/atoms/footer/footer-link";
import { FOOTER_NAV } from "@/components/config/footer";

export default function FooterNav() {
	return (
		<div>
			<div className="text-sm font-semibold text-white">Menü</div>
			<ul className="mt-4 space-y-2">
				{FOOTER_NAV.map((l) => (
					<li key={l.href}>
						<FooterLink href={l.href}>{l.name}</FooterLink>
					</li>
				))}
			</ul>
		</div>
	);
}
