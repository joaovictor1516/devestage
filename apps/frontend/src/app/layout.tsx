import type { Metadata } from "next";
import { Montserrat, Oxanium } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "devestage",
};

const montserrat = Montserrat({
	weight: ["500", "600"],
	subsets: ["latin"],
	variable: "--font-montserrat",
});

const oxanium = Oxanium({
	weight: ["400", "600"],
	subsets: ["latin"],
	variable: "--font-oxanium",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" className={`${montserrat.variable} ${oxanium.variable}`}>
			<body className="bg-gray-900 text-gray-100 antialiased bg-[url(/background.png)] bg-no-repeat md:bg-right-top bg-top">
				<main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
					{children}
				</main>
			</body>
		</html>
	);
}
