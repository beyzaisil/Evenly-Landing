import { AdvantageItems } from "@/data/advantages";
import { AdvantageColumn } from "@/components/sections/advantage-column";

export function AdvantageSections() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 bg-[#f6f7fb] min-h-screen ">
            <AdvantageColumn items={AdvantageItems.slice(0, 3)} />
            <AdvantageColumn items={AdvantageItems.slice(3, 6)} />

        </div>

    )
}
