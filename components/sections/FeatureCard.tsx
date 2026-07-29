import { Feature } from "@/types/features";


export function FeatureCard({ icon: Icon, title, description, tone, cardBackground }: Feature) {
  return (
    <div className={`flex flex-col items-start rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md ${cardBackground} `}>
      <div>

        <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-full ${tone}`}>
          <Icon className="h-8 w-8" />
        </div>

        <h3 className="mb-4 text-lg font-bold text-slate-900 border-b">
          {title}
        </h3>

        <p className="leading-8 text-slate-600">
          {description}
        </p>
      </div>
    </div>
  );
}


