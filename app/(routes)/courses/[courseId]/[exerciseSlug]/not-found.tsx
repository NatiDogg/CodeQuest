'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ExerciseNotFound() {
  const params = useParams();
  const courseId = params?.courseId as string | undefined;

  return (
    <div className="min-h-[calc(100vh-4rem)] w-full bg-slate-950 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center shadow-2xl">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xl font-bold">
          404
        </div>

        <h1 className="text-2xl font-bold text-slate-100 tracking-tight  font-game">
          Exercise Not Found
        </h1>

        <p className="mt-2.5 text-sm  font-game text-slate-400 leading-relaxed">
          We couldn&apos;t locate this challenge in the curriculum. The link may be outdated, or the exercise slug doesn&apos;t exist in this chapter.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          {courseId && (
            <Link
              href={`/courses/${courseId}`}
              className="px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-colors  font-game"
            >
              Back to Course Syllabus
            </Link>
          )}
          <Link
            href="/courses"
            className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm transition-colors  font-game"
          >
            Browse All Courses
          </Link>
        </div>
      </div>
    </div>
  );
}