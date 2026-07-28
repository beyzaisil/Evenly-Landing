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
    <Accordion multiple className="gap-3">
      {FaqItems.map((faq) => (
        <AccordionItem
          key={faq.id}
          value={String(faq.id)}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white px-5 shadow-sm transition-all data-open:border-red-200 data-open:shadow-md"
        >
          <AccordionTrigger className="py-5 text-base font-semibold text-slate-900 hover:no-underline md:text-lg">
            {faq.question}
          </AccordionTrigger>

          <AccordionContent className="pb-5 pr-8 text-sm leading-6 text-slate-600 md:text-base md:leading-7">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}