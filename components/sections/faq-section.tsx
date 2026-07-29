import { FaqAccordion } from "@/components/blocks/accordions/faq_accordion";

export function FaqSection() {
  return (
    <section className="bg-slate-50 px-4 py-20 md:py-28" id="faq">
      <div className="mx-auto w-full max-w-4xl">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-600">
            Sıkça Sorulan Sorular
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
            Merak ettiklerinizin cevapları burada
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Evenly hakkında en çok merak edilen soruları sizin için bir araya
            getirdik.
          </p>
        </div>

        <div className="mt-10">
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
}