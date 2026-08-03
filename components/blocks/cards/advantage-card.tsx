import { Advantage } from "@/types/advantage";

interface Props extends Advantage {
    side: "left" | "right";
}

export function AdvantageCard({
    icon: Icon,
    title,
    description,
    side
}: Props) {

    return (
        <div className="relative z-10 flex w-full">

            <div
                className={`
                    flex items-center gap-4
                    ${side === "right"
                        ? "flex-row-reverse"
                        : "flex-row"
                    }
                `}
            >

                {/* Icon */}
                <div className="
                    flex p-2 items-center justify-center
                    rounded-xl border text-white
                    bg-linear-to-br from-primary-hover to-brand-accent
                ">
                    <Icon className="size-10" />
                </div>


                {/* Card */}
                <div className="
                    rounded-xl border p-6 bg-white
                    shadow-md hover:shadow-xl
                    hover:-translate-y-2
                    hover:scale-[1.04]
                    transition-all duration-300
                ">
                    <p className="font-bold text-xl text-[#05305b]">
                        {title}
                    </p>

                    <div className="text-gray-600 text-xs md:text-sm lg:text-[15px] leading-relaxed">
                        {description}
                    </div>
                </div>

            </div>
        </div>
    );
}
