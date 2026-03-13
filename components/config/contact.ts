export const CONTACT = {
  phoneDisplay: "+90 552 665 81 91",
  phoneHref: "tel:+905526658191",
  email: "info@horizonhealthtourism.com",

  whatsappHref: "/",
  telegramHref: "/",

  address: "Istanbul, Türkiye",
  lat: 41.00818961098416,
  lng: 28.954140709296226,
} as const;

export const getMapSrc = (lat: number, lng: number) =>
  `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;
