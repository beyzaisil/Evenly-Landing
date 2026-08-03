"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FaqItems } from "@/data/faq-items";

export function FaqAccordion() {
  return (
    <Accordion className="gap-2.5">
      {FaqItems.map((faq) => (
        <AccordionItem
          key={faq.id}
          value={String(faq.id)}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white px-5 shadow-sm transition-all data-open:shadow-md data-open:border-l-sky-700  data-open:border-l-4"
        >
          <AccordionTrigger className="py-3 text-base font-semibold text-[#062d59] hover:no-underline md:text-lg">
            {faq.question}
          </AccordionTrigger>

          <AccordionContent className="pb-4 pr-8 text-sm leading-6 text-slate-600 md:text-base md:leading-7">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}