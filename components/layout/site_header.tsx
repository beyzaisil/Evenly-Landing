import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"
export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white px-4 py-3">
            <nav className="flex w-full max-w-7wl items-center justify-evenly">
                <Link href="/" aria-label="Evenly-HomePage">
                    <Image
                        src="/logo.svg"
                        alt="Evenly"
                        width={160}
                        height={80}
                        loading="eager"
                    />
                </Link>
                <div className="flex items-center gap-8">
                    <Link href="">Ana Sayfa</Link>
                    <Link href="#advantages">Avantajlar</Link>
                    <Link href="#features">Özellikler</Link>
                    <Link href="#faq">SSS</Link>
                    <Link href="#communication">İletişim</Link>
                </div>


                <div className="justify-self-end mr-3">
                    <Button
                        type="button"
                        name="demo-request-button"
                        className="w-full p-6 bg-red-500 text-white font-semibold text-md rounded-lg transition-all duration-300 hover:bg-[#05305b] hover:scale-105 shadow-md cursor-pointer"
                    >Demo Talep Et <ArrowRight aria-hidden="true" className="size-5" /></Button>
                </div>

            </nav>
        </header>
    )
}
