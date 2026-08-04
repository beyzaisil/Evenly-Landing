import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { DemoCardProps } from "@/types/demo";
import { cn } from "@/lib/utils";

type DemoCardComponentProps = DemoCardProps & {
  variant?: "light" | "muted";
};

export function DemoCard({
  icon: Icon,
  title,
  description,
  tone,
  variant = "light",
}: DemoCardComponentProps) {

  const isMuted = variant === "muted";

  return (
    <Card
      className={cn(
        "min-h-28 w-full flex-row items-center gap-4 rounded-xl border p-4 transition-all duration-200 hover:-translate-y-0.5 sm:gap-5 sm:p-5",
        isMuted
          ? "border-white/30 bg-linear-to-br from-[#E4E7EB] to-[#C9D0D8] text-slate-900 ring-white/20 shadow-lg shadow-black/15 hover:border-white/50 hover:from-[#ECEFF2] hover:to-[#D5DBE2] hover:shadow-xl"
          : "border-slate-200 bg-white shadow-sm hover:border-slate-300 hover:shadow-md"
      )}
    >
      <div
        className={cn(
          "flex size-14 shrink-0 items-center justify-center rounded-full sm:size-16",
          isMuted
            ? "bg-white/60 text-[#EC0900] ring-1 ring-white/70 shadow-sm"
            : tone
        )}
      >
        <Icon
          aria-hidden="true"
          className={"size-6 sm:size-7"}
        />
      </div>

      <CardHeader className="min-w-0 flex-1 gap-1 p-0">
        <CardTitle className="text-base font-bold leading-6 text-[#05305b] sm:text-lg">
          {title}
        </CardTitle>

        <CardDescription className="text-sm leading-6 text-slate-600">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
