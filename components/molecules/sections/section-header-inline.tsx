"use client";

type Props = {
	title: string;
	description: string;
	className?: string;
};

export default function SectionHeaderInline({
	title,
	description,
	className = "",
}: Props) {
	return (
		<div
			className={`flex flex-col md:flex-row md:items-baseline md:gap-6 ${className}`}
		>
			<h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900">
				{title}
			</h2>
			<p className="md:mt-0 text-sm text-neutral-600">{description}</p>
		</div>
	);
}
