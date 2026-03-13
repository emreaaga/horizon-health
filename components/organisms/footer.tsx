"use client";

import BackToTop from "@/components/molecules/footer/back-to-top";
import FooterBottomBar from "@/components/molecules/footer/footer-bottom-bar";
import FooterBrand from "@/components/molecules/footer/footer-brand";
import FooterContact from "@/components/molecules/footer/footer-contact";
import FooterNav from "@/components/molecules/footer/footer-nav";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <FooterBrand
            brandText="Horizon Health"
            description="Türkiye’de sağlık turizmi için seçili klinikler, şeffaf fiyatlandırma ve uçtan uca koordinasyon."
          />
          <FooterNav />
          <FooterContact />
        </div>

        <FooterBottomBar />
      </div>

      <BackToTop />
    </footer>
  );
}
