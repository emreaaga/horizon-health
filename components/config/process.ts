export const PROCESS_STEPS = [
  { n: "01", t: "Ön değerlendirme", d: "Bilgi ve raporlar" },
  { n: "02", t: "Plan & teklif", d: "Net maliyet" },
  { n: "03", t: "Randevu", d: "Tarih ve hazırlık" },
  { n: "04", t: "Tedavi", d: "Süreç yönetimi" },
  { n: "05", t: "Takip", d: "Tedavi sonrası destek" },
] as const;

export type ProcessStep = (typeof PROCESS_STEPS)[number];
