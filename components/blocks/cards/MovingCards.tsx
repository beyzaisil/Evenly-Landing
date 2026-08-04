import type { MovingCard } from "@/types/movingCard";

export function MovingCard({ title, icon: Icon, hoverColor, iconColor, iconBgColor }: MovingCard) {
      return (
            <div className={`shrink-0 p-8 h-50 w-56 md:w-56 md:h:64 lg:w-60 lg:h-50 flex flex-col items-center md:p-5  shadow-sm rounded-2xl ${hoverColor} border `}>
                  <div className={`flex size-20 items-center justify-center md:size-28 lg:size-22 rounded-full ${iconBgColor}`}><Icon className={`size-8 md:size-8 lg:size-10 ${iconColor}`} />
                  </div>
                  <div className="w-32 border-2 border-red-500 mt-5" />
                  <h1 className=" mt-5 font-semibold text-xl text-center text-[#05305B]">
                        {title}
                  </h1>

            </div>
      );
}