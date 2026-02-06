import dynamic from "next/dynamic";

import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Dynamic imports for below-the-fold components

const Services = dynamic(() => import("@/components/services"), {
	loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-2xl" />,
});

const Why = dynamic(() => import("@/components/why"), {
	loading: () => <div className="h-80 animate-pulse bg-gray-100 rounded-2xl" />,
});

const Process = dynamic(() => import("@/components/process"), {
	loading: () => <div className="h-80 animate-pulse bg-gray-100 rounded-2xl" />,
});

const Doctors = dynamic(() => import("@/components/doctors"), {
	loading: () => <div className="h-80 animate-pulse bg-gray-100 rounded-2xl" />,
});

const Contact = dynamic(() => import("@/components/contact"), {
	loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-2xl" />,
});

const Footer = dynamic(() => import("@/components/footer"), {
	loading: () => <div className="h-24 animate-pulse bg-gray-100" />,
});

export default function Home() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
			<Header />
			<Hero />
			<Services />
			<Why />
			<Process />
			{/*<Doctors />*/}
			<Contact />

			<Footer />
		</main>
	);
}
