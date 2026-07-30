import { features } from "@/data/content";
import { FeatureCard } from "@/components/blocks/cards/FeatureCard";


export function FeatureSection() {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                
                {features.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        id={feature.id}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                )
                )}
            </div>
        </section>
    );
}