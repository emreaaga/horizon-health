"use client";

type Props = {
	href: string;
	children: string;
};

export default function FooterLink({ href, children }: Props) {
	return (
		<a
			href={href}
			className="text-sm text-neutral-300 hover:text-white transition"
		>
			{children}
		</a>
	);
}
