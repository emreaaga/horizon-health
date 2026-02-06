"use client";

import { motion } from "framer-motion";
import { Stethoscope, Building2 } from "lucide-react";

const cards = [
	{
		title: "Uzman Hekimler",
		desc: "Branşa göre eşleştirme",
		note: "Profil bilgileri yakında",
	},
	{
		title: "Seçili Klinikler",
		desc: "Merkez bazlı planlama",
		note: "Klinik listesi yakında",
	},
	{
		title: "Şeffaf Bilgilendirme",
		desc: "Risk / hazırlık / takip",
		note: "Süreç dökümanı yakında",
	},
] as const;

export default function Doctors() {
	return (
		<section id="doctors" className="py-16 lg:py-20 bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto">
					<div className="text-center">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
							Doktorlar & Klinikler
						</h2>
						<p className="mt-3 text-gray-600 text-lg">
							Buraya gerçek doktor/klinik verisi koyacağız. Şimdilik temiz
							placeholder.
						</p>
					</div>

					<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
						{cards.map((c, i) => (
							<motion.div
								key={c.title}
								initial={{ opacity: 0, y: 12 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.45, delay: i * 0.05 }}
								className="rounded-2xl border border-gray-100 p-6 shadow-sm"
							>
								<div className="flex items-center gap-3">
									<div className="w-12 h-12 rounded-xl bg-medical-600 text-white flex items-center justify-center">
										{i === 1 ? (
											<Building2 className="h-6 w-6" />
										) : (
											<Stethoscope className="h-6 w-6" />
										)}
									</div>
									<div>
										<div className="font-bold text-gray-900">{c.title}</div>
										<div className="text-gray-600">{c.desc}</div>
									</div>
								</div>
								<div className="mt-4 text-sm text-gray-500">{c.note}</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
