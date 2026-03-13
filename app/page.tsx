import dynamic from "next/dynamic";

import Header from "@/components/organisms/header";
import Hero from "@/components/organisms/hero";
import { ConsultationDialogProvider } from "@/components/providers/consultation-dialog-provider";

const Services = dynamic(() => import("@/components/organisms/services"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-2xl" />,
});

const Why = dynamic(() => import("@/components/organisms/why"), {
  loading: () => <div className="h-80 animate-pulse bg-gray-100 rounded-2xl" />,
});

const Process = dynamic(() => import("@/components/organisms/process"), {
  loading: () => <div className="h-80 animate-pulse bg-gray-100 rounded-2xl" />,
});

const Contact = dynamic(() => import("@/components/organisms/contact"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-2xl" />,
});

const Footer = dynamic(() => import("@/components/organisms/footer"), {
  loading: () => <div className="h-24 animate-pulse bg-gray-100" />,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <ConsultationDialogProvider>
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <Header />

          <Hero />
          <Services />
          <Why />
          <Process />
          <Contact />

          <Footer />
        </main>
      </ConsultationDialogProvider>
    </main>
  );
}
