import { LessonCard } from "@/components/practice/lesson-card";
import { lessonItems } from "./_constants/lesson-items";
import { toggleItems }  from "./_constants/toggle-items" ;
import { ToggleCard } from "@/components/practice/toggle-card";




export default function PracticePage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12">
      <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
        {lessonItems.map((lesson) => (
          <LessonCard
            key={lesson.id}
            icon= {lesson.icon}
            title={lesson.title}
            description={lesson.description}
            buttonText={lesson.buttonText}
          />
        ))}
      </div>
      <section className="mx-auto mt-12 w-full max-w-4xl space-y-4">
        {toggleItems.map((toggle) =>(
          <ToggleCard
            key={toggle.id} 
            question={toggle.question}
            answer={toggle.answer}
            />
        ))}
      </section>
    </main>
  );
}