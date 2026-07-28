import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { CourseCardProps } from "@/types/course";

export function CourseCard({title,description,level,lessonCount,buttonText} : CourseCardProps) {
  // CourseCard kullanıldığında bu yapıyı koy.
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>

        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <span>{level}</span>
            <span>{lessonCount}</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="button" className="w-full rounded-2xl bg-indigo-600" >
            {buttonText}
          </Button>
        </CardFooter>
    </Card>
  ) ;
}