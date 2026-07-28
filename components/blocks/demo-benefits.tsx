import { DemoCard } from "@/components/blocks/cards/demo-card";
import { DemoCardItems } from "@/data/demo-card-items";

export function DemoBenefits() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
        Demo ile Neler Elde Edersiniz?
      </h2>

      <div className="mt-6 flex flex-col gap-4">
        {DemoCardItems.map((item) => (
          <DemoCard
            key={item.id}
            id={item.id}
            icon={item.icon}
            tone={item.tone}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}