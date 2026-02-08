export const SERVICES = [
  {
    title: "Saç Ekimi",
    desc: "FUE / DHI",
    image: "/services/hair-transplant.jpg",
    alt: "Saç ekimi",
  },
  {
    title: "Diş",
    desc: "İmplant / kaplama",
    image: "/services/dental.jpg",
    alt: "Diş tedavileri",
  },
  {
    title: "Estetik",
    desc: "Seçili işlemler",
    image: "/services/aesthetics.jpg",
    alt: "Estetik işlemler",
  },
  {
    title: "Göz",
    desc: "Lazer (LASIK)",
    image: "/services/eye-laser.jpg",
    alt: "Göz lazer",
  },
  {
    title: "Obezite",
    desc: "Gastrik sleeve",
    image: "/services/bariatric.jpg",
    alt: "Obezite cerrahisi",
  },
  {
    title: "Tüp Bebek",
    desc: "IVF planlama",
    image: "/services/ivf.jpg",
    alt: "Tüp bebek (IVF)",
  },
  {
    title: "Ortopedi",
    desc: "Seçili işlemler",
    image: "/services/orthopedics.jpg",
    alt: "Ortopedi",
  },
  {
    title: "Check-up",
    desc: "Genel tarama",
    image: "/services/checkup.jpg",
    alt: "Check-up",
  },
] as const;

export type ServiceItem = (typeof SERVICES)[number];
