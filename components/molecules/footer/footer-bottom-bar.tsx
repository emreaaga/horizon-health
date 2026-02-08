"use client";

import { FOOTER_LEGAL } from "@/components/config/footer";

export default function FooterBottomBar() {
	return (
		<div className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
			<div className="text-xs text-neutral-400">
				© {new Date().getFullYear()} Horizon Health. Tüm hakları saklıdır.
			</div>

			<div className="flex flex-wrap gap-4 text-xs">
				{FOOTER_LEGAL.map((l) => (
					<a
						key={l.name}
						href={l.href}
						className="text-neutral-400 hover:text-white transition"
					>
						{l.name}
					</a>
				))}
			</div>
		</div>
	);
}
