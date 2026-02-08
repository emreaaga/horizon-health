"use client";

import type { ReactNode } from "react";

type Props = {
	href: string;
	children: ReactNode;
	ariaLabel: string;
	title: string;
	external?: boolean;
	className?: string;
};

export default function ContactLink({
	href,
	children,
	ariaLabel,
	title,
	external = false,
	className = "",
}: Props) {
	const base =
		"inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-100 transition";

	return (
		<a
			href={href}
			aria-label={ariaLabel}
			title={title}
			className={`${base} ${className}`}
			target={external ? "_blank" : undefined}
			rel={external ? "noreferrer" : undefined}
		>
			{children}
		</a>
	);
}
