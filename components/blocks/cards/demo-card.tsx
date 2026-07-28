import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { DemoCardProps } from "@/types/demo-card";

const toneClasses = {
  red: {
    background: "bg-red-50",
    icon: "text-red-600",
  },
  blue: {
    background: "bg-blue-50",
    icon: "text-blue-600",
  },
};

export function DemoCard({
  icon: Icon,
  title,
  description,
  tone,
}: DemoCardProps) {
  const colors = toneClasses[tone];

  return (
    <Card className="min-h-28 w-full flex-row items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:gap-5 sm:p-5">
      <div
        className={`flex size-14 shrink-0 items-center justify-center rounded-full sm:size-16 ${colors.background}`}
      >
        <Icon
          aria-hidden="true"
          className={`size-6 sm:size-7 ${colors.icon}`}
        />
      </div>

      <CardHeader className="min-w-0 flex-1 gap-1 p-0">
        <CardTitle className="text-base font-bold leading-6 text-slate-950 sm:text-lg">
          {title}
        </CardTitle>

        <CardDescription className="text-sm leading-6 text-slate-600">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}