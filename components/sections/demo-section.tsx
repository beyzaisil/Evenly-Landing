import { DemoBenefits } from "@/components/blocks/demo-benefits";
import { DemoRequestForm } from "@/components/blocks/demo-request-form";

export function DemoSection() {
  return (
    <section id="advantages" className="bg-[#f6f7fb] px-4 py-6">
      <span className="mt-4 flex items-center">
        <span className="h-px flex-1 bg-linear-to-r from-transparent to-red-300 dark:to-red-600"></span>
        <span className="shrink-0 px-4 text-[#E30611] dark:text-white text-lg font-semibold uppercase">Demo Talep Formu</span>
        <span className="h-px flex-1 bg-linear-to-l from-transparent to-red-300 dark:to-red-600"></span>
      </span>
      <h2 className="mt-6 flex flex-col items-center justify-center gap-2 text-center text-4xl font-bold lg:flex-row lg:gap-4">
        <span className="text-[#05305b]">Evenly'i Kurumunuza Özel</span>
        <span className="text-[#E30611]">Canlı Olarak İnceleyin</span>
      </h2>
      <span className="mt-2 flex justify-center">
        <span className="block max-w-xl text-center text-sm px-8 text-gray-600 leading-7">Evenly platformu uzman ekibimiz eşliğinde canlı olarak inceleyin.
          İhtiyaçlarınıza özel çözümleri birlikte değerlendirelim.
        </span>
      </span>
      <div className="mx-auto mt-4 grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,28rem)_minmax(0,1fr)] lg:items-start lg:gap-12">
        <DemoBenefits />
        <DemoRequestForm />
      </div>
    </section>
  );
}