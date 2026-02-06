"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
	{
		title: "Saç Ekimi",
		desc: "FUE / DHI",
		image: "/services/hair-transplant.jpg",
		alt: "Saç ekimi",
	},
	{
		title: "Diş",
		desc: "İmplant / kaplama",
		image: "/services/dental.jpg",
		alt: "Diş tedavileri",
	},
	{
		title: "Estetik",
		desc: "Seçili işlemler",
		image: "/services/aesthetics.jpg",
		alt: "Estetik işlemler",
	},
	{
		title: "Göz",
		desc: "Lazer (LASIK)",
		image: "/services/eye-laser.jpg",
		alt: "Göz lazer",
	},
	{
		title: "Obezite",
		desc: "Gastrik sleeve",
		image: "/services/bariatric.jpg",
		alt: "Obezite cerrahisi",
	},
	{
		title: "Tüp Bebek",
		desc: "IVF planlama",
		image: "/services/ivf.jpg",
		alt: "Tüp bebek (IVF)",
	},
	{
		title: "Ortopedi",
		desc: "Seçili işlemler",
		image: "/services/orthopedics.jpg",
		alt: "Ortopedi",
	},
	{
		title: "Check-up",
		desc: "Genel tarama",
		image: "/services/checkup.jpg",
		alt: "Check-up",
	},
] as const;

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.06, delayChildren: 0.05 },
	},
};

const item = {
	hidden: { opacity: 0, y: 12, scale: 0.98 },
	show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
};

export default function Services() {
	const scrollToContact = () =>
		document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

	return (
		<section
			id="services"
			className="relative py-10 md:py-14 bg-gradient-to-br from-neutral-50 via-white to-neutral-100"
		>
			{/* subtle gray blobs */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-neutral-200/35 blur-3xl" />
				<div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-neutral-300/25 blur-3xl" />
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
				<div className="max-w-6xl mx-auto">
					{/* title + description in one line (md+) */}
					<div className="flex flex-col md:flex-row md:items-baseline md:gap-6">
						<h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900">
							Hizmetler
						</h2>
						<p className="md:mt-0 text-sm text-neutral-600 ">
							Türkiye’de tedavi sürecinizi uçtan uca organize ediyoruz: klinik
							seçimi, randevu, transfer ve iletişim.
						</p>
					</div>

					<motion.div
						variants={container}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.25 }}
						className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
					>
						{services.map((s) => (
							<motion.article
								key={s.title}
								variants={item}
								className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition"
							>
								<div className="relative h-36">
									<Image
										src={s.image}
										alt={s.alt}
										fill
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
										className="object-cover transition duration-500 group-hover:scale-[1.04]"
										priority={false}
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
									<div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
								</div>

								<div className="p-4">
									<div className="flex items-start justify-between gap-3">
										<div>
											<h3 className="text-sm font-extrabold text-neutral-900 leading-tight">
												{s.title}
											</h3>
											<p className="mt-1 text-sm text-neutral-600">{s.desc}</p>
										</div>

										<span className="shrink-0 inline-flex items-center rounded-full bg-neutral-900/5 text-neutral-700 px-2.5 py-1 text-[11px] font-bold">
											Popüler
										</span>
									</div>

									<div className="mt-4 flex items-center justify-between">
										<button
											type="button"
											onClick={scrollToContact}
											className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-700 hover:text-neutral-900"
										>
											Detay
										</button>

										<div className="h-9 w-9 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-neutral-700 transition">
											<ArrowRight className="h-4 w-4" />
										</div>
									</div>
								</div>

								<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-neutral-900/10 transition" />
							</motion.article>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
