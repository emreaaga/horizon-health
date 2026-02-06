"use client";

import { motion } from "framer-motion";

const steps = [
	{ n: "01", t: "Ön değerlendirme", d: "Bilgi ve raporlar" },
	{ n: "02", t: "Plan & teklif", d: "Net maliyet" },
	{ n: "03", t: "Randevu", d: "Tarih ve hazırlık" },
	{ n: "04", t: "Tedavi", d: "Süreç yönetimi" },
	{ n: "05", t: "Takip", d: "Tedavi sonrası destek" },
] as const;

export default function Process() {
	return (
		<section
			id="process"
			className="py-16 lg:py-20 bg-gradient-to-br from-neutral-50 via-white to-neutral-100"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto">
					<div className="text-center max-w-2xl mx-auto">
						<h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
							Süreç Nasıl İşliyor?
						</h2>
						<p className="mt-3 text-neutral-600 text-base md:text-lg">
							Başlangıçtan tedavi sonrasına kadar net ve kontrollü akış.
						</p>
					</div>

					<div className="relative mt-14">
						{/* center divider */}
						<div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent" />

						<div className="grid grid-cols-1 md:grid-cols-5 gap-6">
							{steps.map((s, i) => (
								<motion.div
									key={s.n}
									initial={{ opacity: 0, y: 16 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.3 }}
									transition={{ duration: 0.45, delay: i * 0.05 }}
									className="group relative bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm hover:shadow-md transition"
								>
									<div className="flex items-center justify-between">
										<div className="text-neutral-700 font-extrabold text-sm tracking-wide">
											{s.n}
										</div>
										<div className="h-2 w-2 rounded-full bg-neutral-400 group-hover:bg-neutral-700 transition" />
									</div>

									<div className="mt-3 font-bold text-neutral-900 text-base">
										{s.t}
									</div>

									<div className="mt-1 text-sm text-neutral-600 leading-relaxed">
										{s.d}
									</div>

									<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-neutral-900/10 transition" />
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
