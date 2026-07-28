import { ProgressTable } from "@/components/blocks/tables/course-progress-table";

export function CourseProgressSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Öğrenci İlerlemesi</h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Öğrencilerin kurslardaki güncel ilerleme durumları.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border">
          <ProgressTable />
        </div>
      </div>
    </section>
  );
}