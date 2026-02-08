"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

import PopularPill from "@/components/atoms/services/popular-pill";
import ServiceArrow from "@/components/atoms/services/service-arrow";
import type { ServiceItem } from "@/components/config/services";
import { scrollToHash } from "@/lib/scrolls";

type Props = {
	item: ServiceItem;
	variants: Variants;
};

export default function ServiceCard({ item, variants }: Props) {
	return (
		<motion.article
			variants={variants}
			className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition"
		>
			<div className="relative h-36">
				<Image
					src={item.image}
					alt={item.alt}
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
							{item.title}
						</h3>
						<p className="mt-1 text-sm text-neutral-600">{item.desc}</p>
					</div>

					<PopularPill />
				</div>

				<div className="mt-4 flex items-center justify-between">
					<button
						type="button"
						onClick={() => scrollToHash("#contact")}
						className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-700 hover:text-neutral-900"
					>
						Detay
					</button>

					<ServiceArrow />
				</div>
			</div>

			<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-neutral-900/10 transition" />
		</motion.article>
	);
}
