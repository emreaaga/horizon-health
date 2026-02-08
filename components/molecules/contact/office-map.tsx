"use client";

type Props = {
	src: string;
};

export default function OfficeMap({ src }: Props) {
	return (
		<iframe
			title="Office location"
			src={src}
			className="h-[240px] sm:h-[280px] w-full border-0"
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
		/>
	);
}
