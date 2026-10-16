import { Prisma } from "@/prisma/generated/prisma/client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

type courseWithChapters = Prisma.CoursesGetPayload<{
  include: { courseChapters: true };
}>;

const CourseChapters = ({
  courseDetail,
}: {
  courseDetail: courseWithChapters | undefined;
}) => {
  if (!courseDetail) return null;

  const { courseChapters } = courseDetail;

  
 
  if (!courseChapters || courseChapters.length === 0) {
    return (
      <div className="p-8 text-center border border-dashed rounded-2xl bg-zinc-900 text-slate-200 my-4">
        <p className="font-medium font-game">No chapters available yet</p>
        <p className="text-sm font-game text-slate-200 mt-1">Check back later for course content updates.</p>
      </div>
    );
  }

  return (
    <div className="space-y-2 border-4  rounded-2xl p-5">
      {courseChapters.map((chapter,index) => (
        <Accordion  key={chapter.id} className="w-full ">
          <AccordionItem  value={chapter.id}>
            <AccordionTrigger className="p-3 hover:bg-zinc-800 font-game text-xl ">
               <div>
                  <h2 className="h-10 w-10 bg-zinc-900 rounded-full grid place-content-center">{index + 1}</h2>
               </div>
              {chapter.name}
            </AccordionTrigger>
            <AccordionContent>
               <div className="flex flex-col gap-3 p-5 bg-zinc-900">
                   {Array.isArray(chapter?.exercises) && chapter.exercises.length > 0 && 
                    chapter.exercises.map((exercise: any,index)=>(
                        <div key={index} className="flex flex-row justify-between items-center">
                           <div className="flex flex-row gap-4 items-center">
                               <h2 className="text-xl font-game">Exercise {index  + 1}</h2>
                               <h2>{exercise?.name || 'Deleted Name'}</h2>
                           </div>
                           <div>
                             <Button variant={'pixel'}>{exercise?.xp || "???"} XP</Button>
                           </div>
                        </div>
                    ))
                   }
               </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default CourseChapters;
