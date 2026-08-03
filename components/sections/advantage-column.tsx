import { Advantage } from "@/types/advantage"
import { AdvantageCard } from "../blocks/cards/advantage-card";

interface Props {
    items: Advantage[],
    index: number,
}

export function AdvantageColumn({ items, index }: Props) {
    return (
        <div className="relative flex flex-col gap-5">

            {items.map((advantage) => (
                <AdvantageCard
                    key={advantage.id}
                    id={advantage.id}
                    icon={advantage.icon}
                    title={advantage.title}
                    description={advantage.description}
                    side={index === 1 ? "right" : "left"}
                />
            ))}

        </div>
    );
}