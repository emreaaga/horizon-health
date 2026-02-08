export const CONTACT = {
  phoneDisplay: "+90 552 665 81 91",
  phoneHref: "tel:+905526658191",
  email: "horizontravel34@gmail.com",

  whatsappHref:
    "https://wa.me/000000000000?text=Merhaba!%20Sa%C4%9Fl%C4%B1k%20turizmi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
  telegramHref: "https://t.me/your_username",

  address: "Istanbul, Türkiye",
  lat: 41.00818961098416,
  lng: 28.954140709296226,
} as const;

export const getMapSrc = (lat: number, lng: number) =>
  `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;
