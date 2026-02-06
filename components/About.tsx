"use client";

import { motion } from "framer-motion";
import AboutFeatureCard from "./_about/about-feature-card";
import { ABOUT_BULLETS, PACKAGE_ITEMS, ABOUT_FEATURES } from "./_about/items";

export default function About() {
	return (
		<section id="about" className="py-20 bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 18 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true, amount: 0.3 }}
						className="text-center mb-14"
					>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
							Sağlık Turizminde
							<span className="block gradient-text">
								Güvenli Süreç Yönetimi
							</span>
						</h2>
						<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Biz klinik değiliz — sizin adınıza planlama ve koordinasyon yapan
							bir ekibiz. Amaç: belirsizliği azaltmak, iletişimi netleştirmek,
							süreci kontrol edilebilir hale getirmek.
						</p>
					</motion.div>

					<div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
						<motion.div
							initial={{ opacity: 0, x: -18 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.7 }}
							viewport={{ once: true, amount: 0.3 }}
						>
							<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
								Nasıl çalışıyoruz?
							</h3>

							<p className="text-gray-600 text-lg leading-relaxed mb-6">
								Size uygun tedavi planını oluşturmak için önce bilgileri toplar,
								ardından klinik/doktor eşleştirmesi yaparız. Onay sonrası
								randevu ve lojistik süreçlerini koordine ederiz.
							</p>

							<ul className="space-y-3">
								{ABOUT_BULLETS.map((t) => (
									<li key={t} className="flex items-start gap-3 text-gray-700">
										<div className="w-2 h-2 bg-medical-600 rounded-full mt-3 shrink-0" />
										<span className="text-lg">{t}</span>
									</li>
								))}
							</ul>
						</motion.div>

						{/* Right: package box */}
						<motion.div
							initial={{ opacity: 0, x: 18 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.7 }}
							viewport={{ once: true, amount: 0.3 }}
							className="bg-gradient-to-br from-medical-50 to-blue-50 rounded-2xl p-8"
						>
							<h4 className="text-2xl font-bold text-gray-900 mb-5">
								Hizmet Paketi (Özet)
							</h4>

							<div className="grid grid-cols-1 gap-3">
								{PACKAGE_ITEMS.map((t) => (
									<div
										key={t}
										className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-sm"
									>
										<div className="mt-1 h-2.5 w-2.5 rounded-full bg-medical-600 shrink-0" />
										<div className="text-gray-800 font-medium">{t}</div>
									</div>
								))}
							</div>

							<div className="mt-6">
								<button
									type="button"
									onClick={() =>
										document
											.getElementById("contact")
											?.scrollIntoView({ behavior: "smooth" })
									}
									className="w-full rounded-full bg-medical-600 text-white font-semibold py-3 hover:bg-medical-700 transition"
								>
									Ücretsiz Ön Değerlendirme Al
								</button>
								<div className="text-sm text-gray-500 mt-3">
									*Son karar klinik değerlendirmesine bağlıdır. Sonuç garantisi
									verilmez.
								</div>
							</div>
						</motion.div>
					</div>

					{/* Features grid */}
					<motion.div
						initial={{ opacity: 0, y: 18 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true, amount: 0.3 }}
						className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
					>
						{ABOUT_FEATURES.map((f, i) => (
							<motion.div
								key={f.title}
								initial={{ opacity: 0, y: 18 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.7, delay: i * 0.06 }}
								viewport={{ once: true, amount: 0.3 }}
							>
								<AboutFeatureCard
									icon={f.icon}
									title={f.title}
									description={f.description}
								/>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
