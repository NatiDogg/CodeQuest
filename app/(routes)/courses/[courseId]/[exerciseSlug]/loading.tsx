export default function ExerciseLoading() {
  return (
    <div className="h-[calc(100vh-4rem)] w-full bg-black border-t-4 border-zinc-900 p-2 flex flex-col md:flex-row gap-2 overflow-hidden">
      {/* Left Pane: Lesson & Task Skeleton */}
      <div className="w-full md:w-[45%] h-full bg-zinc-950 border border-zinc-900 rounded-lg p-6 flex flex-col justify-between">
        <div className="space-y-6 animate-pulse">
          {/* Header Badge & Title */}
          <div className="space-y-3">
            <div className="h-5 w-28 bg-zinc-900 rounded-full" />
            <div className="h-8 w-3/4 bg-zinc-900 rounded-md" />
          </div>

          {/* Explanation Paragraphs */}
          <div className="space-y-3 pt-4">
            <div className="h-4 w-full bg-zinc-900 rounded" />
            <div className="h-4 w-11/12 bg-zinc-900/90 rounded" />
            <div className="h-4 w-4/5 bg-zinc-900/80 rounded" />
            <div className="h-4 w-full bg-zinc-900 rounded" />
            <div className="h-4 w-3/4 bg-zinc-900/80 rounded" />
          </div>

          {/* Task Box Skeleton */}
          <div className="mt-8 p-4 rounded-lg border border-zinc-900 bg-black/70 space-y-3">
            <div className="h-5 w-24 bg-zinc-800 rounded" />
            <div className="h-4 w-full bg-zinc-900 rounded" />
            <div className="h-4 w-5/6 bg-zinc-900/80 rounded" />
          </div>
        </div>

        {/* Status Indicator for JIT AI Generation */}
        <div className="flex items-center gap-3 text-xs text-zinc-300 bg-zinc-900/80 border border-zinc-800 px-4 py-3 rounded-lg">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-zinc-200" />
          </span>
          <span className="font-game">Preparing interactive workspace &amp; challenge files...</span>
        </div>
      </div>

      {/* Right Pane: Code Editor Skeleton */}
      <div className="w-full md:w-[55%] h-full bg-zinc-950 border border-zinc-900 rounded-lg flex flex-col">
        {/* Editor File Tab Bar */}
        <div className="h-11 border-b border-zinc-900 px-4 flex items-center gap-2">
          <div className="h-6 w-24 bg-zinc-900 rounded animate-pulse" />
          <div className="h-6 w-20 bg-zinc-900/50 rounded animate-pulse" />
        </div>

        {/* Simulated Code Lines */}
        <div className="p-6 space-y-3.5 flex-1 animate-pulse font-mono">
          <div className="h-4 w-48 bg-zinc-900 rounded" />
          <div className="h-4 w-64 bg-zinc-900/70 rounded" />
          <div className="h-4 w-12 bg-transparent" />
          <div className="h-4 w-56 bg-zinc-900 rounded" />
          <div className="h-4 w-72 bg-zinc-900/80 rounded ml-6" />
          <div className="h-4 w-60 bg-zinc-900/80 rounded ml-6" />
          <div className="h-4 w-40 bg-zinc-900/80 rounded ml-6" />
          <div className="h-4 w-24 bg-zinc-900 rounded" />
        </div>

        {/* Bottom Action Bar */}
        <div className="h-14 border-t border-zinc-900 px-6 flex items-center justify-end gap-3">
          <div className="h-9 w-24 bg-zinc-900 rounded-md animate-pulse" />
          <div className="h-9 w-32 bg-zinc-800 rounded-md animate-pulse" />
        </div>
      </div>
    </div>
  );
}