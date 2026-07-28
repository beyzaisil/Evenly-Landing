import type { StudentCourseProgress } from "@/types/progress";
export const ProgressItems: StudentCourseProgress[] = [
    {
    id: 1,
    studentName: "Ayşe Yılmaz",
    courseName: "React Temelleri",
    progress: 75,
    status: "Devam ediyor",
  },
  {
    id: 2,
    studentName: "Mehmet Kaya",
    courseName: "TypeScript",
    progress: 100,
    status: "Tamamlandı",
  },
  {
    id: 3,
    studentName: "Zeynep Demir",
    courseName: "Next.js",
    progress: 40,
    status: "Devam ediyor",
  },
  {
    id: 4,
    studentName: "Can Arslan",
    courseName: "Tailwind CSS",
    progress: 0,
    status: "Başlamadı",
  },
]