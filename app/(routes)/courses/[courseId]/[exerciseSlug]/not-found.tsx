'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ExerciseNotFound() {
  const params = useParams();
  const courseId = params?.courseId as string | undefined;

  return (
    <div className="min-h-[calc(100vh-4rem)] w-full bg-black flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-black border border-slate-800 rounded-2xl p-8 text-center shadow-2xl">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xl font-bold">
          404
        </div>

        <h1 className="text-2xl font-bold text-yellow-500 tracking-tight  font-game">
          Exercise Not Found
        </h1>

        <p className="mt-2.5 text-sm  font-game text-gray-400 leading-relaxed">
          We couldn&apos;t locate this challenge in the curriculum. The link may be outdated, or the exercise slug doesn&apos;t exist in this chapter.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          {courseId && (
            <Link
              href={`/courses/${courseId}`}
              className=""
            >
              <Button size={'lg'} variant={'pixel'} className={'px-5 py-2.5 rounded-lg text-slate-950 font-semibold text-sm transition-colors  font-game'}>
                  Back to Course Syllabus
              </Button>
            </Link>
          )}
          <Link
            href="/courses"
            className=""
          >
               <Button size={'lg'} variant={'pixel'} className={'px-5 py-2.5 rounded-lg text-slate-950 font-semibold text-sm transition-colors  font-game'}>
                  Browse All Courses
              </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}