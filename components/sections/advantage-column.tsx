
import { Advantage } from "@/types/advantage"
import { AdvantageCard } from "../blocks/cards/advantage-card";
export function AdvantageColumn({ items }: { items: Advantage[] }) {
    return (
        <div className="relative flex flex-col gap-5 ">
            <div className="absolute left-4.5 top-2 bottom-2 w-0.5 bg-[#053668]" />
            {items.map((advantage) => (
                <AdvantageCard
                    key={advantage.id}
                    id={advantage.id}
                    icon={advantage.icon}
                    title={advantage.title}
                    description={advantage.description}
                />
            ))}
        </div>






    );
}
