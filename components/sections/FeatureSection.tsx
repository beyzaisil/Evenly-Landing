import { features } from "@/lib/content";
import { FeatureCard } from "@/components/sections/FeatureCard";


export function FeatureSection() {
    return (
        <section id="features">
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
            <div className="mt-2 w-full mx-auto max-w-7xl grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 p-8">
                {features.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        id={feature.id}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        tone={feature.tone}
                        cardBackground={feature.cardBackground}
                    />
                )

                )}
            </div>


        </section>


    );


}
