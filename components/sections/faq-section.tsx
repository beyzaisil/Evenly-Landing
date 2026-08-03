import { FaqAccordion } from "@/components/blocks/accordions/faq_accordion";

export function FaqSection() {
  return (
    <section className="bg-slate-50 px-4 py-25 md:py-28" id="faq">
      <div className="mx-auto w-full max-w-4xl">
        <div className="text-center">
          <span className="inline-flex rounded-full  bg-[#e5eef7] px-8 py-2 text-xl  text-[#2579ad]">
            Sıkça Sorulan Sorular
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#062d59] md:text-3xl">
            Merak ettiklerinizin cevapları burada
          </h2>


        </div>

        <div className="mt-7">
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
}