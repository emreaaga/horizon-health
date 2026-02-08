"use client";

import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import { X } from "lucide-react";
import { useConsultationDialog } from "@/components/providers/consultation-dialog-provider";

export default function ConsultationDialog() {
	const { isOpen, close } = useConsultationDialog();

	return (
		<Dialog open={isOpen} onClose={close} className="relative z-[60]">
			<DialogBackdrop
				transition
				className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity
                   data-[closed]:opacity-0
                   data-[enter]:duration-200 data-[enter]:ease-out
                   data-[leave]:duration-150 data-[leave]:ease-in"
			/>

			<div className="fixed inset-0 overflow-y-auto">
				<div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
					<DialogPanel
						transition
						className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left shadow-xl
                       ring-1 ring-black/10 transition-all
                       data-[closed]:translate-y-4 data-[closed]:opacity-0
                       data-[enter]:duration-200 data-[enter]:ease-out
                       data-[leave]:duration-150 data-[leave]:ease-in
                       sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
					>
						<div className="flex items-start justify-between gap-4 border-b border-gray-200 px-5 py-4">
							<DialogTitle className="text-base font-semibold text-gray-900">
								Ücretsiz Danışmanlık
							</DialogTitle>

							<button
								type="button"
								onClick={close}
								className="inline-flex h-9 w-9 items-center justify-center rounded-xl
                           text-gray-500 hover:bg-gray-100 hover:text-gray-700
                           focus:outline-none focus:ring-2 focus:ring-gray-200"
								aria-label="Close"
							>
								<X className="h-5 w-5" />
							</button>
						</div>

						<form
							className="px-5 py-4"
							onSubmit={(e) => {
								e.preventDefault();
								close();
							}}
						>
							<div className="space-y-3">
								<input
									type="text"
									placeholder="Isim"
									className="h-10 w-full rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-900
                             placeholder:text-gray-400 shadow-sm
                             focus:outline-none focus:ring-2 focus:ring-gray-200"
								/>

								<input
									type="tel"
									placeholder="Telefon numara"
									className="h-10 w-full rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-900
                             placeholder:text-gray-400 shadow-sm
                             focus:outline-none focus:ring-2 focus:ring-gray-200"
								/>
							</div>

							<div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
								<button
									type="button"
									onClick={close}
									className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-900
                             hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
								>
									Iptal
								</button>

								<button
									type="submit"
									className="inline-flex h-10 items-center justify-center rounded-xl bg-gray-900 px-4 text-sm font-semibold text-white
                             hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
								>
									Gönder
								</button>
							</div>
						</form>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
}
