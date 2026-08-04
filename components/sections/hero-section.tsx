"use client";

import { Button } from "@base-ui/react/button";
import { ArrowRight, CircleCheck } from "lucide-react";

import { DemoCard } from "../blocks/cards/demo-card";
import { ParticleBackground } from "@/components/blocks/particle-background";
import { HeroFeatureItems } from "@/data/hero-items";

export function HeroSection() {
    return (
        <section className="relative isolate flex min-h-[calc(100svh-76px)] w-full overflow-hidden bg-white">
            {/* Hareketli constellation arka planı */}
            <ParticleBackground />

            {/* Arka planı daha derin göstermek için hafif ışık alanları */}
            <div
                className="
                    pointer-events-none absolute -left-40 top-20
                    z-0 size-[500px] rounded-full
                    hidden
                "
            />

            <div
                className="
                    pointer-events-none absolute -right-40 bottom-0
                    z-0 size-[500px] rounded-full
                    hidden
                "
            />

            {/* Hero içeriği */}
            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-[clamp(1.5rem,4vh,3rem)] px-5 py-8 text-center">
                {/* Hero metin alanı */}
                <div className="flex max-w-4xl flex-col items-center justify-center">
                    <p className="inline-flex max-w-full rounded-full bg-red-50 px-3 py-1.5 text-center text-[10px] font-bold uppercase tracking-wider text-red-600 sm:px-4 sm:text-xs sm:tracking-widest">
                        Tüm Etkinliklerinizi Tek Platformda Yönetin
                    </p>

                    <h1 className="mt-4 flex flex-col items-center text-3xl font-extrabold leading-[1.08] sm:text-4xl md:text-5xl lg:text-6xl">
                        <span className="text-[#05305b]">
                            Etkinlik yönetiminde
                        </span>

                        <span className="mt-2 text-[#E30611]">
                            yeni dönem.
                        </span>
                    </h1>

                    <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
                        Evenly, etkinlik süreçlerinizi dijitalleştirir,
                        operasyonlarınızı kolaylaştırır ve katılımcı deneyimini
                        en üst seviyeye ulaştırır.
                    </p>

                    <Button
                        type="button"
                        name="demo-request-button"
                        className="mt-4 flex cursor-pointer items-center gap-3 rounded-xl bg-red-500 p-4 text-md font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#05305b]"
                    >
                        Demo Talep Et

                        <ArrowRight
                            aria-hidden="true"
                            className="size-5 shrink-0"
                        />
                    </Button>

                    <p className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                        <CircleCheck className="size-4 shrink-0 text-red-500" />

                        Ücretsiz demo ve danışmanlık
                    </p>
                </div>

                {/* Hero özellik kartları */}
                <div
                    className="
                        grid w-full grid-cols-1
                        gap-4 text-start
                        sm:grid-cols-2
                        xl:grid-cols-4
                    "
                >
                    {HeroFeatureItems.map((item) => (
                        <DemoCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
