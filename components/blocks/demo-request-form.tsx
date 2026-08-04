import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

import {
    Field,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";

import {
    ArrowRight,
    Building2,
    LockKeyhole,
    Mail,
    Pencil,
    Phone,
    User,
} from "lucide-react";

export function DemoRequestForm() {
    return (
        <div className="mt-3 bg-white w-full max-w-5xl rounded-xl border shadow-md p-6 md:p-12 ">
            <h3 className="text-3xl text-[#05305b] font-bold mb-4 pb-4 border-b">Demo Talep Edin</h3>
            <form>
                <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field>
                        <FieldLabel htmlFor="fullName" className="sr-only">Ad Soyad</FieldLabel>

                        <div className="relative">
                            <User
                                aria-hidden="true"
                                className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400"
                            />
                            <Input
                                id="fullName"
                                name="fullName"
                                type="text"
                                placeholder="Ad Soyad"
                                className="h-16 pl-12 rounded-md border border-slate-200 bg-white placeholder:text-slate-400 focus-visible:border-slate-200 focus-visible:ring-0"
                            />
                        </div>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="company" className="sr-only">Firma</FieldLabel>
                        <div className="relative">
                            <Building2
                                aria-hidden="true"
                                className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400"
                            />
                            <Input
                                id="company"
                                name="company"
                                type="text"
                                placeholder="Firma"
                                className="h-16 pl-12 rounded-md border border-slate-200 bg-white placeholder:text-slate-400 focus-visible:border-slate-200 focus-visible:ring-0"
                            />
                        </div>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="email" className="sr-only">E-posta</FieldLabel>
                        <div className="relative">
                            <Mail
                                aria-hidden="true"
                                className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400"
                            />
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="E-posta"
                                className="h-16 pl-12 rounded-md border border-slate-200 bg-white placeholder:text-slate-400 focus-visible:border-slate-200 focus-visible:ring-0"
                            />
                        </div>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="telephone" className="sr-only">Telefon</FieldLabel>
                        <div className="relative">
                            <Phone
                                aria-hidden="true"
                                className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400"
                            />
                            <Input
                                id="telephone"
                                name="telephone"
                                type="tel"
                                placeholder="Telefon"
                                className="h-16 pl-12 rounded-md border border-slate-200 bg-white placeholder:text-slate-400 focus-visible:border-slate-200 focus-visible:ring-0"
                            />
                        </div>
                    </Field>
                    <Field className="md:col-span-2">
                        <FieldLabel htmlFor="message" className="sr-only">Mesaj</FieldLabel>
                        <div className="relative">
                            <Pencil
                                aria-hidden="true"
                                className="pointer-events-none absolute left-4 top-4 size-5 text-slate-400" />
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Mesaj"
                                className="min-h-32 resize-y rounded-md border border-slate-200 bg-white py-3 pl-12 focus-visible:border-slate-200 focus-visible:ring-0"
                            />
                        </div>
                    </Field>
                </FieldGroup>
                <Button
                    type="submit"
                    name="demo-request-button"
                    className="w-full mt-4 py-6 bg-red-500 text-white font-semibold rounded-2xl hover:bg-[#05305b] shadow-md transition-all duration-300"
                >Demo Talep Et <ArrowRight aria-hidden="true" className="size-5" /></Button>
                <p
                    className="mt-4 flex items-center justify-center gap-2 text-sm/relaxed text-slate-400"><LockKeyhole aria-hidden="true" className="size-4 shrink-0" />Bilgileriniz yalnızca demo talebinizi değerlendirmek için kullanılır.</p>
            </form>
        </div>
    )
}
