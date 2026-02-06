"use client";

import { motion } from "framer-motion";

type Props = {
	icon: any;
	title: string;
	description: string;
};

export default function AboutFeatureCard({
	icon: Icon,
	title,
	description,
}: Props) {
	return (
		<motion.div whileHover={{ y: -4 }} className="text-center group">
			<div className="w-16 h-16 bg-medical-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-medical-200 transition-colors">
				<Icon className="h-8 w-8 text-medical-600" />
			</div>
			<h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
			<p className="text-gray-600 leading-relaxed">{description}</p>
		</motion.div>
	);
}
