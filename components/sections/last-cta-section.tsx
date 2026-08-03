import { Button } from "@base-ui/react/button";
import { ArrowRight, Rocket, CircleCheck } from "lucide-react";

export function FinalCtaSection() {
    return (
        <section className="bg-white px-4 py-16 md:px-6 lg:px-8">
            <div className="relative mx-auto w-full overflow-hidden rounded-[32px] border border-red-100 bg-gradient-to-br from-red-50 via-white to-red-50 px-6 py-16 text-center shadow-sm md:px-12 md:py-20">
                <div className="pointer-events-none absolute -top-24 -left-24 size-72 border-32  border-red-100/60 rounded-full " />
                <div className="pointer-events-none absolute -bottom-24 -right-24 size-72 border-32 border-red-100/60 rounded-full  " />
                <div className="pointer-events-none left-10 bottom-10 absolute grid grid-cols-4 gap-2 md:grid">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <span key={index} className="size-2 rounded-full bg-red-200" />
                    ))}
                </div>
                <div className="pointer-events-none right-10 top-10 absolute grid grid-cols-4 gap-2 md:grid">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <span key={index} className="size-2 rounded-full bg-red-200" />
                    ))}
                </div>
                <span className="pointer-events-none hidden absolute size-4 bottom-20 right-24 rounded-full bg-[#E30611] md:block" />
                <span className="pointer-events-none absolute size-3 top-20 right-24 rounded-full bg-[#05305b] hidden md:block" />
                <span className="pointer-events-none absolute size-5 top-52 left-10 rounded-full bg-[#05305b] hidden md:block" />


                <div className="pointer-events-none absolute left-48 top-1/2 hidden w-64 -translate-y-1/2 -rotate-6 rounded-2xl border border-white/60 bg-white/80 p-6 text-left shadow-xl backdrop-blur-sm xl:block">
                    <div className="flex items-center gap-4">
                        <div className="size-16 rounded-full border-12 border-red-500 border-r-[#05305b]" />
                        <div className="flex flex-1 flex-col gap-2">
                            <div className="h-4 w-24 rounded-xl bg-gray-400" />
                            <div className="h-4 w-16 rounded-xl bg-red-200" />
                        </div>
                    </div>

                    <div className="mt-6 flex items-end gap-2">
                        <div className="h-8 w-4 rounded-t-md bg-red-200" />
                        <div className="h-12 w-4 rounded-t-md bg-red-300" />
                        <div className="h-16 w-4 rounded-t-md bg-red-400" />
                    </div>
                </div>

                <div className="pointer-events-none absolute right-48 top-1/2 hidden w-64 -translate-y-1/2 rotate-6 rounded-2xl border border-white/60 bg-white/80 p-6 text-left shadow-xl backdrop-blur-sm xl:block">
                    <div className="flex flex-col gap-3">
                        <div className="w-20 h-4 rounded-xl bg-red-200" />
                        <div className="w-28 h-4 rounded-xl bg-gray-200" />
                        <div className="w-24 h-4 rounded-xl bg-gray-300" />
                    </div>
                    <div className="mt-6 flex flex-col gap-3 ">
                        <div className="flex items-center justify-between">
                            <div className="w-20 h-4 rounded-xl bg-gray-200" />
                            <CircleCheck className="size-5 text-red-500" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="w-18 h-4 rounded-xl bg-gray-200" />
                            <CircleCheck className="size-5 text-red-500" />
                        </div>
                    </div>
                </div>





                <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
                    <div className="flex items-center gap-2 px-4 py-2 border rounded-full border-red-200 bg-white/80 text-red-600 ">
                        <Rocket className="h-4 w-4" />
                        <p className="text-sm font-bold ">Hemen Başlayın</p>
                    </div>
                    <h2 className="flex flex-col mt-6 text-3xl font-extrabold leading-tight text-[#05305b] sm:text-4xl lg:text-5xl">
                        <span className="text-[#05305b]">Etkinlik yönetimini </span>
                        <span className="text-[#05305b]">daha kolay, daha hızlı ve</span>
                        <span className="text-[#E30611]">daha profesyonel hale getirin.</span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
                        Evenly ile tüm süreçlerinizi tek platformdan yönetin, ekibinizle zaman kazanın ve katılımcılarınıza daha güçlü bir deneyim sunun.
                    </p>

                    <Button
                        type="button"
                        className="mt-8 flex min-w-64 items-center justify-center gap-3 rounded-xl bg-[#E30611] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-red-200 transition-all duration-300 hover:scale-105 hover:bg-[#05305b]"
                    >
                        Demo Talep Et
                        <ArrowRight className="h-5 w-5" />
                    </Button>

                    <div className="mt-4 flex gap-2 items-center text-sm text-gray-600">
                        <CircleCheck className="size-4 text-red-400" />
                        <p className="">Ücretsiz demo ve danışmanlık</p>
                    </div>
                </div>

            </div>
        </section>
    )
}