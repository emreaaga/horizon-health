"use client";

import SectionHeaderInline from "@/components/molecules/sections/section-header-inline";
import ProcessStepsGrid from "@/components/molecules/process/process-steps-grid";
import { PROCESS_STEPS } from "@/components/config/process";

export default function Process() {
	return (
		<section
			id="process"
			className="py-16 lg:py-20 bg-gradient-to-br from-neutral-50 via-white to-neutral-100"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto">
					<div className="max-w-2xl">
						<SectionHeaderInline
							title="Süreç Nasıl İşliyor?"
							description="Başlangıçtan tedavi sonrasına kadar net ve kontrollü akış."
							className="items-center text-center"
						/>
					</div>

					<ProcessStepsGrid steps={PROCESS_STEPS} />
				</div>
			</div>
		</section>
	);
}
