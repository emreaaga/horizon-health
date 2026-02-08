"use client";

import SectionHeaderInline from "@/components/molecules/sections/section-header-inline";
import ServicesGrid from "@/components/molecules/services/services-grid";
import { SERVICES } from "@/components/config/services";

export default function Services() {
	return (
		<section
			id="services"
			className="relative py-10 md:py-14 bg-gradient-to-br from-neutral-50 via-white to-neutral-100"
		>
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-neutral-200/35 blur-3xl" />
				<div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-neutral-300/25 blur-3xl" />
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
				<div className="max-w-6xl mx-auto">
					<SectionHeaderInline
						title="Hizmetler"
						description="Türkiye’de tedavi sürecinizi uçtan uca organize ediyoruz: klinik seçimi, randevu, transfer ve iletişim."
					/>

					<ServicesGrid items={SERVICES} />
				</div>
			</div>
		</section>
	);
}
