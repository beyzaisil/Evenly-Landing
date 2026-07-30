import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
    FaInstagram,
    FaLinkedinIn,
    FaFacebookF,
    FaXTwitter,
} from "react-icons/fa6";

export function FooterSection() {
    return (
        <footer className="border-t bg-white">
            <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8">
                <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
                    <div className="max-w-md">
                        <div className="flex flex-col items-center lg:items-start">
                            <Link href="/" aria-label="Evenly">
                                <Image
                                    src="/logo.svg"
                                    alt="Evenly"
                                    width={160}
                                    height={38}
                                />
                            </Link>

                            <p className="mt-4 text-center text-sm text-gray-600 leading-7 lg:text-left">
                                Evenly, etkinlik planlama ve yönetim süreçlerini dijitalleştirerek organizasyon ekiplerine
                                daha hızlı, düzenli ve verimli bir çalışma deneyimi sunar. Davet yönetiminden katılımcı
                                takibine kadar tüm süreci tek platformdan yönetebilirsiniz.
                            </p>

                        </div>
                        <div className="flex flex-col items-center pt-4 lg:items-start">
                            <p className="text-sm font-semibold text-gray-900 my-4">Bizi Takip Edin</p>
                            <div className="flex gap-3">
                                <a href="#" aria-label="Instagram" target="_blank"
                                    className="size-10 bg-gray-100 text-gray-700 flex items-center justify-center transition-all duration-300 rounded-xl hover:text-white hover:bg-[#05305b] hover:shadow-md ">
                                    <FaInstagram className="size-6" />
                                </a>
                                <a href="#" aria-label="LinkedIn" target="_blank"
                                    className="size-10 bg-gray-100 text-gray-700 flex items-center justify-center transition-all duration-300 rounded-xl hover:text-white hover:bg-[#05305b] hover:shadow-md ">
                                    <FaLinkedinIn className="size-6" />
                                </a>
                                <a href="#" aria-label="Facebook" target="_blank"
                                    className="size-10 bg-gray-100 text-gray-700 flex items-center justify-center transition-all duration-300 rounded-xl hover:text-white hover:bg-[#05305b] hover:shadow-md ">
                                    <FaFacebookF className="size-6" />
                                </a>
                                <a href="#" aria-label="X" target="_blank"
                                    className="size-10 bg-gray-100 text-gray-700 flex items-center justify-center transition-all duration-300 rounded-xl hover:text-white hover:bg-[#05305b] hover:shadow-md ">
                                    <FaXTwitter className="size-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col gap-3 items-center lg:items-start">
                            <h2 className="w-fit border-b-2 border-red-600 pb-2 font-semibold">Platform Özellikleri</h2>
                            <a href="#advantages" className="text-sm text-gray-600 hover:text-slate-800">Avantajlar</a>
                            <a href="#features" className="text-sm text-gray-600 hover:text-slate-800">Özellikler</a>
                            <a href="#faq" className="text-sm text-gray-600 hover:text-slate-800">SSS</a>
                        </div>

                        <div className="flex flex-col gap-3 items-center lg:items-start">
                            <h2 className="w-fit border-b-2 border-red-600 pb-2 font-semibold">Kurumsal</h2>
                            <a href="#blog" className="text-sm text-gray-600 hover:text-slate-800">Blog</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-slate-800">Kariyer</a>
                            <a href="#communication" className="text-sm text-gray-600 hover:text-slate-800">İletişim</a>
                        </div>

                        <div className="flex flex-col items-center gap-3 lg:items-start">
                            <h2 className="w-fit border-b-2 border-red-600 pb-2 font-semibold" >İletişim</h2>
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 shrink-0 text-red-500" />
                                <p className="text-sm text-gray-700">hello@evenly.com</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 shrink-0 text-red-500" />
                                <p className="text-sm text-gray-700">+90 555 555 55 55</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <MapPin className="h-5 w-5 shrink-0 text-red-500" />
                                <p className="text-sm text-gray-700">Denizli / Türkiye </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-slate-200">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-6 md:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
                    <div>
                        <p className="text-center text-base lg:text-left">
                            <span className="text-[#E30611]">© 2026 Evenly.</span>
                            <span className="text-gray-600 "> Tüm hakları saklıdır.</span>
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-end">
                        <a href="#privacy" className="text-sm text-gray-600">Gizlilik Politikası</a>
                        <a href="#kvkk" className="text-sm text-gray-600 ">KVKK</a>
                        <a href="#terms" className="text-sm text-gray-600 ">Kullanım Şartları</a>
                    </div>
                </div>
            </div>
        </footer >
    )
}