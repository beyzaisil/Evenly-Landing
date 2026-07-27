import { DemoBenefits } from "@/components/blocks/demo-benefits";
import { DemoRequestForm } from "@/components/blocks/demo-request-form";

export function DemoSection() {
  return (
    <section className="bg-slate-100 px-4 py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,28rem)_minmax(0,1fr)] lg:items-start lg:gap-12">
        <DemoBenefits />
        <DemoRequestForm />
      </div>
    </section>
  );
}