import { features } from "@/lib/content";
import { FeatureCard } from "@/components/sections/FeatureCard";


export function FeatureSection() {
    return(
<section>
<div className="grid grid-cols-4 gap-6">
{features.map((feature)=> (
    <FeatureCard 
        key={feature.id}
         id = {feature.id}
        icon = {feature.icon}
        title={feature.title}
        description={feature.description}
    />
)

)}
</div>


</section>


    );


}