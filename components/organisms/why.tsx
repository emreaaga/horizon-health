"use client";

import SectionHeaderInline from "@/components/molecules/sections/section-header-inline";
import ProcessCard from "@/components/molecules/why/process-card";
import WhyUsCard from "@/components/molecules/why/ whyus-card";
import { WHY_PROCESS, WHY_US } from "@/components/config/why";

export default function Why() {
	return (
		<section id="why" className="py-14 lg:py-20 bg-neutral-50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto">
					<div className="max-w-4xl">
						<SectionHeaderInline
							title="Biz Kimiz?"
							description="Tedavi için gelen hastalar adına tüm süreci uçtan uca yöneten bir koordinasyon yapısıyız."
						/>
					</div>

					<div className="mt-10 grid lg:grid-cols-2 gap-6">
						<ProcessCard items={WHY_PROCESS} />
						<WhyUsCard items={WHY_US} />
					</div>
				</div>
			</div>
		</section>
	);
}
