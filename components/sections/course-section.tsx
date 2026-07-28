import { CourseCard } from "../blocks/cards/course-card";
import { CourseItems } from "@/data/course-items";

export function CourseSection() {
    return(
        <section className="px-4 py-12">
            <div className="mx-auto grid w-full max-w-6xl gap-4 md:grid-cols-3">
                {CourseItems.map((course)=> (
                    <CourseCard
                        key= {course.id} 
                        title= {course.title} 
                        description= {course.description} 
                        level= {course.level}
                        lessonCount={course.lessonCount}
                        buttonText= {course.buttonText}
                    />
                ))}
            </div>
        </section>
    ) ;
}