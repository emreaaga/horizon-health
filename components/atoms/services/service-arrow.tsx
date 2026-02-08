"use client";

import { ArrowRight } from "lucide-react";

export default function ServiceArrow() {
	return (
		<div className="h-9 w-9 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-neutral-700 transition">
			<ArrowRight className="h-4 w-4" />
		</div>
	);
}
