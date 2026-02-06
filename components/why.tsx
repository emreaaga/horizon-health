"use client";

import { motion } from "framer-motion";
import { Check, Users, Plane, Hotel, Stethoscope } from "lucide-react";

const process = [
	{
		icon: Plane,
		title: "Karşılama & Transfer",
		desc: "Havalimanı karşılama ve şehir içi transferler.",
	},
	{
		icon: Hotel,
		title: "Konaklama Organizasyonu",
		desc: "Tedavi süresine uygun otel veya konaklama planlaması.",
	},
	{
		icon: Stethoscope,
		title: "Klinik & Randevu Yönetimi",
		desc: "Seçili kliniklerde randevu, operasyon ve süreç takibi.",
	},
	{
		icon: Users,
		title: "Sürekli Koordinasyon",
		desc: "Tedavi boyunca ve sonrasında tek muhatap destek.",
	},
] as const;

const whyUs = [
	"Yazılı ve şeffaf teklif süreci",
	"Tek muhatap – dağınık iletişim yok",
	"Tedavi sonrası takip ve destek",
	"Gizli maliyet veya sürpriz yok",
] as const;

export default function Why() {
	return (
		<section id="about" className="py-14 lg:py-20 bg-neutral-50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto">
					<div className="text-center max-w-2xl mx-auto">
						<h2 className="text-2xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
							Biz Kimiz?
						</h2>
						<p className="mt-3 text-neutral-600 text-base md:text-lg">
							Tedavi için gelen hastalar adına tüm süreci uçtan uca yöneten bir
							koordinasyon yapısıyız.
						</p>
					</div>

					<div className="mt-10 grid lg:grid-cols-2 gap-6">
						<motion.div
							initial={{ opacity: 0, y: 14 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.45 }}
							className="rounded-2xl bg-white border border-neutral-200 p-8 shadow-sm"
						>
							<h3 className="text-xl font-bold text-neutral-900">
								Süreç Nasıl İşliyor?
							</h3>

							<div className="mt-5 space-y-4">
								{process.map((item) => (
									<div key={item.title} className="flex gap-4">
										<div className="h-10 w-10 rounded-lg bg-neutral-900/5 flex items-center justify-center text-neutral-700 border border-neutral-200">
											<item.icon className="h-5 w-5" />
										</div>
										<div>
											<div className="font-semibold text-neutral-900 text-sm">
												{item.title}
											</div>
											<div className="text-sm text-neutral-600">
												{item.desc}
											</div>
										</div>
									</div>
								))}
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 14 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.45, delay: 0.05 }}
							className="rounded-2xl bg-white border border-neutral-200 p-8 shadow-sm"
						>
							<h3 className="text-xl font-bold text-neutral-900">Neden Biz?</h3>

							<ul className="mt-5 space-y-3">
								{whyUs.map((t) => (
									<li
										key={t}
										className="flex items-center gap-3 text-neutral-700"
									>
										<Check className="h-5 w-5 text-neutral-700" />
										<span>{t}</span>
									</li>
								))}
							</ul>

							<div className="mt-6 text-sm text-neutral-500">
								Biz aracı değiliz. Süreci yöneten ve sorumluluk alan tarafız.
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
