"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HeroParticles from "./_hero/hero-particles";
import HeroActions from "./_hero/hero-actions";
import HeroStats from "./_hero/hero-stats";
import ConsultationDialog from "./dialogs/consultation";

export default function Hero() {
	const [isConsultOpen, setIsConsultOpen] = useState(false);

	return (
		<>
			<section
				id="top"
				className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24"
			>
				<div className="absolute inset-0 bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950" />
				<div className="absolute inset-0 bg-black/10" />

				<HeroParticles />

				<div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-neutral-100 py-10">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="max-w-4xl mx-auto"
					>
						<motion.h1
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]"
						>
							Türkiye’de
							<span className="block text-neutral-200">Sağlık Turizmi</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.22 }}
							className="mt-4 text-base md:text-xl text-neutral-400 max-w-3xl mx-auto"
						>
							Seçili klinikler, şeffaf fiyatlandırma ve uçtan uca koordinasyon.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.34 }}
							className="mt-6 flex flex-wrap justify-center items-center gap-2"
						>
							{[
								"Hızlı geri dönüş",
								"Tercüman desteği",
								"Transfer & konaklama opsiyonu",
								"Tedavi sonrası takip",
							].map((t) => (
								<span
									key={t}
									className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs md:text-sm text-neutral-200 backdrop-blur-sm"
								>
									{t}
								</span>
							))}
						</motion.div>

						<div className="mt-7">
							<HeroActions onPrimaryCTA={() => setIsConsultOpen(true)} />
						</div>

						<div className="mt-12">
							<HeroStats />
						</div>
					</motion.div>
				</div>
			</section>

			<ConsultationDialog
				open={isConsultOpen}
				onClose={() => setIsConsultOpen(false)}
			/>
		</>
	);
}
