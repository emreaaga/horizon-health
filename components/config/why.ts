import { Users, Plane, Hotel, Stethoscope } from "lucide-react";

export const WHY_PROCESS = [
  {
    icon: Plane,
    title: "Karşılama & Transfer",
    desc: "Havalimanı karşılama ve şehir içi transferler.",
  },
  {
    icon: Hotel,
    title: "Konaklama Organizasyonu",
    desc: "Tedavi süresine uygun otel veya konaklama planlaması.",
  },
  {
    icon: Stethoscope,
    title: "Klinik & Randevu Yönetimi",
    desc: "Seçili kliniklerde randevu, operasyon ve süreç takibi.",
  },
  {
    icon: Users,
    title: "Sürekli Koordinasyon",
    desc: "Tedavi boyunca ve sonrasında tek muhatap destek.",
  },
] as const;

export const WHY_US = [
  "Yazılı ve şeffaf teklif süreci",
  "Tek muhatap – dağınık iletişim yok",
  "Tedavi sonrası takip ve destek",
  "Gizli maliyet veya sürpriz yok",
] as const;

export type WhyProcessItem = (typeof WHY_PROCESS)[number];
export type WhyUsItem = (typeof WHY_US)[number];
