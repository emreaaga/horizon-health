"use client";

import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";
import type { ReactNode } from "react";

type HeaderMenuCtx = {
	isOpen: boolean;
	open: () => void;
	close: () => void;
	toggle: () => void;
};

const Ctx = createContext<HeaderMenuCtx | null>(null);

export function HeaderMenuProvider({ children }: { children: ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);

	const open = useCallback(() => setIsOpen(true), []);
	const close = useCallback(() => setIsOpen(false), []);
	const toggle = useCallback(() => setIsOpen((v) => !v), []);

	const value = useMemo(
		() => ({ isOpen, open, close, toggle }),
		[isOpen, open, close, toggle],
	);

	return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useHeaderMenu() {
	const ctx = useContext(Ctx);
	if (!ctx)
		throw new Error("useHeaderMenu must be used within HeaderMenuProvider");
	return ctx;
}
