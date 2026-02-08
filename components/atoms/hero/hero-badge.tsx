"use client";

import type { ReactNode } from "react";

type HeroBadgeProps = {
	children: ReactNode;
};

export default function HeroBadge({ children }: HeroBadgeProps) {
	return (
		<span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs md:text-sm text-neutral-200 backdrop-blur-sm">
			{children}
		</span>
	);
}
