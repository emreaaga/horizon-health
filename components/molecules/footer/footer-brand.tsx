"use client";

import FooterSocials from "./footer-socials";
import BrandLogo from "@/components/icons/brand-logo";

type Props = {
	brandText: string;
	description: string;
};

export default function FooterBrand({ brandText, description }: Props) {
	return (
		<div className="md:pr-8">
			<BrandLogo href="/" title={brandText} isScrolled={false} />

			<p className="mt-4 text-sm leading-relaxed text-neutral-300 max-w-md">
				{description}
			</p>

			<div className="mt-5">
				<FooterSocials />
			</div>
		</div>
	);
}
