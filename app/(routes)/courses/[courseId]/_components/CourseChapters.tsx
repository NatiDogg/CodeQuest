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


  const completedSet = new Set(
    completedExercises.map((ce) => `${ce.chapterId}-${ce.exerciseId}`)
  );

 
  const allExercises = courseChapters.flatMap((ch) =>
    Array.isArray(ch.exercises)
      ? ch.exercises.map((ex: any) => ({
          chapterId: ch.chapterId,
          exerciseId: ex.id,
        }))
      : []
  );

  // 3. Helper to determine if an exercise is unlocked
  const isExerciseUnlocked = (chapterId: string, exerciseId: string) => {
    // If not enrolled, nothing is unlocked!
    if (!isEnrolled) return false;

    const idx = allExercises.findIndex(
      (ex) => ex.chapterId === chapterId && ex.exerciseId === exerciseId
    );

    if (idx <= 0) return true; // First exercise is always unlocked if enrolled

    const currentKey = `${chapterId}-${exerciseId}`;
    if (completedSet.has(currentKey)) return true; // Already completed

    // Check if the previous exercise in sequence is completed
    const prev = allExercises[idx - 1];
    const prevKey = `${prev.chapterId}-${prev.exerciseId}`;
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
                    const exerciseId = exercise?.id;
                    const isCompleted = completedSet.has(
                      `${chapter.chapterId}-${exerciseId}`
                    );
                    const isUnlocked = isExerciseUnlocked(
                      chapter.chapterId,
                      exerciseId
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
                            <Button variant="pixel" className="bg-green-600 text-white">
                              Completed ✓
                            </Button>
                          ) : isUnlocked ? (
                            <Button variant="pixel">
                              {exercise?.xp || "???"} XP
                            </Button>
                          ) : (
                            <Tooltip>
                              <TooltipTrigger render={<Button className={'cursor-pointer'} variant={"pixelDisabled"} />}>
                                {exercise?.xp || "???"} XP
                              </TooltipTrigger>
                              <TooltipContent className={"bg-zinc-800"}>
                                <p className="font-game text-white text-[17px]">
                                  {!isEnrolled 
                                    ? "Please Enroll First" 
                                    : "Complete previous exercise to unlock"}
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
