import { movingCard } from "@/data/moving-card";
import { MovingCard } from "@/components/blocks/cards/MovingCards";


export function MovingCards() {
    return (
        <section className="overflow-hidden ">
            <div className="flex my-8 bg-white w-max gap-5 animate-marquee-left will-change-transform">
                {[...movingCard, ...movingCard].map((card, index) => (
                    <MovingCard
                        key={`${card.title}-${index}`}
                        icon={card.icon}
                        title={card.title}
                        hoverColor={card.hoverColor}
                        iconColor={card.iconColor}
                        iconBgColor={card.iconBgColor}

                    />
                ))}
            </div>

        </section>
    );
}


