'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ExerciseError({ error, reset }: ErrorProps) {
  const params = useParams();
  const courseId = params?.courseId as string | undefined;

  useEffect(() => {
    console.error('Exercise Playground Error:', error);
  }, [error]);

  return (
    <div className="min-h-[calc(100vh-4rem)] w-full bg-slate-950 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-900 border border-red-900/40 rounded-2xl p-8 text-center shadow-2xl">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 border border-red-500/20 text-red-400">
          <svg
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>

        <h2 className="text-xl font-game font-bold text-slate-100">
          Workspace Failed to Load
        </h2>

        <p className="mt-2.5  font-game text-sm text-slate-400 leading-relaxed">
          Something went wrong while preparing this exercise environment. This is usually a temporary connection issue.
        </p>

        {error.digest && (
          <p className="mt-3 text-xs font-mono text-slate-500">
            Error ID: {error.digest}
          </p>
        )}

        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400  font-game text-slate-950 font-semibold text-sm transition-colors cursor-pointer"
          >
            Try Again
          </button>

          {courseId && (
            <Link
              href={`/courses/${courseId}`}
              className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm transition-colors  font-game"
            >
              Return to Course
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}