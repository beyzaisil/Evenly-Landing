import { Advantage } from "@/types/advantage";
import { Icon } from "lucide-react";


export function AdvantageCard({ icon: Icon, title, description }: Advantage) {

    return (

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-7  ">

            <div className=" relative flex flex-col gap-5 ">
                <div className=" group flex  gap-4 items-center">
                    <div className=" relative z-10 flex  p-2  items-center justify-center rounded-xl border bg-[#1e3a8a] text-white bg-gradient-to-br from-primary-hover to-brand-accent">
                        <Icon /> </div>

                    <div className="rounded-xl border p-4 bg-white shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-[1.04] transition-all duration-300">
                        <p className="font-bold text-xl text-[#05305b]">{title}</p>
                        <div className="text-gray-600 text-sm md:text-base leading-relaxed">{description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}