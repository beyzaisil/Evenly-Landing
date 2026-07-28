import type { LucideIcon } from "lucide-react";

/**
 * İkon + başlık + açıklama kalıbına uyan tüm kartlar için ortak şablon.
 * Kullanıldığı yerler: Özellikler, Avantajlar, Kimler İçin
 */
export type CardItem = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

/**
 * SSS bölümündeki her bir soru-cevap için şablon.
 */
export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

/**
 * Header ve Footer'daki navigasyon linkleri için şablon.
 */
export type NavItem = {
  label: string;
  href: string;
};

/**
 * Demo Talep Formu'nun gönderdiği veri için şablon.
 * Form validasyonu (Kişi 2 tarafında) bu şablona göre yapılacak.
 */
export type DemoFormData = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  message?: string; // opsiyonel — brief'te zorunlu belirtilmemişti
};

/**
 * Trusted Companies (güvenilen kurumlar) bölümündeki her logo için şablon.
 */
export type TrustedCompany = {
  id: string;
  name: string;
  logoSrc: string;
};