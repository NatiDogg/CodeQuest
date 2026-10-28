'use client'
import { Prisma, CompletedExercise } from "@/prisma/generated/prisma/client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import Link from "next/link";

type courseWithChapters = Prisma.CoursesGetPayload<{
  include: { courseChapters: true; enrollments: true };
}>;

const CourseChapters = ({
  courseDetail,
  completedExercises,
}: {
  courseDetail: courseWithChapters | undefined;
  completedExercises: CompletedExercise[];
}) => {
  if (!courseDetail) return null;

  const { courseChapters, enrollments } = courseDetail;
  const { userDetail } = useContext(UserContext);
  const userId = userDetail?.id;

  // Check enrollment status
  const isEnrolled = Boolean(
    userId && enrollments.some((enrolled) => enrolled.userId === userId)
  );

  if (!courseChapters || courseChapters.length === 0) {
    return (
      <div className="p-8 text-center border border-dashed rounded-2xl bg-zinc-900 text-slate-200 my-4">
        <p className="font-medium font-game">No chapters available yet</p>
        <p className="text-sm font-game text-slate-200 mt-1">Check back later for course content updates.</p>
      </div>
    );
  }

  // Create lookup Set for completed exercises
  const completedSet = new Set(
    completedExercises.map((ce) => `${ce.chapterId}-${ce.exerciseId}`)
  );

  // Helper to determine if an exercise is unlocked within its own chapter
  const isExerciseUnlocked = (chapterId: string, exIndex: number) => {
    if (!isEnrolled) return false;

    // The first exercise of any chapter is always unlocked (if enrolled)
    if (exIndex === 0) return true;

    const strIndex = String(exIndex);
    const currentKey = `${chapterId}-${strIndex}`;
    
    // If it's already completed, it's accessible
    if (completedSet.has(currentKey)) return true;

    
    const prevKey = `${chapterId}-${exIndex - 1}`;
    return completedSet.has(prevKey);
  };

  return (
    <div className="space-y-2 border-4 rounded-2xl p-5">
      {courseChapters.map((chapter, index) => (
        <Accordion key={chapter.id} className="w-full">
          <AccordionItem value={chapter.id}>
            <AccordionTrigger className="p-3 hover:bg-zinc-800 font-game text-xl">
              <div>
                <h2 className="h-10 w-10 bg-zinc-900 rounded-full grid place-content-center">
                  {index + 1}
                </h2>
              </div>
              {chapter.name}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-3 p-5 bg-zinc-900">
                {Array.isArray(chapter?.exercises) &&
                  chapter.exercises.length > 0 &&
                  chapter.exercises.map((exercise: any, exIndex) => {
                    const strIndex = String(exIndex);
                    const isCompleted = completedSet.has(
                      `${chapter.chapterId}-${strIndex}`
                    );
                    const isUnlocked = isExerciseUnlocked(
                      chapter.chapterId,
                      exIndex
                    );

                    return (
                      <div
                        key={exIndex}
                        className="flex flex-row justify-between items-center"
                      >
                        <div className="flex flex-row gap-4 items-center">
                          <h2 className="text-xl font-game">
                            Exercise {exIndex + 1}
                          </h2>
                          <h2 className={!isUnlocked ? "text-zinc-500" : ""}>
                            {exercise?.name || "Deleted Name"}
                          </h2>
                        </div>
                        <div>
                          {isCompleted ? (
                            <Button variant="pixel" className="bg-green-600 text-white font-game">
                              Completed ✓
                            </Button>
                          ) : isUnlocked ? (
                           <Link href={`/courses/${courseDetail.courseId}/${exercise.slug}`}>
                               <Button variant="pixel">
                              {exercise?.xp || "???"} XP
                            </Button>
                           </Link>
                          ) : (
                            <Tooltip>
                              <TooltipTrigger render={<Button className={'cursor-pointer'} variant={"pixelDisabled"} />}>
                                {exercise?.xp || "???"} XP
                              </TooltipTrigger>
                              <TooltipContent className={"bg-zinc-800"}>
                                <p className="font-game text-white text-[17px]">
                                  {!isEnrolled 
                                    ? "Please Enroll First" 
                                    : "Complete previous exercise in this chapter to unlock"}
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default CourseChapters;