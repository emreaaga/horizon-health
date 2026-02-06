"use client";

import Link from "next/link";
import ProjectIcon from "@/components/icons/project-icon";

type BrandProps = {
	href?: string;
	title?: string;
	className?: string;

	isScrolled?: boolean;
	onClickTop?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default function BrandLogo({
	href = "/",
	title = "orizon Health",
	className = "",
	isScrolled,
	onClickTop,
}: BrandProps) {
	const textClass = isScrolled ? "text-gray-900" : "text-white";
	const iconClass = isScrolled ? "text-gray-900" : "text-white";

	return (
		<Link
			href={href}
			onClick={onClickTop}
			className={`inline-flex items-center ${className}`}
			aria-label={title}
			title={title}
		>
			<ProjectIcon className={`${iconClass} shrink-0`} width={56} height={56} />

			{/* "соединяем" с логотипом через отрицательный margin */}
			<span
				className={`-ml-2 translate-y-[2px] text-lg leading-none font-semibold tracking-tight ${textClass}`}
			>
				{title}
			</span>
		</Link>
	);
}
