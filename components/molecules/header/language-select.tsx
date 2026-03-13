"use client";

import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
	HEADER_ICON_BASE,
	headerIconVariant,
} from "../../atoms/header/icon-classes";

type Lang = "tr" | "en" | "ru";

type Props = {
	isScrolled: boolean;
	value?: Lang;
	defaultValue?: Lang;
	onChange?: (lang: Lang) => void;
};

const langs: { value: Lang; label: string }[] = [
	{ value: "tr", label: "TR" },
	{ value: "en", label: "EN" },
	{ value: "ru", label: "RU" },
];

export default function LanguageSelect({
	isScrolled,
	value,
	defaultValue = "tr",
	onChange,
}: Props) {
	const [internal, setInternal] = useState<Lang>(defaultValue);
	const current = value ?? internal;

	const base = HEADER_ICON_BASE;
	const triggerStyle = headerIconVariant(isScrolled);

	const setLang = (lang: Lang) => {
		if (value === undefined) setInternal(lang);
		onChange?.(lang);
	};

	return (
		<Menu as="div" className="relative inline-block">
			<MenuButton
				className={`${base} ${triggerStyle}`}
				aria-label="Dil"
				title="Dil"
			>
				<span className="text-xs font-semibold leading-none">
					{current.toUpperCase()}
				</span>
			</MenuButton>

			<MenuItems
				transition
				className="
						  absolute left-1/2 -translate-x-1/2 z-[70] mt-2 w-20 origin-top overflow-hidden
						  rounded-xl border border-gray-200 bg-white shadow-sm outline-none
						  data-[closed]:scale-95 data-[closed]:opacity-0
						  data-[enter]:duration-100 data-[enter]:ease-out
						  data-[leave]:duration-75 data-[leave]:ease-in
						"
			>
				<div className="p-1">
					{langs.map((l) => (
						<MenuItem key={l.value}>
							<button
								type="button"
								onClick={() => setLang(l.value)}
								className={`
                  w-full rounded-lg px-2 py-2 text-left text-sm font-medium
                  hover:bg-gray-50 data-[focus]:bg-gray-50
                  ${current === l.value ? "text-gray-900" : "text-gray-700"}
                `}
							>
								{l.label}
							</button>
						</MenuItem>
					))}
				</div>
			</MenuItems>
		</Menu>
	);
}
