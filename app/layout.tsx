import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: {
		default: "Türkiye’de Sağlık Turizmi | Horizon Health",
		template: "%s | Horizon Health",
	},
	description:
		"Türkiye’de sağlık turizmi: seçili klinikler, şeffaf fiyatlandırma, tedavi süreci koordinasyonu, transfer ve konaklama. 7/24 destek ile güvenli sağlık hizmetleri.",
	keywords: [
		"sağlık turizmi",
		"Türkiye sağlık turizmi",
		"Türkiye’de tedavi",
		"medikal turizm",
		"estetik cerrahi Türkiye",
		"diş tedavisi Türkiye",
		"saç ekimi Türkiye",
		"seçili klinikler",
		"uluslararası hasta hizmetleri",
	],
	icons: {
		icon: [
			{ url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
		],
		apple: [
			{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
		],
		other: [{ url: "/favicon.svg", type: "image/svg+xml" }],
	},
	openGraph: {
		title: "Türkiye’de Sağlık Turizmi | Horizon Health",
		description:
			"Seçili klinikler, şeffaf fiyatlandırma ve uçtan uca koordinasyon ile Türkiye’de güvenli sağlık turizmi.",
		type: "website",
		locale: "tr_TR",
		siteName: "Horizon Health",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.variable}>
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}
