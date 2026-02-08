"use client";

import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";
import type { ReactNode } from "react";
import ConsultationDialog from "@/components/molecules/dialogs/consultation-dialog";

type ConsultationDialogCtx = {
	isOpen: boolean;
	open: () => void;
	close: () => void;
};

const Ctx = createContext<ConsultationDialogCtx | null>(null);

export function ConsultationDialogProvider({
	children,
}: {
	children: ReactNode;
}) {
	const [isOpen, setIsOpen] = useState(false);

	const open = useCallback(() => setIsOpen(true), []);
	const close = useCallback(() => setIsOpen(false), []);

	const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

	return (
		<Ctx.Provider value={value}>
			{children}
			<ConsultationDialog />
		</Ctx.Provider>
	);
}

export function useConsultationDialog() {
	const ctx = useContext(Ctx);
	if (!ctx)
		throw new Error(
			"useConsultationDialog must be used within ConsultationDialogProvider",
		);
	return ctx;
}
