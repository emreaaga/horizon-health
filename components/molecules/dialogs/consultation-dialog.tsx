"use client";

import { useConsultationDialog } from "@/components/providers/consultation-dialog-provider";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Hotel,
  Plane,
  Scissors,
  Stethoscope,
  Syringe,
  X,
} from "lucide-react";
import { useState } from "react";

// --- ДАННЫЕ ДЛЯ КВИЗА ---
const SERVICES = [
  { id: "dental", title: "Diş Tedavisi", icon: Syringe },
  { id: "hair", title: "Saç Ekimi", icon: Scissors },
  { id: "aesthetics", title: "Estetik Cerrahi", icon: Stethoscope },
];

const TIMING = [
  { id: "asap", title: "Hemen (Bu Ay)" },
  { id: "3months", title: "1-3 Ay İçinde" },
  { id: "just_looking", title: "Sadece Bilgi Alıyorum" },
];

// НОВЫЙ БЛОК: Выбор пакета услуг
const PACKAGES = [
  {
    id: "vip",
    title: "Her Şey Dahil VIP",
    desc: "Tedavi, 5 Yıldızlı Otel ve VIP Transfer",
    icon: Plane,
  },
  {
    id: "hotel",
    title: "Tedavi + Konaklama",
    desc: "Tedavi ve otel rezervasyonu",
    icon: Hotel,
  },
  {
    id: "only_treatment",
    title: "Sadece Tedavi",
    desc: "Uçuş ve oteli kendim ayarlayacağım",
    icon: Briefcase,
  },
];

