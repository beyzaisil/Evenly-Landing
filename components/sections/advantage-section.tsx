import { AdvantageItems } from "@/data/advantages";
import { AdvantageColumn } from "@/components/sections/advantage-column";

export function AdvantageSections() {
    return (

        <div className="flex flex-col bg-[#f6f7fb] min-h-screen  p-6 w-full items-center justify-center">
            <div className="flex flex-col w-full">
                <span className="mt-4 flex items-center">
                    <span className="h-px flex-1 bg-linear-to-r from-transparent to-red-300 dark:to-red-600"></span>
                    <span className="shrink-0 px-4 text-red-600 dark:text-white text-lg font-semibold uppercase">Platform Özellikleri</span>
                    <span className="h-px flex-1 bg-linear-to-l from-transparent to-red-300 dark:to-red-600"></span>
                </span>
                <h2 className="mt-6 flex flex-col items-center justify-center gap-2 text-center text-4xl font-bold lg:flex-row lg:gap-4">
                    <span className="text-zinc-900">Güçlü özellikler,</span>
                    <span className="text-red-600">kusursuz deneyim</span>
                </h2>

                <span className="mt-2 flex justify-center">
                    <span className="block max-w-xl text-center text-sm px-8 text-slate-600 leading-7">Etkinlik yönetiminin her aşamasını kolaylaştıran kapsamlı özelliklerle tüm süreçleri tek platformda yönetin.</span>
                </span>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2  max-w-7xl mx-auto relative">
                <div className="absolute top-0 bottom-0 left-150 w-1 bg-[#053668]" />
                <div className="absolute top-0 bottom-0 left-170 w-1 bg-[#053668]" />
                <AdvantageColumn items={AdvantageItems.filter(e => { return e.id % 2 })} index={1} />
                <AdvantageColumn items={AdvantageItems.filter(e => { return !(e.id % 2) })} index={2} />
            </div>
        </div >

    )
}
