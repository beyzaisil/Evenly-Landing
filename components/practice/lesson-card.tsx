import { Shield } from "lucide-react";

type LessonCardProps = {
    title : string ;
    description : string ;
    buttonText : string;
    icon: React.ReactNode;
}
export function LessonCard({title,description,buttonText,icon} :LessonCardProps) {
    return (
        <article className="bg-slate-200 border border-slate-300 rounded-xl p-6 shadow-md">
            <span> {icon} </span>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2 text-slate-500">{description}</p>
            <button className="mt-4 bg-indigo-500 rounded-lg text-white px-3 py-1">{buttonText}</button>
        </article>
    ) ;
}