export default function ConsultationDialog() {
  const { isOpen, close } = useConsultationDialog();

  // Состояние квиза (теперь 4 шага)
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    timing: "",
    package: "",
    name: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Сброс формы при закрытии
  const handleClose = () => {
    setTimeout(() => {
      setStep(1);
      setFormData({
        service: "",
        timing: "",
        package: "",
        name: "",
        phone: "",
      });
      setIsSubmitted(false);
    }, 300);
    close();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Gönderilen veriler:", formData);
    setIsSubmitted(true);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-[60]">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-neutral-900/80 backdrop-blur-sm transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200"
      />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="relative w-full max-w-lg transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl ring-1 ring-black/5 transition-all data-[closed]:translate-y-8 data-[closed]:opacity-0 data-[closed]:scale-95 data-[enter]:duration-300 data-[leave]:duration-200"
          >
            {/* Кнопка закрытия */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900 focus:outline-none"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="p-8">
              <AnimatePresence mode="wait">
                {/* --- УСПЕШНАЯ ОТПРАВКА --- */}
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-10 text-center"
                  >
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-900 text-white shadow-lg">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">
                      Talebiniz Alındı!
                    </h3>
                    <p className="mt-2 text-neutral-600">
                      Danışmanlarımız en kısa sürede{" "}
                      <strong>{formData.phone}</strong> numarası üzerinden
                      sizinle iletişime geçecektir.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-8 rounded-xl bg-neutral-900 px-8 py-3 font-semibold text-white transition hover:bg-neutral-800"
                    >
                      Kapat
                    </button>
                  </motion.div>
                ) : (
                  /* --- САМ КВИЗ --- */
                  <motion.div
                    key={`step-${step}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Прогресс бар (теперь из 4 шагов, цвет черный) */}
                    <div className="mb-8">
                      <div className="mb-2 flex justify-between text-xs font-bold uppercase tracking-wider text-neutral-400">
                        <span>Adım {step} / 4</span>
                        <span>%{Math.round((step / 4) * 100)} Tamamlandı</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
                        <div
                          className="h-full bg-neutral-900 transition-all duration-500 ease-out"
                          style={{ width: `${(step / 4) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* --- ШАГ 1: Выбор услуги --- */}
                    {step === 1 && (
                      <div>
                        <h3 className="text-xl font-bold text-neutral-900">
                          Hangi tedavi ile ilgileniyorsunuz?
                        </h3>
                        <p className="mt-1 text-sm text-neutral-500">
                          Size en uygun uzmanımızı yönlendireceğiz.
                        </p>

                        <div className="mt-6 grid gap-3">
                          {SERVICES.map((s) => (
                            <button
                              key={s.id}
                              onClick={() => {
                                setFormData({ ...formData, service: s.title });
                                setStep(2);
                              }}
                              className="group flex items-center gap-4 rounded-2xl border-2 border-neutral-100 p-4 text-left transition-all hover:border-neutral-900 hover:bg-neutral-50"
                            >
                              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600 transition-colors group-hover:bg-neutral-900 group-hover:text-white">
                                <s.icon className="h-6 w-6" />
                              </div>
                              <span className="font-semibold text-neutral-700 transition-colors group-hover:text-neutral-900">
                                {s.title}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* --- ШАГ 2: Сроки --- */}
                    {step === 2 && (
                      <div>
                        <h3 className="text-xl font-bold text-neutral-900">
                          Tedaviyi ne zaman planlıyorsunuz?
                        </h3>
                        <p className="mt-1 text-sm text-neutral-500">
                          Süreci sizin takviminize göre ayarlayacağız.
                        </p>

                        <div className="mt-6 grid gap-3">
                          {TIMING.map((t) => (
                            <button
                              key={t.id}
                              onClick={() => {
                                setFormData({ ...formData, timing: t.title });
                                setStep(3);
                              }}
                              className="flex w-full items-center justify-between rounded-2xl border-2 border-neutral-100 p-5 text-left transition-all hover:border-neutral-900 hover:bg-neutral-50"
                            >
                              <span className="font-semibold text-neutral-700 transition-colors group-hover:text-neutral-900">
                                {t.title}
                              </span>
                              <ChevronRight className="h-5 w-5 text-neutral-400 group-hover:text-neutral-900" />
                            </button>
                          ))}
                        </div>
                        <button
                          onClick={() => setStep(1)}
                          className="mt-6 text-sm font-medium text-neutral-400 hover:text-neutral-900 transition-colors"
                        >
                          &larr; Geri dön
                        </button>
                      </div>
                    )}

                    {/* --- ШАГ 3: Пакет услуг (Трансфер, Отель) --- */}
                    {step === 3 && (
                      <div>
                        <h3 className="text-xl font-bold text-neutral-900">
                          Ekstra hizmetlere ihtiyacınız var mı?
                        </h3>
                        <p className="mt-1 text-sm text-neutral-500">
                          İstanbuldaki sürecinizi uçtan uca planlayabiliriz.
                        </p>

                        <div className="mt-6 grid gap-3">
                          {PACKAGES.map((p) => (
                            <button
                              key={p.id}
                              onClick={() => {
                                setFormData({ ...formData, package: p.title });
                                setStep(4);
                              }}
                              className="group flex items-start gap-4 rounded-2xl border-2 border-neutral-100 p-4 text-left transition-all hover:border-neutral-900 hover:bg-neutral-50"
                            >
                              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-colors group-hover:bg-neutral-900 group-hover:text-white">
                                <p.icon className="h-5 w-5" />
                              </div>
                              <div>
                                <span className="block font-semibold text-neutral-900">
                                  {p.title}
                                </span>
                                <span className="mt-1 block text-sm text-neutral-500">
                                  {p.desc}
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                        <button
                          onClick={() => setStep(2)}
                          className="mt-6 text-sm font-medium text-neutral-400 hover:text-neutral-900 transition-colors"
                        >
                          &larr; Geri dön
                        </button>
                      </div>
                    )}

                    {/* --- ШАГ 4: Контакты (Форма) --- */}
                    {step === 4 && (
                      <div>
                        <h3 className="text-xl font-bold text-neutral-900">
                          Kişisel tedavi planınız hazır!
                        </h3>
                        <p className="mt-1 text-sm text-neutral-500">
                          {formData.service} için detaylı fiyat ve süreç
                          bilgisini nereye gönderelim?
                        </p>

                        <form
                          onSubmit={handleSubmit}
                          className="mt-6 space-y-4"
                        >
                          <div>
                            <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                              Adınız Soyadınız
                            </label>
                            <input
                              required
                              type="text"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  name: e.target.value,
                                })
                              }
                              placeholder="Örn: Ahmet Yılmaz"
                              className="h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-neutral-900 transition-colors focus:border-neutral-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                            />
                          </div>
                          <div>
                            <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                              WhatsApp Numarası
                            </label>
                            <input
                              required
                              type="tel"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  phone: e.target.value,
                                })
                              }
                              placeholder="+90 555 000 00 00"
                              className="h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-neutral-900 transition-colors focus:border-neutral-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                            />
                          </div>

                          <div className="pt-4">
                            <button
                              type="submit"
                              className="flex h-12 w-full items-center justify-center rounded-xl bg-neutral-900 px-6 font-bold text-white transition hover:bg-neutral-800 focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
                            >
                              Ücretsiz Planımı Gönder
                            </button>
                          </div>
                        </form>

                        <button
                          onClick={() => setStep(3)}
                          className="mt-6 text-sm font-medium text-neutral-400 hover:text-neutral-900 transition-colors"
                        >
                          &larr; Geri dön
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
