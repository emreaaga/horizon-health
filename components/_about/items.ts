import { ShieldCheck, FileText, CalendarCheck, Languages } from "lucide-react";

export const ABOUT_BULLETS = [
  "Ücretsiz ön değerlendirme (kısa bilgi + varsa rapor/film)",
  "Tedavi planı ve maliyet kalemleri netleştirilir",
  "Klinik & doktor eşleştirmesi yapılır",
  "Randevu, transfer ve iletişim koordinasyonu",
  "Tedavi sonrası takip ve destek",
] as const;

export const PACKAGE_ITEMS = [
  "Kişisel koordinatör",
  "Tedavi planı + fiyat teklifi",
  "Randevu planlama",
  "Tercüman desteği (opsiyon)",
  "Transfer organizasyonu (opsiyon)",
  "Tedavi sonrası takip",
] as const;

export const ABOUT_FEATURES = [
  {
    icon: FileText,
    title: "Şeffaf Teklif",
    description:
      "Onaylamadan önce planı ve maliyet kalemlerini net görürsünüz.",
  },
  {
    icon: CalendarCheck,
    title: "Hızlı Planlama",
    description: "Uygun randevu ve süreç adımlarını tek yerden yönetiriz.",
  },
  {
    icon: Languages,
    title: "İletişim Kolaylığı",
    description: "Süreç boyunca tek muhatap ile net iletişim.",
  },
  {
    icon: ShieldCheck,
    title: "Takip & Destek",
    description: "Tedavi öncesi / süreci / sonrası destek ve yönlendirme.",
  },
] as const;
